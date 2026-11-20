/* CEFR Companion — Writing bo'limi (Multilevel Master Writing kitobi asosida) */
(function () {
  var W = window.WRITING || { units: [], tasks: [] };
  var U1 = W.units.filter(function (u) { return u.task === 1; });
  var U2 = W.units.filter(function (u) { return u.task === 2; });
  var T = W.tasks || [];
  var X = (function () { var m = {}, out = []; T.forEach(function (t, i) { if (t.set) { (m[t.set] = m[t.set] || { n: t.set })["t" + t.task] = i + 1; } });
    Object.keys(m).sort(function (a, b) { return a - b; }).forEach(function (k) { if (m[k].t1 && m[k].t2) out.push(m[k]); }); return out; })();
  var PARTS = [
    { id: "w1", name: "Task 1 · Xatlar", desc: "Xat turlari, tuzilishi, uslub, iboralar va mashqlar", list: U1 },
    { id: "w2", name: "Task 2 · Insholar", desc: "Insho turlari, reja, bog'lovchilar va mashqlar", list: U2 },
    { id: "wt", name: "Yozish xonasi", desc: "Kitobdagi topshiriqlar: taymer, so'z hisoblagich, namuna javob, AI tekshiruvi", list: T },
    { id: "wx", name: "Imtihon variantlari", desc: "Task 1 + Task 2 birga, 60 daqiqa — haqiqiy imtihondagidek", list: X }
  ];
  var KIND = {
    request: "So'rov xati", complaint: "Shikoyat xati", info: "Ma'lumot xati", apology: "Uzr xati", thanks: "Minnatdorchilik / taklif xati",
    job: "Ishga kirish / ishdan ketish xati", condolence: "Ta'ziya xati", advice: "Maslahat xati", letter: "Xat",
    opinion: "Fikr bildirish inshosi", discuss: "Ikki tomonni muhokama qilish", adv: "Afzallik va kamchiliklar", problem: "Muammo va yechim", essay: "Insho"
  };
  var STYLE = { formal: "Rasmiy", informal: "Norasmiy", semi: "Yarim rasmiy" };

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  // kitob matnidagi oddiy belgilash: **qalin**, _kursiv_
  function fmtx(s) {
    return esc(s).replace(/\*\*([^*]+)\*\*/g, "<b>$1</b>").replace(/(^|[\s(])_([^_]+)_(?=[\s.,;:!?)]|$)/g, "$1<i>$2</i>").replace(/\n/g, "<br>");
  }
  function st() { return window.CEFR_STORE ? window.CEFR_STORE.getState() : { progress: {} }; }
  function save(s) { if (window.CEFR_STORE) window.CEFR_STORE.saveState(s); }
  function key(part, n) { return "writing." + part + "." + n; }
  function prog(part, n) { return st().progress[key(part, n)]; }
  function wcount(t) { var m = String(t || "").trim().match(/[A-Za-z0-9À-ž'’-]+/g); return m ? m.length : 0; }
  function dstr(ts) { var d = new Date(ts), p = function (x) { return ("0" + x).slice(-2); }; return p(d.getDate()) + "." + p(d.getMonth() + 1) + "." + d.getFullYear() + ", " + p(d.getHours()) + ":" + p(d.getMinutes()); }
  function fmt(t) { t = Math.max(0, Math.floor(t)); return Math.floor(t / 60) + ":" + ("0" + (t % 60)).slice(-2); }
  function wst() { var s = st(); if (!s.writing) s.writing = { d: {}, h: {} }; if (!s.writing.d) s.writing.d = {}; if (!s.writing.h) s.writing.h = {}; return s.writing; }
  function track(part, n, score, total) {
    var sub = {}; sub[part] = [score, total];
    if (window.CEFR_TRACK) try { window.CEFR_TRACK.attempt(part, n, score, total, sub); } catch (e) {}
  }
  function crumbs(extra) {
    return '<div class="crumbs"><a href="#/">Bosh sahifa</a> <span>/</span> ' + (extra ? '<a href="#/writing">Writing</a> <span>/</span> ' + extra : "Writing") + "</div>";
  }
  function unitOf(part, n) { var L = part === "w1" ? U1 : U2; return L[n - 1]; }
  function autoCount(u) { var c = 0; (u.blocks || []).forEach(function (b) { if (b.t === "ex" && b.kind !== "write") c += (b.kind === "fill" ? b.a.length : b.items.length); }); return c; }
  function doneIn(p) { return p.list.filter(function (x, i) { var g = prog(p.id, p.id === "wx" ? x.n : i + 1); return g && g.done; }).length; }

  /* ---------------- AI (Claude) ---------------- */
  var ai = { ns: null, tried: false, ok: false };
  function aiReady(cb) {
    if (ai.tried) { cb(ai.ok); return; }
    var c = window.claude;
    function server() { var K = window.CEFR_KEY, S = K && K.state && K.state(); ai.tried = true; ai.server = !!(K && (!S || S.ai !== false)); ai.ok = ai.server; cb(ai.ok); }
    if (!c || typeof c.use !== "function") { server(); return; }
    c.use("sample").then(function (ns) { if (!ns) { server(); return; } ai.tried = true; ai.ns = ns; ai.ok = true; cb(true); }, function () { server(); });
  }
  function parseJSON(t) {
    if (t && typeof t === "object") return t;
    t = String(t || "");
    var a = t.indexOf("{"), b = t.lastIndexOf("}");
    if (a < 0 || b < a) throw new Error("bad");
    return JSON.parse(t.slice(a, b + 1));
  }
  function aiAsk(prompt, kind) {
    if (ai.server) {
      return window.CEFR_KEY.call("/api/ai/ask", { prompt: prompt, kind: kind || "writing" }).then(function (x) {
        if (x.keys != null && window.CEFR_KEY.state()) { var S = window.CEFR_KEY.state(); S.keys = x.keys; S.aiFree = x.aiFree; window.CEFR_KEY.setS(S); }
        return parseJSON(x.result);
      }, function (e) { var er = new Error("ai"); er.code = e && e.code; er.uz = e && e.data && e.data.uz; throw er; });
    }
    var s = ai.ns;
    var p = typeof s.json === "function" ? s.json(prompt, { modelTier: "default" }) : s(prompt, { modelTier: "default" }).then(function (r) { return r.text; });
    return p.then(parseJSON);
  }
  function reviewPrompt(t, text, secs) {
    var isEssay = t.task === 2;
    return [
      "You are an experienced examiner for the Uzbekistan national Multilevel (CEFR) English exam, Writing section.",
      "Evaluate the candidate's " + (isEssay ? "essay (Task 2)" : "letter (Task 1)") + " strictly but fairly.",
      "TASK:\n" + (t.situation || "") + (t.to ? "\n" + t.to : "") + (t.bullets && t.bullets.length ? "\n- " + t.bullets.join("\n- ") : "") + (t.q ? "\n" + t.q : ""),
      "Required: " + (isEssay ? "an essay of at least 250 words" : "a " + (STYLE[t.style] ? t.style : "") + " letter of at least 150 words that answers every bullet point in its own paragraph, with a suitable greeting, a clear purpose, a closing sentence and sign-off") + ".",
      "Time used: " + Math.round(secs / 60) + " min. Word count: " + wcount(text) + ".",
      "CANDIDATE TEXT:\n<<<\n" + text + "\n>>>",
      "Return ONLY a JSON object, no other text, with these keys:",
      '{"level":"below B1|B1|B2|C1","overall":0-100,',
      '"criteria":[{"k":"task","name":"Topshiriqni bajarish","score":0-10,"uz":"..."},{"k":"org","name":"Tuzilish va bog\'lanish","score":0-10,"uz":"..."},{"k":"lex","name":"Lug\'at boyligi","score":0-10,"uz":"..."},{"k":"gram","name":"Grammatika","score":0-10,"uz":"..."}' + (isEssay ? "" : ',{"k":"tone","name":"Uslub (rasmiy/norasmiy)","score":0-10,"uz":"..."}') + "],",
      '"teacher":"a warm, personal message (4-7 sentences) written like a caring but honest teacher speaking directly to the student (use \'siz\'): what impressed you, the 2-3 most important things to fix next time, encouragement",',
      '"paras":[{"n":1,"role":"Introduction / Body 1 / … / Conclusion (or Greeting, Purpose, Bullet 1… for a letter)","uz":"what works and what to improve in THIS paragraph, concrete, 1-3 sentences"}],',
      '"notes":[{"q":"an EXACT quote copied character-for-character from the candidate text (3-20 words)","t":"good|bad|tip","uz":"teacher comment in Uzbek about this exact place, e.g. \'Bu yerda … ishlatganingiz juda zo\'r, chunki …\', \'Bu iborani umuman ishlatmang, chunki …\', \'Shu yerda … desangiz kuchliroq bo\'ladi\'","fix":"better wording in English (for bad/tip; empty for good)"}],',
      '"learn":[{"en":"a useful word, collocation or linking phrase the student should start using for this task","uz":"meaning and when to use it"}],',
      '"strengths":["..."],"errors":[{"orig":"exact wrong fragment from the text","fix":"corrected fragment","uz":"short explanation"}],"missing":["bullet points or parts that are missing or weak"],"tips":["..."],"improved":"a corrected, improved version of the whole text at the same or one level higher, keeping the candidate\'s ideas"}',
      "Write all explanations (teacher, paras, notes.uz, learn.uz, strengths, missing, tips, criteria.uz) in Uzbek (Latin script), concrete and specific to THIS text — never generic. In \"notes\" give 12-25 comments spread over the WHOLE text (every paragraph): praise good vocabulary, grammar and linking (t=good), mark mistakes or words that should not be used at all (t=bad), and suggest stronger alternatives (t=tip). Each q must appear verbatim in the text. In \"paras\" cover every paragraph in order. Give 5-8 items in \"learn\". List up to 12 of the most important errors. If the text is off-topic or nearly empty, say so and give low scores."
    ].join("\n\n");
  }
  function exPrompt(q, ans, sample) {
    return [
      "You are an English writing teacher for Uzbek learners preparing for the Multilevel (CEFR) exam.",
      "Exercise instruction and item:\n" + q,
      sample ? "A model answer from the textbook (one possible answer):\n" + sample : "",
      "Student's answer:\n<<<\n" + ans + "\n>>>",
      'Return ONLY JSON: {"ok":true|false,"score":0-10,"uz":"short feedback in Uzbek (Latin): is it correct, natural and appropriate in style?","fix":"a corrected / better version in English"}'
    ].join("\n\n");
  }
  function annotate(text, notes) {
    var low = String(text || ""), L = low.toLowerCase(), spans = [];
    (notes || []).forEach(function (n, i) {
      var q = String(n.q || "").trim().replace(/^["'“]|["'”]$/g, ""); if (q.length < 2) return;
      var at = L.indexOf(q.toLowerCase());
      if (at < 0) { var q2 = q.replace(/[.,;:!?]+$/, ""); if (q2.length > 1) { at = L.indexOf(q2.toLowerCase()); q = q2; } }
      if (at < 0) return;
      spans.push({ a: at, b: at + q.length, i: i, t: n.t });
    });
    spans.sort(function (x, y) { return x.a - y.a; });
    var out = "", pos = 0, used = {};
    spans.forEach(function (sp) {
      if (sp.a < pos) return;
      out += esc(low.slice(pos, sp.a)) + '<mark class="wr-nt nt-' + (sp.t === "good" ? "good" : sp.t === "bad" ? "bad" : "tip") + '" data-n="' + sp.i + '">' + esc(low.slice(sp.a, sp.b)) + "<sup>" + (sp.i + 1) + "</sup></mark>";
      pos = sp.b; used[sp.i] = 1;
    });
    out += esc(low.slice(pos));
    return { html: out.replace(/\n/g, "<br>"), used: used };
  }
  function teacherBox(r, text) {
    if (!r || !(r.teacher || (r.notes && r.notes.length) || (r.paras && r.paras.length))) return "";
    var an = annotate(text, r.notes);
    var ic = { good: "✓", bad: "✗", tip: "💡" };
    var notes = (r.notes || []).map(function (n, i) {
      var t = n.t === "good" ? "good" : n.t === "bad" ? "bad" : "tip";
      return '<li class="wr-nl nt-' + t + '" id="wrn' + i + '" data-n="' + i + '"><span class="wr-ni">' + ic[t] + '</span><div><b>' + (i + 1) + ". «" + esc(n.q) + "»</b>" + (an.used[i] ? "" : ' <small class="wr-nf">(matnda topilmadi)</small>') +
        "<p>" + esc(n.uz || "") + "</p>" + (n.fix && t !== "good" ? '<p class="wr-ins">→ ' + esc(n.fix) + "</p>" : "") + "</div></li>";
    }).join("");
    var paras = (r.paras || []).map(function (p) { return "<li><b>" + esc(p.role || ("Paragraf " + p.n)) + ".</b> " + esc(p.uz || "") + "</li>"; }).join("");
    var learn = (r.learn || []).map(function (w) { return '<li><span class="wr-en">' + esc(w.en) + '</span><span class="wr-tr">' + esc(w.uz || "") + "</span></li>"; }).join("");
    var cnt = { good: 0, bad: 0, tip: 0 }; (r.notes || []).forEach(function (n) { cnt[n.t === "good" ? "good" : n.t === "bad" ? "bad" : "tip"]++; });
    return '<div class="wr-teach">' +
      '<div class="wr-teach-h"><span class="wr-teach-av">👩‍🏫</span><div><b>O\'qituvchi tahlili</b><small>Matningizdagi har bir muhim joyga izoh</small></div></div>' +
      (r.teacher ? '<div class="wr-teach-msg">' + esc(r.teacher).replace(/\n/g, "<br>") + "</div>" : "") +
      (r.notes && r.notes.length ? '<div class="wr-legend"><span class="nt-good">✓ Zo\'r — ' + cnt.good + '</span><span class="nt-bad">✗ Xato / ishlatmang — ' + cnt.bad + '</span><span class="nt-tip">💡 Yaxshiroq variant — ' + cnt.tip + "</span></div>" +
        '<div class="wr-anno">' + an.html + "</div><p class=\"wr-note\">Belgilangan joyni bosing — izoh ko'rinadi.</p><ol class=\"wr-nlist\">" + notes + "</ol>" : "") +
      (paras ? "<h4>Paragraflar bo'yicha</h4><ul class=\"wr-paras\">" + paras + "</ul>" : "") +
      (learn ? '<div class="wr-phr"><h4>Keyingi safar shularni ishlating</h4><ul>' + learn + "</ul></div>" : "") +
      "</div>";
  }
  function wireTeacher(root) {
    (root || document).querySelectorAll(".wr-nt").forEach(function (m) {
      m.onclick = function () {
        var li = document.getElementById("wrn" + m.dataset.n); if (!li) return;
        document.querySelectorAll(".wr-nl.on,.wr-nt.on").forEach(function (x) { x.classList.remove("on"); });
        li.classList.add("on"); m.classList.add("on");
        li.scrollIntoView({ behavior: "smooth", block: "center" });
      };
    });
    (root || document).querySelectorAll(".wr-nl").forEach(function (li) {
      li.onclick = function () {
        var m = document.querySelector('.wr-nt[data-n="' + li.dataset.n + '"]'); if (!m) return;
        document.querySelectorAll(".wr-nl.on,.wr-nt.on").forEach(function (x) { x.classList.remove("on"); });
        li.classList.add("on"); m.classList.add("on");
        m.scrollIntoView({ behavior: "smooth", block: "center" });
      };
    });
  }
  function aiBox(r, isEssay, text) {
    if (!r) return "";
    var cr = (r.criteria || []).map(function (c) {
      var sc = Math.max(0, Math.min(10, +c.score || 0));
      return '<div class="wr-crit"><div class="wr-crit-h"><b>' + esc(c.name || c.k) + "</b><span>" + sc + "/10</span></div>" +
        '<div class="bar"><span style="width:' + sc * 10 + '%"></span></div><p>' + esc(c.uz || "") + "</p></div>";
    }).join("");
    var errs = (r.errors || []).map(function (e) {
      return '<li><span class="wr-del">' + esc(e.orig) + '</span> → <span class="wr-ins">' + esc(e.fix) + "</span>" + (e.uz ? '<small>' + esc(e.uz) + "</small>" : "") + "</li>";
    }).join("");
    function lst(a, cls) { return a && a.length ? '<ul class="' + cls + '">' + a.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>" : ""; }
    return '<div class="wr-ai">' +
      '<div class="wr-ai-top"><div class="wr-lv"><small>Taxminiy daraja</small><b>' + esc(r.level || "—") + '</b></div><div class="wr-lv"><small>Umumiy</small><b>' + (r.overall != null ? Math.round(r.overall) + "%" : "—") + "</b></div></div>" +
      '<div class="wr-crits">' + cr + "</div>" +
      teacherBox(r, text) +
      (r.strengths && r.strengths.length ? "<h4>Yaxshi tomonlari</h4>" + lst(r.strengths, "wr-good") : "") +
      (r.missing && r.missing.length ? "<h4>Yetishmayotgan yoki kuchsiz joylar</h4>" + lst(r.missing, "wr-miss") : "") +
      (errs ? "<h4>Xatolar va tuzatishlar</h4><ul class=\"wr-errs\">" + errs + "</ul>" : "") +
      (r.tips && r.tips.length ? "<h4>Maslahatlar</h4>" + lst(r.tips, "wr-tips") : "") +
      (r.improved ? '<details class="wr-imp"><summary>Yaxshilangan variant</summary><div class="wr-model">' + esc(r.improved).replace(/\n/g, "<br>") + "</div></details>" : "") +
      '<p class="wr-note">Bu AI tomonidan berilgan taxminiy baho — rasmiy natija emas. Imtihonda baholovchilar matnni qo\'lda tekshiradi.</p></div>';
  }

  /* ---------------- bo'lim sahifasi ---------------- */
  function viewSection() {
    var cards = PARTS.map(function (p, i) {
      var n = p.list.length, d = doneIn(p);
      return '<div class="card ' + (n ? "active" : "locked") + '"' + (n ? ' onclick="location.hash=\'#/writing/' + p.id + '\'"' : "") + ">" +
        (n ? "" : '<span class="tag">Tez orada</span>') +
        '<div class="badge">' + (i < 2 ? i + 1 : i === 2 ? "✎" : "⏱") + "</div><h3>" + p.name + "</h3><p>" + p.desc + "</p>" +
        (n ? '<div class="bar"><span style="width:' + Math.round(d / n * 100) + '%"></span></div><div class="go">' + d + " / " + n + (p.id === "wt" ? " topshiriq" : p.id === "wx" ? " variant" : " mavzu") + " · Ochish →</div>" : '<div class="go" style="color:var(--text3)">Tez orada</div>') +
        "</div>";
    }).join("");
    return '<div class="wrap">' + crumbs() +
      '<div class="hero" style="text-align:left;padding-top:6px"><h1>Writing</h1><p>Multilevel Master Writing kitobi asosida · nazariya, mashqlar va yozish amaliyoti</p></div>' +
      '<div class="ln-tip"><b>Imtihonda:</b> 1-topshiriq — berilgan vaziyat bo\'yicha <b>xat</b> (kamida 150 so\'z, ~20 daqiqa), 2-topshiriq — <b>insho</b> (~40 daqiqa). Avval mavzularni o\'qib mashqlarni bajaring, keyin "Yozish xonasi"da vaqt bilan yozib ko\'ring.</div>' +
      '<div class="cards">' + cards + "</div></div>";
  }

  /* ---------------- ro'yxatlar ---------------- */
  function viewUnits(part) {
    var P = PARTS.filter(function (p) { return p.id === part; })[0];
    var rows = P.list.map(function (u, i) {
      var g = prog(part, i + 1), ac = autoCount(u);
      var mark = g && g.done ? '<span class="mark' + (g.score === g.total ? "" : " half") + '">' + (g.total ? g.score + "/" + g.total : "✓") + "</span>" : "";
      return '<button type="button" class="ex-card wr-ucard ' + (g && g.done ? "done" : "") + '" onclick="location.hash=\'#/writing/' + part + "/" + (i + 1) + '\'">' + mark +
        '<div class="n">Unit ' + u.no + '</div><div class="s"><b>' + esc(u.title) + "</b></div><div class=\"s\">" + esc(u.uz || "") + "</div>" +
        '<div class="s wr-meta">' + (ac ? ac + " ta test savoli" : "Nazariya") + (u.writes ? " · " + u.writes + " ta yozma mashq" : "") + "</div></button>";
    }).join("");
    return '<div class="wrap">' + crumbs(esc(P.name)) +
      '<div class="part-head"><h1>' + esc(P.name) + "</h1><p>" + esc(P.desc) + "</p></div>" +
      '<div class="ex-grid wr-ugrid">' + rows + "</div></div>";
  }

  var tFilter = "all";
  try { tFilter = localStorage.getItem("cefr_wt_f") || "all"; } catch (e) {}
  function viewTasks() {
    var kinds = {};
    T.forEach(function (t) { var k = t.task === 2 ? "t2" : t.kind; kinds[k] = (kinds[k] || 0) + 1; });
    var chips = '<button type="button" class="wr-chip' + (tFilter === "all" ? " on" : "") + '" data-f="all">Barchasi · ' + T.length + "</button>" +
      Object.keys(kinds).map(function (k) {
        return '<button type="button" class="wr-chip' + (tFilter === k ? " on" : "") + '" data-f="' + k + '">' + esc(k === "t2" ? "Task 2 · Insholar" : KIND[k] || k) + " · " + kinds[k] + "</button>";
      }).join("");
    var rows = T.map(function (t, i) {
      var k = t.task === 2 ? "t2" : t.kind;
      if (tFilter !== "all" && tFilter !== k) return "";
      var g = prog("wt", i + 1), h = (wst().h[t.id] || [])[0];
      var mark = g && g.done ? '<span class="mark' + (h && h.ai && h.ai.overall < 60 ? " half" : "") + '">' + (h && h.ai ? (h.ai.level || "") : "✓") + "</span>" : "";
      var d = wst().d[t.id];
      return '<button type="button" class="ex-card wr-tcard ' + (g && g.done ? "done" : "") + '" onclick="location.hash=\'#/writing/wt/' + (i + 1) + '\'">' + mark +
        '<div class="n">' + (t.task === 2 ? "Task 2" : "Task 1") + " · " + esc(KIND[t.kind] || "") + (t.style ? " · " + esc(STYLE[t.style] || "") : "") + "</div>" +
        '<div class="s"><b>' + esc(t.title || (t.situation || t.q || "").slice(0, 90)) + "</b></div>" +
        '<div class="s wr-meta">' + (t.sample ? "Namuna javob bor" : "Namunasiz") + (d && d.text ? " · qoralama saqlangan" : "") + "</div></button>";
    }).join("");
    return '<div class="wrap">' + crumbs("Yozish xonasi") +
      '<div class="part-head"><h1>Yozish xonasi</h1><p>Topshiriqni tanlang, vaqtni boshlang va yozing. Tugatgach, AI tekshiruvi orqali taxminiy baho va xatolar tahlilini oling yoki kitobdagi namuna javob bilan solishtiring.</p></div>' +
      '<div class="wr-chips">' + chips + "</div>" +
      '<div class="ex-grid wr-tgrid">' + rows + "</div></div>";
  }

  /* ---------------- mavzu (unit) sahifasi ---------------- */
  var uState = null; // { part, n, checked, ans: {exId: {...}} }
  function blockHTML(b, bi) {
    switch (b.t) {
      case "h": return '<h2 class="wr-h">' + fmtx(b.x) + "</h2>";
      case "h3": return '<h3 class="wr-h3">' + fmtx(b.x) + "</h3>";
      case "p": return '<p class="wr-p">' + fmtx(b.x) + "</p>";
      case "note": return '<div class="wr-noteb"><b>Eslatma:</b> ' + fmtx(b.x) + "</div>";
      case "list": return (b.ordered ? '<ol class="wr-ul">' : '<ul class="wr-ul">') + b.items.map(function (x) { return "<li>" + fmtx(x) + "</li>"; }).join("") + (b.ordered ? "</ol>" : "</ul>");
      case "table": return '<div class="wr-tw"><table class="wr-table">' + (b.head ? "<thead><tr>" + b.head.map(function (x) { return "<th>" + fmtx(x) + "</th>"; }).join("") + "</tr></thead>" : "") +
        "<tbody>" + b.rows.map(function (r) { return "<tr>" + r.map(function (x) { return "<td>" + fmtx(x) + "</td>"; }).join("") + "</tr>"; }).join("") + "</tbody></table></div>";
      case "task": return taskCard(b);
      case "model": return '<div class="wr-modelw">' + (b.title ? '<div class="wr-model-t">' + fmtx(b.title) + "</div>" : "") + '<div class="wr-model">' + fmtx(b.x) + "</div>" + (b.uz ? '<details class="wr-uz"><summary>Tarjima / izoh</summary><p>' + fmtx(b.uz) + "</p></details>" : "") + "</div>";
      case "phr": return '<div class="wr-phr">' + (b.title ? "<h4>" + fmtx(b.title) + "</h4>" : "") + "<ul>" + b.items.map(function (x) {
          var p = typeof x === "string" ? [x] : x; return "<li><span class=\"wr-en\">" + fmtx(p[0]) + "</span>" + (p[1] ? '<span class="wr-tr">' + fmtx(p[1]) + "</span>" : "") + "</li>";
        }).join("") + "</ul></div>";
      case "ex": return exHTML(b, bi);
    }
    return "";
  }
  function taskCard(t) {
    return '<div class="wr-task">' + (t.label ? '<div class="wr-task-l">' + esc(t.label) + "</div>" : "") +
      (t.situation ? '<p class="wr-sit">' + fmtx(t.situation) + "</p>" : "") +
      (t.to ? '<p class="wr-to">' + fmtx(t.to) + "</p>" : "") +
      (t.bullets && t.bullets.length ? '<ul class="wr-bul">' + t.bullets.map(function (x) { return "<li>" + fmtx(x) + "</li>"; }).join("") + "</ul>" : "") +
      (t.q ? '<p class="wr-sit">' + fmtx(t.q) + "</p>" : "") + "</div>";
  }
  function ansOf(id) { if (!uState.ans[id]) uState.ans[id] = {}; return uState.ans[id]; }
  function exHTML(b, bi) {
    var id = "e" + bi, A = ansOf(id), chk = uState.checked && b.kind !== "write";
    var head = '<div class="wr-ex-h"><span class="wr-ex-n">' + esc(b.no || "") + "</span><b>" + fmtx(b.q || "") + "</b></div>" + (b.intro ? '<div class="wr-ex-i">' + fmtx(b.intro) + "</div>" : "");
    var body = "";
    if (b.kind === "mcq" || b.kind === "tf") {
      body = b.items.map(function (it, i) {
        var opts = b.kind === "tf" ? (b.opts || ["To'g'ri", "Noto'g'ri"]) : (it.o || b.opts);
        var ua = A[i], right = it.a;
        return '<div class="wr-q' + (chk ? (ua === right ? " ok" : " bad") : "") + '"><div class="wr-qt">' + (i + 1) + ". " + fmtx(it.q) + "</div><div class=\"wr-opts\">" +
          opts.map(function (o, oi) {
            var cls = ua === oi ? " sel" : ""; if (chk && oi === right) cls += " right"; if (chk && ua === oi && oi !== right) cls += " wrong";
            return '<button type="button" class="wr-opt' + cls + '" data-ex="' + id + '" data-i="' + i + '" data-o="' + oi + '"' + (chk ? " disabled" : "") + ">" + (b.kind === "mcq" ? "<b>" + String.fromCharCode(65 + oi) + "</b> " : "") + fmtx(o) + "</button>";
          }).join("") + "</div>" + (chk && it.why ? '<div class="wr-why">' + fmtx(it.why) + "</div>" : "") + "</div>";
      }).join("");
    } else if (b.kind === "match") {
      body = (b.opts ? '<div class="wr-mopts">' + b.opts.map(function (o) { return '<div class="wr-mo"><b>' + esc(o.k) + "</b> " + fmtx(o.x) + "</div>"; }).join("") + "</div>" : "") +
        b.items.map(function (it, i) {
          var ua = A[i];
          var keys = b.opts.map(function (o) { return o.k; });
          return '<div class="wr-q wr-mq' + (chk ? (ua === it.a ? " ok" : " bad") : "") + '"><div class="wr-qt">' + (i + 1) + ". " + fmtx(it.q) + '</div><div class="wr-keys">' +
            keys.map(function (k) {
              var cls = ua === k ? " sel" : ""; if (chk && k === it.a) cls += " right"; if (chk && ua === k && k !== it.a) cls += " wrong";
              return '<button type="button" class="wr-key' + cls + '" data-ex="' + id + '" data-i="' + i + '" data-k="' + esc(k) + '"' + (chk ? " disabled" : "") + ">" + esc(k) + "</button>";
            }).join("") + "</div>" + (chk && it.why ? '<div class="wr-why">' + fmtx(it.why) + "</div>" : "") + "</div>";
        }).join("");
    } else if (b.kind === "fill") {
      var gi = 0;
      var txt = fmtx(b.text).replace(/\{(\d+)\}/g, function (_, k) {
        var i = +k - 1, ua = A[i] || "", ok = chk && okFill(ua, b.a[i]);
        gi++;
        return '<span class="wr-gap' + (chk ? (ok ? " ok" : " bad") : "") + '"><b>' + k + '</b><input type="text" class="wr-gin" data-ex="' + id + '" data-i="' + i + '" value="' + esc(ua) + '"' + (chk ? " disabled" : "") + ' autocomplete="off" autocapitalize="off" spellcheck="false">' +
          (chk && !ok ? '<span class="wr-fix">' + esc(String(b.a[i]).split("/")[0]) + "</span>" : "") + "</span>";
      });
      body = (b.bank ? '<div class="wr-bank">' + b.bank.map(function (w) { return "<span>" + esc(w) + "</span>"; }).join("") + "</div>" : "") + '<div class="wr-fill">' + txt + "</div>";
    } else if (b.kind === "order") {
      body = b.items.map(function (it, i) {
        var ua = A[i] || "", ok = chk && okAlt(ua, it.a);
        return '<div class="wr-q' + (chk ? (ok ? " ok" : " bad") : "") + '"><div class="wr-qt">' + (i + 1) + ". <span class=\"wr-words\">" + esc(it.q) + '</span></div>' +
          '<input type="text" class="wr-oin" data-ex="' + id + '" data-i="' + i + '" value="' + esc(ua) + '" placeholder="Gapni shu yerga yozing"' + (chk ? " disabled" : "") + ">" +
          (chk && !ok ? '<div class="wr-why"><b>To\'g\'ri:</b> ' + esc(it.a.split("||")[0]) + "</div>" : "") + "</div>";
      }).join("");
    } else if (b.kind === "write") {
      body = b.items.map(function (it, i) {
        var r = A["r" + i];
        return '<div class="wr-q wr-wq">' + (it.task ? taskCard(it.task) : '<div class="wr-qt">' + (b.items.length > 1 ? (i + 1) + ". " : "") + fmtx(it.q) + "</div>") +
          (it.given ? '<div class="wr-given">' + fmtx(it.given) + "</div>" : "") +
          '<textarea class="wr-wta" rows="' + (it.rows || 3) + '" data-ex="' + id + '" data-i="' + i + '" placeholder="Javobingizni yozing…">' + esc(A[i] || "") + "</textarea>" +
          '<div class="wr-wbar"><span class="wr-wc" data-wc="' + id + "_" + i + '">' + wcount(A[i]) + " so'z</span>" +
          '<button type="button" class="btn ghost sm wr-aich" data-ex="' + id + '" data-i="' + i + '" hidden>AI tekshirsin</button>' +
          (it.sample ? '<button type="button" class="btn ghost sm wr-smp" data-ex="' + id + '" data-i="' + i + '">Namuna javob</button>' : "") + "</div>" +
          (it.sample ? '<div class="wr-model wr-smpbox" id="smp_' + id + "_" + i + '" hidden>' + fmtx(it.sample) + "</div>" : "") +
          '<div class="wr-mini" id="mini_' + id + "_" + i + '">' + miniHTML(r) + "</div></div>";
      }).join("");
    }
    return '<section class="wr-ex" data-kind="' + b.kind + '">' + head + body + "</section>";
  }
  function miniHTML(r) {
    if (!r) return "";
    if (r.busy) return '<div class="wr-busy">AI tekshirmoqda…</div>';
    if (r.err) return '<div class="wr-err">' + esc(r.err) + "</div>";
    return '<div class="wr-minir ' + (r.ok ? "ok" : "bad") + '"><b>' + (r.ok ? "To'g'ri" : "Tuzatish kerak") + (r.score != null ? " · " + r.score + "/10" : "") + "</b><p>" + esc(r.uz || "") + "</p>" + (r.fix ? '<p class="wr-ins">' + esc(r.fix) + "</p>" : "") + "</div>";
  }
  function normS(s) { return String(s || "").toLowerCase().replace(/[’']/g, "'").replace(/[^a-z0-9' ]+/g, " ").replace(/\s+/g, " ").replace(/\b(favo|colo|behavio|hono|labo)r/g, "$1ur").replace(/ize\b/g, "ise").trim(); }
  function okAlt(u, a) { var n = normS(u); return String(a).split("||").some(function (x) { return normS(x) === n; }); }
  function okFill(u, a) { var n = normS(u); return String(a).split("/").some(function (x) { return normS(x) === n; }); }

  function viewUnit(part, n) {
    var u = unitOf(part, n);
    if (!u) { location.hash = "#/writing/" + part; return ""; }
    if (!uState || uState.part !== part || uState.n !== n) {
      var g = prog(part, n), saved = (wst().u || {})[part + "." + n];
      uState = { part: part, n: n, checked: !!(g && g.done && saved), ans: saved ? JSON.parse(JSON.stringify(saved)) : {} };
    }
    var P = PARTS.filter(function (p) { return p.id === part; })[0], L = P.list;
    var ac = autoCount(u), g2 = prog(part, n);
    var res = "";
    if (uState.checked && ac) { var sc = scoreUnit(u); res = '<div class="res-box wr-res" id="wrRes">Natija: ' + sc[0] + " / " + sc[1] + " (" + Math.round(sc[0] / sc[1] * 100) + "%)</div>"; }
    return '<div class="wrap wr-unit">' + crumbs('<a href="#/writing/' + part + '">' + esc(P.name) + "</a> <span>/</span> Unit " + u.no) +
      '<div class="part-head"><div class="wr-kick">' + (part === "w1" ? "Task 1" : "Task 2") + " · Unit " + u.no + (u.pages ? " · kitob: " + esc(u.pages) + "-betlar" : "") + "</div><h1>" + esc(u.title) + "</h1>" + (u.uz ? "<p>" + esc(u.uz) + "</p>" : "") + "</div>" +
      '<div class="wr-nav"><button class="btn ghost" ' + (n > 1 ? 'onclick="location.hash=\'#/writing/' + part + "/" + (n - 1) + '\'"' : "disabled") + '>← Oldingi</button>' +
      '<button class="btn ghost" ' + (n < L.length ? 'onclick="location.hash=\'#/writing/' + part + "/" + (n + 1) + '\'"' : "disabled") + ">Keyingi →</button></div>" +
      '<article class="wr-body">' + u.blocks.map(blockHTML).join("") + "</article>" +
      unitTasks(part, n) +
      res +
      '<div class="btn-row wr-actions">' +
      (ac ? (uState.checked ? '<button class="btn ghost" id="wrRedo">Qayta ishlash</button>' : '<button class="btn primary" id="wrCheck">Testlarni tekshirish</button>') :
        (g2 && g2.done ? '<span class="wr-donel">✓ O\'qilgan deb belgilangan</span>' : '<button class="btn primary" id="wrRead">O\'qib chiqdim</button>')) +
      (n < L.length ? '<button class="btn ghost" onclick="location.hash=\'#/writing/' + part + "/" + (n + 1) + '\'">Keyingi mavzu →</button>' : "") + "</div></div>";
  }
  function unitTasks(part, n) {
    var tag = part + "." + n, L = [];
    T.forEach(function (t, i) { if (t.unit === tag) L.push([t, i + 1]); });
    if (!L.length) return "";
    return '<div class="wr-utasks"><h3>Shu mavzu bo\'yicha yozish topshiriqlari</h3>' + L.map(function (x) {
      var g = prog("wt", x[1]);
      return '<a class="wr-utask' + (g && g.done ? " done" : "") + '" href="#/writing/wt/' + x[1] + '"><b>' + esc(x[0].title || x[0].situation) + "</b><span>" + (x[0].sample ? "namuna bor · " : "") + (g && g.done ? "✓ yozilgan" : "Yozish →") + "</span></a>";
    }).join("") + "</div>";
  }
  function scoreUnit(u) {
    var s = 0, t = 0;
    u.blocks.forEach(function (b, bi) {
      if (b.t !== "ex" || b.kind === "write") return;
      var A = ansOf("e" + bi);
      (b.kind === "fill" ? b.a : b.items).forEach(function (it, i) {
        t++;
        if (b.kind === "fill") { if (okFill(A[i], b.a[i])) s++; }
        else if (b.kind === "order") { if (okAlt(A[i], it.a)) s++; }
        else if (A[i] === it.a) s++;
      });
    });
    return [s, t];
  }
  function saveUnitAns() {
    var w = wst(); if (!w.u) w.u = {};
    var keep = {};
    for (var k in uState.ans) { keep[k] = {}; for (var j in uState.ans[k]) if (String(j).charAt(0) !== "r") keep[k][j] = uState.ans[k][j]; }
    w.u[uState.part + "." + uState.n] = keep;
  }
  function wireUnit(view) {
    var u = unitOf(uState.part, uState.n);
    function rer() { var y = window.scrollY; view.innerHTML = viewUnit(uState.part, uState.n); wireUnit(view); window.scrollTo(0, y); }
    view.querySelectorAll(".wr-opt").forEach(function (b) {
      b.onclick = function () { ansOf(b.dataset.ex)[+b.dataset.i] = +b.dataset.o; var q = b.closest(".wr-q"); q.querySelectorAll(".wr-opt").forEach(function (x) { x.classList.toggle("sel", x === b); }); };
    });
    view.querySelectorAll(".wr-key").forEach(function (b) {
      b.onclick = function () { ansOf(b.dataset.ex)[+b.dataset.i] = b.dataset.k; var q = b.closest(".wr-q"); q.querySelectorAll(".wr-key").forEach(function (x) { x.classList.toggle("sel", x === b); }); };
    });
    view.querySelectorAll(".wr-gin,.wr-oin").forEach(function (x) { x.oninput = function () { ansOf(x.dataset.ex)[+x.dataset.i] = x.value; }; });
    view.querySelectorAll(".wr-wta").forEach(function (x) {
      x.oninput = function () {
        ansOf(x.dataset.ex)[+x.dataset.i] = x.value;
        var c = view.querySelector('[data-wc="' + x.dataset.ex + "_" + x.dataset.i + '"]'); if (c) c.textContent = wcount(x.value) + " so'z";
        clearTimeout(wireUnit.t); wireUnit.t = setTimeout(function () { saveUnitAns(); save(st()); }, 1500);
      };
    });
    view.querySelectorAll(".wr-smp").forEach(function (b) {
      b.onclick = function () { var bx = document.getElementById("smp_" + b.dataset.ex + "_" + b.dataset.i); bx.hidden = !bx.hidden; b.textContent = bx.hidden ? "Namuna javob" : "Namunani yashirish"; if (!bx.hidden && window.CEFR_TRACK) try { window.CEFR_TRACK.reveal(uState.part, uState.n); } catch (e) {} };
    });
    aiReady(function (ok) {
      view.querySelectorAll(".wr-aich").forEach(function (b) {
        b.hidden = !ok;
        b.onclick = function () {
          var ex = b.dataset.ex, i = +b.dataset.i, A = ansOf(ex), txt = (A[i] || "").trim();
          var blk = u.blocks[+ex.slice(1)], it = blk.items[i];
          var box = document.getElementById("mini_" + ex + "_" + i);
          if (wcount(txt) < 2) { box.innerHTML = '<div class="wr-err">Avval javob yozing.</div>'; return; }
          A["r" + i] = { busy: 1 }; box.innerHTML = miniHTML(A["r" + i]); b.disabled = true;
          var q = (blk.q || "") + "\n" + (it.task ? [it.task.situation, it.task.to].concat(it.task.bullets || []).join("\n") : (it.q || "")) + (it.given ? "\n" + it.given : "");
          aiAsk(exPrompt(q, txt, it.sample)).then(function (r) { A["r" + i] = r; }, function (e) {
            A["r" + i] = { err: e && e.uz ? e.uz : e && e.code === "not_granted" ? "AI tekshiruviga ruxsat berilmadi." : e && e.code === "rate_limited" ? "Juda ko'p so'rov — birozdan keyin qayta urinib ko'ring." : "AI javob bera olmadi. Qayta urinib ko'ring." };
          }).then(function () { box.innerHTML = miniHTML(A["r" + i]); b.disabled = false; });
        };
      });
    });
    var c = document.getElementById("wrCheck");
    if (c) c.onclick = function () {
      uState.checked = true;
      var sc = scoreUnit(u), s = st();
      var k = key(uState.part, uState.n), old = s.progress[k];
      s.progress[k] = { done: true, score: sc[0], total: sc[1], at: Date.now(), attempts: ((old && old.attempts) || 0) + 1 };
      saveUnitAns(); save(s);
      track(uState.part, uState.n, sc[0], sc[1]);
      rer();
      var r = document.getElementById("wrRes"); if (r) r.scrollIntoView({ behavior: "smooth", block: "center" });
    };
    var rd = document.getElementById("wrRedo");
    if (rd) rd.onclick = function () { uState.checked = false; for (var k in uState.ans) for (var j in uState.ans[k]) if (String(j).charAt(0) !== "r" && !isWrite(k)) delete uState.ans[k][j]; rer(); };
    function isWrite(k) { var b = u.blocks[+k.slice(1)]; return b && b.kind === "write"; }
    var rb = document.getElementById("wrRead");
    if (rb) rb.onclick = function () {
      var s = st(); s.progress[key(uState.part, uState.n)] = { done: true, score: 0, total: 0, at: Date.now() }; save(s); rer();
    };
  }

  /* ---------------- yozish xonasi ---------------- */
  var room = null; // { i, t, secs, running, timer, ai, busy, err, showS }
  function limitOf(t) { return t.task === 2 ? 40 * 60 : 20 * 60; }
  function minWords(t) { return t.min || (t.task === 2 ? 250 : 150); }
  function checklist(t) {
    if (t.task === 2) return [
      "Kirish: mavzuni o'z so'zlaringiz bilan qayta ifodaladingizmi va fikringizni (thesis) aytdingizmi?",
      "Har bir asosiy paragraf bitta g'oyaga bag'ishlanganmi: topic sentence + izoh + misol?",
      "Bog'lovchilar (Firstly, Moreover, However, As a result…) o'rinli ishlatilganmi?",
      "Topshiriqdagi barcha savollarga javob berildimi?",
      "Xulosa: fikringizni qayta ta'kidladingizmi, yangi g'oya qo'shmadingizmi?",
      "So'zlar soni yetarlimi va vaqtga sig'dingizmi?"
    ];
    var f = t.style === "informal";
    return [
      f ? "Norasmiy salomlashish (Dear Anna, / Hi Tom,) ishlatdingizmi?" : "Rasmiy salomlashish (Dear Sir or Madam, / Dear Mr Smith,) ishlatdingizmi?",
      "Ikkinchi qatorda xat yozishdan maqsadingizni 1–2 gapda aytdingizmi?",
      "Har bir tayanch savolga (bullet point) alohida paragrafda to'liq javob berdingizmi?",
      f ? "Uslub samimiy: qisqartmalar (I'm, don't) va kundalik iboralar o'rinli." : "Uslub rasmiy: qisqartma (I'm, don't) va so'zlashuv iboralari yo'q.",
      "Yakunlovchi gap (I look forward to… / Hope to hear from you soon) bormi?",
      f ? "Xayrlashuv: Best wishes, / Lots of love, + ismingiz." : "Xayrlashuv: Yours faithfully (ism noma'lum) yoki Yours sincerely (ism ma'lum) + to'liq ism.",
      "So'zlar soni kamida " + minWords(t) + " ta?"
    ];
  }
  function viewRoom(i) {
    var t = T[i - 1];
    if (!t) { location.hash = "#/writing/wt"; return ""; }
    var w = wst(), d = w.d[t.id] || { text: "", secs: 0 };
    if (!room || room.i !== i) { stopTimer(); room = { i: i, t: t, secs: d.secs || 0, running: false, ai: null, busy: false, err: "", showS: false }; var h0 = (w.h[t.id] || [])[0]; if (h0 && h0.ai && h0.ai.criteria && h0.text === String(d.text || "").trim()) { room.ai = h0.ai; room.aiText = h0.text; } }
    var lim = limitOf(t), wc = wcount(d.text), hist = w.h[t.id] || [];
    var k = t.task === 2 ? "Task 2 · " + (KIND[t.kind] || "Insho") : "Task 1 · " + (KIND[t.kind] || "Xat") + (t.style ? " · " + (STYLE[t.style] || "") : "");
    return '<div class="wrap wr-room">' + crumbs('<a href="#/writing/wt">Yozish xonasi</a> <span>/</span> ' + (i)) +
      '<div class="wr-nav"><button class="btn ghost" ' + (i > 1 ? 'onclick="location.hash=\'#/writing/wt/' + (i - 1) + '\'"' : "disabled") + '>← Oldingi</button>' +
      '<button class="btn ghost" ' + (i < T.length ? 'onclick="location.hash=\'#/writing/wt/' + (i + 1) + '\'"' : "disabled") + ">Keyingi →</button></div>" +
      '<div class="wr-kick">' + esc(k) + (t.src ? " · " + esc(t.src) : "") + "</div>" +
      taskCard(t) +
      '<div class="wr-tools"><div class="wr-timer' + (room.secs > lim ? " over" : "") + '" id="wrTimer"><small>Vaqt</small><b id="wrClock">' + fmt(room.secs) + "</b><span>/ " + fmt(lim) + "</span></div>" +
      '<button type="button" class="btn ghost sm" id="wrTgo">' + (room.running ? "Pauza" : room.secs ? "Davom ettirish" : "Boshlash") + "</button>" +
      '<div class="wr-wcount' + (wc >= minWords(t) ? " ok" : "") + '" id="wrWc"><small>So\'zlar</small><b id="wrWcn">' + wc + "</b><span>/ " + minWords(t) + "+</span></div></div>" +
      '<textarea id="wrText" class="wr-text" spellcheck="false" placeholder="' + (t.task === 2 ? "Inshoni shu yerga yozing…" : "Dear …,\n\n…") + '">' + esc(d.text) + "</textarea>" +
      '<div class="wr-save" id="wrSave">' + (d.text ? "Qoralama saqlangan" : "Yozganingiz avtomatik saqlanadi") + "</div>" +
      '<div class="btn-row"><button class="btn primary" id="wrAi" hidden>AI tekshirsin</button>' +
      '<button class="btn ghost" id="wrDone">Tugatdim</button>' +
      (t.sample ? '<button class="btn ghost" id="wrSmp">' + (room.showS ? "Namunani yashirish" : "Namuna javob") + "</button>" : "") +
      '<button class="btn ghost" id="wrClear">Tozalash</button></div>' +
      '<div id="wrAiBox">' + (room.busy ? '<div class="wr-busy">AI matningizni tekshirmoqda… (10–30 soniya)</div>' : room.err ? '<div class="wr-err">' + esc(room.err) + "</div>" : aiBox(room.ai, t.task === 2, room.aiText || d.text)) + "</div>" +
      (t.sample ? '<div class="wr-modelw" id="wrSmpBox"' + (room.showS ? "" : " hidden") + '><div class="wr-model-t">Kitobdagi namuna javob' + (t.sampleLevel ? " (" + esc(t.sampleLevel) + ")" : "") + " · " + wcount(t.sample) + " so'z</div><div class=\"wr-model\">" + fmtx(t.sample) + "</div></div>" : "") +
      '<details class="wr-chk"' + (t.task === 2 ? "" : " open") + "><summary>O'zingizni tekshiring</summary><ul>" + checklist(t).map(function (x, j) { return '<li><label><input type="checkbox"> ' + esc(x) + "</label></li>"; }).join("") + "</ul></details>" +
      (hist.length ? '<div class="wr-hist"><h3>Oldingi urinishlar</h3>' + hist.map(function (h, j) {
        return '<details><summary>' + dstr(h.at) + " · " + h.words + " so'z · " + fmt(h.secs) + (h.ai ? " · " + esc(h.ai.level || "") + " · " + Math.round(h.ai.overall || 0) + "%" : "") + "</summary><div class=\"wr-model\">" + esc(h.text).replace(/\n/g, "<br>") + "</div></details>";
      }).join("") + "</div>" : "") +
      "</div>";
  }
  function stopTimer() { if (room && room.timer) { clearInterval(room.timer); room.timer = null; room.running = false; } }
  function wireRoom(view) {
    wireTeacher(view);
    var t = room.t, ta = document.getElementById("wrText"), lim = limitOf(t);
    function persistDraft(now) {
      clearTimeout(wireRoom.ts);
      var go = function () { var w = wst(); w.d[t.id] = { text: ta.value, secs: room.secs, at: Date.now() }; save(st()); var s = document.getElementById("wrSave"); if (s) s.textContent = "Qoralama saqlandi"; };
      if (now) go(); else wireRoom.ts = setTimeout(go, 1500);
    }
    function tick() {
      room.secs++;
      var c = document.getElementById("wrClock"); if (!c) { stopTimer(); return; }
      c.textContent = fmt(room.secs);
      document.getElementById("wrTimer").classList.toggle("over", room.secs > lim);
    }
    function start() { if (room.running) return; room.running = true; room.timer = setInterval(tick, 1000); var b = document.getElementById("wrTgo"); if (b) b.textContent = "Pauza"; }
    document.getElementById("wrTgo").onclick = function () {
      if (room.running) { stopTimer(); this.textContent = "Davom ettirish"; persistDraft(true); } else { start(); ta.focus(); }
    };
    ta.oninput = function () {
      if (!room.running) start();
      var n = wcount(ta.value); document.getElementById("wrWcn").textContent = n;
      document.getElementById("wrWc").classList.toggle("ok", n >= minWords(t));
      document.getElementById("wrSave").textContent = "Saqlanmoqda…";
      persistDraft();
    };
    var sb = document.getElementById("wrSmp");
    if (sb) sb.onclick = function () {
      room.showS = !room.showS;
      document.getElementById("wrSmpBox").hidden = !room.showS; sb.textContent = room.showS ? "Namunani yashirish" : "Namuna javob";
      if (room.showS && window.CEFR_TRACK) try { window.CEFR_TRACK.reveal("wt", room.i); } catch (e) {}
    };
    document.getElementById("wrClear").onclick = function () {
      if (ta.value && !confirmClear()) return;
      ta.value = ""; room.secs = 0; stopTimer(); room.ai = null; persistDraft(true); rerRoom(view);
    };
    function confirmClear() { var b = document.getElementById("wrClear"); if (b.dataset.sure) return true; b.dataset.sure = "1"; b.textContent = "Rostdan o'chirilsinmi? Yana bosing"; setTimeout(function () { if (b) { delete b.dataset.sure; b.textContent = "Tozalash"; } }, 3000); return false; }
    document.getElementById("wrDone").onclick = function () { finish(null); };
    function finish(r) {
      stopTimer();
      var txt = ta.value.trim(); if (!txt) return;
      var w = wst(), s = st(), n = wcount(txt);
      var h = w.h[t.id] || (w.h[t.id] = []);
      if (h[0] && h[0].text === txt) { if (r) h[0].ai = r; }
      else h.unshift({ at: Date.now(), text: txt, words: n, secs: room.secs, ai: r || null });
      if (h.length > 3) h.length = 3;
      for (var hi = 1; hi < h.length; hi++) if (h[hi].ai && h[hi].ai.notes) h[hi].ai = { level: h[hi].ai.level, overall: h[hi].ai.overall };
      w.d[t.id] = { text: ta.value, secs: room.secs, at: Date.now() };
      var k = key("wt", room.i), old = s.progress[k];
      var sc = r && r.overall != null ? Math.round(r.overall) : (n >= minWords(t) ? 100 : Math.round(n / minWords(t) * 100));
      s.progress[k] = { done: true, score: sc, total: 100, at: Date.now(), words: n, attempts: ((old && old.attempts) || 0) + 1 };
      save(s);
      track("wt", room.i, sc, 100);
      rerRoom(view);
    }
    aiReady(function (ok) {
      var b = document.getElementById("wrAi"); if (!b) return;
      b.hidden = !ok;
      b.onclick = function () {
        var txt = ta.value.trim();
        if (wcount(txt) < 20) { room.err = "AI tekshiruvi uchun kamida 20 so'z yozing."; rerRoom(view); return; }
        room.busy = true; room.err = ""; room.ai = null; stopTimer(); rerRoom(view);
        aiAsk(reviewPrompt(t, txt, room.secs)).then(function (r) {
          room.busy = false; room.ai = r; room.aiText = txt; finish(r);
        }, function (e) {
          room.busy = false;
          room.err = e && e.uz ? e.uz : e && e.code === "not_granted" ? "AI tekshiruviga ruxsat berilmadi. Sahifa sozlamalaridan ruxsat berishingiz mumkin." :
            e && e.code === "rate_limited" ? "Hozir juda ko'p so'rov yuborildi. Bir necha daqiqadan keyin qayta urinib ko'ring." : "AI javob bera olmadi. Qayta urinib ko'ring.";
          rerRoom(view);
        });
      };
    });
  }
  function rerRoom(view) {
    var ta = document.getElementById("wrText"), pos = ta ? ta.selectionStart : 0, y = window.scrollY;
    view.innerHTML = viewRoom(room.i); wireRoom(view); window.scrollTo(0, y);
  }

  /* ---------------- imtihon varianti (60 daqiqa) ---------------- */
  var exam = null; // { n, secs, running, timer, ai: {1:..,2:..}, busy, err }
  function viewExams() {
    var rows = X.map(function (v) {
      var g = prog("wx", v.n), a = T[v.t1 - 1], b = T[v.t2 - 1];
      return '<button type="button" class="ex-card wr-tcard ' + (g && g.done ? "done" : "") + '" onclick="location.hash=\'#/writing/wx/' + v.n + '\'">' +
        (g && g.done ? '<span class="mark' + (g.score < 60 ? " half" : "") + '">' + (g.lv || "✓") + "</span>" : "") +
        '<div class="n">Variant ' + v.n + '</div><div class="s"><b>' + esc(a.title) + '</b></div><div class="s">' + esc(b.title) + "</div></button>";
    }).join("");
    return '<div class="wrap">' + crumbs("Imtihon variantlari") +
      '<div class="part-head"><h1>Imtihon variantlari</h1><p>Har bir variantda imtihondagidek ikkita topshiriq: xat (Task 1) va insho (Task 2). Umumiy vaqt — 60 daqiqa. Tavsiya: xatga ~20, inshoga ~40 daqiqa.</p></div>' +
      '<div class="ex-grid wr-tgrid">' + rows + "</div></div>";
  }
  function exText(id) { var d = wst().d[id]; return d ? d.text : ""; }
  function viewExam(n) {
    var v = X.filter(function (x) { return x.n === n; })[0];
    if (!v) { location.hash = "#/writing/wx"; return ""; }
    var a = T[v.t1 - 1], b = T[v.t2 - 1];
    if (!exam || exam.n !== n) { stopExam(); var sv = (wst().x || {})[n] || {}; exam = { n: n, secs: sv.secs || 0, running: false, ai: sv.ai || {}, busy: false, err: "" }; }
    var lim = 3600, w1 = wcount(exText(a.id)), w2 = wcount(exText(b.id));
    function part(t, k, wc) {
      return '<section class="wr-xpart"><div class="wr-kick">Task ' + k + " · " + esc(k === 1 ? (KIND[t.kind] || "Xat") + (t.style ? " · " + (STYLE[t.style] || "") : "") : (KIND[t.kind] || "Insho")) + " · kamida " + minWords(t) + " so'z</div>" + taskCard(t) +
        '<textarea class="wr-text wr-xta" data-k="' + k + '" data-id="' + esc(t.id) + '" spellcheck="false" placeholder="' + (k === 1 ? "Dear …," : "Inshoni shu yerga yozing…") + '">' + esc(exText(t.id)) + "</textarea>" +
        '<div class="wr-wbar"><span class="wr-wc" id="xwc' + k + '">' + wc + " / " + minWords(t) + "+ so'z</span></div>" +
        '<div id="xai' + k + '">' + (exam.ai[k] ? aiBox(exam.ai[k], k === 2, (exam.aiText || {})[k] || exText(t.id)) : "") + "</div></section>";
    }
    return '<div class="wrap wr-room">' + crumbs('<a href="#/writing/wx">Imtihon variantlari</a> <span>/</span> Variant ' + n) +
      '<div class="wr-tools wr-xbar"><div class="wr-timer' + (exam.secs > lim ? " over" : "") + '" id="wrTimer"><small>Vaqt</small><b id="wrClock">' + fmt(exam.secs) + "</b><span>/ 60:00</span></div>" +
      '<button type="button" class="btn ghost sm" id="xGo">' + (exam.running ? "Pauza" : exam.secs ? "Davom ettirish" : "Boshlash") + "</button></div>" +
      part(a, 1, w1) + part(b, 2, w2) +
      '<div id="xMsg">' + (exam.busy ? '<div class="wr-busy">AI ikkala ishni tekshirmoqda… (20–60 soniya)</div>' : exam.err ? '<div class="wr-err">' + esc(exam.err) + "</div>" : "") + "</div>" +
      '<div class="btn-row"><button class="btn primary" id="xAi" hidden>Topshirish va AI tekshiruvi</button><button class="btn ghost" id="xDone">Topshirish</button></div>' +
      (a.sample || b.sample ? '<details class="wr-chk"><summary>Namuna javoblar</summary>' + (a.sample ? '<div class="wr-model-t">Task 1</div><div class="wr-model">' + fmtx(a.sample) + "</div>" : "") + (b.sample ? '<div class="wr-model-t" style="margin-top:10px">Task 2</div><div class="wr-model">' + fmtx(b.sample) + "</div>" : "") + "</details>" : "") +
      "</div>";
  }
  function stopExam() { if (exam && exam.timer) { clearInterval(exam.timer); exam.timer = null; exam.running = false; } }
  function wireExam(view) {
    wireTeacher(view);
    var v = X.filter(function (x) { return x.n === exam.n; })[0], a = T[v.t1 - 1], b = T[v.t2 - 1];
    function saveX() { var w = wst(); if (!w.x) w.x = {}; w.x[exam.n] = { secs: exam.secs, ai: exam.ai }; }
    function tick() { exam.secs++; var c = document.getElementById("wrClock"); if (!c) { stopExam(); return; } c.textContent = fmt(exam.secs); document.getElementById("wrTimer").classList.toggle("over", exam.secs > 3600); if (exam.secs % 30 === 0) { saveX(); } }
    function start() { if (exam.running) return; exam.running = true; exam.timer = setInterval(tick, 1000); var g = document.getElementById("xGo"); if (g) g.textContent = "Pauza"; }
    document.getElementById("xGo").onclick = function () { if (exam.running) { stopExam(); this.textContent = "Davom ettirish"; saveX(); save(st()); } else start(); };
    view.querySelectorAll(".wr-xta").forEach(function (ta) {
      ta.oninput = function () {
        if (!exam.running) start();
        var t = ta.dataset.k === "1" ? a : b;
        document.getElementById("xwc" + ta.dataset.k).textContent = wcount(ta.value) + " / " + minWords(t) + "+ so'z";
        clearTimeout(ta._t); ta._t = setTimeout(function () { wst().d[t.id] = { text: ta.value, secs: 0, at: Date.now() }; saveX(); save(st()); }, 1500);
      };
    });
    function rer() { var y = window.scrollY; view.innerHTML = viewExam(exam.n); wireExam(view); window.scrollTo(0, y); }
    function finish() {
      stopExam();
      var ta = view.querySelectorAll(".wr-xta"), w = wst(), s = st();
      ta.forEach(function (x) { var t = x.dataset.k === "1" ? a : b; w.d[t.id] = { text: x.value, secs: 0, at: Date.now() }; });
      var r1 = exam.ai[1], r2 = exam.ai[2];
      var sc = r1 && r2 ? Math.round(((+r1.overall || 0) + 2 * (+r2.overall || 0)) / 3) :
        Math.round((Math.min(1, wcount(ta[0].value) / minWords(a)) + 2 * Math.min(1, wcount(ta[1].value) / minWords(b))) / 3 * 100);
      var lv = r2 && r2.level ? r2.level : "";
      var k = key("wx", exam.n), old = s.progress[k];
      s.progress[k] = { done: true, score: sc, total: 100, lv: lv, at: Date.now(), attempts: ((old && old.attempts) || 0) + 1 };
      saveX(); save(s); track("wx", exam.n, sc, 100); rer();
    }
    document.getElementById("xDone").onclick = finish;
    aiReady(function (ok) {
      var btn = document.getElementById("xAi"); if (!btn) return; btn.hidden = !ok;
      btn.onclick = function () {
        var ta = view.querySelectorAll(".wr-xta");
        if (wcount(ta[0].value) < 20 || wcount(ta[1].value) < 20) { exam.err = "AI tekshiruvi uchun har bir topshiriqqa kamida 20 so'z yozing."; rer(); return; }
        exam.busy = true; exam.err = ""; stopExam(); rer();
        Promise.all([aiAsk(reviewPrompt(a, ta[0].value, exam.secs / 3)), aiAsk(reviewPrompt(b, ta[1].value, exam.secs * 2 / 3))]).then(function (r) {
          exam.busy = false; exam.ai = { 1: r[0], 2: r[1] }; exam.aiText = { 1: ta[0].value, 2: ta[1].value }; finish();
        }, function (e) {
          exam.busy = false;
          exam.err = e && e.uz ? e.uz : e && e.code === "not_granted" ? "AI tekshiruviga ruxsat berilmadi." : e && e.code === "rate_limited" ? "Juda ko'p so'rov — birozdan keyin qayta urinib ko'ring." : "AI javob bera olmadi. Qayta urinib ko'ring.";
          rer();
        });
      };
    });
  }

  /* ---------------- marshrut ---------------- */
  function render(parts, view) {
    var part = parts[1], n = +parts[2];
    if (!(part === "wt" && n)) stopTimer();
    if (!(part === "wx" && n)) stopExam();
    view.onclick = null;
    if (!part) { view.innerHTML = viewSection(); return; }
    if ((part === "w1" || part === "w2") && !n) { view.innerHTML = viewUnits(part); return; }
    if (part === "wt" && !n) {
      view.innerHTML = viewTasks();
      view.querySelectorAll(".wr-chip").forEach(function (b) { b.onclick = function () { tFilter = b.dataset.f; try { localStorage.setItem("cefr_wt_f", tFilter); } catch (e) {} render(parts, view); }; });
      return;
    }
    if (part === "w1" || part === "w2") { var h = viewUnit(part, n); if (h) { view.innerHTML = h; wireUnit(view); } return; }
    if (part === "wt") { var r = viewRoom(n); if (r) { view.innerHTML = r; wireRoom(view); } return; }
    if (part === "wx" && !n) { view.innerHTML = viewExams(); return; }
    if (part === "wx") { var e = viewExam(n); if (e) { view.innerHTML = e; wireExam(view); } return; }
    location.hash = "#/writing";
  }

  window.CEFR_WRITE = {
    _ai: { ready: aiReady, ask: aiAsk, isServer: function () { return !!ai.server; }, box: aiBox, wire: wireTeacher, wcount: wcount, esc: esc, fmt: fmt },
    render: render,
    total: function () { return U1.length + U2.length + T.length + X.length; },
    doneCount: function () { return PARTS.reduce(function (a, p) { return a + doneIn(p); }, 0); },
    catalog: function () {
      return PARTS.filter(function (p) { return p.list.length; }).map(function (p) {
        return { id: p.id, name: p.id === "wt" ? "Writing · Yozish" : p.id === "wx" ? "Writing · Variantlar" : "Writing " + (p.id === "w1" ? "Task 1" : "Task 2"), desc: p.desc, list: p.list.map(function (x, i) {
          var n = p.id === "wx" ? x.n : i + 1, g = prog(p.id, n);
          return { n: n, title: p.id === "wt" ? (x.title || (x.situation || x.q || "").slice(0, 60)) : p.id === "wx" ? "Variant " + x.n : "Unit " + x.no + ": " + x.title, done: !!(g && g.done), score: g && g.score, total: g && g.total };
        }) };
      });
    }
  };
})();
