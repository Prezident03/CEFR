/* CEFR Companion — qo'shimcha imkoniyatlar (Telegram Mini App):
   shaxsiy lug'at + kartochkalar, to'liq Multilevel mock, natija kartochkasi,
   so'z bellashuvi, o'qituvchi guruhlari, ovozli Speaking (bot + AI). */
(function () {
  var M = window.CEFR_MOBILE;
  if (!M) return;
  var W = window.Telegram && window.Telegram.WebApp;
  var ic = M.ic, esc = M.esc;
  function K() { return window.CEFR_KEY || null; }
  function KS() { return K() ? K().state() : null; }
  function st() { return window.CEFR_STORE.getState(); }
  function save() { window.CEFR_STORE.saveState(st()); }
  function toast(m) { if (K()) K().toast(m); }
  function rerender() { var y = window.scrollY; window.CEFR_APP.render(); window.scrollTo(0, y); }
  function go(h) { location.hash = h; }
  function openTg(u) { try { W.openTelegramLink(u); } catch (e) { window.open(u, "_blank"); } }
  function botName() { var S = KS(); return (S && S.bot) || "cefruz14bot"; }
  function confirmBox(t, cb) { try { W.showConfirm(t, cb); } catch (e) { cb(window.confirm(t)); } }
  var DAY = 864e5;

  /* =================== 1. Shaxsiy lug'at =================== */
  var IV = [0, 1, 2, 4, 8, 16, 32, 64];
  function vocab() { var s = st(); if (!s.vocab) s.vocab = {}; return s.vocab; }
  function dueKeys() { var V = vocab(), now = Date.now(); return Object.keys(V).filter(function (k) { return (V[k].due || 0) <= now; }); }
  window.addEventListener("cefr:tr", function (e) {
    var d = e.detail || {}; if (!d.word || !d.info || !d.sheet) return;
    var key = String(d.info.lemma || d.word).toLowerCase(), V = vocab(), now = Date.now(), isNew = !V[key];
    if (isNew) { V[key] = { w: d.word, uz: d.info.gloss, s: String(d.en || "").slice(0, 220), at: now, box: 0, due: now }; save(); }
    var div = document.createElement("div"); div.className = "pro-trsave";
    function paint() {
      div.innerHTML = V[key] ? '⭐ <b>So\'zlarimga qo\'shildi</b> · <a href="#/lugat">Lug\'atim (' + Object.keys(V).length + ')</a> · <button type="button" data-x>olib tashlash</button>'
        : '☆ Olib tashlandi · <button type="button" data-a>qaytarish</button>';
    }
    paint(); d.sheet.appendChild(div);
    div.addEventListener("click", function (ev) {
      if (ev.target.hasAttribute("data-x")) { delete V[key]; save(); paint(); }
      else if (ev.target.hasAttribute("data-a")) { V[key] = { w: d.word, uz: d.info.gloss, s: String(d.en || "").slice(0, 220), at: now, box: 0, due: now }; save(); paint(); }
    });
  });
  var LQ = "", REV = null;
  function viewLugat() {
    var V = vocab(), keys = Object.keys(V), due = dueKeys().length;
    keys.sort(function (a, b) { return V[b].at - V[a].at; });
    var q = LQ.toLowerCase(), list = keys.filter(function (k) { return !q || k.indexOf(q) >= 0 || String(V[k].uz).toLowerCase().indexOf(q) >= 0; });
    var learned = keys.filter(function (k) { return V[k].box >= 4; }).length;
    var h = '<div class="m-page"><header class="m-title"><h1>So\'zlarim</h1></header>' +
      '<section class="pro-hero c-w"><div><b>' + keys.length + '</b><small>so\'z</small></div><div><b>' + due + '</b><small>takrorlash kerak</small></div><div><b>' + learned + "</b><small>yodlangan</small></div></section>";
    if (!keys.length) {
      h += '<div class="m-card m-empty"><span>📚</span><p><b>Lug\'atingiz hali bo\'sh.</b><br>Reading yoki Listening matnida notanish so\'zni bosing — tarjimasi chiqadi va so\'z avtomatik shu yerga tushadi. Keyin ularni kartochkalar bilan takrorlaysiz.</p><a class="m-btn primary" href="#/reading/p1/1">Matn ochish</a></div>';
    } else {
      h += '<button class="m-btn primary wide" data-p="rev"' + (due ? "" : " disabled") + ">" + (due ? "🔁 Takrorlashni boshlash (" + Math.min(due, 20) + ")" : "✓ Bugungi takrorlash bajarilgan") + "</button>" +
        '<p class="m-note">Kartochkalar "Leitner" usulida: bilgan so\'zingiz tobora kamroq, unutganingiz tez-tez chiqadi.</p>' +
        '<div class="a-row"><input id="proLq" placeholder="So\'z qidirish…" value="' + esc(LQ) + '"></div><ul class="pro-words">' +
        list.slice(0, 300).map(function (k) {
          var x = V[k], dots = ""; for (var i = 1; i <= 5; i++) dots += '<i class="' + (x.box >= i ? "on" : "") + '"></i>';
          return '<li><span><b>' + esc(x.w) + "</b>" + (x.w.toLowerCase() !== k ? ' <small>(' + esc(k) + ")</small>" : "") + "<em>" + esc(x.uz) + '</em></span><span class="pro-dots" title="Yodlash darajasi">' + dots + '</span><button class="m-icbtn" data-del="' + esc(k) + '" title="O\'chirish">✕</button></li>';
        }).join("") + "</ul>";
    }
    return h + "</div>";
  }
  function startReview() {
    var ks = dueKeys(); for (var i = ks.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = ks[i]; ks[i] = ks[j]; ks[j] = t; }
    REV = { q: ks.slice(0, 20), i: 0, show: false, ok: 0, bad: 0 };
    go("#/lugat/takror");
  }
  function viewReview() {
    if (!REV) { REV = null; return viewLugat(); }
    var V = vocab();
    while (REV.i < REV.q.length && !V[REV.q[REV.i]]) REV.i++;
    if (REV.i >= REV.q.length) {
      return '<div class="m-page"><div class="m-card pro-done"><span>🎉</span><h2>Takrorlash tugadi!</h2><p>✅ Bildingiz: <b>' + REV.ok + "</b> · 🔁 Qayta: <b>" + REV.bad + '</b></p><a class="m-btn primary" href="#/lugat">Lug\'atimga qaytish</a></div></div>';
    }
    var k = REV.q[REV.i], x = V[k], sent = esc(x.s || "");
    if (x.s) { var re = new RegExp("\\b(" + x.w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")\\b", "i"); sent = esc(x.s).replace(re, "<mark>$1</mark>"); }
    return '<div class="m-page"><div class="pro-prog"><span style="width:' + Math.round(REV.i / REV.q.length * 100) + '%"></span></div><p class="m-note">' + (REV.i + 1) + " / " + REV.q.length + "</p>" +
      '<div class="pro-flash' + (REV.show ? " back" : "") + '" data-p="flip"><div class="pro-fw">' + esc(x.w) + "</div>" + (sent ? '<div class="pro-fs">' + sent + "</div>" : "") +
      (REV.show ? '<div class="pro-fu">' + esc(x.uz) + "</div>" : '<div class="pro-fh">Bosing — tarjimasini ko\'rish</div>') + "</div>" +
      (REV.show ? '<div class="m-row2"><button class="m-btn pro-bad" data-p="no">❌ Bilmadim</button><button class="m-btn pro-ok" data-p="yes">✅ Bildim</button></div>' : "") + "</div>";
  }
  function answer(ok) {
    var V = vocab(), k = REV.q[REV.i], x = V[k], now = Date.now();
    if (ok) { x.box = Math.min(IV.length - 1, (x.box || 0) + 1); x.due = now + IV[x.box] * DAY - 3600e3; REV.ok++; }
    else { x.box = 0; x.due = now + 10 * 60e3; REV.bad++; REV.q.push(k); }
    save(); REV.i++; REV.show = false; rerender();
  }

  /* =================== 2. To'liq Multilevel mock =================== */
  var NM = 20, ORDER = [["listening", ["l1", "l2", "l3", "l4", "l5", "l6"]], ["reading", ["p1", "p2", "p3", "p4", "p5"]], ["writing", ["wx"]], ["speaking", ["sx"]]];
  var SECN = { listening: "Listening", reading: "Reading", writing: "Writing", speaking: "Speaking" }, SECC = { listening: "l", reading: "r", writing: "w", speaking: "s" };
  var MOCKS = null, ITEMMOCK = null;
  function mocks() {
    if (MOCKS) return MOCKS;
    var by = {}; (window.CEFR_APP.catalog() || []).forEach(function (c) { by[c.id] = c.list; });
    MOCKS = []; ITEMMOCK = {};
    for (var N = 1; N <= NM; N++) {
      var steps = [];
      ORDER.forEach(function (o) {
        o[1].forEach(function (p) {
          var L = by[p]; if (!L || !L.length) return;
          var stp = Math.max(1, Math.floor(L.length / NM)), idx = ((N - 1) * stp + (p === "wx" || p === "sx" ? 0 : 2)) % L.length;
          var it = { sec: o[0], part: p, n: L[idx].n, key: p + "." + L[idx].n };
          steps.push(it); (ITEMMOCK[it.key] = ITEMMOCK[it.key] || []).push(N);
        });
      });
      MOCKS.push({ n: N, steps: steps });
    }
    return MOCKS;
  }
  function mockUnlocked(N, S) { S = S || KS(); return N === 1 || !K() || !!(S && (S.all || (S.unlocked || []).indexOf("mk." + N) >= 0)); }
  window.CEFR_KEY_EXTRA = function (it, S) {
    mocks(); var ns = ITEMMOCK[it.part + "." + it.n]; if (!ns) return false;
    return ns.some(function (N) { return mockUnlocked(N, S); });
  };
  function mstate() { var s = st(); if (!s.mocks) s.mocks = {}; return s.mocks; }
  function mres(N) { var m = mocks()[N - 1], ms = mstate()[N] || { steps: {} }, out = { done: 0, total: m.steps.length, secs: {} };
    ORDER.forEach(function (o) { out.secs[o[0]] = { s: 0, t: 0, n: 0, of: 0 }; });
    m.steps.forEach(function (x) { var r = ms.steps && ms.steps[x.key], sc = out.secs[x.sec]; sc.of++; if (r) { out.done++; sc.n++; sc.s += r.s; sc.t += r.t; } });
    var vals = [];
    Object.keys(out.secs).forEach(function (k) { var x = out.secs[k]; x.score = x.n === x.of && x.t ? Math.round(x.s / x.t * 75) : null; if (x.score != null) vals.push(x.score); });
    out.overall = vals.length === 4 ? Math.round(vals.reduce(function (a, b) { return a + b; }, 0) / 4) : null;
    out.level = out.overall == null ? null : lvl75(out.overall);
    return out;
  }
  function lvl75(x) { return x >= 65 ? "C1" : x >= 51 ? "B2" : x >= 38 ? "B1" : "B1 dan past"; }
  function nextStep(N) { var m = mocks()[N - 1], ms = mstate()[N] || { steps: {} }; for (var i = 0; i < m.steps.length; i++) if (!(ms.steps && ms.steps[m.steps[i].key])) return m.steps[i]; return null; }
  function viewMocks() {
    var h = '<div class="m-page"><header class="m-title"><h1>To\'liq mock</h1>' + M.keyPill() + "</header>" +
      '<div class="m-card pro-info"><b>Haqiqiy Multilevel imtihoni tartibida:</b><ol><li>🎧 Listening — 6 qism</li><li>📖 Reading — 5 qism</li><li>✍️ Writing — 2 topshiriq (AI baholaydi)</li><li>🎙 Speaking — 4 qism</li></ol>Natija: har bo\'lim 0–75 ball, umumiy ball va taxminiy CEFR daraja. Bo\'lib-bo\'lib ham ishlash mumkin — progress saqlanadi.</div>';
    h += '<div class="pro-mlist">' + mocks().map(function (m) {
      var r = mres(m.n), un = mockUnlocked(m.n), lab = r.overall != null ? "<b>" + r.overall + "/75</b> · " + r.level : r.done ? r.done + " / " + r.total + " qadam" : un ? "Boshlanmagan" : "🔒 3 🔑";
      return '<a class="pro-mcard' + (r.overall != null ? " done" : "") + (un ? "" : " locked") + '" href="#/mock/' + m.n + '"><span class="pro-mn">' + m.n + "</span><span><b>Mock " + m.n + (m.n === 1 ? ' <em class="pro-free">bepul</em>' : "") + "</b><small>" + lab + "</small></span>" + M.ring(r.total ? r.done / r.total * 100 : 0, 40) + "</a>";
    }).join("") + "</div></div>";
    return h;
  }
  function viewMock(N) {
    var m = mocks()[N - 1]; if (!m) return viewMocks();
    var un = mockUnlocked(N), r = mres(N), ms = mstate()[N] || { steps: {} }, S = KS();
    var h = '<div class="m-page"><header class="m-title"><h1>Mock ' + N + "</h1>" + M.keyPill() + "</header>";
    if (!un) {
      var enough = S && S.keys >= 3;
      return h + '<div class="kq-lock-box"><div class="kq-ico">🔒</div><h2>Bu mock yopiq</h2><p>To\'liq mock (13 qadam) — <b>3 🔑</b>. Sizda: <b>' + (S ? S.keys : 0) + ' 🔑</b></p>' +
        (enough ? '<button class="m-btn primary" data-p="munlock" data-n="' + N + '">3 🔑 bilan ochish</button>' : '<p class="kq-need">Kalit yetmayapti — do\'st taklif qiling (+3 🔑) yoki Mock 1 bepul.</p><button class="m-btn primary" data-p="share">📨 Do\'stlarni taklif qilish</button>') + "</div></div>";
    }
    if (r.overall != null) {
      h += '<section class="pro-result"><small>Umumiy natija</small><b>' + r.overall + '<i>/75</i></b><em>' + r.level + "</em>" +
        '<div class="pro-rsec">' + ORDER.map(function (o) { var x = r.secs[o[0]]; return '<span class="c-' + SECC[o[0]] + '"><small>' + SECN[o[0]] + "</small><b>" + x.score + "</b></span>"; }).join("") + "</div>" +
        '<button class="m-btn light" data-p="mcard" data-n="' + N + '">📸 Natijani ulashish</button></section>';
    }
    var nx = nextStep(N);
    if (nx) h += '<button class="m-btn primary wide" data-p="mgo" data-n="' + N + '">' + (r.done ? "▶ Davom ettirish (" + r.done + "/" + r.total + ")" : "▶ Mockni boshlash") + "</button>";
    ORDER.forEach(function (o) {
      var x = r.secs[o[0]];
      h += '<section class="m-card pro-msec c-' + SECC[o[0]] + '"><h3><span class="m-ti">' + ic(o[0]) + "</span>" + SECN[o[0]] + '<em>' + (x.score != null ? x.score + "/75" : x.n + "/" + x.of) + "</em></h3><ul>" +
        m.steps.filter(function (s) { return s.sec === o[0]; }).map(function (s) {
          var rr = ms.steps && ms.steps[s.key], lbl = M.PART_SHORT[s.part] + (s.part === "wx" ? " · variant " + s.n : s.part === "sx" ? " · mock " + s.n : " · mashq " + s.n);
          return '<li><span>' + (rr ? "✅" : "⬜") + " " + lbl + "</span>" + (rr ? "<b>" + Math.round(rr.s / rr.t * 100) + "%</b>" : '<button class="m-btn" data-p="mstep" data-n="' + N + '" data-k="' + s.key + '">Boshlash</button>') + "</li>";
        }).join("") + "</ul></section>";
    });
    if (r.done) h += '<button class="m-btn wide" data-p="mreset" data-n="' + N + '">↺ Mockni qaytadan boshlash</button>';
    return h + "</div>";
  }
  function openStep(N, key) {
    var s = st(); s.mockActive = N; var ms = mstate(); if (!ms[N]) ms[N] = { steps: {}, start: Date.now() }; save();
    var p = key.split("."); location.hash = M.exHref(p[0], +p[1]);
  }
  // natijani ushlash
  function hookTrack() {
    var T = window.CEFR_TRACK; if (!T || T._pro) return;
    var orig = T.attempt;
    T.attempt = function (part, n, score, total) {
      var r = orig.apply(this, arguments);
      try {
        var s = st(), N = s.mockActive;
        if (N) {
          var m = mocks()[N - 1], key = part + "." + n;
          if (m && m.steps.some(function (x) { return x.key === key; })) {
            var ms = mstate(); if (!ms[N]) ms[N] = { steps: {} };
            ms[N].steps[key] = { s: +score || 0, t: +total || 1, at: Date.now() }; save();
            setTimeout(mockBar, 50);
            var nx = nextStep(N);
            toast(nx ? "🎯 Mock " + N + ": qadam saqlandi · keyingisi tepada" : "🏁 Mock " + N + " yakunlandi! Natijani ko'ring");
          }
        }
      } catch (e) {}
      scheduleSync();
      return r;
    };
    T._pro = true;
  }
  function mockBar() {
    var b = document.getElementById("proMockBar"), s = st(), N = s.mockActive;
    var h = location.hash.replace(/^#\/?/, ""), parts = h.split("/"), it = K() && K().itemOf ? K().itemOf(parts) : null;
    var m = N && mocks()[N - 1], inStep = m && it && m.steps.some(function (x) { return x.key === it.part + "." + it.n; });
    if (!inStep) { if (b) b.remove(); document.documentElement.classList.remove("pro-mb"); return; }
    if (!b) { b = document.createElement("div"); b.id = "proMockBar"; b.className = "pro-mockbar"; document.body.appendChild(b); }
    var r = mres(N), done = !!((mstate()[N] || { steps: {} }).steps[it.part + "." + it.n]), nx = nextStep(N);
    b.innerHTML = '<span>🎯 <b>Mock ' + N + "</b> · " + r.done + "/" + r.total + "</span>" +
      (done ? (nx ? '<button data-mb="next">Keyingi qadam →</button>' : '<button data-mb="res">🏁 Natija</button>') : '<button data-mb="list">Mock sahifasi</button>');
    b.onclick = function (e) {
      var a = e.target.getAttribute && e.target.getAttribute("data-mb"); if (!a) return;
      if (a === "next") openStep(N, nextStep(N).key); else go("#/mock/" + N);
    };
    document.documentElement.classList.add("pro-mb");
  }
  window.addEventListener("hashchange", function () { setTimeout(mockBar, 60); });

  /* =================== 3. Natija kartochkasi =================== */
  var CARD = null;
  function secStats() {
    var c = M.stats() || { parts: [] }, out = {};
    ["reading", "listening", "writing", "speaking"].forEach(function (k) { out[k] = { c: 0, t: 0, done: 0 }; });
    (c.skills || []).forEach(function (sk) { var sec = sk.part.charAt(0) === "p" ? "reading" : sk.part.charAt(0) === "l" ? "listening" : sk.part.charAt(0) === "w" ? "writing" : "speaking"; out[sec].c += sk.c; out[sec].t += sk.t; });
    (c.parts || []).forEach(function (p) { var sec = p.id.charAt(0) === "p" ? "reading" : p.id.charAt(0) === "l" ? "listening" : p.id.charAt(0) === "w" ? "writing" : "speaking"; out[sec].done += p.done; });
    Object.keys(out).forEach(function (k) { out[k].pct = out[k].t ? Math.round(out[k].c / out[k].t * 100) : null; });
    return { secs: out, done: c.done || 0, streak: c.streak || 0, acc: c.acc };
  }
  function lvlPct(p) { return p == null ? "—" : p >= 80 ? "C1" : p >= 65 ? "B2" : p >= 45 ? "B1" : "A2"; }
  function drawCard(d) {
    var cv = document.createElement("canvas"); cv.width = 1080; cv.height = 1920; var g = cv.getContext("2d");
    var FF = "'DM Sans', 'Inter', system-ui, sans-serif";
    var bg = g.createLinearGradient(0, 0, 1080, 1920); bg.addColorStop(0, "#1c120b"); bg.addColorStop(1, "#3b1a07"); g.fillStyle = bg; g.fillRect(0, 0, 1080, 1920);
    function glow(x, y, r, c) { var gr = g.createRadialGradient(x, y, 0, x, y, r); gr.addColorStop(0, c); gr.addColorStop(1, "rgba(0,0,0,0)"); g.fillStyle = gr; g.fillRect(x - r, y - r, 2 * r, 2 * r); }
    glow(900, 300, 620, "rgba(240,122,40,.45)"); glow(120, 1650, 640, "rgba(120,60,200,.35)");
    function rr(x, y, w, h, r) { g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r); g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.closePath(); }
    g.fillStyle = "#f07a28"; rr(90, 110, 110, 110, 30); g.fill();
    g.fillStyle = "#fff"; g.font = "800 80px Georgia, serif"; g.textAlign = "center"; g.fillText("C", 145, 195);
    g.textAlign = "left"; g.fillStyle = "#fff6ee"; g.font = "800 52px " + FF; g.fillText("CEFR Companion", 230, 160);
    g.fillStyle = "#ffb27a"; g.font = "600 34px " + FF; g.fillText("Multilevel tayyorgarlik", 230, 210);
    g.fillStyle = "#d9bba6"; g.font = "600 40px " + FF; g.fillText(d.kicker, 90, 360);
    g.fillStyle = "#fff6ee"; g.font = "800 84px " + FF; g.fillText(d.name.slice(0, 18), 90, 455);
    // katta daraja
    g.save(); g.translate(540, 760);
    g.lineWidth = 34; g.strokeStyle = "rgba(255,255,255,.12)"; g.beginPath(); g.arc(0, 0, 210, 0, Math.PI * 2); g.stroke();
    g.strokeStyle = "#f07a28"; g.lineCap = "round"; g.beginPath(); g.arc(0, 0, 210, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * Math.max(0.02, Math.min(1, d.ring))); g.stroke();
    g.textAlign = "center"; g.fillStyle = "#fff"; g.font = "800 150px " + FF; g.fillText(d.big, 0, 40);
    g.fillStyle = "#ffcfa8"; g.font = "700 40px " + FF; g.fillText(d.bigSub, 0, 110); g.restore();
    var cols = { Reading: "#f07a28", Listening: "#28a0cd", Writing: "#8c64eb", Speaking: "#28af69" }, y = 1060;
    d.rows.forEach(function (r) {
      g.textAlign = "left"; g.fillStyle = "#fff6ee"; g.font = "700 46px " + FF; g.fillText(r.name, 90, y);
      g.textAlign = "right"; g.fillStyle = r.v == null ? "#9c8070" : "#fff"; g.font = "800 46px " + FF; g.fillText(r.v == null ? "—" : r.label, 990, y);
      g.fillStyle = "rgba(255,255,255,.12)"; rr(90, y + 22, 900, 22, 11); g.fill();
      if (r.v != null) { g.fillStyle = cols[r.name]; rr(90, y + 22, Math.max(22, 900 * r.v), 22, 11); g.fill(); }
      y += 118;
    });
    g.textAlign = "center"; g.fillStyle = "#ffb27a"; g.font = "700 38px " + FF; g.fillText(d.foot, 540, 1560);
    g.fillStyle = "#f07a28"; rr(90, 1700, 900, 130, 65); g.fill();
    g.textAlign = "center"; g.fillStyle = "#fff"; g.font = "800 50px " + FF; g.fillText("Telegram: @" + botName(), 540, 1782);
    g.fillStyle = "#d9bba6"; g.font = "600 34px " + FF; g.fillText("Multilevel'ga bepul tayyorlaning", 540, 1660);
    return cv.toDataURL("image/jpeg", 0.88);
  }
  function cardGeneral() {
    var s = secStats(), rows = ["Reading", "Listening", "Writing", "Speaking"].map(function (n) { var x = s.secs[n.toLowerCase()]; return { name: n, v: x.pct == null ? null : x.pct / 100, label: x.pct + "%" }; });
    return { kicker: "Mening natijalarim", name: M.fullName(), big: lvlPct(s.acc), bigSub: s.acc != null ? "o'rtacha " + s.acc + "%" : "taxminiy daraja", ring: (s.acc || 0) / 100, rows: rows, foot: "🔥 " + s.streak + " kun ketma-ket  ·  ✅ " + s.done + " ta mashq" };
  }
  function cardMock(N) {
    var r = mres(N), rows = ORDER.map(function (o) { var x = r.secs[o[0]]; return { name: SECN[o[0]], v: x.score == null ? null : x.score / 75, label: x.score + "/75" }; });
    return { kicker: "Multilevel mock " + N + " natijasi", name: M.fullName(), big: r.overall != null ? String(r.overall) : "—", bigSub: r.overall != null ? "/75 · " + r.level : "", ring: (r.overall || 0) / 75, rows: rows, foot: "🎯 To'liq imtihon · 4 bo'lim" };
  }
  function viewCard() {
    if (!CARD) CARD = { data: cardGeneral() };
    if (!CARD.img) { var c = CARD; (document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(function () { c.img = drawCard(c.data); if (/^#\/karta/.test(location.hash)) rerender(); }); }
    var h = '<div class="m-page"><header class="m-title"><h1>Natija kartochkasi</h1></header>' +
      '<p class="m-note">Story uchun tayyor rasm. Botga yuboring — u yerdan saqlab, Instagram yoki Telegram story\'ga joylang. Har bir ulashish do\'stlaringizni ilovaga olib keladi 🔑</p>' +
      '<div class="pro-cardimg">' + (CARD.img ? '<img src="' + CARD.img + '" alt="Natija kartochkasi">' : '<p class="m-note">Chizilmoqda…</p>') + "</div>";
    if (K()) h += '<button class="m-btn primary wide" data-p="csend"' + (CARD.busy ? " disabled" : "") + ">" + (CARD.url ? "✓ Botga yuborildi — qayta yuborish" : CARD.busy ? "Yuborilmoqda…" : "📤 Botga yuborish (saqlash uchun)") + "</button>";
    if (CARD.url && W && typeof W.shareToStory === "function") h += '<button class="m-btn wide" data-p="cstory">📱 Telegram story\'ga joylash</button>';
    return h + "</div>";
  }

  /* =================== 4. So'z bellashuvi =================== */
  var POOL = null;
  function pool() {
    if (POOL) return POOL;
    var L = (window.TARJIMA && window.TARJIMA.l) || [], seen = {}, glossSeen = {};
    POOL = L.filter(function (x) {
      var w = x[0], g = String(x[1] || "");
      if (!/^[a-z]{4,12}$/.test(w) || g.length < 3 || g.length > 28 || /[(;]/.test(g) || seen[w] || glossSeen[g]) return false;
      seen[w] = glossSeen[g] = 1; return true;
    });
    return POOL;
  }
  function rng(seed) { var a = seed >>> 0; return function () { a = (a + 0x6D2B79F5) >>> 0; var t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
  function duelQs(seed) {
    var P = pool(), r = rng(seed), used = {}, qs = [];
    while (qs.length < 10 && P.length > 40) {
      var i = Math.floor(r() * P.length); if (used[i]) continue; used[i] = 1;
      var opts = [P[i][1]], o2 = {}; o2[i] = 1;
      while (opts.length < 4) { var j = Math.floor(r() * P.length); if (o2[j]) continue; o2[j] = 1; opts.push(P[j][1]); }
      for (var k = opts.length - 1; k > 0; k--) { var m = Math.floor(r() * (k + 1)); var t = opts[k]; opts[k] = opts[m]; opts[m] = t; }
      qs.push({ w: P[i][0], ok: P[i][1], opts: opts });
    }
    return qs;
  }
  var DU = { id: null, d: null, list: null, game: null, err: "" };
  var QT = 12;
  function loadDuel(id) {
    DU.err = "";
    K().call("/api/duel/get", { id: id }).then(function (x) { DU.d = x; rerender(); }, function () { DU.err = "Bellashuv topilmadi."; rerender(); });
  }
  function viewDuels() {
    if (!K()) return '<div class="m-page"><p class="m-note">Bellashuv faqat Telegram ichida ishlaydi.</p></div>';
    if (DU.list == null) K().call("/api/duel/mine").then(function (x) { DU.list = x.list; if (/^#\/duel$/.test(location.hash)) rerender(); }, function () { DU.list = []; });
    var h = '<div class="m-page"><header class="m-title"><h1>Bellashuv</h1>' + M.keyPill() + "</header>" +
      '<section class="pro-duelhero"><span>⚔️</span><h2>So\'z bellashuvi</h2><p>10 ta so\'z · har biriga ' + QT + ' soniya. Do\'stingizni chaqiring — kim ko\'proq topadi? G\'olibga <b>+1 🔑</b> (kuniga 3 martagacha).</p><button class="m-btn light" data-p="dnew">⚔️ Yangi bellashuv</button></section>';
    if (DU.list && DU.list.length) {
      h += '<section class="m-card"><h3>Mening bellashuvlarim</h3><ul class="pro-dlist">' + DU.list.map(function (x) {
        var res = x.my == null ? "o'ynalmagan" : x.their == null ? "raqib kutilmoqda" : x.my > x.their ? "🏆 yutdingiz" : x.my < x.their ? "yutqazdingiz" : "durang";
        return '<li><a href="#/duel/' + x.id + '"><span><b>' + esc(x.other || "Raqib yo'q") + "</b><small>" + M.dt(x.at) + " · " + res + "</small></span><b>" + (x.my == null ? "–" : x.my) + " : " + (x.their == null ? "–" : x.their) + "</b></a></li>";
      }).join("") + "</ul></section>";
    }
    return h + "</div>";
  }
  function viewDuel(id) {
    if (!K()) return viewDuels();
    if (DU.id !== id) { DU.id = id; DU.d = null; DU.game = null; loadDuel(id); }
    var d = DU.d, h = '<div class="m-page">';
    if (DU.err) return h + '<div class="m-card"><p>' + esc(DU.err) + '</p><a class="m-btn" href="#/duel">Orqaga</a></div></div>';
    if (!d) return h + '<p class="m-note">Yuklanmoqda…</p></div>';
    var G = DU.game;
    if (G && !G.end) {
      var q = G.qs[G.i], left = Math.max(0, QT - (Date.now() - G.qt) / 1000);
      return h + '<div class="pro-prog"><span style="width:' + Math.round(G.i / G.qs.length * 100) + '%"></span></div>' +
        '<div class="pro-dq"><small>' + (G.i + 1) + " / " + G.qs.length + " · ball: " + G.s + '</small><div class="pro-dtimer"><i id="proTm" style="width:' + (left / QT * 100) + '%"></i></div><h2>' + esc(q.w) + "</h2><p>tarjimasini toping</p></div>" +
        '<div class="pro-dopts">' + q.opts.map(function (o, k) {
          var cls = G.pick == null ? "" : o === q.ok ? " ok" : k === G.pick ? " bad" : "";
          return '<button class="m-btn' + cls + '" data-p="dans" data-k="' + k + '"' + (G.pick != null ? " disabled" : "") + ">" + esc(o) + "</button>";
        }).join("") + "</div></div>";
    }
    var meS = d.me === "a" ? d.a : d.me === "b" ? d.b : null, op = d.me === "a" ? d.b : d.me === "b" ? d.a : d.a;
    if (d.canPlay && !(G && G.end)) {
      return h + '<section class="pro-duelhero"><span>⚔️</span><h2>So\'z bellashuvi</h2>' +
        (d.me === "a" ? "<p>Avval o'zingiz o'ynang, keyin havolani do'stingizga yuboring.</p>" : "<p><b>" + esc(d.a.name) + "</b> sizni chaqirdi" + (d.a.s != null ? " va <b>" + d.a.s + "/10</b> topdi. Yuta olasizmi?" : ".") + "</p>") +
        "<p>10 ta so'z · har biriga " + QT + ' soniya</p><button class="m-btn light" data-p="dstart">Boshlash ▶</button></section></div>';
    }
    // natija
    h += '<section class="pro-duelres"><div class="pro-vs"><span><small>' + esc(d.a.name) + "</small><b>" + (d.a.s == null ? "–" : d.a.s) + '</b></span><i>:</i><span><small>' + esc(d.b ? d.b.name : "Raqib") + "</small><b>" + (d.b && d.b.s != null ? d.b.s : "–") + "</b></span></div>";
    if (d.done) {
      var aw = d.a.s > d.b.s || (d.a.s === d.b.s && d.a.ms <= d.b.ms), iw = (d.me === "a" && aw) || (d.me === "b" && !aw);
      h += "<h2>" + (d.me ? (iw ? "🏆 Siz yutdingiz!" : "Bu safar yutqazdingiz") : "Bellashuv yakunlangan") + "</h2>" + (iw ? "<p>+1 🔑 (kunlik limit doirasida)</p>" : "");
    } else h += "<h2>Raqib kutilmoqda…</h2><p>Havolani do'stingizga yuboring — u ham o'ynagach, natija ikkalangizga botda keladi.</p><button class=\"m-btn\" data-p=\"dreload\">↻ Yangilash</button>";
    h += "</section>";
    if (!d.done && d.me === "a") h += '<button class="m-btn primary wide" data-p="dshare">📨 Do\'stga yuborish</button>';
    h += '<button class="m-btn wide" data-p="dnew">⚔️ Yangi bellashuv</button></div>';
    return h;
  }
  var tmT = null;
  function duelTick() {
    clearInterval(tmT);
    tmT = setInterval(function () {
      var G = DU.game; if (!G || G.end || G.pick != null || !/^#\/duel\//.test(location.hash)) { clearInterval(tmT); return; }
      var left = QT - (Date.now() - G.qt) / 1000, el = document.getElementById("proTm");
      if (el) el.style.width = Math.max(0, left / QT * 100) + "%";
      if (left <= 0) duelPick(-1);
    }, 100);
  }
  function duelPick(k) {
    var G = DU.game, q = G.qs[G.i]; G.pick = k; if (k >= 0 && q.opts[k] === q.ok) G.s++;
    try { W.HapticFeedback.notificationOccurred(k >= 0 && q.opts[k] === q.ok ? "success" : "error"); } catch (e) {}
    rerender();
    setTimeout(function () {
      G.i++; G.pick = null; G.qt = Date.now();
      if (G.i >= G.qs.length) {
        G.end = true; var ms = Date.now() - G.t0;
        K().call("/api/duel/submit", { id: DU.id, s: G.s, ms: ms }).then(function (x) { DU.d = x; DU.list = null; rerender(); }, function () { toast("Natija yuborilmadi"); });
      }
      rerender(); if (!G.end) duelTick();
    }, 650);
  }

  /* =================== 5. O'qituvchi guruhlari =================== */
  var GR = { mine: null, view: null, vid: null, sort: "seen", msg: "" };
  function loadGroups() { K().call("/api/group/mine").then(function (x) { GR.mine = x; rerender(); }, function () { GR.mine = { owned: [], joined: [] }; rerender(); }); }
  function viewGroups() {
    if (!K()) return '<div class="m-page"><p class="m-note">Guruhlar faqat Telegram ichida ishlaydi.</p></div>';
    if (!GR.mine) { loadGroups(); return '<div class="m-page"><header class="m-title"><h1>Guruhlar</h1></header><p class="m-note">Yuklanmoqda…</p></div>'; }
    var g = GR.mine, h = '<div class="m-page"><header class="m-title"><h1>Guruhlar</h1></header>';
    if (GR.msg) h += '<div class="wr-err">' + esc(GR.msg) + "</div>";
    if (g.joined.length) h += '<section class="m-card"><h3>🎓 Men a\'zo guruhlar</h3><ul class="pro-glist">' + g.joined.map(function (x) { return '<li><span><b>' + esc(x.name) + "</b><small>O'qituvchi: " + esc(x.owner) + '</small></span><button class="m-btn" data-p="gleave" data-id="' + x.id + '">Chiqish</button></li>'; }).join("") + "</ul></section>";
    h += '<section class="m-card"><h3>➕ Guruhga qo\'shilish</h3><p class="m-note">O\'qituvchingiz bergan 6 belgili kodni kiriting.</p><div class="m-claim"><input id="proGcode" maxlength="6" placeholder="Masalan: K7M2QX" style="text-transform:uppercase"><button class="m-btn primary" data-p="gjoin">Qo\'shilish</button></div></section>';
    h += '<section class="m-card"><h3>👩‍🏫 O\'qituvchimisiz?</h3><p class="m-note">Guruh oching, kodni o\'quvchilarga bering — har birining natijasi, zaif joylari va kim mashq qilmayotganini ko\'rib borasiz.</p><div class="m-claim"><input id="proGname" placeholder="Guruh nomi (masalan: B2 kechki guruh)"><button class="m-btn primary" data-p="gnew">Ochish</button></div></section>';
    if (g.owned.length) h += '<section class="m-card"><h3>📋 Mening guruhlarim</h3><ul class="pro-glist">' + g.owned.map(function (x) { return '<li><a href="#/guruh/' + x.id + '"><span><b>' + esc(x.name) + "</b><small>" + x.cnt + " o'quvchi · kod: <code>" + x.code + "</code></small></span>" + ic("chev", "m-chev") + "</a></li>"; }).join("") + "</ul></section>";
    return h + "</div>";
  }
  function viewGroup(id) {
    if (GR.vid !== id) { GR.vid = id; GR.view = null; K().call("/api/group/view", { id: id }).then(function (x) { GR.view = x; rerender(); }, function () { GR.view = { err: 1 }; rerender(); }); }
    var v = GR.view, h = '<div class="m-page">';
    if (!v) return h + '<p class="m-note">Yuklanmoqda…</p></div>';
    if (v.err) return h + '<div class="m-card"><p>Guruh topilmadi yoki ruxsat yo\'q.</p></div></div>';
    var mem = v.members.slice(), now = Date.now(), w0 = now - 7 * DAY;
    var act = mem.filter(function (m) { return m.seen > w0; }).length, accs = mem.filter(function (m) { return m.sum && m.sum.acc != null; }).map(function (m) { return m.sum.acc; });
    var avg = accs.length ? Math.round(accs.reduce(function (a, b) { return a + b; }, 0) / accs.length) : null, tot = mem.reduce(function (a, m) { return a + (m.sum ? m.sum.done || 0 : 0); }, 0);
    var srt = { seen: function (a, b) { return b.seen - a.seen; }, acc: function (a, b) { return ((b.sum && b.sum.acc) || -1) - ((a.sum && a.sum.acc) || -1); }, done: function (a, b) { return ((b.sum && b.sum.done) || 0) - ((a.sum && a.sum.done) || 0); }, lazy: function (a, b) { return a.seen - b.seen; } }[GR.sort];
    mem.sort(srt);
    h += '<header class="m-title"><h1>' + esc(v.group.name) + "</h1></header>" +
      '<section class="m-card m-ref"><div class="m-ref-top"><div><small>Guruh kodi</small><b class="m-code">' + esc(v.group.code) + '</b></div><button class="m-icbtn" data-p="gcopy" data-t="' + esc(v.group.code) + '">' + ic("copy") + "</button></div>" +
      '<p class="m-note">O\'quvchilar ilovada <b>Profil → Guruhlar</b> bo\'limida kodni kiritadi yoki havolani bosadi.</p><button class="m-btn primary wide" data-p="gshare" data-l="' + esc(v.group.link) + '" data-n="' + esc(v.group.name) + '">' + ic("share") + "Havolani yuborish</button></section>" +
      '<div class="a-kpis">' + [[mem.length, "O'quvchi"], [act, "7 kunda faol"], [avg == null ? "—" : avg + "%", "O'rtacha natija"], [tot, "Jami mashq"]].map(function (k) { return '<div class="a-kpi"><b>' + k[0] + "</b><small>" + k[1] + "</small></div>"; }).join("") + "</div>" +
      '<div class="m-seg pro-gsort">' + [["seen", "Faol"], ["acc", "Natija"], ["done", "Mashq"], ["lazy", "Sust"]].map(function (x) { return '<button data-gs="' + x[0] + '" class="' + (GR.sort === x[0] ? "on" : "") + '">' + x[1] + "</button>"; }).join("") + "</div>";
    if (!mem.length) h += '<div class="m-card m-empty"><span>👥</span><p>Hali o\'quvchi yo\'q. Kodni yoki havolani o\'quvchilaringizga yuboring.</p></div>';
    h += '<ul class="pro-mem">' + mem.map(function (m) {
      var s = m.sum || {}, days = m.seen ? Math.floor((now - m.seen) / DAY) : null, warn = days == null || days >= 3;
      var secs = s.secs ? ["reading", "listening", "writing", "speaking"].map(function (k) { var x = s.secs[k] || {}; return '<span class="c-' + k.charAt(0) + '"><small>' + k.charAt(0).toUpperCase() + k.slice(1, 4) + "</small><b>" + (x.acc == null ? "—" : x.acc + "%") + "</b><em>" + (x.done || 0) + " ta</em></span>"; }).join("") : "";
      return '<li class="' + (warn ? "warn" : "") + '"><div class="pro-mh"><span class="m-av xs"><b>' + esc((m.name || "?").charAt(0)) + '</b></span><span class="pro-mn2"><b>' + esc(m.name) + "</b><small>" + (m.seen ? (days === 0 ? "bugun kirgan" : days + " kun oldin") : "hali kirmagan") + (s.streak ? " · 🔥 " + s.streak : "") + '</small></span><span class="pro-ms"><b>' + (s.acc == null ? "—" : s.acc + "%") + "</b><small>✅ " + (s.done || 0) + "</small></span></div>" +
        (secs ? '<div class="pro-msecs">' + secs + "</div>" : "") +
        (s.weak && s.weak.length ? '<p class="pro-weak">⚠️ Zaif: ' + s.weak.map(esc).join(", ") + "</p>" : "") +
        (m.speak ? '<p class="pro-weak">🎙 Ovozli Speaking: ' + m.speak.n + " marta · o'rtacha " + m.speak.avg + "%</p>" : "") +
        '<button class="pro-kick" data-p="gkick" data-u="' + m.id + '">guruhdan chiqarish</button></li>';
    }).join("") + "</ul>";
    h += '<button class="m-btn wide pro-danger" data-p="gdel">Guruhni o\'chirish</button></div>';
    return h;
  }
  // o'quvchi xulosasi serverga (o'qituvchi ko'rishi uchun)
  var syncT = null, lastSync = 0;
  function scheduleSync() { clearTimeout(syncT); syncT = setTimeout(doSync, Date.now() - lastSync > 60e3 ? 1500 : 30e3); }
  function doSync() {
    if (!K() || !KS()) return;
    var c = M.stats(); if (!c) return;
    var s = secStats(), secs = {};
    Object.keys(s.secs).forEach(function (k) { var x = s.secs[k]; secs[k] = { acc: x.pct, done: x.done }; });
    var weak = (c.skills || []).filter(function (k) { return k.t >= 5 && k.pct != null; }).sort(function (a, b) { return a.pct - b.pct; }).slice(0, 3).map(function (k) { return k.name + " " + k.pct + "%"; });
    lastSync = Date.now();
    K().call("/api/sync", { sum: { done: c.done, acc: c.acc, streak: c.streak, today: Math.round(c.today / 60), week: Math.round(c.week / 60), secs: secs, weak: weak, vocab: Object.keys(vocab()).length } }).catch(function () {});
  }

  /* =================== 6. Ovozli Speaking (bot + AI) =================== */
  var OV = { list: null };
  function viewOvoz() {
    if (!K()) return '<div class="m-page"><p class="m-note">Faqat Telegram ichida ishlaydi.</p></div>';
    var S = KS();
    if (OV.list == null) K().call("/api/voice/results").then(function (x) { OV.list = x.list; if (/^#\/ovoz/.test(location.hash)) rerender(); }, function () { OV.list = []; });
    var h = '<div class="m-page"><header class="m-title"><h1>Ovozli Speaking</h1>' + M.keyPill() + "</header>" +
      '<section class="pro-duelhero c-s pro-voice"><span>🎙</span><h2>Gapiring — AI baholaydi</h2><p>1) Qismni tanlang → savol botga keladi<br>2) Botga <b>ovozli xabar</b> bilan javob bering<br>3) AI nutqingizni matnga aylantirib, daraja, xatolar va maslahat beradi</p>' +
      (S && S.ai === false ? '<p class="kq-need">AI hali ulanmagan — admin Workers AI\'ni sozlashi kerak.</p>' : "") +
      '<div class="pro-parts">' + [["1.1", "Part 1.1", "Shaxsiy savol"], ["1.2", "Part 1.2", "Rasmlar"], ["2", "Part 2", "Hikoya"], ["3", "Part 3", "Munozara"]].map(function (p) { return '<button class="m-btn light" data-p="vq" data-part="' + p[0] + '"><b>' + p[1] + "</b><small>" + p[2] + "</small></button>"; }).join("") + "</div>" +
      '<p class="pro-free">Bugun bepul: <b>' + (S ? S.aiFree : "—") + "</b> ta · keyin har biri 1 🔑</p></section>";
    if (OV.list && OV.list.length) {
      h += '<section class="m-card"><h3>📈 Oxirgi javoblarim</h3><ul class="pro-glist">' + OV.list.map(function (r) {
        return '<li><span><b>Part ' + esc(r.part) + " · " + esc(r.level || "") + " · " + r.score + "%</b><small>" + M.dt(r.at) + " — " + esc(String(r.q || "").slice(0, 70)) + "</small><em class=\"pro-tr\">«" + esc(String(r.t || "").slice(0, 140)) + "»</em></span></li>";
      }).join("") + "</ul></section>";
    }
    return h + "</div>";
  }
  function voiceQuestion(part) {
    var B = (window.SPEAKING && window.SPEAKING.mocks) || [], m = B[Math.floor(Math.random() * B.length)], q;
    if (!m) q = "Tell me about your hometown.";
    else if (part === "1.1") q = m.p11[Math.floor(Math.random() * m.p11.length)].q;
    else if (part === "1.2") q = (m.p12.qs[1 + Math.floor(Math.random() * Math.max(1, m.p12.qs.length - 1))] || m.p12.qs[0]).q;
    else if (part === "2") q = m.p2.qs.join(" ");
    else q = "Topic: " + m.p3.topic + (m.p3.for && m.p3.for.length ? "\nFOR: " + m.p3.for.join("; ") + "\nAGAINST: " + m.p3.against.join("; ") : "");
    return q;
  }
  function sendVoiceQ(part, q, btn) {
    if (btn) btn.disabled = true;
    K().call("/api/voice/start", { part: part, q: q }).then(function (x) {
      toast("🎙 Savol botga yuborildi — ovozli javob bering");
      setTimeout(function () { openTg("https://t.me/" + (x.bot || botName())); }, 500);
      if (btn) btn.disabled = false;
    }, function () { if (btn) btn.disabled = false; toast("Yuborib bo'lmadi"); });
  }

  /* =================== kirish nuqtalari =================== */
  function tilesHTML() {
    var due = dueKeys().length, nv = Object.keys(vocab()).length, act = st().mockActive, ar = act ? mres(act) : null;
    var T = [
      ["mock", "c-r", "🎯", "To'liq mock", ar && ar.overall == null ? "Mock " + act + ": " + ar.done + "/" + ar.total : "4 bo'lim · 0–75 ball"],
      ["lugat", "c-w", "📚", "So'zlarim", nv ? (due ? due + " ta takrorlash" : nv + " so'z ✓") : "Bosilgan so'zlar"],
      ["duel", "c-l", "⚔️", "Bellashuv", "Do'st bilan · +1 🔑"],
      ["ovoz", "c-s", "🎙", "Ovozli Speaking", "AI baholaydi"]
    ];
    return '<div class="pro-tiles">' + T.map(function (t) { return '<a class="pro-tile ' + t[1] + '" href="#/' + t[0] + '"><span class="pro-te">' + t[2] + "</span><b>" + t[3] + "</b><small>" + t[4] + "</small>" + (t[0] === "lugat" && due ? '<i class="pro-badge">' + due + "</i>" : "") + "</a>"; }).join("") + "</div>";
  }
  function profileHTML() {
    return '<div class="pro-prow"><a class="m-cont" href="#/guruh"><span class="m-play">👩‍🏫</span><span class="m-ct"><small>O\'qituvchi va o\'quvchilar</small><b>Guruhlar</b><em>Guruh ochish yoki kod bilan qo\'shilish</em></span>' + ic("chev", "m-chev") + "</a>" +
      '<a class="m-cont" href="#/karta" data-p="cgen"><span class="m-play">📸</span><span class="m-ct"><small>Story uchun</small><b>Natija kartochkasi</b><em>Natijangizni chiroyli rasmda ulashing</em></span>' + ic("chev", "m-chev") + "</a></div>";
  }

  /* =================== marshrut va hodisalar =================== */
  function route(parts, view) {
    var p = parts[0];
    if (p === "lugat") { view.innerHTML = parts[1] === "takror" ? viewReview() : viewLugat(); wire(view); return true; }
    if (p === "mock") { view.innerHTML = parts[1] ? viewMock(+parts[1]) : viewMocks(); wire(view); return true; }
    if (p === "karta") { view.innerHTML = viewCard(); wire(view); return true; }
    if (p === "duel") { if (!parts[1]) DU.id = null; view.innerHTML = parts[1] ? viewDuel(+parts[1]) : viewDuels(); wire(view); return true; }
    if (p === "guruh") { view.innerHTML = parts[1] ? viewGroup(+parts[1]) : viewGroups(); wire(view); return true; }
    if (p === "ovoz") { view.innerHTML = viewOvoz(); wire(view); return true; }
    return false;
  }
  function wire(view) {
    var lq = view.querySelector("#proLq");
    if (lq) lq.oninput = function () { LQ = lq.value; var pos = lq.selectionStart; rerender(); var n = document.getElementById("proLq"); if (n) { n.focus(); n.setSelectionRange(pos, pos); } };
    view.querySelectorAll("[data-del]").forEach(function (b) { b.onclick = function () { delete vocab()[b.dataset.del]; save(); rerender(); }; });
    view.querySelectorAll("[data-gs]").forEach(function (b) { b.onclick = function () { GR.sort = b.dataset.gs; rerender(); }; });
    view.querySelectorAll("[data-p]").forEach(function (b) {
      var a = b.dataset.p;
      b.addEventListener("click", function (e) {
        if (a === "cgen") { CARD = { data: cardGeneral() }; return; }
        e.preventDefault();
        if (a === "rev") startReview();
        if (a === "flip") { if (!REV.show) { REV.show = true; rerender(); } }
        if (a === "yes") answer(true);
        if (a === "no") answer(false);
        if (a === "share" && K()) K().share();
        if (a === "munlock") {
          b.disabled = true;
          K().call("/api/unlock", { item: "mk." + b.dataset.n }).then(function (x) { K().setS(x); toast("🔓 Mock " + b.dataset.n + " ochildi"); rerender(); }, function () { b.disabled = false; toast("Kalit yetmayapti"); });
        }
        if (a === "mgo") { var N = +b.dataset.n; openStep(N, nextStep(N).key); }
        if (a === "mstep") openStep(+b.dataset.n, b.dataset.k);
        if (a === "mreset") confirmBox("Mock natijalari o'chirilsinmi?", function (ok) { if (!ok) return; delete mstate()[b.dataset.n]; save(); rerender(); });
        if (a === "mcard") { CARD = { data: cardMock(+b.dataset.n) }; go("#/karta"); }
        if (a === "csend") {
          if (!CARD || !CARD.img) return; CARD.busy = true; rerender();
          K().call("/api/card", { img: CARD.img }).then(function (x) { CARD.busy = false; CARD.url = x.url; toast("📤 Rasm botga yuborildi"); rerender(); }, function () { CARD.busy = false; toast("Yuborib bo'lmadi"); rerender(); });
        }
        if (a === "cstory" && CARD && CARD.url) { try { W.shareToStory(CARD.url, { text: "Multilevel'ga tayyorlanyapman 🎯 @" + botName() }); } catch (x) { toast("Story bu qurilmada ishlamaydi"); } }
        if (a === "dnew") {
          b.disabled = true;
          K().call("/api/duel/new").then(function (x) { DU.list = null; location.hash = "#/duel/" + x.id; }, function () { b.disabled = false; toast("Xatolik"); });
        }
        if (a === "dstart") { DU.game = { qs: duelQs(DU.d.seed), i: 0, s: 0, pick: null, t0: Date.now(), qt: Date.now() }; rerender(); duelTick(); }
        if (a === "dans") duelPick(+b.dataset.k);
        if (a === "dreload") { DU.d = null; loadDuel(DU.id); rerender(); }
        if (a === "dshare") {
          var link = "https://t.me/" + botName() + "?start=d" + DU.id;
          openTg("https://t.me/share/url?url=" + encodeURIComponent(link) + "&text=" + encodeURIComponent("⚔️ Seni so'z bellashuviga chaqiraman! Men " + (DU.d.a.s || 0) + "/10 topdim — yuta olasanmi? 😏"));
        }
        if (a === "gjoin") {
          var code = (document.getElementById("proGcode").value || "").trim().toUpperCase(); if (code.length < 6) return;
          K().call("/api/group/join", { code: code }).then(function (x) { GR.msg = ""; toast("✅ «" + x.group.name + "» guruhiga qo'shildingiz"); loadGroups(); }, function (er) { GR.msg = (er && er.data && er.data.uz) || "Xatolik"; rerender(); });
        }
        if (a === "gnew") {
          var nm = (document.getElementById("proGname").value || "").trim(); if (nm.length < 2) return;
          K().call("/api/group/create", { name: nm }).then(function () { toast("👩‍🏫 Guruh ochildi"); loadGroups(); }, function (er) { GR.msg = (er && er.data && er.data.uz) || "Xatolik"; rerender(); });
        }
        if (a === "gleave") confirmBox("Guruhdan chiqasizmi?", function (ok) { if (ok) K().call("/api/group/leave", { id: +b.dataset.id }).then(loadGroups); });
        if (a === "gcopy") { try { navigator.clipboard.writeText(b.dataset.t); toast("📋 Nusxalandi"); } catch (x) {} }
        if (a === "gshare") openTg("https://t.me/share/url?url=" + encodeURIComponent(b.dataset.l) + "&text=" + encodeURIComponent("«" + b.dataset.n + "» guruhimizga qo'shiling — Multilevel'ga birga tayyorlanamiz 👇"));
        if (a === "gkick") confirmBox("O'quvchi guruhdan chiqarilsinmi?", function (ok) { if (ok) K().call("/api/group/kick", { id: GR.vid, uid: +b.dataset.u }).then(function () { GR.vid = null; rerender(); }); });
        if (a === "gdel") confirmBox("Guruh butunlay o'chirilsinmi?", function (ok) { if (ok) K().call("/api/group/delete", { id: GR.vid }).then(function () { GR.mine = null; go("#/guruh"); }); });
        if (a === "vq") { var part = b.dataset.part; sendVoiceQ(part, voiceQuestion(part), b); }
      });
    });
  }
  document.addEventListener("DOMContentLoaded", function () {
    hookTrack();
    setTimeout(function () { scheduleSync(); mockBar(); }, 2500);
    if (K()) K().onChange(function () { if (!lastSync) scheduleSync(); });
  });
  window.CEFR_PRO = { route: route, tilesHTML: tilesHTML, profileHTML: profileHTML, voice: sendVoiceQ, mocks: mocks };
})();
