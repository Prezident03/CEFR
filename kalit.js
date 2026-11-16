/* CEFR Companion — kalit tizimi (faqat Telegram Mini App ichida, server manzili berilganda ishlaydi) */
(function () {
  var API = String(window.CEFR_KEY_API || "").replace(/\/+$/, "");
  var W = window.Telegram && window.Telegram.WebApp;
  if (!API || !W || !W.initData) return;

  var FREE = 5, FREE_MOCK = 1;
  var SECN = { reading: "Reading", listening: "Listening", writing: "Writing", speaking: "Speaking" };
  var LS = "cefr_kq_" + ((W.initDataUnsafe && W.initDataUnsafe.user && W.initDataUnsafe.user.id) || "x");
  var S = null, err = false, loading = false, topData = null;
  try { S = JSON.parse(localStorage.getItem(LS)); } catch (e) {}

  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  var subs = [];
  function setS(x) { if (!x || x.error) return; S = x; err = false; try { localStorage.setItem(LS, JSON.stringify(S)); } catch (e) {} document.querySelectorAll(".kqN, #kqN").forEach(function (b) { b.textContent = S.keys; }); subs.forEach(function (f) { try { f(S); } catch (e) {} }); }
  function call(path, body) {
    var ctl = window.AbortController ? new AbortController() : null;
    var t = setTimeout(function () { if (ctl) ctl.abort(); }, 12000);
    return fetch(API + path, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(Object.assign({ initData: W.initData }, body || {})), signal: ctl && ctl.signal })
      .then(function (r) { return r.json().then(function (j) { clearTimeout(t); if (!r.ok) { var e = new Error(j.error || "http"); e.code = j.error; e.data = j; throw e; } return j; }); }, function (e) { clearTimeout(t); throw e; });
  }
  function rerender() { if (window.CEFR_APP && window.CEFR_APP.render) window.CEFR_APP.render(); }
  function toast(msg) {
    var t = document.createElement("div"); t.className = "kq-toast"; t.innerHTML = msg; document.body.appendChild(t);
    setTimeout(function () { t.classList.add("on"); }, 20);
    setTimeout(function () { t.classList.remove("on"); setTimeout(function () { t.remove(); }, 400); }, 3600);
    try { W.HapticFeedback && W.HapticFeedback.notificationOccurred("success"); } catch (e) {}
  }

  function load() {
    loading = true;
    return call("/api/me").then(function (x) {
      loading = false; var first = !S; setS(x);
      if (!S.dailyDone) daily();
      if (first || /#\/kalit/.test(location.hash) || pendingGate) { pendingGate = false; rerender(); } else decorate();
    }, function () { loading = false; err = true; if (pendingGate || !S) { pendingGate = false; rerender(); } });
  }
  function daily() {
    call("/api/daily").then(function (x) {
      setS(x);
      if (x.got) toast("🔥 Kunlik bonus: <b>+" + x.got + " 🔑</b>" + (x.streak > 1 ? " · " + x.streak + " kun ketma-ket" : "") + (x.got > 1 ? " (7 kunlik bonus!)" : ""));
      if (/#\/kalit/.test(location.hash)) rerender();
    }, function () {});
  }

  /* ---------- mashq → kalit ---------- */
  function itemOf(parts) {
    var a = parts[0], b = parts[1], n;
    if (a === "reading" && /^p[1-5]$/.test(b) && parts[2]) n = parseInt(parts[2], 10);
    else if (a === "listening" && /^l[1-6]$/.test(b) && parts[2]) n = parseInt(parts[2], 10);
    else if (a === "writing" && /^(w1|w2|wt|wx)$/.test(b) && parts[2]) n = parseInt(parts[2], 10);
    else if (a === "speaking" && b === "x" && parts[2]) { n = parseInt(parts[2], 10); b = !parts[3] || parts[3] === "all" ? "sx" : parts[3]; }
    else if (a === "speaking" && /^s[1-4x]$/.test(b) && parts[2]) n = parseInt(parts[2], 10);
    else return null;
    if (!n) return null;
    return { sec: a, part: b, n: n, id: b + "." + n, cost: /^(wx|sx)$/.test(b) ? 2 : 1 };
  }
  var order = null;
  function orderOf(part) {
    if (!order) {
      order = {};
      try { (window.CEFR_APP.catalog() || []).forEach(function (c) { order[c.id] = c.list.map(function (x) { return x.n; }); }); } catch (e) {}
    }
    return order[part];
  }
  function isFree(it) {
    var o = orderOf(it.part); if (!o) return true;
    var i = o.indexOf(it.n); if (i < 0) return true;
    return i < (it.cost > 1 ? FREE_MOCK : FREE);
  }
  function wasDone(it) {
    try { var p = window.CEFR_STORE.getState().progress[it.sec + "." + it.part + "." + it.n]; return !!(p && p.done); } catch (e) { return false; }
  }
  function isOpen(it) {
    if (isFree(it) || wasDone(it)) return true;
    if (!S) return false;
    return !!(S.all || S.sec === it.sec || (S.unlocked || []).indexOf(it.id) >= 0);
  }

  var pendingGate = false;
  function gate(parts, view) {
    if (parts[0] === "kalit" && window.CEFR_MOBILE) { location.replace("#/profil"); return true; }
    if (parts[0] === "kalit") { view.innerHTML = pageHTML(); wirePage(view); if (!topData) loadTop(view); return true; }
    var it = itemOf(parts);
    if (!it || isOpen(it)) return false;
    if (window.CEFR_SPEAK && window.CEFR_SPEAK.stop) try { window.CEFR_SPEAK.stop(); } catch (e) {}
    if (!S) {
      pendingGate = true;
      if (!loading) load();
      view.innerHTML = '<div class="wrap"><div class="kq-lock-box">' + (err ? '<h2>Server bilan bog\'lanib bo\'lmadi</h2><p>Internetni tekshirib, qayta urinib ko\'ring.</p><button class="btn primary" id="kqRetry">Qayta urinish</button>' : "<p>Yuklanmoqda…</p>") + "</div></div>";
      var r = document.getElementById("kqRetry"); if (r) r.onclick = function () { err = false; gate(parts, view); };
      return true;
    }
    view.innerHTML = lockHTML(it); wireLock(view, it);
    return true;
  }
  function backOf(it) { return it.sec === "speaking" ? "#/speaking/" + (it.part === "sx" ? "m" : it.part) : "#/" + it.sec + "/" + it.part; }
  function lockHTML(it) {
    var enough = S.keys >= it.cost;
    var what = it.cost > 1 ? "Bu mock imtihon" : "Bu mashq";
    return '<div class="wrap"><div class="crumbs"><a href="#/">Bosh sahifa</a> <span>/</span> <a href="' + backOf(it) + '">Orqaga</a></div>' +
      '<div class="kq-lock-box"><div class="kq-ico">🔒</div><h2>' + what + " yopiq</h2>" +
      "<p>Ochish uchun <b>" + it.cost + " 🔑</b> kerak. Sizda: <b>" + S.keys + " 🔑</b></p>" +
      '<p class="kq-sub">Har bir bo\'limdagi dastlabki ' + FREE + " ta mashq va birinchi mock bepul. Ochilgan mashq siz uchun doim ochiq qoladi.</p>" +
      (enough ? '<button class="btn primary kq-big" id="kqOpen">' + it.cost + " 🔑 bilan ochish</button>" : '<div class="kq-need">Kalit yetmayapti — do\'stlaringizni taklif qiling: har biri uchun <b>+3 🔑</b></div>') +
      '<div class="btn-row kq-row"><button class="btn ' + (enough ? "ghost" : "primary") + '" id="kqShare">📨 Do\'stlarni taklif qilish</button><button class="btn ghost" onclick="location.hash=\'#/kalit\'">🔑 Kalitlar</button></div>' +
      '<div id="kqMsg"></div></div></div>';
  }
  function wireLock(view, it) {
    var o = document.getElementById("kqOpen");
    if (o) o.onclick = function () {
      o.disabled = true; o.textContent = "Ochilmoqda…";
      call("/api/unlock", { item: it.id }).then(function (x) { setS(x); toast("🔓 Ochildi! Qolgan kalitlar: <b>" + S.keys + " 🔑</b>"); rerender(); }, function (e) {
        if (e && e.data && e.data.keys != null) setS(e.data);
        document.getElementById("kqMsg").innerHTML = '<div class="wr-err">' + (e && e.code === "no_keys" ? "Kalit yetmayapti." : "Xatolik yuz berdi. Qayta urinib ko'ring.") + "</div>";
        o.disabled = false; o.textContent = it.cost + " 🔑 bilan ochish";
      });
    };
    document.getElementById("kqShare").onclick = share;
  }

  /* ---------- ulashish ---------- */
  var SHARE_TXT = "Multilevel imtihoniga birga tayyorlanamiz! Reading, Listening, Writing, Speaking mashqlari, mock testlar — hammasi bitta ilovada 👇";
  function share() {
    if (!S) return;
    var u = "https://t.me/share/url?url=" + encodeURIComponent(S.link) + "&text=" + encodeURIComponent(SHARE_TXT);
    try { W.openTelegramLink(u); } catch (e) { window.open(u, "_blank"); }
  }
  function copy(btn) {
    var done = function () { btn.textContent = "✓ Nusxalandi"; setTimeout(function () { btn.textContent = "Nusxalash"; }, 1800); };
    try { navigator.clipboard.writeText(S.link).then(done, fallback); } catch (e) { fallback(); }
    function fallback() { var i = document.getElementById("kqLink"); i.select(); try { document.execCommand("copy"); done(); } catch (e) {} }
  }

  /* ---------- kalitlar sahifasi ---------- */
  function bar(v, max) { return '<div class="bar"><span style="width:' + Math.min(100, Math.round(v / max * 100)) + '%"></span></div>'; }
  function pageHTML() {
    if (!S) { if (!loading) load(); return '<div class="wrap"><div class="kq-lock-box">' + (err ? "<h2>Server bilan bog'lanib bo'lmadi</h2><p>Keyinroq qayta urinib ko'ring.</p>" : "<p>Yuklanmoqda…</p>") + "</div></div>"; }
    var secPick = "";
    if (S.arefs >= S.secAt && !S.sec && !S.all) {
      secPick = '<div class="kq-card kq-gold"><h3>🏅 Siz Elchisiz! Bitta bo\'limni butunlay oching</h3><p>Tanlang — keyin o\'zgartirib bo\'lmaydi.</p><div class="kq-secs">' +
        Object.keys(SECN).map(function (k) { return '<button class="btn ghost" data-sec="' + k + '">' + SECN[k] + "</button>"; }).join("") + "</div></div>";
    }
    var status = S.all ? "👑 Barcha mashqlar umrbod ochiq" : S.sec ? "🏅 " + SECN[S.sec] + " bo'limi butunlay ochiq" : "";
    var top = topHTML();
    return '<div class="wrap"><div class="crumbs"><a href="#/">Bosh sahifa</a> <span>/</span> Kalitlar</div>' +
      '<div class="kq-hero"><div class="kq-big-n">' + S.keys + ' <span>🔑</span></div><p>kalitingiz bor</p>' + (status ? '<div class="kq-status">' + status + "</div>" : "") +
      '<div class="kq-mini"><span>🔥 ' + (S.streak || 0) + " kun ketma-ket</span><span>👥 " + S.refs + " do'st</span><span>✅ " + S.arefs + " faol</span></div></div>" +
      secPick +
      '<div class="kq-card"><h3>📨 Do\'stlarni taklif qiling</h3><p>Do\'stingiz havolangiz orqali kirsa — sizga <b>+3 🔑</b>, unga ham <b>+2 🔑</b> bonus. U birinchi mashqini bajarsa, sizga yana <b>+2 🔑</b>.</p>' +
      '<div class="kq-link"><input id="kqLink" readonly value="' + esc(S.link) + '"><button class="btn ghost sm" id="kqCopy">Nusxalash</button></div>' +
      '<button class="btn primary kq-big" id="kqShare2">Telegram\'da ulashish</button></div>' +
      '<div class="kq-card"><h3>🎯 Maqsadlar</h3>' +
      '<div class="kq-goal"><div><b>' + S.secAt + " ta faol do'st</b> — \"Elchi\" nishoni va bitta bo'lim butunlay ochiladi</div>" + bar(S.arefs, S.secAt) + "<small>" + Math.min(S.arefs, S.secAt) + " / " + S.secAt + "</small></div>" +
      '<div class="kq-goal"><div><b>' + S.allAt + " ta faol do'st</b> — barcha mashqlar umrbod ochiladi</div>" + bar(S.arefs, S.allAt) + "<small>" + Math.min(S.arefs, S.allAt) + " / " + S.allAt + "</small></div>" +
      '<p class="kq-sub">Faol do\'st — havolangiz orqali kelib, kamida bitta mashq bajargan do\'st.</p></div>' +
      '<div class="kq-card"><h3>🔑 Kalit qanday topiladi</h3><ul class="kq-earn">' +
      "<li><span>Do'st qo'shilsa</span><b>+3</b></li><li><span>Do'st birinchi mashqini bajarsa</span><b>+2</b></li>" +
      "<li><span>Har kuni kirish</span><b>+1</b></li><li><span>7 kun ketma-ket</span><b>+3</b></li>" +
      "<li><span>Mashqni 90%+ bajarish (kuniga 2 marta)</span><b>+1</b></li>" +
      (S.channel ? "<li><span>Kanalga obuna bo'lish (bir marta)</span><b>+2</b></li>" : "") + "</ul>" +
      (S.channel && !S.chan ? '<div class="btn-row"><button class="btn ghost" id="kqJoin">' + esc(S.channel) + ' kanalini ochish</button><button class="btn primary" id="kqChk">Obunani tekshirish</button></div><div id="kqChMsg"></div>' : S.channel ? '<p class="kq-sub">✓ Kanal obunasi uchun kalit olingan.</p>' : "") +
      "</div>" +
      '<div class="kq-card"><h3>💸 Kalit nimaga sarflanadi</h3><ul class="kq-earn"><li><span>Bitta yopiq mashqni ochish</span><b>1 🔑</b></li><li><span>Bitta mock imtihonni ochish (Writing / Speaking)</span><b>2 🔑</b></li></ul>' +
      '<p class="kq-sub">Har bir bo\'limdagi dastlabki ' + FREE + " ta mashq va birinchi mock har doim bepul. Ochilgan mashq doim ochiq qoladi.</p></div>" +
      '<div class="kq-card" id="kqTop">' + top + "</div></div>";
  }
  function topHTML() {
    if (!topData) return "<h3>🏆 Reyting</h3><p class=\"kq-sub\">Yuklanmoqda…</p>";
    function lst(a) { return a.length ? '<ol class="kq-top">' + a.map(function (r) { return '<li class="' + (r.me ? "me" : "") + '"><span>' + esc(r.name) + (r.me ? " (siz)" : "") + "</span><b>" + r.n + "</b></li>"; }).join("") + "</ol>" : '<p class="kq-sub">Hali hech kim yo\'q — birinchi bo\'ling!</p>'; }
    return "<h3>🏆 Haftaning eng faol taklif qiluvchilari</h3>" + lst(topData.week) + '<details class="wr-chk"><summary>Umumiy reyting</summary>' + lst(topData.all) + "</details>";
  }
  function loadTop() {
    call("/api/top").then(function (x) { topData = x; var b = document.getElementById("kqTop"); if (b) b.innerHTML = topHTML(); }, function () {});
  }
  function wirePage(view) {
    if (!S) return;
    document.getElementById("kqShare2").onclick = share;
    document.getElementById("kqCopy").onclick = function () { copy(this); };
    view.querySelectorAll("[data-sec]").forEach(function (b) {
      b.onclick = function () {
        var k = b.dataset.sec;
        var go = function (ok) { if (!ok) return; call("/api/unlock", { item: "sec:" + k }).then(function (x) { setS(x); toast("🏅 " + SECN[k] + " bo'limi butunlay ochildi!"); rerender(); }, function () { toast("Xatolik. Qayta urinib ko'ring."); }); };
        try { W.showConfirm(SECN[k] + " bo'limini tanlaysizmi? Keyin o'zgartirib bo'lmaydi.", go); } catch (e) { go(window.confirm(SECN[k] + " bo'limini tanlaysizmi?")); }
      };
    });
    var j = document.getElementById("kqJoin");
    if (j) j.onclick = function () { var u = "https://t.me/" + S.channel.replace(/^@/, ""); try { W.openTelegramLink(u); } catch (e) { window.open(u, "_blank"); } };
    var c = document.getElementById("kqChk");
    if (c) c.onclick = function () {
      c.disabled = true;
      call("/api/chan").then(function (x) {
        setS(x); c.disabled = false;
        if (x.got) { toast("📢 Obuna uchun <b>+" + x.got + " 🔑</b>"); rerender(); }
        else document.getElementById("kqChMsg").innerHTML = '<div class="wr-err">Obuna topilmadi. Avval kanalga a\'zo bo\'ling, keyin qayta tekshiring.</div>';
      }, function () { c.disabled = false; document.getElementById("kqChMsg").innerHTML = '<div class="wr-err">Tekshirib bo\'lmadi. Keyinroq urinib ko\'ring.</div>'; });
    };
  }

  /* ---------- ro'yxatlarda qulf belgisi, bosh sahifa kartasi ---------- */
  var dTimer = null;
  function decorate() {
    var view = document.getElementById("view"); if (!view) return;
    order = null;
    view.querySelectorAll("[onclick*=\"location.hash='#/\"]").forEach(function (el) {
      var m = /location\.hash='#\/([^']+)'/.exec(el.getAttribute("onclick")); if (!m) return;
      var it = itemOf(m[1].split("/").filter(Boolean));
      el.classList.toggle("kq-locked", !!(it && !isOpen(it)));
    });
    var h = location.hash.replace(/^#\/?/, "");
    if (!h && S && !window.CEFR_MOBILE && !view.querySelector(".kq-home")) {
      var cards = view.querySelector(".cards");
      if (cards) {
        var d = document.createElement("div"); d.className = "kq-home"; d.onclick = function () { location.hash = "#/kalit"; };
        d.innerHTML = "<div><b>" + S.keys + " 🔑 kalit</b><span>Do'stlaringizni taklif qiling — har biri uchun +3 🔑</span></div><i>→</i>";
        cards.parentNode.insertBefore(d, cards);
      }
    }
  }
  document.addEventListener("DOMContentLoaded", function () {
    var view = document.getElementById("view");
    if (view) new MutationObserver(function () { clearTimeout(dTimer); dTimer = setTimeout(decorate, 30); }).observe(view, { childList: true, subtree: true });
    // natijalar → server (birinchi mashq, 90%+)
    var T = window.CEFR_TRACK;
    if (T && T.attempt && !T._kq) {
      var orig = T.attempt;
      T.attempt = function (part, n, score, total) {
        var r = orig.apply(this, arguments);
        var pct = total ? Math.round(score / total * 100) : 0;
        if (S) call("/api/event", { pct: pct }).then(function (x) { setS(x); if (x.got) toast("⭐ A'lo natija: <b>+" + x.got + " 🔑</b>"); }, function () {});
        return r;
      };
      T._kq = true;
    }
  });
  load();

  window.CEFR_KEY = {
    gate: gate,
    state: function () { return S; },
    failed: function () { return err; },
    call: call, setS: setS, share: share, toast: toast, load: load,
    onChange: function (f) { subs.push(f); },
    free: FREE,
    badge: function () { return '<button class="icon-btn kq-badge" onclick="location.hash=\'#/kalit\'" title="Kalitlar">🔑 <b id="kqN">' + (S ? S.keys : "…") + "</b></button>"; }
  };
})();
