/* CEFR Companion — Speaking bo'limi (Multi-Level Record Speaking kitoblari asosida) */
(function () {
  var S = window.SPEAKING || { mocks: [] };
  var M = S.mocks;
  var PARTS = [
    { id: "s1", key: "p11", no: "1.1", name: "Part 1.1", desc: "Shaxsiy savollar · 3 savol × 30 soniya", prep: 0, speak: 30 },
    { id: "s2", key: "p12", no: "1.2", name: "Part 1.2", desc: "Ikki rasmni solishtirish · 3 savol × 30 soniya", prep: 0, speak: 30 },
    { id: "s3", key: "p2", no: "2", name: "Part 2", desc: "Rasm va hikoya · 1 daqiqa tayyorgarlik, 2 daqiqa gapirish", prep: 60, speak: 120 },
    { id: "s4", key: "p3", no: "3", name: "Part 3", desc: "Munozara (FOR / AGAINST) · 1 daqiqa tayyorgarlik, 2 daqiqa gapirish", prep: 60, speak: 120 }
  ];
  var READ = 5; // savolni o'qish uchun soniya (1.1 va 1.2)

  function H() { return window.CEFR_WRITE && window.CEFR_WRITE._ai; }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function wc(t) { var m = String(t || "").trim().match(/[A-Za-z0-9'’-]+/g); return m ? m.length : 0; }
  function fmt(t) { t = Math.max(0, Math.round(t)); return Math.floor(t / 60) + ":" + ("0" + (t % 60)).slice(-2); }
  function st() { return window.CEFR_STORE ? window.CEFR_STORE.getState() : { progress: {} }; }
  function save() { if (window.CEFR_STORE) window.CEFR_STORE.saveState(st()); }
  function key(part, n) { return "speaking." + part + "." + n; }
  function prog(part, n) { return st().progress[key(part, n)]; }
  function sst() { var s = st(); if (!s.speaking) s.speaking = {}; return s.speaking; }
  function track(part, n, score, total) {
    var sub = {}; sub[part] = [score, total];
    if (window.CEFR_TRACK) try { window.CEFR_TRACK.attempt(part, n, score, total, sub); } catch (e) {}
  }
  function crumbs(extra) { return '<div class="crumbs"><a href="#/">Bosh sahifa</a> <span>/</span> ' + (extra ? '<a href="#/speaking">Speaking</a> <span>/</span> ' + extra : "Speaking") + "</div>"; }
  function para(t) { return esc(t).split(/\n\n+/).map(function (p) { return "<p>" + p + "</p>"; }).join(""); }

  /* ---- ovoz imkoniyatlari ---- */
  var cap = { dict: null, tts: null, tried: false };
  (function initCaps() {
    var c = window.claude;
    if (!c || typeof c.use !== "function") { cap.tried = true; return; }
    Promise.all([c.use("dictation").catch(function () { return null; }), c.use("tts").catch(function () { return null; })]).then(function (r) {
      cap.dict = r[0]; cap.tts = r[1]; cap.tried = true;
      if (cap.dict) {
        cap.dict.onPartial(function (e) { if (run) run.partial = e.text || ""; paintLive(); });
        cap.dict.onFinal(function (e) { if (run) { var k = run.cur; if (k != null && k >= 0 && run.phase === "speak") { run.ans[k] = (run.ans[k] ? run.ans[k] + " " : "") + String(e.text || "").trim(); } run.partial = ""; paintLive(); } });
        cap.dict.onState(function (e) {
          if (!run) return;
          run.mic = e.state;
          if (e.state === "idle" && run.active && e.reason && e.reason !== "stopped") run.micLost = e.reason;
          paintLive();
        });
      }
      var v = document.getElementById("view"); if (v && /#\/speaking/.test(location.hash) && !run) window.CEFR_SPEAK.render(location.hash.replace(/^#\/?/, "").split("/"), v);
    });
  })();
  function say(text) { if (!cap.tts) return; try { cap.tts.speak(text, { language: "en" }).catch(function () {}); } catch (e) {} }

  /* ---------------- bo'lim sahifasi ---------------- */
  function doneParts(m) { return PARTS.filter(function (p) { var g = prog(p.id, m.n0); return g && g.done; }).length; }
  M.forEach(function (m, i) { m.n0 = i + 1; });
  function viewHome() {
    var total = M.length * 4, done = 0;
    M.forEach(function (m) { done += doneParts(m); });
    var full = M.filter(function (m) { var g = prog("sx", m.n0); return g && g.done; }).length;
    var cards = PARTS.map(function (p) {
      var d = M.filter(function (m) { var g = prog(p.id, m.n0); return g && g.done; }).length;
      return '<div class="card active" onclick="location.hash=\'#/speaking/' + p.id + '\'"><div class="badge">' + p.no + "</div><h3>" + p.name + "</h3><p>" + esc(p.desc) + '</p><div class="bar"><span style="width:' + Math.round(d / M.length * 100) + '%"></span></div><div class="go">' + d + " / " + M.length + " · Ochish →</div></div>";
    }).join("");
    return '<div class="wrap">' + crumbs() +
      '<div class="hero" style="text-align:left;padding-top:6px"><h1>Speaking</h1><p>Multi-Level Record Speaking kitoblari asosida · ' + M.length + " ta mock test, C1 namuna javoblar, haqiqiy imtihon rasmlari</p></div>" +
      micNote() +
      '<div class="ln-tip"><b>Imtihon tuzilishi:</b> Part 1.1 — 3 ta shaxsiy savol (har biriga 30 soniya); Part 1.2 — ikki rasmni solishtirish (3 savol × 30 soniya); Part 2 — rasm va 3 savol bo\'yicha hikoya (1 daqiqa tayyorgarlik, 2 daqiqa gapirish); Part 3 — FOR/AGAINST jadvali bo\'yicha munozara (1 daqiqa tayyorgarlik, 2 daqiqa gapirish).</div>' +
      '<div class="cards">' +
      '<div class="card active" onclick="location.hash=\'#/speaking/m\'"><div class="badge">⏱</div><h3>Mock imtihonlar</h3><p>To\'liq imtihon: barcha qismlar ketma-ket, haqiqiy vaqt bilan</p><div class="bar"><span style="width:' + Math.round(full / M.length * 100) + '%"></span></div><div class="go">' + full + " / " + M.length + " · Ochish →</div></div>" +
      cards +
      '<div class="card active" onclick="location.hash=\'#/speaking/w\'"><div class="badge">Aa</div><h3>Lug\'at</h3><p>Namuna javoblardagi yuqori darajali so\'zlar va tarjimalari</p><div class="go">' + M.reduce(function (a, m) { return a + m.words.length; }, 0) + " ta so'z · Ochish →</div></div>" +
      "</div></div>";
  }
  function micNote() {
    if (!cap.tried) return "";
    if (cap.dict) return '<div class="sp-mic ok">🎤 Ovozli rejim yoqiq: gapirganingiz avtomatik matnga aylanadi va AI tahlil qiladi. Birinchi marta mikrofonga ruxsat so\'raladi.</div>';
    return '<div class="sp-mic">⌨️ Bu brauzerda ovozni matnga aylantirish ishlamaydi (Chrome yoki Claude desktop ilovasida ishlaydi). Mashq qilishingiz mumkin: vaqt ichida ovoz chiqarib gapiring, keyin asosiy fikrlaringizni yozib qo\'ying — AI shu matnni tahlil qiladi.</div>';
  }
  function viewList(pid) {
    var P = pid === "m" ? null : PARTS.filter(function (p) { return p.id === pid; })[0];
    var rows = M.map(function (m) {
      var g = prog(P ? P.id : "sx", m.n0);
      var title = P ? (P.id === "s1" ? m.p11.map(function (x) { return x.q; }).join(" / ") : P.id === "s2" ? m.p12.qs[1] && m.p12.qs[1].q : P.id === "s3" ? m.p2.qs[0] : m.p3.topic) : (m.p3.topic || "");
      var mark = g && g.done ? '<span class="mark' + (g.score < 60 ? " half" : "") + '">' + (g.lv || "✓") + "</span>" : "";
      return '<button type="button" class="ex-card wr-tcard ' + (g && g.done ? "done" : "") + '" onclick="location.hash=\'#/speaking/' + (P ? "x/" + m.n0 + "/" + P.id : "x/" + m.n0 + "/all") + '\'">' + mark +
        '<div class="n">Mock ' + m.n0 + ' <small class="sp-book">' + esc(m.book) + " · Test " + m.n + '</small></div><div class="s"><b>' + esc(String(title || "").slice(0, 120)) + "</b></div></button>";
    }).join("");
    var head = P ? '<div class="part-head"><h1>Speaking · ' + P.name + "</h1><p>" + esc(P.desc) + "</p></div>" + tipFor(P.id)
      : '<div class="part-head"><h1>Mock imtihonlar</h1><p>To\'liq imtihon: Part 1.1 → 1.2 → 2 → 3, haqiqiy vaqt bilan (~15 daqiqa). Oxirida AI butun nutqingizni o\'qituvchidek tahlil qiladi.</p></div>';
    return '<div class="wrap">' + crumbs(P ? P.name : "Mock imtihonlar") + head + micNote() + '<div class="ex-grid wr-tgrid">' + rows + "</div></div>";
  }
  function tipFor(id) {
    var t = {
      s1: "Har bir savolga 2–4 gapdan iborat javob bering: to'g'ridan-to'g'ri javob → sabab → misol. \"Yes\" yoki \"No\" bilan to'xtab qolmang.",
      s2: "1-savolda ikkala rasmni tasvirlab, farq va o'xshashliklarni ayting (In the first picture… whereas the second…). Keyingi savollarda fikringizni sabab va misol bilan asoslang.",
      s3: "Tayyorgarlik daqiqasida uchala savolga 2–3 kalit so'z yozib oling. Gapirganda savollar tartibida boring va hikoyani o'tgan zamonda aniq tafsilotlar bilan aytib bering.",
      s4: "Jadvaldagi FOR va AGAINST fikrlaridan foydalaning: avval mavzuni tanishtiring, keyin har ikki tomonni sabab va misol bilan yoriting, oxirida o'z pozitsiyangizni ayting."
    }[id];
    return '<div class="ln-tip"><b>Maslahat:</b> ' + t + "</div>";
  }
  function viewWords() {
    var rows = M.filter(function (m) { return m.words.length; }).map(function (m) {
      return '<details class="wr-chk"><summary>Mock ' + m.n0 + " · " + esc(m.p3.topic || "") + " (" + m.words.length + ")</summary><ul class=\"sp-words\">" +
        m.words.map(function (w) { return '<li><b>' + esc(w.en) + "</b><span>" + esc(w.uz) + "</span></li>"; }).join("") + "</ul></details>";
    }).join("");
    return '<div class="wrap">' + crumbs("Lug'at") + '<div class="part-head"><h1>Speaking lug\'ati</h1><p>Namuna javoblardagi yuqori darajali so\'z va iboralar — o\'zbekcha tarjimasi bilan.</p></div>' + rows + "</div>";
  }

  /* ---------------- mashq (runner) ---------------- */
  var run = null;
  function partSteps(m, pid) {
    var P = PARTS.filter(function (p) { return p.id === pid; })[0], steps = [];
    if (pid === "s1") m.p11.forEach(function (x, i) { steps.push({ pid: pid, q: x.q, i: i, read: READ, speak: 30 }); });
    if (pid === "s2") m.p12.qs.forEach(function (x, i) { steps.push({ pid: pid, q: x.q, i: i, read: READ, speak: 30, img: m.p12.img }); });
    if (pid === "s3") steps.push({ pid: pid, qs: m.p2.qs, i: 0, read: 0, prep: 60, speak: 120, img: [m.p2.img] });
    if (pid === "s4") steps.push({ pid: pid, table: m.p3, i: 0, read: 0, prep: 60, speak: 120 });
    return steps;
  }
  function startRun(m, pid) {
    var parts = pid === "all" ? ["s1", "s2", "s3", "s4"] : [pid], steps = [];
    parts.forEach(function (p) { steps = steps.concat(partSteps(m, p)); });
    steps.forEach(function (s, k) { s.k = k; });
    run = { m: m, pid: pid, steps: steps, si: -1, phase: "ready", left: 0, ans: steps.map(function () { return ""; }), secs: steps.map(function () { return 0; }), cur: null, partial: "", active: false, timer: null, typing: !cap.dict, done: false, ai: null, busy: false, err: "" };
    var sv = (sst()[m.n0 + "." + pid]);
    if (sv && sv.ans && sv.ans.length === steps.length) { run.ans = sv.ans.slice(); run.secs = sv.secs || run.secs; run.ai = sv.ai || null; run.done = true; run.phase = "review"; }
  }
  function stepHTML(s) {
    var m = run.m, h = "";
    var pn = { s1: "Part 1.1", s2: "Part 1.2", s3: "Part 2", s4: "Part 3" }[s.pid];
    h += '<div class="sp-pn">' + pn + (s.pid === "s1" || s.pid === "s2" ? " · Savol " + (s.i + 1) + " / 3" : "") + "</div>";
    if (s.img && s.img.length) h += '<div class="sp-imgs">' + s.img.filter(Boolean).map(function (u) { return '<img src="' + esc(u) + '" alt="">'; }).join("") + "</div>";
    if (s.q) h += '<div class="sp-q">' + esc(s.q) + "</div>";
    if (s.qs) h += '<ol class="sp-qs">' + s.qs.map(function (q) { return "<li>" + esc(q) + "</li>"; }).join("") + "</ol>";
    if (s.table) h += tableHTML(s.table);
    return h;
  }
  function tableHTML(t) {
    if (t.card && !(t.for && t.for.length)) return '<img class="sp-card" src="' + esc(t.card) + '" alt="">';
    return '<div class="sp-table"><div class="sp-topic">' + esc(t.topic) + '</div><div class="sp-cols"><div><b>FOR</b><ul>' + (t.for || []).map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") +
      '</ul></div><div><b>AGAINST</b><ul>' + (t.against || []).map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul></div></div></div>";
  }
  function viewRun() {
    var m = run.m;
    var title = run.pid === "all" ? "Mock " + m.n0 + " · To'liq imtihon" : "Mock " + m.n0 + " · " + PARTS.filter(function (p) { return p.id === run.pid; })[0].name;
    var body;
    if (run.phase === "ready") {
      body = '<div class="sp-stage sp-ready"><h2>' + esc(title) + "</h2>" +
        "<p>" + (run.pid === "all" ? "Barcha qismlar ketma-ket ishlaydi. Savollar ekranda chiqadi, vaqt avtomatik hisoblanadi." : "Savollar ekranda chiqadi, vaqt avtomatik hisoblanadi.") + "</p>" +
        (cap.dict ? '<label class="sp-sw"><input type="checkbox" id="spType"' + (run.typing ? " checked" : "") + '> Ovozsiz rejim (javobni yozaman)</label>' : "") +
        '<button class="btn primary sp-big" id="spGo">' + (run.typing ? "Boshlash" : "🎤 Boshlash") + "</button>" +
        (run.typing ? '<p class="wr-note">Ovoz chiqarib gapiring — real imtihondagidek. Gapirish vaqtida yoki tugagach asosiy fikrlaringizni qisqa yozib qo\'ying.</p>' : '<p class="wr-note">Boshlash tugmasini bosganingizda mikrofon yoqiladi va gapirganingiz matnga aylanadi.</p>') +
        "</div>";
    } else if (run.phase === "review") {
      body = reviewHTML();
    } else {
      var s = run.steps[run.si], lab = run.phase === "read" ? "Savolni o'qing" : run.phase === "prep" ? "Tayyorgarlik" : "Gapiring";
      body = '<div class="sp-stage">' + stepHTML(s) +
        '<div class="sp-timer ' + run.phase + '"><small>' + lab + '</small><b id="spLeft">' + fmt(run.left) + "</b></div>" +
        (run.phase === "prep" ? '<textarea class="sp-notes" placeholder="Qoralama: kalit so\'zlar (baholanmaydi)…"></textarea>' : "") +
        (run.phase === "speak" ? (run.typing ? '<textarea class="wr-text sp-ta" id="spTa" placeholder="Gapiring va asosiy fikrlaringizni shu yerga yozing…">' + esc(run.ans[s.k]) + "</textarea>"
          : '<div class="sp-live" id="spLive"></div>') : "") +
        '<div id="spMicLost"></div>' +
        '<div class="btn-row"><button class="btn ghost" id="spNext">' + (run.phase === "speak" ? (run.si === run.steps.length - 1 ? "Yakunlash" : "Keyingi savol →") : "O'tkazib yuborish →") + '</button><button class="btn ghost" id="spStop">To\'xtatish</button></div></div>';
    }
    return '<div class="wrap sp-run">' + crumbs('<a href="#/speaking/' + (run.pid === "all" ? "m" : run.pid) + '">' + (run.pid === "all" ? "Mock imtihonlar" : PARTS.filter(function (p) { return p.id === run.pid; })[0].name) + "</a> <span>/</span> Mock " + m.n0) +
      '<div class="wr-kick">' + esc(m.book) + " · Test " + m.n + "</div>" + body + "</div>";
  }
  function paintLive() {
    var el = document.getElementById("spLive");
    if (el && run && run.phase === "speak") {
      var s = run.steps[run.si];
      el.innerHTML = (run.ans[s.k] ? esc(run.ans[s.k]) + " " : "") + '<span class="sp-partial">' + esc(run.partial) + "</span>" +
        (!run.ans[s.k] && !run.partial ? '<span class="sp-wait">' + (run.mic === "listening" ? "🎤 Tinglayapman… gapiring" : "🎤 Mikrofon ishga tushmoqda…") + "</span>" : "");
    }
    var ml = document.getElementById("spMicLost");
    if (ml) ml.innerHTML = run && run.micLost ? '<div class="wr-err">Mikrofon to\'xtadi (' + esc(run.micLost) + '). <button class="btn ghost sm" id="spMicOn">🎤 Qayta yoqish</button></div>' : "";
    var b = document.getElementById("spMicOn");
    if (b) b.onclick = function () { run.micLost = null; try { cap.dict.start().catch(onMicErr); } catch (e) { onMicErr(e); } paintLive(); };
  }
  function onMicErr(e) {
    if (!run) return;
    if (e && e.code === "not_granted") { run.typing = true; run.micLost = null; run.err = "Mikrofonga ruxsat berilmadi — ovozsiz rejimga o'tildi."; }
    else run.micLost = (e && e.code) || "xato";
    rer();
  }
  function tick() {
    if (!run || !run.active) return;
    run.left--;
    if (run.phase === "speak") run.secs[run.steps[run.si].k]++;
    var el = document.getElementById("spLeft"); if (el) el.textContent = fmt(Math.max(0, run.left));
    if (run.left <= 0) advance();
  }
  function enter(si, phase) {
    run.si = si; run.phase = phase; var s = run.steps[si];
    run.left = phase === "read" ? s.read : phase === "prep" ? s.prep : s.speak;
    run.cur = phase === "speak" ? s.k : null;
    if (phase !== "speak" && s.q && phase === "read") say(s.q);
    rer();
  }
  function advance() {
    var ta = document.getElementById("spTa");
    if (ta && run.phase === "speak") run.ans[run.steps[run.si].k] = ta.value;
    var s = run.steps[run.si];
    if (run.phase === "read") { enter(run.si, "speak"); return; }
    if (run.phase === "prep") { enter(run.si, "speak"); return; }
    if (run.si < run.steps.length - 1) { var n = run.steps[run.si + 1]; enter(run.si + 1, n.read ? "read" : n.prep ? "prep" : "speak"); return; }
    finishRun();
  }
  function finishRun() {
    run.active = false; clearInterval(run.timer); run.timer = null; run.cur = null;
    var me = run, fired = false;
    var go = function () { if (fired || run !== me) return; fired = true; run.phase = "review"; run.done = true; persistRun(); rer(); };
    if (cap.dict && !run.typing) { try { cap.dict.stop().then(go, go); } catch (e) { go(); } setTimeout(go, 2500); }
    else go();
  }
  function persistRun(score, lv) {
    var w = sst(); w[run.m.n0 + "." + run.pid] = { ans: run.ans, secs: run.secs, ai: run.ai ? slim(run.ai) : null, at: Date.now() };
    var pid = run.pid === "all" ? "sx" : run.pid, s = st(), k = key(pid, run.m.n0), old = s.progress[k];
    var total = run.ans.length, said = run.ans.filter(function (a) { return wc(a) >= 8; }).length;
    var sc = score != null ? score : Math.round(said / total * 100);
    s.progress[k] = { done: true, score: sc, total: 100, lv: lv || (old && old.lv) || "", at: Date.now(), attempts: ((old && old.attempts) || 0) + (score == null ? 1 : 0) };
    save();
    if (score != null || !old) track(pid, run.m.n0, sc, 100);
  }
  function slim(r) { return r; }
  function transcript() {
    return run.steps.map(function (s, k) {
      var q = s.q || (s.qs ? s.qs.join(" ") : s.table ? "Topic: " + s.table.topic + " | FOR: " + (s.table.for || []).join("; ") + " | AGAINST: " + (s.table.against || []).join("; ") : "");
      var pn = { s1: "Part 1.1", s2: "Part 1.2", s3: "Part 2", s4: "Part 3" }[s.pid];
      return "[" + pn + "] " + q + "\nANSWER (" + run.secs[k] + "s spoken): " + (run.ans[k] || "(no answer)");
    }).join("\n\n");
  }
  function plainForAnno() { return run.ans.map(function (a, k) { return "Q" + (k + 1) + ": " + (a || "—"); }).join("\n\n"); }
  function speakPrompt() {
    return [
      "You are an experienced examiner and a caring speaking teacher for the Uzbekistan Multilevel (CEFR) English exam, Speaking section.",
      "Below is the candidate's spoken answers, transcribed by speech recognition" + (run.typing ? " (or typed notes, if they practised without a microphone)" : "") + ". Transcription errors are possible: do not punish obvious recognition mistakes; if a word looks like a mis-recognition, mention it as a possible pronunciation issue only in tips.",
      "Exam timing: Part 1.1 and 1.2 — 30 seconds per question; Part 2 and Part 3 — 2 minutes of speaking. A strong answer uses most of the time.",
      "TRANSCRIPT:\n<<<\n" + transcript() + "\n>>>",
      "Return ONLY a JSON object, no other text:",
      '{"level":"below B1|B1|B2|C1","overall":0-100,',
      '"criteria":[{"k":"flu","name":"Ravonlik va izchillik","score":0-10,"uz":"..."},{"k":"lex","name":"Lug\'at boyligi","score":0-10,"uz":"..."},{"k":"gram","name":"Grammatika","score":0-10,"uz":"..."},{"k":"task","name":"Savolga javob va rivojlantirish","score":0-10,"uz":"..."}],',
      '"teacher":"a warm, honest personal message in Uzbek (4-7 sentences, use \'siz\') like a speaking teacher after the lesson: what impressed you, the 2-3 most important things to improve next time, encouragement",',
      '"paras":[{"n":1,"role":"Q1 (Part 1.1) / Q2 … / Part 2 / Part 3","uz":"feedback on THIS answer: relevance, length, development, timing"}],',
      '"notes":[{"q":"EXACT quote copied from the candidate\'s answers (3-15 words)","t":"good|bad|tip","uz":"teacher comment in Uzbek, e.g. \'Bu iborani juda o\'rinli ishlatdingiz\', \'Buni umuman aytmang, chunki…\', \'Shu yerda … desangiz tabiiyroq bo\'ladi\'","fix":"better spoken wording (for bad/tip)"}],',
      '"learn":[{"en":"useful phrase, collocation or discourse marker for these questions","uz":"meaning / when to use"}],',
      '"strengths":["..."],"errors":[{"orig":"exact wrong fragment","fix":"correction","uz":"short explanation"}],"missing":["questions not answered or too short"],"tips":["..."],',
      '"improved":"an improved model version of ALL answers in natural spoken English (one or two levels higher), keeping the candidate\'s ideas; label each as Q1:, Q2: …"}',
      "Write all explanations in Uzbek (Latin script), concrete and specific to THIS candidate. Give 10-20 notes across all answers, one item in paras per answer, 5-8 items in learn. If answers are empty or off-topic, say so and score low."
    ].join("\n\n");
  }
  function reviewHTML() {
    var h = H(), total = 0, words = 0;
    run.secs.forEach(function (x) { total += x; }); run.ans.forEach(function (a) { words += wc(a); });
    var wpm = total > 20 ? Math.round(words / (total / 60)) : 0;
    var rows = run.steps.map(function (s, k) {
      var m = run.m, sample = s.pid === "s1" ? m.p11[s.i].a : s.pid === "s2" ? m.p12.qs[s.i].a : s.pid === "s3" ? m.p2.a : m.p3.a;
      return '<div class="sp-rv">' + stepHTML(s) +
        '<div class="sp-meta">' + wc(run.ans[k]) + " so'z · " + fmt(run.secs[k]) + " gapirildi" + (s.q ? ' · <button class="sp-say" data-say="' + esc(s.q) + '"' + (cap.tts ? "" : " hidden") + ">🔊 Savol</button>" : "") +
        (window.CEFR_PRO && window.CEFR_KEY ? ' · <button class="sp-say sp-voice" data-vpart="' + { s1: "1.1", s2: "1.2", s3: "2", s4: "3" }[s.pid] + '" data-vq="' + esc(s.q || (s.qs ? s.qs.join(" ") : s.table ? "Topic: " + s.table.topic + (s.table.for && s.table.for.length ? "\nFOR: " + s.table.for.join("; ") + "\nAGAINST: " + s.table.against.join("; ") : "") : "")) + '">🎙 Ovoz bilan (AI)</button>' : "") + "</div>" +
        '<textarea class="sp-ans" data-k="' + k + '" rows="' + (s.pid === "s3" || s.pid === "s4" ? 6 : 3) + '" placeholder="Javob matni (tahrirlash mumkin)">' + esc(run.ans[k]) + "</textarea>" +
        '<details class="wr-uz"><summary>Kitobdagi C1 namuna javob</summary><div class="wr-model">' + para(sample) + "</div>" + (cap.tts ? '<button class="btn ghost sm sp-say" data-say="' + esc(sample) + '">🔊 Namunani tinglash</button>' : "") + "</details></div>";
    }).join("");
    var words2 = run.m.words.length && run.pid !== "s4" ? '<details class="wr-chk"><summary>Shu testdagi yuqori darajali so\'zlar (' + run.m.words.length + ")</summary><ul class=\"sp-words\">" + run.m.words.map(function (w) { return "<li><b>" + esc(w.en) + "</b><span>" + esc(w.uz) + "</span></li>"; }).join("") + "</ul></details>" : "";
    return '<div class="sp-stats"><div class="wr-lv"><small>Gapirilgan vaqt</small><b>' + fmt(total) + '</b></div><div class="wr-lv"><small>So\'zlar</small><b>' + words + '</b></div><div class="wr-lv"><small>Tezlik</small><b>' + (wpm || "—") + "</b><small>so'z/daq</small></div></div>" +
      (wpm ? '<p class="wr-note">' + (wpm < 90 ? "Tezlik past: pauzalar ko'p bo'lishi mumkin. Maqsad — daqiqasiga 110–150 so'z." : wpm > 170 ? "Juda tez gapiryapsiz — biroz sekinlashsangiz, aniqroq bo'ladi." : "Tezlik yaxshi (110–160 so'z/daq atrofida).") + "</p>" : "") +
      rows + words2 +
      '<div class="btn-row"><button class="btn primary" id="spAi" hidden>AI o\'qituvchi tahlili</button><button class="btn ghost" id="spAgain">Qayta ishlash</button></div>' +
      '<div id="spAiBox">' + (run.busy ? '<div class="wr-busy">AI nutqingizni tahlil qilmoqda… (20–40 soniya)</div>' : run.err ? '<div class="wr-err">' + esc(run.err) + "</div>" : run.ai && h ? h.box(run.ai, true, plainForAnno()) : "") + "</div>" +
      '<p class="wr-note">AI faqat matnni ko\'radi — talaffuz va intonatsiyani to\'liq baholay olmaydi. Noto\'g\'ri tanilgan so\'zlar talaffuzga e\'tibor berish kerakligini bildirishi mumkin.</p>';
  }
  function rer() { var v = document.getElementById("view"); if (!v || !run) return; var y = window.scrollY; v.innerHTML = viewRun(); wireRun(v); if (run.phase === "review") window.scrollTo(0, y); else window.scrollTo(0, 0); paintLive(); }
  function wireRun(v) {
    var g = document.getElementById("spGo");
    if (g) g.onclick = function () {
      var tp = document.getElementById("spType"); if (tp) run.typing = tp.checked;
      if (!run.typing && cap.dict) { try { cap.dict.start().catch(onMicErr); } catch (e) { onMicErr(e); } }
      run.active = true; run.timer = setInterval(tick, 1000);
      var s = run.steps[0]; enter(0, s.read ? "read" : s.prep ? "prep" : "speak");
    };
    var tp2 = document.getElementById("spType"); if (tp2) tp2.onchange = function () { run.typing = tp2.checked; rer(); };
    var n = document.getElementById("spNext"); if (n) n.onclick = function () { advance(); };
    var sp = document.getElementById("spStop"); if (sp) sp.onclick = function () { finishRun(); };
    v.querySelectorAll(".sp-ans").forEach(function (ta) { ta.oninput = function () { run.ans[+ta.dataset.k] = ta.value; clearTimeout(ta._t); ta._t = setTimeout(function () { persistRun(); }, 1200); }; });
    v.querySelectorAll(".sp-say:not(.sp-voice)").forEach(function (b) { b.onclick = function (e) { e.preventDefault(); say(b.dataset.say); }; });
    v.querySelectorAll(".sp-voice").forEach(function (b) { b.onclick = function (e) { e.preventDefault(); window.CEFR_PRO.voice(b.dataset.vpart, b.dataset.vq, b); }; });
    var ag = document.getElementById("spAgain"); if (ag) ag.onclick = function () { var m = run.m, pid = run.pid; delete sst()[m.n0 + "." + pid]; save(); startRun(m, pid); run.phase = "ready"; run.done = false; rer(); };
    var h = H();
    if (h) h.wire(v);
    if (h && document.getElementById("spAi")) h.ready(function (ok) {
      var b = document.getElementById("spAi"); if (!b) return; b.hidden = !ok;
      b.onclick = function () {
        var words = 0; run.ans.forEach(function (a) { words += wc(a); });
        if (words < 15) { run.err = "Tahlil uchun javoblar juda qisqa. Kamida bir necha gap gapiring yoki yozing."; rer(); return; }
        run.busy = true; run.err = ""; rer();
        h.ask(speakPrompt()).then(function (r) {
          run.busy = false; run.ai = r; persistRun(Math.round(+r.overall || 0), r.level || ""); rer();
        }, function (e) {
          run.busy = false;
          run.err = e && e.uz ? e.uz : e && e.code === "not_granted" ? "AI tahliliga ruxsat berilmadi." : e && e.code === "rate_limited" ? "Juda ko'p so'rov — birozdan keyin qayta urinib ko'ring." : "AI javob bera olmadi. Qayta urinib ko'ring.";
          rer();
        });
      };
    });
  }
  function stopRun() { if (run) { if (run.timer) clearInterval(run.timer); if (run.active && cap.dict && !run.typing) { try { cap.dict.stop(); } catch (e) {} } run.active = false; } }

  /* ---------------- marshrut ---------------- */
  function render(parts, view) {
    var a = parts[1];
    if (a !== "x" && run) { stopRun(); run = null; }
    view.onclick = null;
    if (!a) { view.innerHTML = viewHome(); return; }
    if (a === "w") { view.innerHTML = viewWords(); return; }
    if ((/^s[1-4x]$/.test(a)) && parts[2]) { location.replace("#/speaking/x/" + parts[2] + "/" + (a === "sx" ? "all" : a)); return; }
    if (a === "sx") a = "m";
    if (a === "m" || /^s[1-4]$/.test(a)) { view.innerHTML = viewList(a); return; }
    if (a === "x") {
      var n = +parts[2], pid = parts[3] || "all", m = M[n - 1];
      if (!m) { location.hash = "#/speaking"; return; }
      if (!run || run.m !== m || run.pid !== pid) { stopRun(); startRun(m, pid); }
      view.innerHTML = viewRun(); wireRun(view); paintLive(); return;
    }
    location.hash = "#/speaking";
  }
  window.CEFR_SPEAK = {
    render: render,
    stop: function () { stopRun(); run = null; },
    total: function () { return M.length * 5; },
    doneCount: function () { var d = 0; M.forEach(function (m) { ["s1", "s2", "s3", "s4", "sx"].forEach(function (p) { var g = prog(p, m.n0); if (g && g.done) d++; }); }); return d; },
    catalog: function () {
      if (!M.length) return [];
      return PARTS.concat([{ id: "sx", name: "Speaking mock", desc: "To'liq imtihon" }]).map(function (p) {
        return { id: p.id, name: p.id === "sx" ? "Speaking · Mock" : "Speaking " + p.name, desc: p.desc, list: M.map(function (m) { var g = prog(p.id, m.n0); return { n: m.n0, title: "Mock " + m.n0, done: !!(g && g.done), score: g && g.score, total: g && g.total }; }) };
      });
    }
  };
})();
