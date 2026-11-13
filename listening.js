/* CEFR Companion — Listening bo'limi (Part 1: dialogga javob; Part 2: monologdan bo'shliq to'ldirish). */
(function () {
  "use strict";

  var L1 = window.LISTENING_L1 || [];
  var L2 = window.LISTENING_L2 || [];
  var L3 = window.LISTENING_L3 || [], L4 = window.LISTENING_L4 || [];
  var L5 = window.LISTENING_L5 || [], L6 = window.LISTENING_L6 || [];
  var byNo = {}, byNo2 = {}, byNo3 = {}, byNo4 = {}, byNo5 = {}, byNo6 = {};
  L5.forEach(function (e) { byNo5[e.n] = e; });
  L6.forEach(function (e) { byNo6[e.n] = e; });
  L3.forEach(function (e) { byNo3[e.n] = e; });
  L4.forEach(function (e) { byNo4[e.n] = e; });
  L1.forEach(function (e) { byNo[e.n] = e; });
  L2.forEach(function (e) { byNo2[e.n] = e; });
  var DATA = { l1: L1, l2: L2, l3: L3, l4: L4, l5: L5, l6: L6 }, BY = { l1: byNo, l2: byNo2, l3: byNo3, l4: byNo4, l5: byNo5, l6: byNo6 };
  // Sahifa nashri: ba'zi qismlar boshqa sahifada joylashgan bo'lishi mumkin (audio hajmi sababli).
  var ED = window.CEFR_ED || {};
  function here(id) { return !ED.here || ED.here.indexOf(id) >= 0; }
  function gap() { return part === "l2" || part === "l6"; }       // bo'shliq to'ldirish turi
  function hid() { return part === "l2" || part === "l4" || part === "l6"; }   // javob joylari tekshirmaguncha yashirin
  function segP() { return part !== "l1"; }                    // ps/en va transkript segmentlari bor
  var PARTS = [
    { id: "l1", no: 1, name: "Part 1", desc: "Qisqa gapga mos javobni tanlash (dialog)", active: true },
    { id: "l2", no: 2, name: "Part 2", desc: "Monolog: bo'shliqqa so'z yoki son yozish", active: L2.length > 0 },
    { id: "l3", no: 3, name: "Part 3", desc: "Gapiruvchilarni fikrlarga moslash", active: L3.length > 0 },
    { id: "l4", no: 4, name: "Part 4", desc: "Xarita / reja bo'yicha belgilash", active: L4.length > 0 },
    { id: "l5", no: 5, name: "Part 5", desc: "Uchta parcha: savollarga A/B/C javob", active: L5.length > 0 },
    { id: "l6", no: 6, name: "Part 6", desc: "Ma'ruza: bo'shliqlarni to'ldirish", active: L6.length > 0 }
  ];
  var part = "l1";
  function key(n, pt) { return "listening." + (pt || part) + "." + n; }
  function E() { return BY[part][cur]; }
  function doneIn(pt) { return DATA[pt].filter(function (e) { var p = st().progress[key(e.n, pt)]; return p && p.done; }).length; }
  function app() { return window.CEFR_APP; }
  function st() { return app().getState(); }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function fmt(t) { t = Math.max(0, Math.floor(t || 0)); return Math.floor(t / 60) + ":" + ("0" + (t % 60)).slice(-2); }
  function audioSrc(n) { return "audio/" + part + "/e" + n + ".mp3"; }
  function track(n, score, total) {
    var sub = {}; sub[part] = [score, total];
    if (window.CEFR_TRACK) try { window.CEFR_TRACK.attempt(part, n, score, total, sub); } catch (e) {}
  }
  function trackReveal(n) { if (window.CEFR_TRACK) try { window.CEFR_TRACK.reveal(part, n); } catch (e) {} }

  /* ---------------- ro'yxatlar ---------------- */
  function viewSection() {
    var rows = PARTS.map(function (p) {
      if (!here(p.id)) {
        var url = (ED.links || {})[p.id];
        if (!url) return '<div class="card locked"><span class="tag">Tez orada</span><div class="badge">' + p.no + "</div><h3>" + p.name + "</h3><p>" + esc(p.desc) + '</p><div class="go" style="color:var(--text3)">Tez orada</div></div>';
        return '<a class="card active" href="' + esc(url) + '" target="_blank" rel="noopener" style="text-decoration:none;color:inherit">' +
          '<div class="badge">' + p.no + "</div><h3>" + p.name + "</h3><p>" + esc(p.desc) + '</p><div class="go">Alohida sahifada ochiladi ↗</div></a>';
      }
      var D = DATA[p.id], done = D ? doneIn(p.id) : 0;
      var stat = p.active
        ? '<div class="bar"><span style="width:' + (D.length ? Math.round(done / D.length * 100) : 0) + '%"></span></div><div class="go">' + done + " / " + D.length + " mashq · Ochish →</div>"
        : '<div class="go" style="color:var(--text3)">Tez orada</div>';
      return '<div class="card ' + (p.active ? "active" : "locked") + '"' + (p.active ? ' onclick="location.hash=\'#/listening/' + p.id + '\'"' : "") + ">" +
        (p.active ? "" : '<span class="tag">Tez orada</span>') +
        '<div class="badge">' + p.no + "</div><h3>" + p.name + "</h3><p>" + esc(p.desc) + "</p>" + stat + "</div>";
    }).join("");
    return '<div class="wrap"><div class="crumbs"><a href="#/">Bosh sahifa</a> <span>/</span> Listening</div>' +
      '<div class="hero" style="text-align:left;padding-top:6px"><h1>Listening</h1><p>Multilevel Master Listening kitobi asosida · audio bilan</p></div>' +
      '<div class="cards">' + rows + "</div></div>";
  }

  function viewList() {
    if (gap()) return viewList2();
    if (part === "l3" || part === "l4") return viewList34();
    if (part === "l5") return viewList5();
    var cards = L1.map(function (e) {
      var p = st().progress[key(e.n)];
      var cls = p && p.done ? "done" : "";
      var mark = p && p.done ? '<span class="mark' + (p.score === p.total ? "" : " half") + '">' + p.score + "/" + p.total + "</span>" : "";
      return '<button type="button" class="ex-card ' + cls + '" onclick="location.hash=\'#/listening/l1/' + e.n + '\'">' + mark +
        '<div class="n">Exercise ' + e.n + '</div><div class="s">' + e.items.length + " ta savol · " + fmt(e.dur) + "</div></button>";
    }).join("");
    return '<div class="wrap"><div class="crumbs"><a href="#/">Bosh sahifa</a> <span>/</span> <a href="#/listening">Listening</a> <span>/</span> Part 1</div>' +
      '<div class="part-head"><h1>Listening · Part 1</h1><p>Siz qisqa gaplarni eshitasiz, har biri <b>ikki marta</b> o\'qiladi. Har bir gapga eng mos javobni (A, B yoki C) tanlang.</p></div>' +
      '<div class="ln-tip"><b>Maslahat:</b> audioni boshlashdan oldin javob variantlarini ko\'zdan kechiring: ular savol qanday bo\'lishini taxmin qilishga yordam beradi. Savol so\'zi (who, when, how long…) va zamonga e\'tibor bering.</div>' +
      '<div class="ex-grid">' + cards + "</div></div>";
  }

  /* ---------------- mashq ---------------- */
  var cur = null, audio = null, checked = false, raf = null, stopAt = null;

  function playerHTML(e, n) {
    var marks = (e.x || e.items).map(function (it, i) {
      var t = segP() ? it.ps : it.st;
      return '<button type="button" class="ln-mark" data-q="' + i + '" style="left:' + (t / e.dur * 100) + '%" title="' + (i + 1) + (gap() ? "-bo'shliq" : part === "l3" ? "-gapiruvchi" : part === "l5" ? "-parcha" : "-savol") + '">' + (i + 1) + "</button>";
    }).join("");
    return '<div class="ln-player" id="lnPlayer">' +
        '<button type="button" class="ln-play" id="lnPlay" aria-label="Ijro etish"><svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true"><path id="lnPlayIc" d="M8 5v14l11-7z" fill="currentColor"/></svg></button>' +
        '<div class="ln-mid"><div class="ln-top"><span id="lnNow">Tayyor</span><span class="ln-time"><span id="lnCur">0:00</span> / ' + fmt(e.dur) + "</span></div>" +
          '<div class="ln-track' + (hid() ? " pre" : "") + '" id="lnTrack"><div class="ln-buf"></div><div class="ln-fill" id="lnFill"></div>' + marks + '<div class="ln-knob" id="lnKnob"></div></div>' +
          '<div class="ln-ctrls"><button type="button" class="ln-c" id="lnBack">↺ 5s</button><button type="button" class="ln-c" id="lnFwd">5s ↻</button>' +
          '<span class="ln-sep"></span><span class="ln-sp-l">Tezlik</span>' +
          ["0.75", "1", "1.25"].map(function (r) { return '<button type="button" class="ln-c ln-rate' + (r === "1" ? " on" : "") + '" data-r="' + r + '">' + r + "x</button>"; }).join("") +
          "</div></div></div>" +
      '<audio id="lnAudio" preload="auto" data-src="' + audioSrc(n) + '"></audio>';
  }

  function viewExercise(n) {
    var e = byNo[n];
    if (!e) return '<div class="wrap"><div class="crumbs"><a href="#/listening/l1">Part 1</a></div><p>Mashq topilmadi.</p></div>';
    var p = st().progress[key(n)] || {};
    var user = p.user || [];
    var qs = e.items.map(function (it, i) {
      var opts = it.o.map(function (o, oi) {
        var L = "ABC".charAt(oi);
        return '<label class="ln-opt"><input type="radio" name="lq' + i + '" value="' + L + '" data-i="' + i + '"' + (user[i] === L ? " checked" : "") + '>' +
          '<span class="ln-l">' + L + '</span><span class="ln-t">' + esc(o) + "</span></label>";
      }).join("");
      return '<article class="ln-q" data-i="' + i + '"><div class="ln-qh"><span class="ln-qn">' + (i + 1) + '</span><span class="ln-qlabel">' + (i + 1) + '-gapga javob</span>' +
        '<button type="button" class="ln-replay" data-q="' + i + '" title="Shu gapni qayta tinglash"><svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d="M8 5v14l11-7z" fill="currentColor"/></svg>Tinglash</button></div>' +
        '<div class="ln-opts">' + opts + '</div><div class="ln-res" aria-live="polite"></div></article>';
    }).join("");
    return '<div class="wrap ln-wrap">' +
      '<div class="crumbs"><a href="#/">Bosh sahifa</a> <span>/</span> <a href="#/listening">Listening</a> <span>/</span> <a href="#/listening/l1">Part 1</a> <span>/</span> Exercise ' + n + "</div>" +
      '<div class="ln-head"><div><h1>Exercise ' + n + '</h1><p>Har bir gapni eshiting va eng mos javobni tanlang. Har bir gap ikki marta o\'qiladi.</p></div>' +
      '<div class="ln-nav">' + (byNo[n - 1] ? '<a class="btn ghost" href="#/listening/l1/' + (n - 1) + '">←</a>' : "") + (byNo[n + 1] ? '<a class="btn ghost" href="#/listening/l1/' + (n + 1) + '">Keyingi →</a>' : "") + "</div></div>" +
      playerHTML(e, n) +
      '<div class="ln-qs">' + qs + "</div>" +
      '<div id="resBox"></div>' +
      '<div class="ln-script" id="lnScript" hidden></div>' +
      '<div class="btn-row">' +
        '<button class="btn primary" id="checkBtn">Tekshirish</button>' +
        '<button class="btn ghost" id="scriptBtn" hidden>Audio matni (transkript)</button>' +
        '<button class="btn ghost" id="revealBtn">Javoblarni ko\'rsatish</button>' +
        '<button class="btn ghost" id="resetBtn">Qayta boshlash</button>' +
      "</div></div>";
  }

  function vals() {
    if (gap()) return vals2();
    if (part === "l3" || part === "l4") return vals34();
    var e = E(), out = [];
    e.items.forEach(function (_, i) { var r = document.querySelector('input[name="lq' + i + '"]:checked'); out[i] = r ? r.value : ""; });
    return out;
  }
  function save(extra) {
    var s = st(), p = s.progress[key(cur)] || {};
    p.user = vals();
    for (var k in extra || {}) p[k] = extra[k];
    s.progress[key(cur)] = p;
    if (window.CEFR_STORE) window.CEFR_STORE.saveState(s);
  }

  function itemAt(t) {
    var e = E(), idx = -1;
    if (part === "l3" || part === "l5") {
      (e.x || e.items).forEach(function (it, i) { if (t >= it.ps - 0.3) idx = i; });
      return idx;
    }
    if (hid()) {
      if (!checked) return -1;
      e.items.forEach(function (it, i) { if (t >= it.ps - 0.3 && t <= it.en + 0.6) idx = i; });
      return idx;
    }
    e.items.forEach(function (it, i) { if (t >= it.st - 0.3) idx = i; });
    return idx;
  }
  function tick() {
    if (!audio) return;
    var e = E(), t = audio.currentTime;
    if (stopAt != null && t >= stopAt) { audio.pause(); stopAt = null; }
    var pc = Math.min(100, t / (audio.duration || e.dur) * 100);
    document.getElementById("lnFill").style.width = pc + "%";
    document.getElementById("lnKnob").style.left = pc + "%";
    document.getElementById("lnCur").textContent = fmt(t);
    var idx = itemAt(t);
    document.getElementById("lnNow").textContent = part === "l3" || part === "l5"
      ? (idx < 0 ? (t > 0 ? "Kirish" : "Tayyor") : (idx + 1) + (part === "l5" ? "-parcha" : "-gapiruvchi"))
      : hid()
      ? (idx < 0 ? (t > 0 ? (audio.paused ? "To'xtatildi" : "Tinglanmoqda") : "Tayyor") : "(" + (idx + 1) + ")-javob shu yerda")
      : (idx < 0 ? (t > 0 ? "Kirish" : "Tayyor") : (idx + 1) + "-gap");
    Array.prototype.forEach.call(document.querySelectorAll(".ln-q"), function (q, i) {
      var k = q.hasAttribute("data-x") ? +q.getAttribute("data-x") : i;
      q.classList.toggle("live", k === idx && !audio.paused);
    });
    Array.prototype.forEach.call(document.querySelectorAll(".g2, .c3"), function (q) { q.classList.toggle("live", +q.getAttribute("data-i") === idx && !audio.paused); });
    if (segP()) Array.prototype.forEach.call(document.querySelectorAll(".tx-seg"), function (sg) {
      var a = +sg.getAttribute("data-s"), b = +sg.getAttribute("data-e");
      sg.classList.toggle("now", t >= a && t < b + 0.4 && t > 0);
    });
    Array.prototype.forEach.call(document.querySelectorAll(".ln-mark"), function (m, i) { m.classList.toggle("on", i === idx); });
    if (!audio.paused) raf = requestAnimationFrame(tick);
  }
  function setIcon() {
    var ic = document.getElementById("lnPlayIc");
    if (ic) ic.setAttribute("d", audio && !audio.paused ? "M7 5h4v14H7zM13 5h4v14h-4z" : "M8 5v14l11-7z");
    var b = document.getElementById("lnPlay");
    if (b) b.setAttribute("aria-label", audio && !audio.paused ? "To'xtatish" : "Ijro etish");
  }
  // Ijroni aniq vaqtdan boshlash. Audio hali yuklanmagan bo'lsa, so'rov navbatda turadi;
  // brauzer o'tkazib yuborgan siljishni "playing" hodisasida qayta tekshiradi.
  var pend = null, wantT = null, blobUrl = null;
  function start(t, stop) {
    stopAt = stop == null ? null : stop;
    if (!audio.getAttribute("src") || audio.readyState < 1) {
      pend = { t: t, stop: stop };
      var nw = document.getElementById("lnNow"); if (nw) nw.textContent = "Yuklanmoqda…";
      return;
    }
    if (t != null) { audio.currentTime = Math.max(0, t); wantT = Math.max(0, t); }
    audio.play().catch(function () {});
  }
  function fixSeek() {
    if (wantT == null) return;
    var w = wantT; wantT = null;
    if (Math.abs(audio.currentTime - w) > 1.5) audio.currentTime = w;
  }
  function jump(t) {
    if (audio.readyState < 1) { pend = { t: t, stop: null }; return; }
    audio.currentTime = Math.max(0, t); stopAt = null; tick();
  }
  function playItem(i) {
    var e = E(), it = e.items[i];
    if (part === "l5" && !checked) { var x = e.x[it.x]; start(Math.max(0, x.ps - 0.3), x.en + 0.5); return; }
    if (segP()) { start(Math.max(0, it.ps - 0.3), it.en + 0.5); return; }
    start(it.st - 0.2, e.items[i + 1] ? e.items[i + 1].st - 0.3 : null);
  }
  function loadAudio(src) {
    if (blobUrl) { try { URL.revokeObjectURL(blobUrl); } catch (x) {} blobUrl = null; }
    var a = audio, direct = function () { if (a === audio && !a.getAttribute("src")) a.src = src; };
    if (!window.fetch || location.protocol === "file:") return direct();
    fetch(src).then(function (r) { if (!r.ok) throw 0; return r.blob(); }).then(function (b) {
      if (a !== audio) return;
      blobUrl = URL.createObjectURL(b.type ? b : new Blob([b], { type: "audio/mpeg" }));
      a.src = blobUrl;
    }).catch(direct);
  }

  function check(silent) {
    if (gap()) return check2(silent);
    if (part === "l3" || part === "l4") return check34(silent);
    if (part === "l5") return check5(silent);
    if (silent !== true) silent = false;
    var e = byNo[cur], v = vals(), score = 0;
    e.items.forEach(function (it, i) {
      var ok = v[i] === it.a;
      if (ok) score++;
      var card = document.querySelector('.ln-q[data-i="' + i + '"]');
      card.classList.remove("ok", "bad"); card.classList.add(ok ? "ok" : "bad");
      Array.prototype.forEach.call(card.querySelectorAll(".ln-opt"), function (lab) {
        var L = lab.querySelector("input").value;
        lab.classList.toggle("right", L === it.a);
        lab.classList.toggle("wrong", L === v[i] && !ok);
      });
      card.querySelector(".ln-res").innerHTML = explainHTML(it, v[i], ok);
    });
    var total = e.items.length;
    document.getElementById("resBox").innerHTML = '<div class="res ' + (score === total ? "ok" : "bad") + '">Natija: ' + score + " / " + total +
      " (" + Math.round(score / total * 100) + "%)" + (score === total ? " — mukammal!" : "") + "</div>";
    checked = true;
    document.getElementById("scriptBtn").hidden = false;
    if (silent) return;
    var p = st().progress[key(cur)] || {};
    save({ done: true, score: score, total: total, attempts: (p.attempts || 0) + 1, at: Date.now() });
    track(cur, score, total);
  }
  function explainHTML(it, got, ok) {
    var right = it.o["ABC".indexOf(it.a)];
    return '<div class="ln-ex">' +
      '<div class="ln-heard"><span class="ln-k">Eshitilgan gap</span><p class="ln-said" data-uz="' + esc(it.uz || "") + '">' + esc(it.q) + "</p>" + (it.uz ? '<p class="ln-uz">' + esc(it.uz) + "</p>" : "") + "</div>" +
      '<div class="ln-why"><b>' + (ok ? "To'g'ri! " : (got ? "Siz " + got + " ni tanladingiz. " : "Javob tanlanmagan. ")) + "To'g'ri javob: " + it.a + "</b> — <span class=\"ln-ans\" data-uz=\"" + esc(it.au || "") + "\">" + esc(right) + "</span>" + (it.au ? '<span class="ln-au"> (' + esc(it.au) + ")</span>" : "") +
      (it.why ? '<p>' + esc(it.why) + "</p>" : "") + "</div></div>";
  }
  function reveal() {
    if (gap()) return reveal2();
    if (part === "l3" || part === "l4") return reveal34();
    trackReveal(cur);
    var e = E();
    e.items.forEach(function (it, i) {
      var r = document.querySelector('input[name="lq' + i + '"][value="' + it.a + '"]');
      if (r) r.checked = true;
    });
    save();
  }
  function reset() {
    if (gap()) return reset2();
    if (part === "l3" || part === "l4") return reset34();
    var e = E();
    e.items.forEach(function (_, i) {
      Array.prototype.forEach.call(document.querySelectorAll('input[name="lq' + i + '"]'), function (r) { r.checked = false; });
      var card = document.querySelector('.ln-q[data-i="' + i + '"]');
      card.classList.remove("ok", "bad");
      card.querySelector(".ln-res").innerHTML = "";
      Array.prototype.forEach.call(card.querySelectorAll(".ln-opt"), function (l) { l.classList.remove("right", "wrong"); });
    });
    document.getElementById("resBox").innerHTML = "";
    var gx = document.getElementById("g2exp"); if (gx) gx.innerHTML = "";
    document.getElementById("lnScript").hidden = true;
    document.getElementById("scriptBtn").hidden = true;
    checked = false;
    if (audio) { pend = null; audio.pause(); if (audio.readyState >= 1) audio.currentTime = 0; tick(); }
    save();
  }
  function toggleScript() {
    if (segP()) return toggleScript2();
    var box = document.getElementById("lnScript"), e = byNo[cur];
    if (!box.hidden) { box.hidden = true; return; }
    box.innerHTML = '<h3>Audio matni</h3><p class="muted small">Har bir gap audioda ikki marta o\'qiladi. Gapni bossangiz, o\'zbekcha tarjimasi chiqadi.</p>' +
      '<ol class="ln-tr">' + e.items.map(function (it, i) {
        return '<li><button type="button" class="ln-replay sm" data-q="' + i + '" title="Tinglash">▶</button><span class="ln-said">' + esc(it.q) + "</span></li>";
      }).join("") + "</ol>";
    box.hidden = false;
    wireReplay(box);
  }
  function wireReplay(root) {
    Array.prototype.forEach.call(root.querySelectorAll(".ln-replay"), function (b) {
      b.onclick = function () { playItem(+b.getAttribute("data-q")); };
    });
  }

  function wire(n) {
    cur = n; checked = false; stopAt = null; pend = null; wantT = null;
    audio = document.getElementById("lnAudio");
    audio.addEventListener("loadedmetadata", function () {
      tick();
      if (pend) { var q = pend; pend = null; start(q.t, q.stop); }
    });
    audio.addEventListener("playing", fixSeek);
    loadAudio(audio.getAttribute("data-src"));
    var p = st().progress[key(n)];
    audio.addEventListener("play", function () { setIcon(); cancelAnimationFrame(raf); raf = requestAnimationFrame(tick); });
    audio.addEventListener("pause", function () { setIcon(); tick(); });
    audio.addEventListener("ended", function () { setIcon(); tick(); });
    audio.addEventListener("seeked", tick);
    audio.addEventListener("error", function () { document.getElementById("lnNow").textContent = "Audio yuklanmadi"; });
    document.getElementById("lnPlay").onclick = function () { if (audio.paused) start(null, null); else { pend = null; audio.pause(); } };
    document.getElementById("lnBack").onclick = function () { jump(audio.currentTime - 5); };
    document.getElementById("lnFwd").onclick = function () { jump(Math.min(audio.duration || 1e9, audio.currentTime + 5)); };
    Array.prototype.forEach.call(document.querySelectorAll(".ln-rate"), function (b) {
      b.onclick = function () {
        audio.playbackRate = +b.getAttribute("data-r");
        Array.prototype.forEach.call(document.querySelectorAll(".ln-rate"), function (x) { x.classList.toggle("on", x === b); });
      };
    });
    var trackEl = document.getElementById("lnTrack");
    function seekTo(ev) {
      var r = trackEl.getBoundingClientRect(), x = (ev.touches ? ev.touches[0].clientX : ev.clientX) - r.left;
      jump(Math.max(0, Math.min(1, x / r.width)) * (audio.duration || E().dur));
    }
    trackEl.addEventListener("pointerdown", function (ev) { if (ev.target.classList.contains("ln-mark")) return; seekTo(ev); });
    Array.prototype.forEach.call(document.querySelectorAll(".ln-mark"), function (m) {
      m.onclick = function (ev) { ev.stopPropagation(); var it = (E().x || E().items)[+m.getAttribute("data-q")]; start((segP() ? it.ps : it.st) - 0.3, null); };
    });
    wireReplay(document);
    if (gap()) wire2();
    if (part === "l3" || part === "l4") wire34();
    if (part === "l5") wire5();
    Array.prototype.forEach.call(document.querySelectorAll(".ln-opt input"), function (r) {
      r.addEventListener("change", function () {
        var card = r.closest(".ln-q"); card.classList.remove("ok", "bad");
        card.querySelector(".ln-res").innerHTML = "";
        Array.prototype.forEach.call(card.querySelectorAll(".ln-opt"), function (l) { l.classList.remove("right", "wrong"); });
        save();
      });
    });
    document.getElementById("checkBtn").onclick = function () { check(false); };
    document.getElementById("revealBtn").onclick = reveal;
    document.getElementById("resetBtn").onclick = reset;
    document.getElementById("scriptBtn").onclick = toggleScript;
    document.addEventListener("keydown", keyHandler);
    if (p && p.done && p.user && p.user.some(Boolean)) check(true);
  }
  function keyHandler(ev) {
    if (!audio || !document.getElementById("lnAudio")) { document.removeEventListener("keydown", keyHandler); return; }
    if (ev.target.closest("input, textarea, select")) { if (ev.target.type !== "radio") return; }
    if (ev.target.closest("button")) return;
    if (ev.code === "Space") { ev.preventDefault(); stopAt = null; if (audio.paused) audio.play().catch(function () {}); else audio.pause(); }
  }
  window.addEventListener("hashchange", function () { if (audio) { try { audio.pause(); } catch (e) {} } audio = null; cancelAnimationFrame(raf); document.removeEventListener("keydown", keyHandler); });

  /* ---------------- Part 2: monologdan bo'shliq to'ldirish ---------------- */
  function insText(e) { return e && e.ins === 1 ? "BIR SO\'Zdan oshmagan javob" : "BIR SO\'Z va/yoki SON"; }
  function viewList2() {
    var p6 = part === "l6", PN = p6 ? 6 : 2;
    var cards = DATA[part].map(function (e) {
      var p = st().progress[key(e.n)];
      var cls = p && p.done ? "done" : "";
      var mark = p && p.done ? '<span class="mark' + (p.score === p.total ? "" : " half") + '">' + p.score + "/" + p.total + "</span>" : "";
      return '<button type="button" class="ex-card ' + cls + '" onclick="location.hash=\'#/listening/' + part + "/" + e.n + '\'">' + mark +
        '<div class="n">Exercise ' + e.n + '</div><div class="s">' + esc(e.title) + "</div><div class=\"s\">" + e.items.length + " ta bo'shliq · " + fmt(e.dur) + "</div></button>";
    }).join("");
    return '<div class="wrap"><div class="crumbs"><a href="#/">Bosh sahifa</a> <span>/</span> <a href="#/listening">Listening</a> <span>/</span> Part ' + PN + "</div>" +
      (p6 ? '<div class="part-head"><h1>Listening · Part 6</h1><p>Ma\'ruza yoki nutqni eshitasiz. Gaplardagi har bir bo\'shliqqa audiodan eshitgan so\'zingizni yozing — odatda <b>BIR SO\'Z</b> (ba\'zan son). Yozilgan so\'z gapni grammatik va ma\'noviy jihatdan to\'g\'ri to\'ldirishi shart.</p></div>' +
        '<div class="ln-tip"><b>Maslahat:</b> audiodan oldin har bir gapni o\'qib, bo\'shliqqa qaysi so\'z turkumi kerakligini aniqlang: ot (birlik yoki ko\'plik?), fe\'l (qaysi shaklda?), sifat. Masalan, <i>a …</i> dan keyin birlikdagi ot, <i>can …</i> dan keyin fe\'lning oddiy shakli keladi. Gaplar audiodagi so\'zlarni aynan takrorlamaydi — ma\'nosini boshqacha ifodalaydi. <b>Imlo muhim.</b></div>'
      : '<div class="part-head"><h1>Listening · Part 2</h1><p>Siz bir kishining nutqini (monolog) eshitasiz. Eslatmalardagi har bir bo\'shliqqa <b>BIR SO\'Z va/yoki SON</b> yozing.</p></div>' +
      '<div class="ln-tip"><b>Maslahat:</b> audiodan oldin eslatmalarni o\'qib chiqing va har bir bo\'shliqqa qanday so\'z kerakligini taxmin qiling: son, sana, joy nomi yoki ot. Ma\'lumot eslatmadagi tartibda keladi. <b>Imlo muhim</b> — bitta harf xato bo\'lsa ham javob hisoblanmaydi. Ism harflab aytilsa (L-O-C-K…), uni ehtiyot bo\'lib yozing.</div>' +
      "") + '<div class="ex-grid">' + cards + "</div></div>";
  }

  function gapHTML(i, val) {
    return '<span class="g2" data-i="' + i + '"><b class="g2n">' + (i + 1) + '</b><input class="g2in" type="text" data-i="' + i + '" value="' + esc(val || "") + '"' +
      ' autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" aria-label="' + (i + 1) + '-bo\'shliq"><span class="g2fix"></span></span>';
  }
  function fillGaps(text, user) {
    return esc(text).replace(/\{(\d+)\}/g, function (_, k) { return gapHTML(+k - 1, user[+k - 1]); });
  }
  function notesHTML(e, user) {
    var out = "", ul = false;
    e.lines.forEach(function (ln) {
      if (ln.k !== "li" && ul) { out += "</ul>"; ul = false; }
      if (ln.k === "h") out += '<h4 class="n2-h">' + esc(ln.t) + "</h4>";
      else if (ln.k === "p") out += '<p class="n2-p">' + fillGaps(ln.t, user) + "</p>";
      else if (ln.k === "li") { if (!ul) { out += '<ul class="n2-ul">'; ul = true; } out += "<li>" + fillGaps(ln.t, user) + "</li>"; }
      else if (ln.k === "row") out += '<div class="n2-row"><span class="n2-l">' + fillGaps(ln.l, user) + '</span><span class="n2-v">' + fillGaps(ln.t, user) + "</span></div>";
    });
    if (ul) out += "</ul>";
    return out;
  }
  function viewExercise2(n) {
    var B = BY[part], e = B[n], PN = part === "l6" ? 6 : 2, hp = "#/listening/" + part;
    if (!e) return '<div class="wrap"><div class="crumbs"><a href="' + hp + '">Part ' + PN + "</a></div><p>Mashq topilmadi.</p></div>";
    var p = st().progress[key(n)] || {};
    return '<div class="wrap ln-wrap">' +
      '<div class="crumbs"><a href="#/">Bosh sahifa</a> <span>/</span> <a href="#/listening">Listening</a> <span>/</span> <a href="' + hp + '">Part ' + PN + "</a> <span>/</span> Exercise " + n + "</div>" +
      '<div class="ln-head"><div><h1>Exercise ' + n + "</h1><p>Nutqni tinglang va har bir bo\'shliqqa <b>" + insText(e) + "</b> yozing.</p></div>" +
      '<div class="ln-nav">' + (B[n - 1] ? '<a class="btn ghost" href="' + hp + "/" + (n - 1) + '">←</a>' : "") + (B[n + 1] ? '<a class="btn ghost" href="' + hp + "/" + (n + 1) + '">Keyingi →</a>' : "") + "</div></div>" +
      playerHTML(e, n) +
      '<section class="n2-card"><h2 class="n2-title">' + esc(e.title) + "</h2>" + notesHTML(e, p.user || []) + "</section>" +
      '<div id="resBox"></div>' +
      '<div class="n2-exp" id="g2exp"></div>' +
      '<div class="ln-script" id="lnScript" hidden></div>' +
      '<div class="btn-row">' +
        '<button class="btn primary" id="checkBtn">Tekshirish</button>' +
        '<button class="btn ghost" id="scriptBtn" hidden>Audio matni (transkript)</button>' +
        '<button class="btn ghost" id="revealBtn">Javoblarni ko\'rsatish</button>' +
        '<button class="btn ghost" id="resetBtn">Qayta boshlash</button>' +
      "</div></div>";
  }

  function norm2(s) {
    s = String(s || "").toLowerCase();
    if (s.normalize) s = s.normalize("NFD").replace(/[̀-ͯ]/g, "");
    s = s.replace(/[’‘`´]/g, "'").replace(/[“”"]/g, "").trim();
    s = s.replace(/^(the|a|an)\s+/, "").replace(/[£$€]/g, "").replace(/:/g, ".");
    s = s.replace(/[\s\-]+/g, "").replace(/[.,;!?]+$/, "");
    return s;
  }
  function accepted(it) {
    var out = [];
    it.a.forEach(function (a) {
      if (/\(/.test(a)) { out.push(a.replace(/\([^)]*\)\s*/g, "")); out.push(a.replace(/[()]/g, "")); }
      else out.push(a);
    });
    return out.map(norm2);
  }
  function shown(it) { return it.a[0].replace(/\([^)]*\)\s*/g, "").trim(); }
  function lev(a, b) {
    if (Math.abs(a.length - b.length) > 2) return 9;
    var d = [], i, j;
    for (i = 0; i <= a.length; i++) d[i] = [i];
    for (j = 0; j <= b.length; j++) d[0][j] = j;
    for (i = 1; i <= a.length; i++) for (j = 1; j <= b.length; j++)
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    return d[a.length][b.length];
  }
  function grade(v, it) {
    var n = norm2(v), acc = accepted(it);
    if (!n) return "empty";
    if (acc.indexOf(n) >= 0) return "ok";
    if (acc.some(function (a) { return a.length >= 4 && lev(n, a) <= 1; })) return "spell";
    return "bad";
  }
  function vals2() {
    return Array.prototype.map.call(document.querySelectorAll(".g2in"), function (x) { return x.value.trim(); });
  }
  function markEv(it) {
    var ev = esc(it.ev || "");
    if (it.hl) {
      var re = new RegExp("(" + it.hl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "i");
      ev = ev.replace(re, "<mark>$1</mark>");
    }
    return ev;
  }
  function check2(silent) {
    var e = E(), v = vals2(), score = 0, exp = "";
    e.items.forEach(function (it, i) {
      var g = grade(v[i], it), ok = g === "ok";
      if (ok) score++;
      var box = document.querySelector('.g2[data-i="' + i + '"]');
      box.classList.remove("ok", "bad"); box.classList.add(ok ? "ok" : "bad");
      box.querySelector(".g2fix").textContent = ok ? "" : shown(it);
      var alt = it.a.length > 1 ? ' <span class="muted">(qabul qilinadi: ' + it.a.map(esc).join(", ") + ")</span>" : "";
      var head = ok ? "To'g'ri!" : g === "spell" ? "Deyarli: «" + esc(v[i]) + "» — bitta harf farq qiladi. Imlo muhim!" : g === "empty" ? "Javob yozilmagan." : "Siz yozdingiz: «" + esc(v[i]) + "».";
      exp += '<article class="n2-x ' + (ok ? "ok" : "bad") + '"><div class="n2-xh"><span class="ln-qn">' + (i + 1) + "</span><b>" + head + "</b>" +
        '<button type="button" class="ln-replay" data-q="' + i + '" title="Javob aytilgan joyni tinglash"><svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d="M8 5v14l11-7z" fill="currentColor"/></svg>Tinglash · ' + fmt(it.ps) + "</button></div>" +
        '<p class="n2-a">To\'g\'ri javob: <b>' + esc(shown(it)) + "</b>" + alt + "</p>" +
        (it.ev ? '<p class="n2-ev"><span class="ln-k">Audioda</span><span class="tx-t" data-uz="' + esc(it.uz || "") + '">' + markEv(it) + "</span></p>" : "") +
        (it.uz ? '<p class="ln-uz">' + esc(it.uz) + "</p>" : "") +
        (it.why ? '<p class="n2-why">' + esc(it.why) + "</p>" : "") + "</article>";
    });
    var total = e.items.length;
    document.getElementById("resBox").innerHTML = '<div class="res ' + (score === total ? "ok" : "bad") + '">Natija: ' + score + " / " + total +
      " (" + Math.round(score / total * 100) + "%)" + (score === total ? " — mukammal!" : "") + "</div>";
    var ex = document.getElementById("g2exp");
    ex.innerHTML = '<h3 class="n2-exh">Tahlil</h3>' + exp;
    wireReplay(ex);
    checked = true;
    document.getElementById("lnTrack").classList.remove("pre");
    document.getElementById("scriptBtn").hidden = false;
    if (silent) return;
    var p = st().progress[key(cur)] || {};
    save({ done: true, score: score, total: total, attempts: (p.attempts || 0) + 1, at: Date.now() });
    track(cur, score, total);
  }
  function clearMarks() {
    Array.prototype.forEach.call(document.querySelectorAll(".g2"), function (b) { b.classList.remove("ok", "bad"); b.querySelector(".g2fix").textContent = ""; });
    document.getElementById("resBox").innerHTML = "";
    document.getElementById("g2exp").innerHTML = "";
    checked = false;
    document.getElementById("lnTrack").classList.add("pre");
    document.getElementById("scriptBtn").hidden = true;
    document.getElementById("lnScript").hidden = true;
  }
  function reveal2() {
    trackReveal(cur);
    var e = E();
    Array.prototype.forEach.call(document.querySelectorAll(".g2in"), function (x, i) { x.value = shown(e.items[i]); });
    clearMarks();
    save();
  }
  function reset2() {
    Array.prototype.forEach.call(document.querySelectorAll(".g2in"), function (x) { x.value = ""; });
    clearMarks();
    document.getElementById("lnScript").hidden = true;
    if (audio) { pend = null; audio.pause(); if (audio.readyState >= 1) audio.currentTime = 0; tick(); }
    save();
  }
  function toggleScript2() {
    var box = document.getElementById("lnScript"), e = E();
    if (!box.hidden) { box.hidden = true; return; }
    var bySeg = {};
    e.items.forEach(function (it, i) { if (it.si != null) (bySeg[it.si] = bySeg[it.si] || []).push(i); });
    var hint = gap() ? "Belgilangan so\'zlar — bo\'shliqlar javobi." : part === "l3" ? "Har bir gapiruvchining nutqi alohida ajratilgan." : part === "l5" ? "Har bir parcha alohida ajratilgan; belgilangan joylar — javob dalili." : "Belgilangan so\'zlar — joy nomlari.";
    box.innerHTML = '<h3>Audio matni</h3><p class="muted small">Vaqtni bossangiz, audio o\'sha joydan boshlanadi. ' + hint + ' Gapni bossangiz, tarjimasi chiqadi.</p>' +
      '<div class="tx-list">' + e.segs.map(function (sg, si) {
        if (sg.k === "h") return '<h4 class="tx-h"><button type="button" class="tx-time" data-s="' + sg.s + '">' + fmt(sg.s) + "</button>" + esc(sg.t) + "</h4>";
        var t = esc(sg.t);
        (bySeg[si] || []).forEach(function (gi) {
          var it = e.items[gi];
          if (!it.hl) return;
          var re = new RegExp("(" + it.hl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "i");
          t = t.replace(re, '<mark title="' + (gi + 1) + (part === "l5" ? "-savol" : "-bo\'shliq") + '">$1<sup>' + (gi + 1) + "</sup></mark>");
        });
        return '<p class="tx-seg" data-s="' + sg.s + '" data-e="' + sg.e + '"><button type="button" class="tx-time" data-s="' + sg.s + '">' + fmt(sg.s) + "</button>" +
          '<span class="tx-t"' + (sg.uz ? ' data-uz="' + esc(sg.uz) + '"' : "") + ">" + t + "</span></p>";
      }).join("") + "</div>";
    box.hidden = false;
    Array.prototype.forEach.call(box.querySelectorAll(".tx-time"), function (b) {
      b.onclick = function () { start(+b.getAttribute("data-s") - 0.2, null); };
    });
  }
  function wire2() {
    var ins = document.querySelectorAll(".g2in"), tmr = null;
    Array.prototype.forEach.call(ins, function (x, i) {
      x.addEventListener("input", function () {
        var b = x.closest(".g2"); b.classList.remove("ok", "bad"); b.querySelector(".g2fix").textContent = "";
        clearTimeout(tmr); tmr = setTimeout(function () { save(); }, 500);
      });
      x.addEventListener("keydown", function (ev) {
        if (ev.key === "Enter") { ev.preventDefault(); if (ins[i + 1]) ins[i + 1].focus(); else document.getElementById("checkBtn").focus(); }
      });
    });
  }

  /* ---------------- Part 3 va Part 4: moslashtirish (gapiruvchi / xarita) ---------------- */
  function viewList34() {
    var p3 = part === "l3", D = DATA[part];
    var cards = D.map(function (e) {
      var p = st().progress[key(e.n)];
      var cls = p && p.done ? "done" : "";
      var mark = p && p.done ? '<span class="mark' + (p.score === p.total ? "" : " half") + '">' + p.score + "/" + p.total + "</span>" : "";
      var sub = p3 ? e.topic : e.title;
      return '<button type="button" class="ex-card ' + cls + '" onclick="location.hash=\'#/listening/' + part + "/" + e.n + '\'">' + mark +
        '<div class="n">Exercise ' + e.n + '</div><div class="s">' + esc(sub || "") + "</div><div class=\"s\">" + e.items.length + (p3 ? " gapiruvchi · " : " ta joy · ") + fmt(e.dur) + "</div></button>";
    }).join("");
    var miss = (p3 ? [37] : [42]).filter(function (n) { return !BY[part][n]; });
    var head = p3
      ? '<div class="part-head"><h1>Listening · Part 3</h1><p>Besh kishining qisqa nutqini eshitasiz. Har bir gapiruvchiga ro\'yxatdan (A–F yoki A–H) mos gapni tanlang. Har bir harf faqat bir marta ishlatiladi, ortiqcha variantlar bor.</p></div>' +
        '<div class="ln-tip"><b>Maslahat:</b> audiodan oldin variantlarni o\'qib chiqing va kalit so\'zlarni belgilang. Gapiruvchilar variantdagi so\'zlarni aynan takrorlamaydi — ma\'nosini boshqacha aytadi (masalan, <i>"I couldn\'t believe it"</i> = <i>surprised</i>). Variantdagi so\'z eshitilsa ham, u tuzoq bo\'lishi mumkin.</div>'
      : '<div class="part-head"><h1>Listening · Part 4</h1><p>Xarita yoki reja bo\'yicha tushuntirishni eshitasiz. Har bir joy (1–5) xaritadagi qaysi harfda ekanini tanlang. Ortiqcha harflar bor.</p></div>' +
        '<div class="ln-tip"><b>Maslahat:</b> audiodan oldin xaritani o\'rganing: kirish joyi, "You are here", ko\'chalar va tomonlar (north, south…). Yo\'nalish so\'zlariga e\'tibor bering: <i>opposite</i> (qarshisida), <i>next to</i> (yonida), <i>beyond</i> (narida), <i>at the far end</i> (eng oxirida), <i>on your left</i> (chap tomoningizda).</div>';
    return '<div class="wrap"><div class="crumbs"><a href="#/">Bosh sahifa</a> <span>/</span> <a href="#/listening">Listening</a> <span>/</span> Part ' + (p3 ? 3 : 4) + "</div>" + head +
      (miss.length ? '<p class="muted small">Exercise ' + miss.join(", ") + " audiosi yuborilgan arxivda yo'q edi, shuning uchun hozircha qo'shilmadi.</p>" : "") +
      '<div class="ex-grid">' + cards + "</div></div>";
  }

  function chipsHTML(i, letters, val) {
    return '<div class="chips" role="radiogroup">' + letters.split("").map(function (L) {
      return '<button type="button" class="ch' + (val === L ? " on" : "") + '" data-i="' + i + '" data-l="' + L + '" aria-pressed="' + (val === L) + '">' + L + "</button>";
    }).join("") + "</div>";
  }
  function viewExercise34(n) {
    var e = BY[part][n], p3 = part === "l3";
    if (!e) return '<div class="wrap"><div class="crumbs"><a href="#/listening/' + part + '">Part ' + (p3 ? 3 : 4) + "</a></div><p>Mashq topilmadi.</p></div>";
    var p = st().progress[key(n)] || {}, user = p.user || [];
    var letters = p3 ? e.opts.map(function (o) { return o.l; }).join("") : e.letters;
    var rows = e.items.map(function (it, i) {
      var lab = p3 ? "Speaker " + (i + 1) : esc(it.p);
      return '<article class="c3" data-i="' + i + '"><div class="c3h"><span class="ln-qn">' + (i + 1) + '</span><span class="c3l">' + lab + "</span>" +
        (p3 ? '<button type="button" class="ln-replay" data-q="' + i + '" title="Shu gapiruvchini qayta tinglash"><svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d="M8 5v14l11-7z" fill="currentColor"/></svg>Tinglash</button>' : "") +
        '<span class="c3fix"></span></div>' + chipsHTML(i, letters, user[i]) + "</article>";
    }).join("");
    var left = p3
      ? '<section class="o3"><div class="o3h"><b>Variantlar</b><button type="button" class="ln-c" id="o3tr">Tarjima</button></div>' +
        e.opts.map(function (o) { return '<div class="o3r" data-l="' + o.l + '"><span class="o3l">' + o.l + '</span><span class="o3t"><span class="tx-t" data-uz="' + esc(o.u) + '">' + esc(o.t) + '</span><small class="o3u" hidden>' + esc(o.u) + "</small></span></div>"; }).join("") + "</section>"
      : '<figure class="m4"><img src="' + esc(e.img) + '" alt="Exercise ' + n + ' xaritasi" id="m4img"><figcaption>Rasmni bossangiz, kattalashadi</figcaption></figure>';
    return '<div class="wrap ln-wrap">' +
      '<div class="crumbs"><a href="#/">Bosh sahifa</a> <span>/</span> <a href="#/listening">Listening</a> <span>/</span> <a href="#/listening/' + part + '">Part ' + (p3 ? 3 : 4) + "</a> <span>/</span> Exercise " + n + "</div>" +
      '<div class="ln-head"><div><h1>Exercise ' + n + "</h1><p>" + (p3 ? esc(e.q) + (e.qu ? '<br><span class="muted small">' + esc(e.qu) + "</span>" : "") : "Har bir joy xaritadagi qaysi harfda? Tanlang.") + "</p></div>" +
      '<div class="ln-nav">' + (BY[part][n - 1] ? '<a class="btn ghost" href="#/listening/' + part + "/" + (n - 1) + '">←</a>' : "") + (BY[part][n + 1] ? '<a class="btn ghost" href="#/listening/' + part + "/" + (n + 1) + '">Keyingi →</a>' : "") + "</div></div>" +
      playerHTML(e, n) +
      '<div class="g34 ' + part + '">' + left + '<section class="c3list">' + rows + "</section></div>" +
      '<div id="resBox"></div>' +
      '<div class="n2-exp" id="g2exp"></div>' +
      '<div class="ln-script" id="lnScript" hidden></div>' +
      '<div class="btn-row">' +
        '<button class="btn primary" id="checkBtn">Tekshirish</button>' +
        '<button class="btn ghost" id="scriptBtn" hidden>Audio matni (transkript)</button>' +
        '<button class="btn ghost" id="revealBtn">Javoblarni ko\'rsatish</button>' +
        '<button class="btn ghost" id="resetBtn">Qayta boshlash</button>' +
      "</div></div>";
  }
  function vals34() {
    return Array.prototype.map.call(document.querySelectorAll(".c3"), function (c) {
      var on = c.querySelector(".ch.on"); return on ? on.getAttribute("data-l") : "";
    });
  }
  function markUsed() {
    var v = vals34();
    Array.prototype.forEach.call(document.querySelectorAll(".ch"), function (b) {
      var L = b.getAttribute("data-l"), i = +b.getAttribute("data-i");
      b.classList.toggle("used", v.indexOf(L) >= 0 && v[i] !== L);
    });
    Array.prototype.forEach.call(document.querySelectorAll(".o3r"), function (r) { r.classList.toggle("used", v.indexOf(r.getAttribute("data-l")) >= 0); });
  }
  function optText(e, L) {
    if (part !== "l3") return "";
    var o = e.opts.filter(function (x) { return x.l === L; })[0];
    return o ? o.t : "";
  }
  function check34(silent) {
    var e = E(), v = vals34(), score = 0, exp = "", p3 = part === "l3";
    e.items.forEach(function (it, i) {
      var ok = v[i] === it.a;
      if (ok) score++;
      var c = document.querySelector('.c3[data-i="' + i + '"]');
      c.classList.remove("ok", "bad"); c.classList.add(ok ? "ok" : "bad");
      Array.prototype.forEach.call(c.querySelectorAll(".ch"), function (b) {
        var L = b.getAttribute("data-l");
        b.classList.toggle("right", L === it.a);
        b.classList.toggle("wrong", L === v[i] && !ok);
      });
      c.querySelector(".c3fix").textContent = ok ? "" : "→ " + it.a;
      var lab = p3 ? "Speaker " + (i + 1) : esc(it.p) + (it.pu ? ' <span class="muted">(' + esc(it.pu) + ")</span>" : "");
      var head = ok ? "To'g'ri!" : v[i] ? "Siz " + v[i] + " ni tanladingiz." : "Javob tanlanmagan.";
      exp += '<article class="n2-x ' + (ok ? "ok" : "bad") + '"><div class="n2-xh"><span class="ln-qn">' + (i + 1) + "</span><b>" + lab + " — " + head + "</b>" +
        '<button type="button" class="ln-replay" data-q="' + i + '" title="Tinglash"><svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d="M8 5v14l11-7z" fill="currentColor"/></svg>Tinglash · ' + fmt(it.ps) + "</button></div>" +
        '<p class="n2-a">To\'g\'ri javob: <b>' + it.a + "</b>" + (p3 ? " — " + esc(optText(e, it.a)) : "") + "</p>" +
        (!ok && p3 && v[i] ? '<p class="n2-a muted">Siz tanlagan: ' + v[i] + " — " + esc(optText(e, v[i])) + "</p>" : "") +
        (it.ev ? '<p class="n2-ev"><span class="ln-k">Audioda</span><span class="tx-t" data-uz="' + esc(it.uz || "") + '">' + markEv(it) + "</span></p>" : "") +
        (it.uz ? '<p class="ln-uz">' + esc(it.uz) + "</p>" : "") +
        (it.why ? '<p class="n2-why">' + esc(it.why) + "</p>" : "") + "</article>";
    });
    var total = e.items.length;
    document.getElementById("resBox").innerHTML = '<div class="res ' + (score === total ? "ok" : "bad") + '">Natija: ' + score + " / " + total +
      " (" + Math.round(score / total * 100) + "%)" + (score === total ? " — mukammal!" : "") + "</div>";
    var ex = document.getElementById("g2exp");
    ex.innerHTML = '<h3 class="n2-exh">Tahlil</h3>' + exp;
    wireReplay(ex);
    checked = true;
    document.getElementById("lnTrack").classList.remove("pre");
    document.getElementById("scriptBtn").hidden = false;
    if (silent) return;
    var p = st().progress[key(cur)] || {};
    save({ done: true, score: score, total: total, attempts: (p.attempts || 0) + 1, at: Date.now() });
    track(cur, score, total);
  }
  function clear34() {
    Array.prototype.forEach.call(document.querySelectorAll(".c3"), function (c) { c.classList.remove("ok", "bad"); c.querySelector(".c3fix").textContent = ""; });
    Array.prototype.forEach.call(document.querySelectorAll(".ch"), function (b) { b.classList.remove("right", "wrong"); });
    document.getElementById("resBox").innerHTML = "";
    document.getElementById("g2exp").innerHTML = "";
    checked = false;
    if (hid()) document.getElementById("lnTrack").classList.add("pre");
    document.getElementById("scriptBtn").hidden = true;
    document.getElementById("lnScript").hidden = true;
  }
  function setChoice(i, L) {
    Array.prototype.forEach.call(document.querySelectorAll(".ch"), function (b) {
      var bi = +b.getAttribute("data-i"), bl = b.getAttribute("data-l");
      if (bi === i) { var on = bl === L; b.classList.toggle("on", on); b.setAttribute("aria-pressed", on); }
      else if (L && bl === L && b.classList.contains("on")) { b.classList.remove("on"); b.setAttribute("aria-pressed", "false"); }
    });
    markUsed();
  }
  function reveal34() {
    trackReveal(cur);
    clear34();
    E().items.forEach(function (it, i) { setChoice(i, it.a); });
    save();
  }
  function reset34() {
    E().items.forEach(function (_, i) { setChoice(i, ""); });
    clear34();
    if (audio) { pend = null; audio.pause(); if (audio.readyState >= 1) audio.currentTime = 0; tick(); }
    save();
  }
  function wire34() {
    Array.prototype.forEach.call(document.querySelectorAll(".ch"), function (b) {
      b.onclick = function () {
        var i = +b.getAttribute("data-i"), L = b.getAttribute("data-l");
        setChoice(i, b.classList.contains("on") ? "" : L);
        var c = b.closest(".c3"); c.classList.remove("ok", "bad"); c.querySelector(".c3fix").textContent = "";
        Array.prototype.forEach.call(c.querySelectorAll(".ch"), function (x) { x.classList.remove("right", "wrong"); });
        save();
      };
    });
    markUsed();
    var tr = document.getElementById("o3tr");
    if (tr) tr.onclick = function () {
      var on = !tr.classList.contains("on"); tr.classList.toggle("on", on);
      Array.prototype.forEach.call(document.querySelectorAll(".o3u"), function (u) { u.hidden = !on; });
    };
    var img = document.getElementById("m4img");
    if (img) img.onclick = function () {
      var ov = document.createElement("div"); ov.className = "m4ov";
      ov.innerHTML = '<img src="' + img.getAttribute("src") + '" alt=""><button type="button" class="tr-close" aria-label="Yopish">×</button>';
      ov.onclick = function () { ov.remove(); };
      document.body.appendChild(ov);
    };
  }

  /* ---------------- Part 5: uchta parcha, har biriga ikki savol (A/B/C) ---------------- */
  function viewList5() {
    var cards = L5.map(function (e) {
      var p = st().progress[key(e.n)];
      var cls = p && p.done ? "done" : "";
      var mark = p && p.done ? '<span class="mark' + (p.score === p.total ? "" : " half") + '">' + p.score + "/" + p.total + "</span>" : "";
      return '<button type="button" class="ex-card ' + cls + '" onclick="location.hash=\'#/listening/l5/' + e.n + '\'">' + mark +
        '<div class="n">Exercise ' + e.n + '</div><div class="s">' + esc(e.title || "") + '</div><div class="s">' + e.items.length + " ta savol · " + fmt(e.dur) + "</div></button>";
    }).join("");
    return '<div class="wrap"><div class="crumbs"><a href="#/">Bosh sahifa</a> <span>/</span> <a href="#/listening">Listening</a> <span>/</span> Part 5</div>' +
      '<div class="part-head"><h1>Listening · Part 5</h1><p>Uchta qisqa parcha (suhbat yoki intervyu) eshitasiz. Har bir parchaga <b>ikkita savol</b> bor — eng mos javobni (A, B yoki C) tanlang. Har bir parcha ikki marta eshittiriladi.</p></div>' +
      '<div class="ln-tip"><b>Maslahat:</b> har bir parcha oldidan kim gapirayotgani aytiladi va savollarni o\'qish uchun vaqt beriladi — shu vaqtda savoldagi kalit so\'zlarni belgilang. Variantlardagi so\'zlar audioda aynan eshitilsa ham, u ko\'pincha <i>tuzoq</i> bo\'ladi: gapiruvchi fikrini <i>but</i>, <i>however</i>, <i>actually</i> so\'zlaridan keyin o\'zgartirishi mumkin. Savollar ko\'pincha fikr, munosabat va maqsad haqida (<i>How does she feel…? What is he doing…? They agree that…</i>).</div>' +
      '<div class="ex-grid">' + cards + "</div></div>";
  }
  function viewExercise5(n) {
    var e = byNo5[n];
    if (!e) return '<div class="wrap"><div class="crumbs"><a href="#/listening/l5">Part 5</a></div><p>Mashq topilmadi.</p></div>';
    var p = st().progress[key(n)] || {}, user = p.user || [];
    var NAMES = ["One", "Two", "Three"], body = "";
    e.x.forEach(function (x, xi) {
      body += '<section class="x5"><div class="x5h"><b>Extract ' + NAMES[xi] + "</b>" +
        (x.c ? '<span class="x5c tx-t" data-uz="' + esc(x.cu || "") + '">' + esc(x.c) + "</span>" : "") + "</div>";
      e.items.forEach(function (it, i) {
        if (it.x !== xi) return;
        var opts = it.o.map(function (o, oi) {
          var L = "ABC".charAt(oi);
          return '<label class="ln-opt"><input type="radio" name="lq' + i + '" value="' + L + '" data-i="' + i + '"' + (user[i] === L ? " checked" : "") + ">" +
            '<span class="ln-l">' + L + '</span><span class="ln-t"><span class="tx-t" data-uz="' + esc((it.ou || [])[oi] || "") + '">' + esc(o) + "</span>" +
            ((it.ou || [])[oi] ? '<small class="o5u" hidden>' + esc(it.ou[oi]) + "</small>" : "") + "</span></label>";
        }).join("");
        body += '<article class="ln-q q5" data-i="' + i + '" data-x="' + xi + '"><div class="ln-qh"><span class="ln-qn">' + (i + 1) + "</span>" +
          '<span class="q5t"><span class="tx-t" data-uz="' + esc(it.qu || "") + '">' + esc(it.q) + "</span>" + (it.qu ? '<small class="o5u" hidden>' + esc(it.qu) + "</small>" : "") + "</span>" +
          '<button type="button" class="ln-replay" data-q="' + i + '" title="Shu parchani qayta tinglash"><svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d="M8 5v14l11-7z" fill="currentColor"/></svg>Tinglash</button></div>' +
          '<div class="ln-opts">' + opts + '</div><div class="ln-res" aria-live="polite"></div></article>';
      });
      body += "</section>";
    });
    return '<div class="wrap ln-wrap">' +
      '<div class="crumbs"><a href="#/">Bosh sahifa</a> <span>/</span> <a href="#/listening">Listening</a> <span>/</span> <a href="#/listening/l5">Part 5</a> <span>/</span> Exercise ' + n + "</div>" +
      '<div class="ln-head"><div><h1>Exercise ' + n + "</h1><p>Uchta parchani tinglang. Har bir savolga eng mos javobni (A, B yoki C) tanlang.</p></div>" +
      '<div class="ln-nav">' + (byNo5[n - 1] ? '<a class="btn ghost" href="#/listening/l5/' + (n - 1) + '">←</a>' : "") + (byNo5[n + 1] ? '<a class="btn ghost" href="#/listening/l5/' + (n + 1) + '">Keyingi →</a>' : "") + "</div></div>" +
      playerHTML(e, n) +
      '<div class="q5bar"><button type="button" class="ln-c" id="o5tr">Savollar tarjimasi</button></div>' +
      '<div class="ln-qs q5s">' + body + "</div>" +
      '<div id="resBox"></div>' +
      '<div class="n2-exp" id="g2exp"></div>' +
      '<div class="ln-script" id="lnScript" hidden></div>' +
      '<div class="btn-row">' +
        '<button class="btn primary" id="checkBtn">Tekshirish</button>' +
        '<button class="btn ghost" id="scriptBtn" hidden>Audio matni (transkript)</button>' +
        '<button class="btn ghost" id="revealBtn">Javoblarni ko\'rsatish</button>' +
        '<button class="btn ghost" id="resetBtn">Qayta boshlash</button>' +
      "</div></div>";
  }
  function check5(silent) {
    var e = E(), v = vals(), score = 0, exp = "";
    e.items.forEach(function (it, i) {
      var ok = v[i] === it.a;
      if (ok) score++;
      var card = document.querySelector('.ln-q[data-i="' + i + '"]');
      card.classList.remove("ok", "bad"); card.classList.add(ok ? "ok" : "bad");
      Array.prototype.forEach.call(card.querySelectorAll(".ln-opt"), function (lab) {
        var L = lab.querySelector("input").value;
        lab.classList.toggle("right", L === it.a);
        lab.classList.toggle("wrong", L === v[i] && !ok);
      });
      var ai = "ABC".indexOf(it.a), head = ok ? "To'g'ri!" : v[i] ? "Siz " + v[i] + " ni tanladingiz." : "Javob tanlanmagan.";
      exp += '<article class="n2-x ' + (ok ? "ok" : "bad") + '"><div class="n2-xh"><span class="ln-qn">' + (i + 1) + "</span><b>" + head + "</b>" +
        '<button type="button" class="ln-replay" data-q="' + i + '" title="Javob aytilgan joyni tinglash"><svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d="M8 5v14l11-7z" fill="currentColor"/></svg>Tinglash · ' + fmt(it.ps) + "</button></div>" +
        '<p class="n2-q">' + esc(it.q) + "</p>" +
        '<p class="n2-a">To\'g\'ri javob: <b>' + it.a + "</b> — " + esc(it.o[ai]) + ((it.ou || [])[ai] ? ' <span class="muted">(' + esc(it.ou[ai]) + ")</span>" : "") + "</p>" +
        (it.ev ? '<p class="n2-ev"><span class="ln-k">Audioda</span><span class="tx-t" data-uz="' + esc(it.uz || "") + '">' + markEv(it) + "</span></p>" : "") +
        (it.uz ? '<p class="ln-uz">' + esc(it.uz) + "</p>" : "") +
        (it.why ? '<p class="n2-why">' + esc(it.why) + "</p>" : "") + "</article>";
    });
    var total = e.items.length;
    document.getElementById("resBox").innerHTML = '<div class="res ' + (score === total ? "ok" : "bad") + '">Natija: ' + score + " / " + total +
      " (" + Math.round(score / total * 100) + "%)" + (score === total ? " — mukammal!" : "") + "</div>";
    var ex = document.getElementById("g2exp");
    ex.innerHTML = '<h3 class="n2-exh">Tahlil</h3>' + exp;
    checked = true;
    wireReplay(ex);
    document.getElementById("scriptBtn").hidden = false;
    if (silent) return;
    var p = st().progress[key(cur)] || {};
    save({ done: true, score: score, total: total, attempts: (p.attempts || 0) + 1, at: Date.now() });
    track(cur, score, total);
  }
  function wire5() {
    var tr = document.getElementById("o5tr");
    if (tr) tr.onclick = function () {
      var on = !tr.classList.contains("on"); tr.classList.toggle("on", on);
      Array.prototype.forEach.call(document.querySelectorAll(".o5u"), function (u) { u.hidden = !on; });
    };
  }

  /* ---------------- tashqi API ---------------- */
  window.CEFR_LISTEN = {
    render: function (parts, view) {
      if (parts.length === 1 || !DATA[parts[1]] || !DATA[parts[1]].length || !here(parts[1])) { view.innerHTML = viewSection(); return; }
      part = parts[1];
      if (parts.length === 2) { view.innerHTML = viewList(); return; }
      var n = parseInt(parts[2], 10);
      view.innerHTML = gap() ? viewExercise2(n) : (part === "l3" || part === "l4") ? viewExercise34(n) : part === "l5" ? viewExercise5(n) : viewExercise(n);
      if (BY[part][n]) wire(n);
    },
    total: function () { return PARTS.reduce(function (a, p) { return a + (here(p.id) ? DATA[p.id].length : 0); }, 0); },
    doneCount: function () { return PARTS.reduce(function (a, p) { return a + (here(p.id) ? doneIn(p.id) : 0); }, 0); },
    catalog: function () {
      return PARTS.filter(function (p) { return p.active && here(p.id); }).map(function (pp) {
        return { id: pp.id, name: "Listening " + pp.no, desc: pp.desc, list: DATA[pp.id].map(function (e) {
          var p = st().progress[key(e.n, pp.id)];
          return { n: e.n, title: pp.id !== "l1" && pp.id !== "l3" && e.title ? e.title : "Exercise " + e.n, done: !!(p && p.done), score: p && p.score, total: p && p.total };
        }) };
      });
    }
  };
})();
