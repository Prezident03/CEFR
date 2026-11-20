/* CEFR Companion — mobil ilova qobig'i (Telegram Mini App ichida).
   Pastki menyu, yangi bosh sahifa, Mashqlar, Profil (kalitlar, referal, do'stlar, sozlamalar). */
(function () {
  var W = window.Telegram && window.Telegram.WebApp;
  var forced = /[?&]mobil=1/.test(location.search);
  if (!forced && !(W && W.initData)) return;
  document.documentElement.classList.add("mob");

  var SEC = [
    { id: "reading", name: "Reading", short: "R", desc: "Matnlar va testlar", c: "r", parts: ["p1", "p2", "p3", "p4", "p5"] },
    { id: "listening", name: "Listening", short: "L", desc: "Audio va tinglash", c: "l", parts: ["l1", "l2", "l3", "l4", "l5", "l6"] },
    { id: "writing", name: "Writing", short: "W", desc: "Xat, insho, AI tahlil", c: "w", parts: ["w1", "w2", "wt", "wx"] },
    { id: "speaking", name: "Speaking", short: "S", desc: "Gapirish va mock", c: "s", parts: ["s1", "s2", "s3", "s4", "sx"] }
  ];
  var PART_SHORT = { p1: "Part 1", p2: "Part 2", p3: "Part 3", p4: "Part 4", p5: "Part 5", l1: "Part 1", l2: "Part 2", l3: "Part 3", l4: "Part 4", l5: "Part 5", l6: "Part 6",
    w1: "Task 1", w2: "Task 2", wt: "Yozish", wx: "Imtihon", s1: "1.1", s2: "1.2", s3: "Part 2", s4: "Part 3", sx: "Mock" };
  var ICON = {
    home: '<path d="M4 11l8-7 8 7v8a1 1 0 0 1-1 1h-4v-6H9v6H5a1 1 0 0 1-1-1z"/>',
    grid: '<rect x="4" y="4" width="7" height="7" rx="2"/><rect x="13" y="4" width="7" height="7" rx="2"/><rect x="4" y="13" width="7" height="7" rx="2"/><rect x="13" y="13" width="7" height="7" rx="2"/>',
    cal: '<rect x="4" y="5" width="16" height="15" rx="3"/><path d="M4 10h16M9 3v4M15 3v4"/>',
    chart: '<path d="M5 20V11M12 20V5M19 20v-6"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 20c1.5-4 4.5-6 8-6s6.5 2 8 6"/>',
    reading: '<path d="M3 5.5C5.5 4 8.5 4 12 6c3.5-2 6.5-2 9-.5V19c-2.5-1.5-5.5-1.5-9 .5-3.5-2-6.5-2-9-.5z"/><path d="M12 6v13.5"/>',
    listening: '<path d="M4 15v-3a8 8 0 0 1 16 0v3"/><rect x="3" y="14" width="5" height="6" rx="2"/><rect x="16" y="14" width="5" height="6" rx="2"/>',
    writing: '<path d="M15 4l5 5L9 20H4v-5z"/><path d="M13 6l5 5"/>',
    speaking: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/>',
    share: '<path d="M12 15V3M7 8l5-5 5 5"/><path d="M5 13v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6"/>',
    copy: '<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/>',
    play: '<path d="M8 5v14l11-7z"/>',
    chev: '<path d="M9 6l6 6-6 6"/>',
    full: '<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/>',
    exit: '<path d="M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5"/>'
  };
  function ic(n, cls) { return '<svg class="mi ' + (cls || "") + '" viewBox="0 0 24 24" aria-hidden="true">' + ICON[n] + "</svg>"; }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function K() { return window.CEFR_KEY || null; }
  function KS() { return K() ? K().state() : null; }
  function stats() { try { return window.CEFR_STATS && window.CEFR_STATS.compute(); } catch (e) { return null; } }
  function me() { return (window.CEFR_AUTH && window.CEFR_AUTH.current()) || {}; }
  function tgUser() { return (W && W.initDataUnsafe && W.initDataUnsafe.user) || {}; }
  function firstName() { var n = tgUser().first_name || me().name || "do'st"; return String(n).split(" ")[0]; }
  function fullName() { var u = tgUser(); return [u.first_name, u.last_name].filter(Boolean).join(" ") || me().name || "Foydalanuvchi"; }
  function avatar(cls) {
    var u = tgUser(), n = fullName();
    return '<span class="m-av ' + (cls || "") + '">' + (u.photo_url ? '<img src="' + esc(u.photo_url) + '" alt="" onerror="this.remove()">' : "") + "<b>" + esc(n.charAt(0).toUpperCase()) + "</b></span>";
  }
  function mins(sec) { var m = Math.round((sec || 0) / 60); return m < 60 ? m + " daq" : Math.floor(m / 60) + " soat " + (m % 60 ? (m % 60) + " daq" : ""); }
  function hello() { var h = new Date().getHours(); return h < 5 ? "Xayrli tun" : h < 12 ? "Xayrli tong" : h < 18 ? "Xayrli kun" : "Xayrli kech"; }
  function secOfPart(p) { var c = p.charAt(0); return c === "p" ? "reading" : c === "l" ? "listening" : c === "w" ? "writing" : "speaking"; }
  function partHref(p) { return p === "sx" ? "#/speaking/m" : "#/" + secOfPart(p) + "/" + p; }
  function exHref(p, n) { return secOfPart(p) === "speaking" ? "#/speaking/x/" + n + "/" + (p === "sx" ? "all" : p) : "#/" + secOfPart(p) + "/" + p + "/" + n; }
  function ring(pct, size) {
    var r = 26, c = 2 * Math.PI * r, off = c * (1 - Math.max(0, Math.min(100, pct)) / 100);
    return '<svg class="m-ring" viewBox="0 0 64 64" width="' + size + '" height="' + size + '"><circle cx="32" cy="32" r="' + r + '" class="rb"/><circle cx="32" cy="32" r="' + r + '" class="rf" stroke-dasharray="' + c.toFixed(1) + '" stroke-dashoffset="' + off.toFixed(1) + '"/></svg>';
  }
  function bySec(st) {
    var map = {};
    SEC.forEach(function (s) { map[s.id] = { done: 0, total: 0, parts: {} }; });
    ((st && st.parts) || []).forEach(function (p) {
      var s = map[secOfPart(p.id)]; if (!s) return;
      s.done += p.done; s.total += p.total; s.parts[p.id] = p;
    });
    return map;
  }
  function keyPill() {
    var S = KS();
    if (!K()) return "";
    return '<a class="m-keys" href="#/profil">🔑 <b class="kqN">' + (S ? S.keys : "…") + "</b></a>";
  }

  /* ---------------- Bosh sahifa ---------------- */
  function viewHome() {
    var st = stats() || { today: 0, streak: 0, done: 0, totalEx: 0, log: [] };
    var pct = st.totalEx ? Math.round(st.done / st.totalEx * 100) : 0;
    var secs = bySec(st);
    var last = (st.log || [])[0], cont;
    if (last) {
      var pp = last.k.split("."), p = pp[0], n = +pp[1], sname = (SEC.filter(function (s) { return s.id === secOfPart(p); })[0] || {}).name;
      var nx = last.s >= last.t * 0.6 ? n + 1 : n;
      cont = '<a class="m-cont" href="' + exHref(p, nx) + '"><span class="m-play">' + ic("play") + '</span><span class="m-ct"><small>Davom ettirish</small><b>' + esc(sname + " · " + PART_SHORT[p]) + "</b><em>" + (nx > n ? "Keyingi mashq: " + nx : "Qayta urinish: " + n) + "-mashq</em></span>" + ic("chev", "m-chev") + "</a>";
    } else {
      cont = '<a class="m-cont" href="#/reading/p1/1"><span class="m-play">' + ic("play") + '</span><span class="m-ct"><small>Boshlash</small><b>Reading · Part 1</b><em>Birinchi mashqdan boshlang</em></span>' + ic("chev", "m-chev") + "</a>";
    }
    var tiles = SEC.map(function (s) {
      var d = secs[s.id], p = d.total ? Math.round(d.done / d.total * 100) : 0;
      return '<a class="m-tile c-' + s.c + '" href="#/' + s.id + '"><span class="m-ti">' + ic(s.id) + "</span><b>" + s.name + "</b><small>" + s.desc + '</small><span class="m-bar"><i style="width:' + p + '%"></i></span><em>' + d.done + " / " + d.total + "</em></a>";
    }).join("");
    var S = KS();
    var invite = K() ? '<div class="m-invite"><div><b>Do\'stlaringizni taklif qiling</b><small>Har bir do\'st uchun <b>+3 🔑</b>, u ham <b>+2 🔑</b> oladi</small></div><button class="m-btn light" data-act="share">' + ic("share") + "Ulashish</button></div>" : "";
    return '<div class="m-page m-home">' +
      '<header class="m-head"><a class="m-hi" href="#/profil">' + avatar("sm") + "<span><small>" + hello() + ",</small><b>" + esc(firstName()) + "</b></span></a><span class=\"m-hr\">" + (DESKTOP ? fsBtn("ic") : "") + keyPill() + "</span></header>" +
      '<section class="m-hero"><div class="m-hero-l"><div class="m-streak"><span>🔥</span><b>' + (st.streak || 0) + "</b><small>kun<br>ketma-ket</small></div>" +
      '<div class="m-hstats"><span><b>' + mins(st.today) + "</b><small>bugun</small></span><span><b>" + (st.acc != null ? st.acc + "%" : "—") + "</b><small>o'rtacha</small></span></div></div>" +
      '<div class="m-hero-r">' + ring(pct, 92) + '<span class="m-ring-t"><b>' + pct + "%</b><small>" + st.done + "/" + st.totalEx + "</small></span></div></section>" +
      cont +
      (window.CEFR_PLAN ? '<div class="m-plan">' + window.CEFR_PLAN.homeCard() + "</div>" : "") +
      '<div class="m-h2"><h2>Bo\'limlar</h2><a href="#/mashq">Hammasi</a></div>' +
      '<div class="m-tiles">' + tiles + "</div>" +
      (window.CEFR_PRO ? '<div class="m-h2"><h2>Maxsus imkoniyatlar</h2></div>' + window.CEFR_PRO.tilesHTML() : "") + invite +
      "</div>";
  }

  /* ---------------- Mashqlar ---------------- */
  function viewMashq() {
    var st = stats(), secs = bySec(st);
    return '<div class="m-page"><header class="m-title"><h1>Mashqlar</h1>' + keyPill() + "</header>" +
      (K() ? '<p class="m-note">Har bir qismdagi dastlabki ' + K().free + " ta mashq bepul, qolganlari 🔑 kalit bilan ochiladi.</p>" : "") +
      (window.CEFR_PRO ? window.CEFR_PRO.tilesHTML() : "") +
      SEC.map(function (s) {
        var d = secs[s.id], p = d.total ? Math.round(d.done / d.total * 100) : 0;
        var chips = s.parts.filter(function (id) { return d.parts[id] && d.parts[id].total; }).map(function (id) {
          var x = d.parts[id];
          return '<a class="m-chip" href="' + partHref(id) + '"><b>' + PART_SHORT[id] + "</b><small>" + x.done + "/" + x.total + "</small></a>";
        }).join("");
        return '<section class="m-sec c-' + s.c + '"><a class="m-sec-h" href="#/' + s.id + '"><span class="m-ti">' + ic(s.id) + '</span><span class="m-st"><b>' + s.name + "</b><small>" + s.desc + " · " + d.done + "/" + d.total + "</small></span>" + ring(p, 44) + "</a>" +
          '<div class="m-chips">' + chips + "</div></section>";
      }).join("") + "</div>";
  }

  /* ---------------- Profil ---------------- */
  var refs = null, top = null, refsLoading = false;
  function loadRefs() {
    if (!K() || refsLoading) return; refsLoading = true;
    Promise.all([K().call("/api/refs").catch(function () { return null; }), K().call("/api/top").catch(function () { return null; })]).then(function (r) {
      refsLoading = false; if (r[0]) refs = r[0].list; if (r[1]) top = r[1];
      if (/^#\/profil/.test(location.hash)) paintProfile();
    });
  }
  function dt(ts) { var d = new Date(ts), p = function (x) { return ("0" + x).slice(-2); }; return p(d.getDate()) + "." + p(d.getMonth() + 1) + "." + d.getFullYear(); }
  function viewProfil() {
    var S = KS(), st = stats() || {}, u = tgUser();
    var h = '<div class="m-page m-prof">' +
      '<section class="m-pcard">' + avatar("lg") + "<h1>" + esc(fullName()) + "</h1>" + (u.username ? "<p>@" + esc(u.username) + "</p>" : "<p>Telegram hisobi</p>") +
      '<div class="m-pstats"><span><b class="kqN">' + (S ? S.keys : "—") + "</b><small>🔑 kalit</small></span><span><b>" + (S ? S.refs : 0) + "</b><small>👥 do'st</small></span><span><b>" + (st.streak || 0) + "</b><small>🔥 kun</small></span><span><b>" + (st.done || 0) + "</b><small>✅ mashq</small></span></div></section>";
    if (K() && !S) h += '<div class="m-card"><p class="m-note">' + (K().failed() ? "Server bilan bog'lanib bo'lmadi. Internetni tekshiring." : "Yuklanmoqda…") + "</p></div>";
    if (S) {
      var status = S.all ? "👑 Barcha mashqlar umrbod ochiq" : S.sec ? "🏅 " + { reading: "Reading", listening: "Listening", writing: "Writing", speaking: "Speaking" }[S.sec] + " bo'limi butunlay ochiq" : "";
      if (S.admin) h += '<a class="m-admin-link" href="#/admin"><span>🛠</span><span><b>Admin panel</b><small>Foydalanuvchilar, statistika, kalit berish</small></span>' + ic("chev", "m-chev") + "</a>";
      if (status) h += '<div class="m-badge-line">' + status + "</div>";
      if (window.CEFR_PRO) h += window.CEFR_PRO.profileHTML();
      // referal
      h += '<section class="m-card m-ref"><div class="m-ref-top"><div><small>Referal kodingiz</small><b class="m-code">' + esc(S.code || "") + '</b></div><button class="m-icbtn" data-act="copycode" title="Nusxalash">' + ic("copy") + "</button></div>" +
        '<p>Do\'stingiz havolangiz orqali kirsa yoki kodingizni kiritsa — sizga <b>+3 🔑</b>, unga <b>+2 🔑</b>. U birinchi mashqini bajarsa, sizga yana <b>+2 🔑</b>.</p>' +
        '<div class="m-linkrow"><span>' + esc(String(S.link).replace(/^https:\/\//, "")) + '</span><button class="m-icbtn" data-act="copylink">' + ic("copy") + "</button></div>" +
        '<button class="m-btn primary wide" data-act="share">' + ic("share") + "Do'stlarga ulashish</button></section>";
      if (S.canClaim) h += '<section class="m-card"><h3>Do\'stingiz kodi bormi?</h3><p class="m-note">Sizni kim taklif qilgan bo\'lsa, uning kodini kiriting — sizga <b>+2 🔑</b> bonus.</p><div class="m-claim"><input id="mClaim" inputmode="numeric" placeholder="Masalan: 5633050730"><button class="m-btn primary" data-act="claim">Kiritish</button></div><div id="mClaimMsg"></div></section>';
      // maqsadlar
      if (S.arefs >= S.secAt && !S.sec && !S.all) {
        h += '<section class="m-card m-gold"><h3>🏅 Siz Elchisiz! Bitta bo\'limni butunlay oching</h3><p class="m-note">Tanlang — keyin o\'zgartirib bo\'lmaydi.</p><div class="m-secpick">' +
          SEC.map(function (s) { return '<button class="m-btn c-' + s.c + '" data-sec="' + s.id + '">' + ic(s.id) + s.name + "</button>"; }).join("") + "</div></section>";
      }
      function goal(n, txt) { var p = Math.min(100, Math.round(S.arefs / n * 100)); return '<div class="m-goal"><div><b>' + n + " faol do'st</b><small>" + txt + '</small></div><span class="m-bar"><i style="width:' + p + '%"></i></span><em>' + Math.min(S.arefs, n) + "/" + n + "</em></div>"; }
      h += '<section class="m-card"><h3>🎯 Maqsadlar</h3>' + goal(S.secAt, "\"Elchi\" nishoni + bitta bo'lim butunlay ochiladi") + goal(S.allAt, "Barcha mashqlar umrbod ochiladi") +
        '<p class="m-note">Faol do\'st — havolangiz orqali kelib, kamida bitta mashq bajargan do\'st.</p></section>';
      // do'stlar
      h += '<section class="m-card"><h3>👥 Mening do\'stlarim <span class="m-cnt">' + S.refs + '</span></h3><div id="mRefs">' + refsHTML() + "</div></section>";
      // kalit qoidalari
      h += '<section class="m-card"><h3>🔑 Kalit qanday topiladi</h3><ul class="m-rules">' +
        "<li><span>Do'st qo'shilsa</span><b>+3</b></li><li><span>Do'st birinchi mashqini bajarsa</span><b>+2</b></li><li><span>Har kuni kirish</span><b>+1</b></li><li><span>7 kun ketma-ket</span><b>+3</b></li><li><span>Mashqni 90%+ bajarish (kuniga 2 marta)</span><b>+1</b></li>" +
        (S.channel ? "<li><span>Kanalga obuna (bir marta)</span><b>+2</b></li>" : "") + "</ul>" +
        (S.channel && !S.chan ? '<div class="m-row2"><button class="m-btn" data-act="chan-open">' + esc(S.channel) + '</button><button class="m-btn primary" data-act="chan-check">Obunani tekshirish</button></div><div id="mChMsg"></div>' : "") +
        '<h4>Kalit nimaga sarflanadi</h4><ul class="m-rules"><li><span>Yopiq mashqni ochish</span><b>1 🔑</b></li><li><span>Mock imtihonni ochish</span><b>2 🔑</b></li></ul></section>';
      h += '<section class="m-card"><h3>🏆 Haftalik reyting</h3><div id="mTop">' + topHTML() + "</div></section>";
    }
    // sozlamalar
    var tr = window.CEFR_TR && window.CEFR_TR.isOn(), mode = themeMode();
    h += '<section class="m-card"><h3>⚙️ Sozlamalar</h3>' +
      (S && K() ? '<label class="m-set"><span><b>Kunlik eslatma</b><small>Kechqurun mashq qilmagan bo\'lsangiz, bot eslatib qo\'yadi</small></span><input type="checkbox" class="m-sw" data-act="notify"' + (S.notify !== false ? " checked" : "") + "></label>" : "") +
      '<label class="m-set"><span><b>Bosganda tarjima</b><small>Matndagi so\'z yoki gapni bossangiz, o\'zbekcha tarjimasi chiqadi</small></span><input type="checkbox" class="m-sw" data-act="tr"' + (tr ? " checked" : "") + "></label>" +
      (fsOK() ? '<div class="m-set"><span><b>To\'liq ekran</b><small>Kompyuterda ilovani butun ekranga yoyish</small></span>' + fsBtn("set") + "</div>" : "") +
      '<div class="m-set"><span><b>Mavzu</b><small>Ilova ranglari</small></span></div><div class="m-seg">' +
      [["auto", "Avto"], ["light", "Yorug'"], ["dark", "Qorong'i"]].map(function (x) { return '<button data-theme="' + x[0] + '" class="' + (mode === x[0] ? "on" : "") + '">' + x[1] + "</button>"; }).join("") + "</div></section>" +
      '<p class="m-foot">CEFR Companion · Multilevel tayyorgarlik</p></div>';
    return h;
  }
  function refsHTML() {
    if (refs == null) return '<p class="m-note">Yuklanmoqda…</p>';
    if (!refs.length) return '<div class="m-empty"><span>🤝</span><p>Hali hech kim yo\'q. Havolangizni ulashing — birinchi do\'stingiz uchun <b>+3 🔑</b>.</p></div>';
    return '<ul class="m-refs">' + refs.map(function (r) {
      return '<li><span class="m-av xs"><b>' + esc(r.name.charAt(0).toUpperCase()) + "</b></span><span class=\"m-rn\"><b>" + esc(r.name) + "</b><small>" + dt(r.at) + "</small></span>" +
        (r.active ? '<em class="ok">Faol ✓</em>' : '<em>Mashq kutilmoqda</em>') + "</li>";
    }).join("") + "</ul>";
  }
  function topHTML() {
    if (!top) return '<p class="m-note">Yuklanmoqda…</p>';
    if (!top.week.length) return '<p class="m-note">Bu hafta hali hech kim yo\'q — birinchi bo\'ling!</p>';
    return '<ol class="m-top">' + top.week.map(function (r, i) { return '<li class="' + (r.me ? "me" : "") + '"><i>' + (i < 3 ? ["🥇", "🥈", "🥉"][i] : i + 1) + "</i><span>" + esc(r.name) + (r.me ? " (siz)" : "") + "</span><b>" + r.n + "</b></li>"; }).join("") + "</ol>";
  }
  function paintProfile() {
    var a = document.getElementById("mRefs"); if (a) a.innerHTML = refsHTML();
    var b = document.getElementById("mTop"); if (b) b.innerHTML = topHTML();
  }


  /* ---------------- Admin ---------------- */
  var AD = { stats: null, list: null, q: "", sort: "seen", open: null, busy: false, err: "" };
  function ago(ts) {
    if (!ts) return "hali kirmagan";
    var s = (Date.now() - ts) / 1000;
    return s < 90 ? "hozir" : s < 3600 ? Math.round(s / 60) + " daq oldin" : s < 86400 ? Math.round(s / 3600) + " soat oldin" : Math.round(s / 86400) + " kun oldin";
  }
  function adLoad(what) {
    if (!K()) return;
    if (what !== "users") K().call("/api/admin/stats").then(function (x) { AD.stats = x; adPaint(); }, function (e) { AD.err = e && e.code === "forbidden" ? "forbidden" : "err"; adPaint(); });
    K().call("/api/admin/users", { q: AD.q, sort: AD.sort, limit: 60 }).then(function (x) { AD.list = x.list; adPaint(); }, function () { AD.err = "err"; adPaint(); });
  }
  function kpi(v, l, sub) { return '<div class="a-kpi"><b>' + v + "</b><small>" + l + "</small>" + (sub ? "<em>" + sub + "</em>" : "") + "</div>"; }
  function chartHTML(days) {
    var max = Math.max(1, Math.max.apply(null, days.map(function (d) { return Math.max(d.n, d.a); })));
    return '<div class="a-chart">' + days.map(function (d) {
      return '<div class="a-col" title="' + d.d + ": " + d.n + " yangi, " + d.a + ' faol"><div class="a-bars"><i class="a-a" style="height:' + (d.a / max * 100) + '%"></i><i class="a-n" style="height:' + (d.n / max * 100) + '%"></i></div><span>' + d.d.slice(3) + "</span></div>";
    }).join("") + '</div><div class="a-leg"><span><i class="a-a"></i>Faol (kirgan)</span><span><i class="a-n"></i>Yangi qo\'shilgan</span></div>';
  }
  function userCard(u) {
    var open = AD.open === u.id;
    return '<li class="a-u' + (open ? " open" : "") + '" data-uid="' + u.id + '"><div class="a-uh" data-act="ad-open" data-id="' + u.id + '"><span class="m-av xs"><b>' + esc((u.name || "?").charAt(0).toUpperCase()) + '</b></span><span class="a-un"><b>' + esc(u.name) + (u.vip ? " 👑" : "") + "</b><small>" + (u.uname ? "@" + esc(u.uname) + " · " : "") + ago(u.seen) + '</small></span><span class="a-us"><b>🔑 ' + u.keys + "</b><small>✅ " + u.exs + " · 👥 " + u.refs + "</small></span></div>" +
      (open ? '<div class="a-give"><div class="a-meta">ID: <code>' + u.id + "</code> · qo'shilgan: " + dt(u.created) + (u.ref_by ? " · taklif orqali" : "") + " · sarflagan: " + u.spent + ' 🔑</div>' +
        '<div class="a-quick">' + [1, 3, 5, 10, 20].map(function (n) { return '<button class="m-btn" data-act="ad-q" data-n="' + n + '">+' + n + "</button>"; }).join("") + "</div>" +
        '<div class="a-row"><input type="number" id="adN" placeholder="Miqdor (minus — olish)"><input id="adNote" placeholder="Izoh (ixtiyoriy)"></div>' +
        '<div class="a-row"><button class="m-btn primary" data-act="ad-give" data-id="' + u.id + '">Kalit berish</button><button class="m-btn" data-act="ad-vip" data-id="' + u.id + '" data-v="' + (u.vip ? "0" : "1") + '">' + (u.vip ? "VIP'ni olish" : "👑 VIP qilish") + "</button></div><div id=\"adMsg\"></div></div>" : "") + "</li>";
  }
  function viewAdmin() {
    var S = KS();
    if (!S) return '<div class="m-page"><p class="m-note">Yuklanmoqda…</p></div>';
    if (!S.admin || AD.err === "forbidden") return '<div class="m-page"><div class="m-card"><h3>⛔ Ruxsat yo\'q</h3><p class="m-note">Bu sahifa faqat admin uchun.</p></div></div>';
    var st = AD.stats, k = st && st.k;
    var h = '<div class="m-page m-adm"><header class="m-title"><h1>Admin panel</h1><button class="m-icbtn" data-act="ad-reload" title="Yangilash">↻</button></header>';
    if (!k) h += '<p class="m-note">Statistika yuklanmoqda…</p>';
    else {
      h += '<div class="a-kpis">' + kpi(k.total, "Jami foydalanuvchi", "+" + k.newToday + " bugun") + kpi(k.activeToday, "Bugun faol", k.active7 + " · 7 kunda") +
        kpi(k.workers, "Mashq bajarganlar", k.exs + " ta mashq") + kpi(k.invited, "Taklif orqali", Math.round(k.total ? k.invited / k.total * 100 : 0) + "%") +
        kpi(k.keys, "Kalit (balans)", k.spent + " sarflangan") + kpi(k.vip, "VIP", k.unlocks + " ochilgan mashq") + "</div>";
      h += '<section class="m-card"><h3>📈 So\'nggi 14 kun</h3>' + chartHTML(st.days) + "</section>";
    }
    h += '<section class="m-card"><h3>👥 Foydalanuvchilar</h3><div class="a-row"><input id="adQ" placeholder="Ism, @username yoki ID" value="' + esc(AD.q) + '"></div>' +
      '<div class="m-seg a-sort">' + [["seen", "Faol"], ["new", "Yangi"], ["exs", "Mashq"], ["refs", "Taklif"]].map(function (x) { return '<button data-sort="' + x[0] + '" class="' + (AD.sort === x[0] ? "on" : "") + '">' + x[1] + "</button>"; }).join("") + "</div>" +
      '<ul class="a-list" id="adList">' + listHTML() + "</ul></section></div>";
    return h;
  }
  function listHTML() {
    if (AD.list == null) return '<li class="m-note">Yuklanmoqda…</li>';
    if (!AD.list.length) return '<li class="m-note">Hech kim topilmadi.</li>';
    return AD.list.map(userCard).join("");
  }
  function adPaint() {
    if (!/^#\/admin/.test(location.hash)) return;
    var v = document.getElementById("view"), y = window.scrollY, focus = document.activeElement && document.activeElement.id === "adQ";
    v.innerHTML = viewAdmin(); wireAdmin(v); window.scrollTo(0, y);
    if (focus) { var q = document.getElementById("adQ"); q.focus(); q.setSelectionRange(q.value.length, q.value.length); }
  }
  var qT = null;
  function wireAdmin(v) {
    var q = document.getElementById("adQ");
    if (q) q.oninput = function () { AD.q = q.value; clearTimeout(qT); qT = setTimeout(function () { adLoad("users"); }, 350); };
    v.querySelectorAll("[data-sort]").forEach(function (b) { b.onclick = function () { AD.sort = b.dataset.sort; AD.list = null; adPaint(); adLoad("users"); }; });
    v.querySelectorAll("[data-act]").forEach(function (b) {
      var a = b.dataset.act;
      b.onclick = function () {
        if (a === "ad-reload") { AD.stats = null; AD.list = null; adPaint(); adLoad(); }
        if (a === "ad-open") { var id = +b.dataset.id; AD.open = AD.open === id ? null : id; adPaint(); }
        if (a === "ad-q") { document.getElementById("adN").value = b.dataset.n; }
        if (a === "ad-give" || a === "ad-vip") {
          var body = { id: +b.dataset.id };
          if (a === "ad-give") { body.n = +document.getElementById("adN").value || 0; body.note = document.getElementById("adNote").value; if (!body.n) { document.getElementById("adMsg").innerHTML = '<div class="wr-err">Miqdorni kiriting.</div>'; return; } }
          else body.vip = b.dataset.v === "1";
          var go = function (ok) {
            if (!ok) return; b.disabled = true;
            K().call("/api/admin/give", body).then(function (x) {
              AD.list = AD.list.map(function (u) { return u.id === x.user.id ? x.user : u; });
              K().toast(a === "ad-vip" ? (body.vip ? "👑 VIP berildi" : "VIP olindi") : "✅ " + esc(x.user.name) + ": " + (body.n > 0 ? "+" : "") + body.n + " 🔑 (endi " + x.user.keys + ")");
              if (x.user.id === (KS() || {}).id) K().load();
              adPaint(); adLoad("stats-only");
            }, function () { b.disabled = false; document.getElementById("adMsg").innerHTML = '<div class="wr-err">Xatolik. Qayta urinib ko\'ring.</div>'; });
          };
          var u = AD.list.filter(function (x) { return x.id === body.id; })[0] || {};
          var txt = a === "ad-vip" ? (body.vip ? u.name + " ga VIP berilsinmi?" : u.name + " dan VIP olinsinmi?") : u.name + " ga " + body.n + " 🔑 berilsinmi?";
          try { W.showConfirm(txt, go); } catch (e) { go(window.confirm(txt)); }
        }
      };
    });
  }

  /* ---------------- mavzu ---------------- */
  function themeMode() { try { var v = localStorage.getItem("cefr_night"); return v === "1" ? "dark" : v === "0" ? "light" : "auto"; } catch (e) { return "auto"; } }
  function setTheme(m) {
    try { if (m === "auto") localStorage.removeItem("cefr_night"); else localStorage.setItem("cefr_night", m === "dark" ? "1" : "0"); } catch (e) {}
    var dark = m === "dark" || (m === "auto" && (W ? W.colorScheme === "dark" : window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches));
    document.body.classList.toggle("night", dark);
  }

  /* ---------------- harakatlar ---------------- */
  function copyText(t, btn) {
    var ok = function () { if (K()) K().toast("📋 Nusxalandi"); };
    try { navigator.clipboard.writeText(t).then(ok, fb); } catch (e) { fb(); }
    function fb() { var i = document.createElement("textarea"); i.value = t; document.body.appendChild(i); i.select(); try { document.execCommand("copy"); ok(); } catch (e) {} i.remove(); }
  }
  function wire(view) {
    view.querySelectorAll("[data-act]").forEach(function (b) {
      var a = b.dataset.act;
      if (a === "tr") { b.onchange = function () { if (window.CEFR_TR) window.CEFR_TR.toggle(); }; return; }
      if (a === "notify") { b.onchange = function () { K().call("/api/notify", { on: b.checked }).then(function (x) { K().setS(x); K().toast(b.checked ? "🔔 Eslatma yoqildi" : "🔕 Eslatma o'chirildi"); }, function () { b.checked = !b.checked; }); }; return; }
      b.onclick = function (e) {
        e.preventDefault(); var S = KS();
        if (a === "share" && K()) K().share();
        if (a === "copycode" && S) copyText(S.code, b);
        if (a === "copylink" && S) copyText(S.link, b);
        if (a === "claim") {
          var v = (document.getElementById("mClaim").value || "").trim(), msg = document.getElementById("mClaimMsg");
          if (!v) return;
          b.disabled = true;
          K().call("/api/claim", { code: v }).then(function (x) { K().setS(x); K().toast("🎁 Kod qabul qilindi: <b>+" + x.got + " 🔑</b>"); render(); }, function (e) {
            b.disabled = false;
            msg.innerHTML = '<div class="wr-err">' + ({ bad_code: "Bunday kod topilmadi.", already: "Siz allaqachon taklif orqali kelgansiz.", too_late: "Kod kiritish muddati o'tgan." }[e && e.code] || "Xatolik. Qayta urinib ko'ring.") + "</div>";
          });
        }
        if (a === "chan-open" && S) { var u = "https://t.me/" + S.channel.replace(/^@/, ""); try { W.openTelegramLink(u); } catch (x) { window.open(u, "_blank"); } }
        if (a === "chan-check") {
          b.disabled = true;
          K().call("/api/chan").then(function (x) {
            K().setS(x); b.disabled = false;
            if (x.got) { K().toast("📢 Obuna uchun <b>+" + x.got + " 🔑</b>"); render(); }
            else document.getElementById("mChMsg").innerHTML = '<div class="wr-err">Obuna topilmadi. Avval kanalga a\'zo bo\'ling.</div>';
          }, function () { b.disabled = false; });
        }
      };
    });
    view.querySelectorAll("[data-theme]").forEach(function (b) { b.onclick = function () { setTheme(b.dataset.theme); render(); }; });
    view.querySelectorAll("[data-sec]").forEach(function (b) {
      b.onclick = function () {
        var k = b.dataset.sec;
        var go = function (ok) { if (!ok) return; K().call("/api/unlock", { item: "sec:" + k }).then(function (x) { K().setS(x); K().toast("🏅 Bo'lim butunlay ochildi!"); render(); }, function () {}); };
        try { W.showConfirm("Shu bo'limni tanlaysizmi? Keyin o'zgartirib bo'lmaydi.", go); } catch (e) { go(window.confirm("Tanlaysizmi?")); }
      };
    });
  }
  function render() { if (window.CEFR_APP) window.CEFR_APP.render(); }

  /* ---------------- to'liq ekran (kompyuterda) ---------------- */
  var DESKTOP = !!(W && /^(tdesktop|macos|web|weba|webk|unigram)$/.test(W.platform || ""));
  function fsOK() { return !!(W && typeof W.requestFullscreen === "function" && (!W.isVersionAtLeast || W.isVersionAtLeast("8.0"))); }
  function isFS() { return !!(W && W.isFullscreen); }
  function toggleFS() {
    if (!fsOK()) { if (K()) K().toast("To'liq ekran uchun Telegram'ni yangilang"); return; }
    try { isFS() ? W.exitFullscreen() : W.requestFullscreen(); } catch (e) {}
  }
  function fsBtn(cls) {
    if (!fsOK()) return "";
    return '<button class="m-fs ' + (cls || "") + '" data-fs title="' + (isFS() ? "Kichraytirish" : "To'liq ekran") + '">' + ic(isFS() ? "exit" : "full") + "<span>" + (isFS() ? "Kichraytirish" : "To'liq ekran") + "</span></button>";
  }
  function paintFS() {
    document.querySelectorAll("[data-fs]").forEach(function (b) {
      b.innerHTML = ic(isFS() ? "exit" : "full") + "<span>" + (isFS() ? "Kichraytirish" : "To'liq ekran") + "</span>";
      b.title = isFS() ? "Kichraytirish" : "To'liq ekran";
    });
    document.documentElement.classList.toggle("tg-fs", isFS());
  }
  document.addEventListener("click", function (e) { var b = e.target.closest && e.target.closest("[data-fs]"); if (b) { e.preventDefault(); toggleFS(); } });
  if (W && W.onEvent) {
    try { W.onEvent("fullscreenChanged", paintFS); } catch (e) {}
    try { W.onEvent("fullscreenFailed", function (x) { if (K()) K().toast(x && x.error === "UNSUPPORTED" ? "Bu qurilmada to'liq ekran ishlamaydi" : "To'liq ekranni yoqib bo'lmadi"); }); } catch (e) {}
  }
  if (DESKTOP) document.documentElement.classList.add("tg-desk");

  /* ---------------- pastki menyu ---------------- */
  var TABS = [["home", "#/", "Asosiy"], ["grid", "#/mashq", "Mashqlar"], ["cal", "#/reja", "Reja"], ["chart", "#/stats", "Natijalar"], ["user", "#/profil", "Profil"]];
  function tabOf(h) {
    var p = h.replace(/^#\/?/, "").split("/")[0];
    if (!p) return 0;
    if (/^(mashq|reading|listening|writing|speaking|lugat|duel|mock|ovoz|qollanma)$/.test(p)) return 1;
    if (p === "guruh" || p === "karta") return 4;
    if (p === "reja") return 2;
    if (p === "stats") return 3;
    if (p === "profil" || p === "kalit" || p === "admin") return 4;
    return 0;
  }
  function nav() {
    var n = document.getElementById("mNav");
    if (!n) {
      n = document.createElement("nav"); n.id = "mNav"; n.className = "m-nav";
      n.innerHTML = '<div class="m-brand">' + avatar("xs") + "<b>CEFR Companion</b></div>" + TABS.map(function (t, i) { return '<a href="' + t[1] + '" data-i="' + i + '">' + ic(t[0]) + "<span>" + t[2] + "</span></a>"; }).join("") + (DESKTOP ? fsBtn("nav") : "");
      document.body.appendChild(n);
      n.addEventListener("click", function () { try { W.HapticFeedback && W.HapticFeedback.selectionChanged(); } catch (e) {} });
    }
    var a = tabOf(location.hash || "#/");
    n.querySelectorAll("a").forEach(function (x, i) { x.classList.toggle("on", i === a); });
    n.hidden = !(window.CEFR_AUTH && window.CEFR_AUTH.current());
  }
  window.addEventListener("hashchange", nav);

  /* ---------------- marshrut ---------------- */
  function route(parts, view) {
    nav();
    var p = parts[0] || "";
    if (window.CEFR_PRO && window.CEFR_PRO.route(parts, view)) return true;
    if (p === "") { view.innerHTML = viewHome(); wire(view); return true; }
    if (p === "mashq") { view.innerHTML = viewMashq(); return true; }
    if (p === "profil") { view.innerHTML = viewProfil(); wire(view); loadRefs(); return true; }
    if (p === "admin") { view.innerHTML = viewAdmin(); wireAdmin(view); if (KS() && KS().admin) adLoad(); return true; }
    return false;
  }
  document.addEventListener("DOMContentLoaded", function () {
    nav();
    if (K()) K().onChange(function () {
      var h = location.hash.replace(/^#\/?/, "");
      if (h === "" || h === "profil") { var y = window.scrollY; render(); window.scrollTo(0, y); }
      if (h === "admin" && !AD.stats && !AD.list) render();
    });
  });
  window.CEFR_MOBILE = { route: route, ic: ic, esc: esc, avatar: avatar, keyPill: keyPill, stats: stats, bySec: bySec, SEC: SEC, PART_SHORT: PART_SHORT, exHref: exHref, partHref: partHref, ring: ring, dt: dt, ago: ago, render: render, firstName: firstName, fullName: fullName };
})();
