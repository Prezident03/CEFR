/* CEFR Companion — hisob (kirish), vaqtni hisoblash va statistika.
   Ilova Claude artifact sifatida ochilsa: Claude hisobi orqali, natijalar bulutda (har kimniki alohida).
   Oddiy sayt / fayl sifatida ochilsa: shu qurilmadagi shaxsiy hisob (ism + PIN). */
(function () {
  "use strict";

  var SKILLS = {
    p1: { name: "Bo'shliqqa so'z yozish", part: "p1" },
    p2: { name: "E'lonni vaziyatga moslash", part: "p2" },
    p3: { name: "Paragrafga sarlavha tanlash", part: "p3" },
    p4m: { name: "Matn bo'yicha test", part: "p4" },
    p4t: { name: "To'g'ri / Noto'g'ri / Berilmagan", part: "p4" },
    p5g: { name: "Matndan so'z topish", part: "p5" },
    p5m: { name: "Murakkab test (C1)", part: "p5" },
    l1: { name: "Gapga mos javob tanlash (tinglab)", part: "l1" },
    l2: { name: "Monologdan ma'lumot yozish (tinglab)", part: "l2" },
    l3: { name: "Gapiruvchini fikrga moslash (tinglab)", part: "l3" },
    l4: { name: "Xaritada joyni belgilash (tinglab)", part: "l4" },
    l5: { name: "Parchalar bo'yicha test (tinglab)", part: "l5" },
    l6: { name: "Ma'ruzadan bo'shliq to'ldirish (tinglab)", part: "l6" }
  };
  function sec(part) { return part.charAt(0) === "l" ? "listening" : "reading"; }
  function base(part) { return "#/" + sec(part) + "/" + part; }
  var PART_NAMES = { p1: "Reading 1", p2: "Reading 2", p3: "Reading 3", p4: "Reading 4", p5: "Reading 5", l1: "Listening 1", l2: "Listening 2", l3: "Listening 3", l4: "Listening 4", l5: "Listening 5", l6: "Listening 6", o: "Boshqa sahifalar" };
  var WD = ["Du", "Se", "Ch", "Pa", "Ju", "Sh", "Ya"];
  var MONTHS = ["yan", "fev", "mar", "apr", "may", "iyn", "iyl", "avg", "sen", "okt", "noy", "dek"];

  /* ---------------- yordamchilar ---------------- */
  function ls(k, v) {
    try {
      if (v === undefined) return localStorage.getItem(k);
      if (v === null) localStorage.removeItem(k); else localStorage.setItem(k, v);
    } catch (e) { return null; }
    return null;
  }
  function jget(k) { try { return JSON.parse(ls(k)); } catch (e) { return null; } }
  function jset(k, o) { ls(k, JSON.stringify(o)); }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function pad(x) { return ("0" + x).slice(-2); }
  function dayKey(ts) { var d = new Date(ts); return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate()); }
  function keyToDate(k) { var p = k.split("-"); return new Date(+p[0], +p[1] - 1, +p[2]); }
  function addDays(d, n) { var x = new Date(d.getFullYear(), d.getMonth(), d.getDate()); x.setDate(x.getDate() + n); return x; }
  function fmtDur(sec) {
    sec = Math.round(sec || 0);
    if (sec < 60) return sec ? sec + " soniya" : "0 daq";
    var m = Math.round(sec / 60);
    if (m < 60) return m + " daq";
    var h = Math.floor(m / 60), mm = m % 60;
    return h + " soat" + (mm ? " " + mm + " daq" : "");
  }
  function fmtShort(sec) {
    var m = Math.round((sec || 0) / 60);
    if (m < 60) return m + "d";
    return (m / 60).toFixed(m >= 600 ? 0 : 1).replace(".0", "") + "s";
  }
  function fmtWhen(ts) {
    var d = new Date(ts), now = new Date();
    var t = pad(d.getHours()) + ":" + pad(d.getMinutes());
    if (dayKey(ts) === dayKey(+now)) return "Bugun, " + t;
    if (dayKey(ts) === dayKey(+addDays(now, -1))) return "Kecha, " + t;
    return d.getDate() + "-" + MONTHS[d.getMonth()] + ", " + t;
  }
  function pctOf(c, t) { return t ? Math.round(c / t * 100) : 0; }
  function hash(str) { // cyrb53 — faqat shu qurilmadagi PINni ochiq saqlamaslik uchun
    var h1 = 0xdeadbeef, h2 = 0x41c6ce57;
    for (var i = 0; i < str.length; i++) {
      var ch = str.charCodeAt(i);
      h1 = Math.imul(h1 ^ ch, 2654435761); h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
    return (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString(36);
  }
  function emptyState() { return { progress: {}, history: [] }; }
  function emptyStats() { return { v: 1, created: Date.now(), days: {}, ex: {}, skills: {}, reveals: {}, log: [], sessions: [] }; }
  function fixStats(s) {
    var e = emptyStats();
    if (!s || typeof s !== "object") return e;
    for (var k in e) if (s[k] == null) s[k] = e[k];
    return s;
  }
  function app() { return window.CEFR_APP; }
  function rerender() { if (app()) app().render(); }

  /* ---------------- holat ---------------- */
  var ready = false;
  var cur = null;            // { id, name, mode: "cloud" | "local" }
  var data = { state: emptyState(), stats: emptyStats() };
  var note = "";             // kirish sahifasidagi qo'shimcha izoh
  var cloud = { db: null, user: null, uid: null, writable: true, busy: {}, again: {}, offline: false };
  var displayName = "";
  var lastStatsSave = 0;

  /* ---------------- saqlash ---------------- */
  function localKey(kind) { return (cur.mode === "cloud" ? "cefr_c_" : cur.mode === "tg" ? "cefr_t_" : "cefr_u_") + cur.id + "_" + kind; }

  /* ---- Telegram CloudStorage (kalit: 1–128 belgi, qiymat ≤ 4096 belgi) ---- */
  var tg = { cs: null, timers: {}, busy: {}, again: {}, sent: {}, offline: false };
  var TG_CHUNK = 3900;
  function tgCall(fn, args) {
    return new Promise(function (res, rej) {
      try { tg.cs[fn].apply(tg.cs, args.concat([function (err, val) { if (err) rej(err); else res(val); }])); }
      catch (e) { rej(e); }
    });
  }
  function tgLoad(kind) {
    return tgCall("getItem", [kind + "_n"]).then(function (n) {
      n = parseInt(n, 10) || 0;
      if (!n) return null;
      var keys = []; for (var i = 0; i < n; i++) keys.push(kind + "_" + i);
      return tgCall("getItems", [keys]).then(function (vals) {
        var str = keys.map(function (k) { return (vals && vals[k]) || ""; }).join("");
        tg.sent[kind] = keys.map(function (k) { return (vals && vals[k]) || ""; });
        try { return JSON.parse(str); } catch (e) { return null; }
      });
    });
  }
  function tgWrite(kind, now) {
    clearTimeout(tg.timers[kind]);
    if (!now) { tg.timers[kind] = setTimeout(function () { tgWrite(kind, true); }, 2000); return; }
    if (tg.busy[kind]) { tg.again[kind] = true; return; }
    var str = JSON.stringify(data[kind]), parts = [];
    for (var i = 0; i < str.length; i += TG_CHUNK) parts.push(str.slice(i, i + TG_CHUNK));
    if (parts.length > 480) return; // xavfsizlik chegarasi (~1.8 MB)
    var old = tg.sent[kind] || [], jobs = [];
    parts.forEach(function (c, i) { if (old[i] !== c) jobs.push(tgCall("setItem", [kind + "_" + i, c])); });
    tg.busy[kind] = true;
    Promise.all(jobs).then(function () {
      return tgCall("setItem", [kind + "_n", String(parts.length)]);
    }).then(function () {
      var extra = []; for (var j = parts.length; j < old.length; j++) extra.push(kind + "_" + j);
      tg.sent[kind] = parts;
      if (tg.offline) { tg.offline = false; rerender(); }
      if (extra.length) return tgCall("removeItems", [extra]).catch(function () {});
    }, function () {
      tg.sent[kind] = [];
      if (!tg.offline) { tg.offline = true; rerender(); }
      setTimeout(function () { tgWrite(kind, true); }, 5000 + Math.random() * 3000);
    }).then(function () {
      tg.busy[kind] = false;
      if (tg.again[kind]) { tg.again[kind] = false; tgWrite(kind, true); }
    });
  }
  function startTg(u, cs) {
    tg.cs = cs;
    var id = "tg" + u.id;
    var name = ((u.first_name || "") + " " + (u.last_name || "")).trim() || u.username || "Siz";
    var user0 = { id: id, name: name, mode: "tg" };
    var mirrorState = jget("cefr_t_" + id + "_state"), mirrorStats = jget("cefr_t_" + id + "_stats");
    if (!cs) { enter(user0, mirrorState, mirrorStats); return; }
    var done = false;
    var timer = setTimeout(function () { if (done) return; done = true; tg.offline = true; enter(user0, mirrorState, mirrorStats); }, 8000);
    Promise.all([tgLoad("state"), tgLoad("stats")]).then(function (r) {
      var cs0 = r[0], ct = r[1];
      if (done) {
        if (cs0 && newer(cs0, data.state) === cs0) { data.state = cs0; if (app()) app().setState(cs0); } else persist("state");
        if (ct && newer(ct, data.stats) === ct) data.stats = fixStats(ct); else persist("stats");
        tg.offline = false; rerender(); return;
      }
      done = true; clearTimeout(timer);
      var st = newer(cs0, mirrorState), sx = newer(ct, mirrorStats);
      enter(user0, st, sx);
      if (st && st !== cs0) persist("state");
      if (sx && sx !== ct) persist("stats");
    }, function () {
      if (done) return; done = true; clearTimeout(timer); tg.offline = true;
      enter(user0, mirrorState, mirrorStats);
    });
  }

  function persist(kind) {
    if (!cur) return;
    var obj = data[kind];
    obj.updated = Date.now();
    jset(localKey(kind), obj);
    if (kind === "stats") lastStatsSave = Date.now();
    if (cur.mode === "cloud" && cloud.writable) cloudWrite(kind);
    if (cur.mode === "tg" && tg.cs) tgWrite(kind);
  }

  var cloudTimers = {};
  function cloudWrite(kind, now) {
    clearTimeout(cloudTimers[kind]);
    if (!now) { cloudTimers[kind] = setTimeout(function () { cloudWrite(kind, true); }, 2500); return; }
    if (cloud.busy[kind]) { cloud.again[kind] = true; return; }
    var ref;
    try { ref = cloud.db.doc("data/users/" + cloud.uid + "/" + kind); } catch (e) { return; }
    cloud.busy[kind] = true;
    var body = JSON.parse(JSON.stringify(data[kind]));
    ref.set(body).then(function () {
      if (cloud.offline) { cloud.offline = false; rerender(); }
    }, function (err) {
      var code = err && err.code;
      if (code === "invalid_argument" || code === "not_granted" || code === "revoked" || code === "capability_disabled") {
        cloud.writable = false; rerender();
      } else if (code === "quota_exceeded") {
        cloud.writable = false; rerender();
      } else {
        cloud.offline = true;
        setTimeout(function () { cloudWrite(kind, true); }, 4000 + Math.random() * 3000);
      }
    }).then(function () {
      cloud.busy[kind] = false;
      if (cloud.again[kind]) { cloud.again[kind] = false; cloudWrite(kind, true); }
    });
  }

  function flushAll() {
    if (!cur) return;
    persist("stats");
    if (cur.mode === "cloud" && cloud.writable) { cloudWrite("stats", true); cloudWrite("state", true); }
    if (cur.mode === "tg" && tg.cs) { tgWrite("stats", true); tgWrite("state", true); }
  }

  window.CEFR_STORE = {
    getState: function () { return data.state; },
    saveState: function (s) { data.state = s; persist("state"); }
  };

  /* ---------------- kirish ---------------- */
  function enter(user, state, stats) {
    cur = user;
    data.state = state && state.progress ? state : emptyState();
    if (!data.state.history) data.state.history = [];
    data.stats = fixStats(stats);
    if (app()) app().setState(data.state);
    ready = true;
    resetRoute();
    rerender();
  }

  function importLegacyIfAny(flagKey) {
    if (ls(flagKey)) return null;
    var legacy = app() && app().legacyState();
    ls(flagKey, "1");
    return legacy && Object.keys(legacy.progress).length ? legacy : null;
  }

  // ---- Claude hisobi (artifact ichida) ----
  function startCloud(db, user, uid) {
    cloud.db = db; cloud.user = user; cloud.uid = uid;
    var user0 = { id: uid, name: "", mode: "cloud" };
    user.name().then(function (n) { displayName = n || ""; if (cur) rerender(); }, function () {});
    var mirrorState = jget("cefr_c_" + uid + "_state"), mirrorStats = jget("cefr_c_" + uid + "_stats");
    var done = false;
    var timer = setTimeout(function () {
      if (done) return; done = true; cloud.offline = true;
      enter(user0, mirrorState, mirrorStats);
    }, 10000);
    Promise.all([db.doc("data/users/" + uid + "/state").get(), db.doc("data/users/" + uid + "/stats").get()]).then(function (snaps) {
      var cs = snaps[0].exists ? snaps[0].data() : null, ct = snaps[1].exists ? snaps[1].data() : null;
      cs = cs ? JSON.parse(JSON.stringify(cs)) : null; ct = ct ? JSON.parse(JSON.stringify(ct)) : null;
      var st = newer(cs, mirrorState), sx = newer(ct, mirrorStats);
      var needState = !cs || st !== cs, needStats = !ct || sx !== ct;
      if (!st) { var leg = importLegacyIfAny("cefr_legacy_c_" + uid); if (leg) { st = leg; needState = true; } }
      if (done) {
        // vaqt tugab, nusxadan ochilgan edi: yangiroq bulut ma'lumotini olamiz
        if (cs && newer(cs, data.state) === cs) { data.state = cs; if (app()) app().setState(cs); }
        else if (data.state && data.state.updated) persist("state");
        if (ct && newer(ct, data.stats) === ct) data.stats = fixStats(ct);
        else persist("stats");
        cloud.offline = false; rerender();
        return;
      }
      done = true; clearTimeout(timer);
      enter(user0, st, sx);
      if (needState && st) persist("state");
      if (needStats && sx) persist("stats");
    }, function () {
      if (done) return; done = true; clearTimeout(timer); cloud.offline = true;
      enter(user0, mirrorState, mirrorStats);
    });
  }
  function newer(a, b) { if (!a) return b; if (!b) return a; return (b.updated || 0) > (a.updated || 0) ? b : a; }

  // ---- shu qurilmadagi hisoblar ----
  function accounts() { return jget("cefr_accounts") || []; }
  function saveAccounts(a) { jset("cefr_accounts", a); }
  function startLocal(why) {
    if (ready && cur) return;
    note = why || "";
    var sid = ls("cefr_session");
    var acc = accounts().filter(function (a) { return a.id === sid; })[0];
    if (acc) { loginLocal(acc); return; }
    ready = true; cur = null;
    rerender();
  }
  function loginLocal(acc) {
    ls("cefr_session", acc.id);
    var list = accounts();
    list.forEach(function (a) { if (a.id === acc.id) a.last = Date.now(); });
    saveAccounts(list);
    enter({ id: acc.id, name: acc.name, mode: "local" }, jget("cefr_u_" + acc.id + "_state"), jget("cefr_u_" + acc.id + "_stats"));
  }
  function createLocal(name, pin, importOld) {
    var id = "u" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
    var list = accounts();
    list.push({ id: id, name: name, pin: hash(id + ":" + pin), created: Date.now(), last: Date.now() });
    saveAccounts(list);
    if (importOld) {
      var leg = app() && app().legacyState();
      if (leg) { jset("cefr_u_" + id + "_state", leg); ls("cefr_legacy_local", "1"); }
    }
    loginLocal(list[list.length - 1]);
  }
  function logout() {
    flushAll();
    ls("cefr_session", null);
    cur = null; data = { state: emptyState(), stats: emptyStats() };
    if (app()) app().setState(data.state);
    location.hash = "#/";
    rerender();
  }

  function init() {
    var W = window.Telegram && window.Telegram.WebApp;
    var tu = W && W.initDataUnsafe && W.initDataUnsafe.user;
    if (tu && tu.id) {
      var csOk = W.CloudStorage && (!W.isVersionAtLeast || W.isVersionAtLeast("6.9"));
      startTg(tu, csOk ? W.CloudStorage : null);
      return;
    }
    var c = window.claude;
    if (c && typeof c.use === "function") {
      var settled = false;
      var guard = setTimeout(function () { if (!settled) { settled = true; startLocal(); } }, 11000);
      Promise.all([c.use("db"), c.use("user")]).then(function (r) {
        var db = r[0], user = r[1];
        if (!db || !user) throw 0;
        return user.id().then(function (uid) {
          if (!uid) throw 0;
          if (settled) return;
          settled = true; clearTimeout(guard);
          startCloud(db, user, uid);
        });
      }).catch(function () {
        if (settled) return;
        settled = true; clearTimeout(guard);
        startLocal("Claude hisobi orqali saqlash bu oynada ishlamadi, shuning uchun shu qurilmadagi hisobdan foydalaning.");
      });
    } else {
      startLocal();
    }
  }

  /* ---------------- kirish sahifasi ---------------- */
  var loginMode = null, pickId = null, loginErr = "";
  function loginHTML() {
    var list = accounts().slice().sort(function (a, b) { return (b.last || 0) - (a.last || 0); });
    var mode = loginMode || (list.length ? "pick" : "new");
    var legacy = app() && app().legacyState();
    var hasLegacy = legacy && Object.keys(legacy.progress || {}).length && !ls("cefr_legacy_local");
    var body = "";
    if (mode === "pick") {
      body = '<h2>Hisobingizni tanlang</h2><p class="auth-sub">Har bir o\'quvchining natijasi va statistikasi alohida saqlanadi.</p>' +
        '<div class="acc-list">' + list.map(function (a) {
          var open = pickId === a.id;
          return '<div class="acc' + (open ? " open" : "") + '">' +
            '<button type="button" class="acc-row" data-pick="' + esc(a.id) + '"><span class="avatar">' + esc(a.name.charAt(0).toUpperCase()) + '</span>' +
            '<span class="acc-meta"><b>' + esc(a.name) + "</b><small>" + (a.last ? "Oxirgi kirish: " + fmtWhen(a.last) : "") + "</small></span><span class=\"acc-go\">›</span></button>" +
            (open ? '<form class="pin-form" data-acc="' + esc(a.id) + '"><label for="pinIn">PIN-kod</label><div class="pin-row">' +
              '<input id="pinIn" type="password" inputmode="numeric" autocomplete="current-password" maxlength="8" placeholder="••••" required>' +
              '<button class="btn primary" type="submit">Kirish</button></div>' + (loginErr ? '<div class="auth-err">' + esc(loginErr) + "</div>" : "") + "</form>" : "") +
            "</div>";
        }).join("") + "</div>" +
        '<button type="button" class="btn ghost wide" data-mode="new">+ Yangi hisob yaratish</button>';
    } else {
      body = '<h2>Yangi hisob</h2><p class="auth-sub">Ismingiz va o\'zingiz eslab qoladigan PIN-kod kiriting.</p>' +
        '<form class="new-form">' +
        '<label for="nmIn">Ismingiz</label><input id="nmIn" type="text" maxlength="30" autocomplete="nickname" placeholder="Masalan: Salohiddin" required>' +
        '<div class="two"><div><label for="p1In">PIN (4–8 raqam)</label><input id="p1In" type="password" inputmode="numeric" maxlength="8" placeholder="••••" required></div>' +
        '<div><label for="p2In">PIN qayta</label><input id="p2In" type="password" inputmode="numeric" maxlength="8" placeholder="••••" required></div></div>' +
        (hasLegacy ? '<label class="chk"><input type="checkbox" id="impIn" checked> Shu qurilmadagi oldingi natijalarni ushbu hisobga o\'tkazish</label>' : "") +
        (loginErr ? '<div class="auth-err">' + esc(loginErr) + "</div>" : "") +
        '<button class="btn primary wide" type="submit">Hisob yaratish va kirish</button></form>' +
        (list.length ? '<button type="button" class="btn ghost wide" data-mode="pick">← Mavjud hisobga kirish</button>' : "");
    }
    return '<div class="wrap auth-wrap"><div class="auth-card">' +
      '<div class="auth-logo">C</div>' + body +
      '<div class="auth-note">' + (note ? esc(note) + " " : "") +
      "Bu hisob shu brauzerda saqlanadi. Ilovani Claude ichida (artifact sifatida) ochsangiz, Claude hisobingiz bilan avtomatik kirasiz va natijalar istalgan qurilmada ko'rinadi.</div>" +
      "</div></div>";
  }
  function renderLogin(view) {
    view.innerHTML = loginHTML();
    view.onclick = null;
    Array.prototype.forEach.call(view.querySelectorAll("[data-pick]"), function (b) {
      b.onclick = function () { pickId = pickId === b.getAttribute("data-pick") ? null : b.getAttribute("data-pick"); loginErr = ""; renderLogin(view); var i = document.getElementById("pinIn"); if (i) i.focus(); };
    });
    Array.prototype.forEach.call(view.querySelectorAll("[data-mode]"), function (b) {
      b.onclick = function () { loginMode = b.getAttribute("data-mode"); loginErr = ""; pickId = null; renderLogin(view); };
    });
    var pf = view.querySelector(".pin-form");
    if (pf) pf.onsubmit = function (e) {
      e.preventDefault();
      var id = pf.getAttribute("data-acc"), pin = document.getElementById("pinIn").value.trim();
      var acc = accounts().filter(function (a) { return a.id === id; })[0];
      if (acc && acc.pin === hash(id + ":" + pin)) { loginErr = ""; pickId = null; loginMode = null; loginLocal(acc); }
      else { loginErr = "PIN noto'g'ri. Qaytadan urinib ko'ring."; renderLogin(view); var i = document.getElementById("pinIn"); if (i) i.focus(); }
    };
    var nf = view.querySelector(".new-form");
    if (nf) nf.onsubmit = function (e) {
      e.preventDefault();
      var name = document.getElementById("nmIn").value.trim().replace(/\s+/g, " ");
      var a = document.getElementById("p1In").value.trim(), b = document.getElementById("p2In").value.trim();
      var imp = document.getElementById("impIn");
      if (name.length < 2) loginErr = "Ism kamida 2 harfdan iborat bo'lsin.";
      else if (accounts().some(function (x) { return x.name.toLowerCase() === name.toLowerCase(); })) loginErr = "Bu ismli hisob allaqachon bor. Boshqa ism tanlang yoki o'sha hisobga kiring.";
      else if (!/^\d{4,8}$/.test(a)) loginErr = "PIN 4 tadan 8 tagacha raqamdan iborat bo'lsin.";
      else if (a !== b) loginErr = "Ikkala PIN bir xil emas.";
      else { loginErr = ""; loginMode = null; createLocal(name, a, imp && imp.checked); return; }
      renderLogin(view);
    };
  }

  /* ---------------- tepadagi profil tugmasi ---------------- */
  function shownName() { return cur ? (cur.mode === "cloud" ? (displayName || "Siz") : cur.name) : ""; }
  function modeLabel() {
    if (cur.mode === "cloud") return cloud.writable ? "Claude hisobi · natijalar bulutda" : "Claude hisobi · faqat shu brauzerda";
    if (cur.mode === "tg") return tg.cs ? "Telegram hisobi · natijalar Telegram bulutida" : "Telegram hisobi · shu qurilmada";
    return "Shu qurilmadagi hisob";
  }
  function chipHTML() {
    if (!cur) return "";
    var nm = shownName();
    return '<div class="me-wrap"><button class="me-chip" id="meBtn" aria-haspopup="true" aria-expanded="false" title="' + esc(nm) + '"><span class="avatar sm">' + esc(nm.charAt(0).toUpperCase() || "?") + "</span></button>" +
      '<div class="me-menu" id="meMenu" hidden>' +
      '<div class="me-head"><span class="avatar">' + esc(nm.charAt(0).toUpperCase() || "?") + '</span><div><b>' + esc(nm) + "</b><small>" +
      modeLabel() + "</small></div></div>" +
      '<button type="button" data-go="#/stats">Statistikam</button>' +
      '<button type="button" data-go="#/reading">Mashqlar</button>' +
      '<button type="button" id="meNight">' + (document.body.classList.contains("night") ? "Kunduzgi rejim" : "Tungi rejim") + "</button>" +
      (cur.mode === "local" ? '<button type="button" id="logoutBtn" class="danger">Hisobdan chiqish</button>' : "") +
      "</div></div>";
  }
  function wireChip() {
    var b = document.getElementById("meBtn"), m = document.getElementById("meMenu");
    if (!b || !m) return;
    b.onclick = function (e) { e.stopPropagation(); m.hidden = !m.hidden; b.setAttribute("aria-expanded", String(!m.hidden)); };
    Array.prototype.forEach.call(m.querySelectorAll("[data-go]"), function (x) { x.onclick = function () { m.hidden = true; location.hash = x.getAttribute("data-go"); }; });
    var mn = document.getElementById("meNight");
    if (mn) mn.onclick = function () { var nb = document.getElementById("nightBtn"); if (nb) nb.click(); };
    var lo = document.getElementById("logoutBtn");
    if (lo) lo.onclick = logout;
  }
  document.addEventListener("click", function (e) {
    var m = document.getElementById("meMenu");
    if (m && !m.hidden && !e.target.closest(".me-wrap")) m.hidden = true;
  });

  window.CEFR_AUTH = {
    isReady: function () { return ready; },
    current: function () { return cur; },
    loadingHTML: function () { return '<div class="wrap auth-wrap"><div class="auth-card loading"><div class="spinner"></div><p>Hisobingiz tekshirilmoqda…</p></div></div>'; },
    renderLogin: renderLogin,
    chipHTML: chipHTML,
    wireChip: wireChip,
    logout: logout
  };

  /* ---------------- vaqtni hisoblash ---------------- */
  var lastInput = Date.now(), route = null, exSecs = 0, revealedOn = {};
  ["pointerdown", "keydown", "scroll", "touchstart", "mousemove", "input"].forEach(function (ev) {
    window.addEventListener(ev, function () { lastInput = Date.now(); }, { passive: true, capture: true });
  });
  function parseRoute() {
    var p = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
    if ((p[0] === "reading" && /^p[1-5]$/.test(p[1] || "")) || (p[0] === "listening" && /^l[1-6]$/.test(p[1] || ""))) return { part: p[1], n: p.length > 2 ? parseInt(p[2], 10) : null };
    return { part: null, n: null };
  }
  function resetRoute() { route = parseRoute(); exSecs = 0; }
  window.addEventListener("hashchange", function () { resetRoute(); lastInput = Date.now(); });

  var TICK = 5;
  setInterval(function () {
    if (!cur || !route) return;
    if (document.visibilityState === "hidden") return;
    if (Date.now() - lastInput > 120000) return;           // 2 daqiqa harakatsiz — hisoblanmaydi
    var now = Date.now(), s = data.stats, dk = dayKey(now), hr = new Date(now).getHours();
    var d = s.days[dk] || (s.days[dk] = { t: 0, p: {}, h: {} });
    var part = route.part || "o";
    d.t += TICK;
    d.p[part] = (d.p[part] || 0) + TICK;
    d.h[hr] = (d.h[hr] || 0) + TICK;
    if (route.part && route.n != null && !isNaN(route.n)) {
      var k = route.part + "." + route.n;
      var e = s.ex[k] || (s.ex[k] = { t: 0, a: 0 });
      e.t += TICK; exSecs += TICK;
    }
    var last = s.sessions[s.sessions.length - 1];
    if (last && now - last.e < 30 * 60000) { last.e = now; last.t += TICK; }
    else { s.sessions.push({ s: now, e: now, t: TICK }); if (s.sessions.length > 300) s.sessions.splice(0, s.sessions.length - 300); }
    var keys = Object.keys(s.days);
    if (keys.length > 420) { keys.sort(); keys.slice(0, keys.length - 420).forEach(function (x) { delete s.days[x]; }); }
    if (now - lastStatsSave > 30000) persist("stats");
    var live = document.getElementById("liveToday");
    if (live) live.textContent = fmtDur((s.days[dk] || {}).t);
  }, TICK * 1000);
  document.addEventListener("visibilitychange", function () { if (document.visibilityState === "hidden") flushAll(); });
  window.addEventListener("pagehide", flushAll);

  window.CEFR_TRACK = {
    attempt: function (part, n, score, total, sub) {
      if (!cur) return;
      var s = data.stats, k = part + "." + n, now = Date.now();
      var e = s.ex[k] || (s.ex[k] = { t: 0, a: 0 });
      var pct = pctOf(score, total), rev = !!revealedOn[k];
      e.a++;
      if (!rev) {
        e.last = pct;
        e.best = Math.max(e.best || 0, pct);
        if (e.first == null) e.first = pct;
        for (var sk in sub) {
          var v = s.skills[sk] || (s.skills[sk] = [0, 0]);
          v[0] += sub[sk][0]; v[1] += sub[sk][1];
        }
      } else e.rev = (e.rev || 0) + 1;
      s.log.unshift({ k: k, s: score, t: total, at: now, d: exSecs, r: rev ? 1 : 0 });
      if (s.log.length > 400) s.log.length = 400;
      exSecs = 0; revealedOn[k] = false;
      persist("stats");
    },
    reveal: function (part, n) {
      if (!cur) return;
      revealedOn[part + "." + n] = true;
      data.stats.reveals[part] = (data.stats.reveals[part] || 0) + 1;
    }
  };

  /* ---------------- hisob-kitoblar ---------------- */
  function compute() {
    var s = data.stats, cat = app() ? app().catalog() : [];
    var now = new Date(), todayK = dayKey(+now);
    var total = 0, week = 0, activeDays = 0, hours = [], wdays = [0, 0, 0, 0, 0, 0, 0], partTime = {};
    for (var i = 0; i < 24; i++) hours.push(0);
    var weekStart = +addDays(now, -6);
    Object.keys(s.days).forEach(function (k) {
      var d = s.days[k]; total += d.t;
      if (d.t >= 60) activeDays++;
      if (+keyToDate(k) >= weekStart) week += d.t;
      for (var h in d.h) hours[+h] += d.h[h];
      wdays[(keyToDate(k).getDay() + 6) % 7] += d.t;
      for (var p in d.p) partTime[p] = (partTime[p] || 0) + d.p[p];
    });
    var today = (s.days[todayK] || {}).t || 0;
    // ketma-ket kunlar
    function on(d) { var x = s.days[dayKey(+d)]; return x && x.t >= 60; }
    var streak = 0, d0 = on(now) ? now : addDays(now, -1);
    while (on(d0)) { streak++; d0 = addDays(d0, -1); }
    var best = 0, run = 0, keys = Object.keys(s.days).filter(function (k) { return s.days[k].t >= 60; }).sort(), prev = null;
    keys.forEach(function (k) {
      var dt = keyToDate(k);
      run = prev && Math.round((dt - prev) / 864e5) === 1 ? run + 1 : 1;
      best = Math.max(best, run); prev = dt;
    });
    // bo'limlar
    var parts = cat.map(function (c) {
      var done = c.list.filter(function (x) { return x.done; }).length;
      var c1 = 0, t1 = 0;
      Object.keys(SKILLS).forEach(function (sk) { if (SKILLS[sk].part === c.id && s.skills[sk]) { c1 += s.skills[sk][0]; t1 += s.skills[sk][1]; } });
      var att = s.log.filter(function (l) { return l.k.indexOf(c.id + ".") === 0; });
      var dsum = 0, dn = 0;
      att.forEach(function (l) { if (l.d > 0 && !l.r) { dsum += l.d; dn++; } });
      return {
        id: c.id, name: PART_NAMES[c.id] || c.name, desc: c.desc, list: c.list, done: done, total: c.list.length,
        acc: t1 ? pctOf(c1, t1) : null, qs: t1, time: partTime[c.id] || 0,
        avg: dn ? dsum / dn : 0, attempts: att.length, reveals: s.reveals[c.id] || 0,
        last: att.length ? att[0].at : null
      };
    });
    var doneAll = parts.reduce(function (a, p) { return a + p.done; }, 0);
    var totalAll = parts.reduce(function (a, p) { return a + p.total; }, 0);
    var cs = 0, ts = 0;
    Object.keys(s.skills).forEach(function (k) { cs += s.skills[k][0]; ts += s.skills[k][1]; });
    var skills = Object.keys(SKILLS).map(function (k) {
      var v = s.skills[k] || [0, 0];
      return { id: k, name: SKILLS[k].name, part: SKILLS[k].part, c: v[0], t: v[1], pct: v[1] ? pctOf(v[0], v[1]) : null };
    });
    var bestHour = -1, bh = 0;
    hours.forEach(function (v, h) { if (v > bh) { bh = v; bestHour = h; } });
    return {
      total: total, today: today, week: week, activeDays: activeDays, streak: streak, bestStreak: best,
      hours: hours, wdays: wdays, bestHour: bestHour, parts: parts, partTime: partTime,
      done: doneAll, totalEx: totalAll, acc: ts ? pctOf(cs, ts) : null, qs: ts, skills: skills,
      sessions: s.sessions.length, log: s.log
    };
  }

  /* ---------------- grafikalar ---------------- */
  function heatLevel(sec) { var m = sec / 60; return m <= 0 ? 0 : m < 10 ? 1 : m < 25 ? 2 : m < 45 ? 3 : 4; }
  function heatmap() {
    var s = data.stats, weeks = 20, now = new Date();
    var start = addDays(now, -((now.getDay() + 6) % 7) - (weeks - 1) * 7);
    var cell = 13, gap = 3, left = 22, top = 16;
    var w = left + weeks * (cell + gap), h = top + 7 * (cell + gap);
    var out = '<svg class="heat" viewBox="0 0 ' + w + " " + h + '" role="img" aria-label="So\'nggi ' + weeks + ' haftadagi faollik">';
    [0, 2, 4].forEach(function (r) { out += '<text x="0" y="' + (top + r * (cell + gap) + 10) + '" class="ax">' + WD[r] + "</text>"; });
    var lastMonth = -1;
    for (var wk = 0; wk < weeks; wk++) {
      var first = addDays(start, wk * 7);
      if (first.getMonth() !== lastMonth) {
        lastMonth = first.getMonth();
        if (wk < weeks - 1) out += '<text x="' + (left + wk * (cell + gap)) + '" y="10" class="ax">' + MONTHS[lastMonth] + "</text>";
      }
      for (var r = 0; r < 7; r++) {
        var d = addDays(start, wk * 7 + r);
        if (d > now) continue;
        var k = dayKey(+d), sec = (s.days[k] || {}).t || 0;
        var tip = d.getDate() + "-" + MONTHS[d.getMonth()] + " (" + WD[r] + "): " + (sec ? fmtDur(sec) : "mashq qilinmagan");
        out += '<rect x="' + (left + wk * (cell + gap)) + '" y="' + (top + r * (cell + gap)) + '" width="' + cell + '" height="' + cell + '" rx="3" class="h' + heatLevel(sec) + (k === dayKey(+now) ? " today" : "") + '" data-tip="' + esc(tip) + '"></rect>';
      }
    }
    return out + "</svg>";
  }
  function barChart(values, labels, tips, opts) {
    opts = opts || {};
    var n = values.length, W = 600, H = opts.h || 170, padL = 34, padB = 22, padT = 10;
    var max = Math.max.apply(null, values.concat([opts.minMax || 1]));
    var step = niceStep(max), top = Math.ceil(max / step) * step;
    var bw = (W - padL) / n, barW = Math.max(3, Math.min(opts.barMax || 26, bw - (opts.gap || 6)));
    var out = '<svg class="bars" viewBox="0 0 ' + W + " " + H + '" role="img" aria-label="' + esc(opts.label || "") + '">';
    for (var g = 0; g <= top + 1e-9; g += step) {
      var y = padT + (H - padT - padB) * (1 - g / top);
      out += '<line x1="' + padL + '" x2="' + W + '" y1="' + y + '" y2="' + y + '" class="grid"></line>' +
        '<text x="' + (padL - 6) + '" y="' + (y + 4) + '" class="ax" text-anchor="end">' + (opts.fmtAxis ? opts.fmtAxis(g) : g) + "</text>";
    }
    values.forEach(function (v, i) {
      var x = padL + i * bw + (bw - barW) / 2, hgt = (H - padT - padB) * (v / top), y = H - padB - hgt;
      if (v > 0) {
        var r = Math.min(4, barW / 2, hgt);
        out += '<path class="bar' + (opts.hi === i ? " hi" : "") + '" d="M' + x + "," + (H - padB) + "V" + (y + r) + "Q" + x + "," + y + " " + (x + r) + "," + y + "H" + (x + barW - r) + "Q" + (x + barW) + "," + y + " " + (x + barW) + "," + (y + r) + "V" + (H - padB) + 'Z"></path>';
      }
      out += '<rect x="' + (padL + i * bw) + '" y="' + padT + '" width="' + bw + '" height="' + (H - padT - padB) + '" class="hit" data-tip="' + esc(tips[i]) + '"></rect>';
      if (labels[i]) out += '<text x="' + (padL + i * bw + bw / 2) + '" y="' + (H - 6) + '" class="ax" text-anchor="middle">' + labels[i] + "</text>";
    });
    out += '<line x1="' + padL + '" x2="' + W + '" y1="' + (H - padB) + '" y2="' + (H - padB) + '" class="base"></line>';
    return out + "</svg>";
  }
  function niceStep(max) {
    var raw = max / 3, p = Math.pow(10, Math.floor(Math.log10(raw || 1))), m = raw / p;
    return (m <= 1 ? 1 : m <= 2 ? 2 : m <= 5 ? 5 : 10) * p;
  }
  function ring(pct, label) {
    var r = 30, c = 2 * Math.PI * r, v = pct == null ? 0 : pct;
    return '<svg class="ring" viewBox="0 0 76 76" aria-hidden="true"><circle cx="38" cy="38" r="' + r + '" class="ring-bg"></circle>' +
      '<circle cx="38" cy="38" r="' + r + '" class="ring-fg" stroke-dasharray="' + (c * v / 100) + " " + c + '" transform="rotate(-90 38 38)"></circle>' +
      '<text x="38" y="43" text-anchor="middle" class="ring-t">' + (label != null ? label : (pct == null ? "—" : pct + "%")) + "</text></svg>";
  }
  function level(p) {
    if (p == null) return { cls: "lv-none", txt: "Ma'lumot kam" };
    if (p >= 80) return { cls: "lv-good", txt: "Kuchli" };
    if (p >= 60) return { cls: "lv-mid", txt: "O'rtacha" };
    return { cls: "lv-bad", txt: "Zaif" };
  }

  /* ---------------- tavsiyalar ---------------- */
  function nextIn(part, list) {
    var nd = list.filter(function (x) { return !x.done; })[0];
    return nd ? base(part) + "/" + nd.n : null;
  }
  function tips(c) {
    var out = [], s = data.stats;
    var known = c.skills.filter(function (k) { return k.t >= 8; }).sort(function (a, b) { return a.pct - b.pct; });
    var weak = known[0];
    if (weak && weak.pct < 75) {
      var p = c.parts.filter(function (x) { return x.id === weak.part; })[0];
      out.push({ ic: "!", cls: "bad", t: "<b>" + esc(weak.name) + "</b> sizda eng qiyin bo'lyapti: " + weak.pct + "% to'g'ri. Shu turdagi mashqlarni ko'paytiring va har bir xatodan keyin «Tahlil»ni o'qing.", go: p ? nextIn(p.id, p.list) || base(p.id) : null, btn: PART_NAMES[weak.part] + "ni ochish" });
    }
    var strong = known.filter(function (k) { return k.pct >= 85; }).slice(-1)[0];
    if (strong) out.push({ ic: "✓", cls: "ok", t: "<b>" + esc(strong.name) + "</b> — eng kuchli tomoningiz (" + strong.pct + "%). Shu darajani saqlash uchun vaqti-vaqti bilan takrorlab turing." });
    var untouched = c.parts.filter(function (p) { return !p.attempts; });
    if (untouched.length && untouched.length < 6) out.push({ ic: "→", cls: "mid", t: untouched.map(function (p) { return "<b>" + p.name + "</b>"; }).join(", ") + " hali boshlanmagan. Imtihonda barcha partlar bo'ladi, shuning uchun ularni ham sinab ko'ring.", go: base(untouched[0].id), btn: untouched[0].name + "ni boshlash" });
    var rv = 0; Object.keys(s.reveals).forEach(function (k) { rv += s.reveals[k]; });
    if (rv >= 5 && rv > c.log.length * 0.3) out.push({ ic: "?", cls: "mid", t: "«Javoblarni ko'rsatish» tugmasini " + rv + " marta bosgansiz. Avval o'zingiz to'liq javob berib, keyin tekshirsangiz natija tezroq o'sadi." });
    if (!c.today) out.push({ ic: "◷", cls: "mid", t: c.streak ? "Bugun hali mashq qilmadingiz. " + c.streak + " kunlik ketma-ketlikni uzmaslik uchun kamida 10 daqiqa ajrating." : "Bugun hali mashq qilmadingiz. Kuniga 15–20 daqiqa muntazam ishlash bir kunda ko'p ishlashdan foydaliroq." });
    var slowP = c.parts.filter(function (p) { return p.avg > 0; }).sort(function (a, b) { return b.avg - a.avg; })[0];
    if (slowP && slowP.avg > 20 * 60) out.push({ ic: "⏱", cls: "mid", t: "<b>" + slowP.name + "</b>dagi bitta mashqqa o'rtacha " + fmtDur(slowP.avg) + " ketyapti. Imtihonda vaqt cheklangan: avval savollarni o'qib, keyin matndan kerakli joyni qidiring." });
    if (!out.length) out.push({ ic: "★", cls: "ok", t: "Yaxshi ketyapsiz! Har kuni oz-ozdan mashq qilishda davom eting." });
    return out.slice(0, 4);
  }

  /* ---------------- statistika sahifasi ---------------- */
  function banner() {
    if (cur && cur.mode === "tg") {
      if (!tg.cs) return '<div class="st-banner">Telegram ilovangiz eski: natijalar faqat shu qurilmada saqlanmoqda. Telegramni yangilasangiz, natijalar barcha qurilmalarda ko\'rinadi.</div>';
      return tg.offline ? '<div class="st-banner soft">Internet bilan aloqa yo\'q: natijalar vaqtincha shu qurilmada saqlanmoqda va aloqa tiklanganda yuboriladi.</div>' : "";
    }
    if (!cur || cur.mode !== "cloud") return "";
    if (!cloud.writable) return '<div class="st-banner">Natijalaringiz hozircha faqat shu brauzerda saqlanmoqda. Ularni bulutda saqlash uchun artifact egasi sizga <b>Contributor</b> (yoki undan yuqori) huquqini berishi kerak.</div>';
    if (cloud.offline) return '<div class="st-banner soft">Internet bilan aloqa yo\'q: natijalar vaqtincha shu qurilmada saqlanmoqda va aloqa tiklanganda yuboriladi.</div>';
    return "";
  }
  function render(view) {
    var c = compute(), s = data.stats, now = new Date(), nm = shownName();
    var empty = !c.total && !c.log.length;

    var kpis = [
      { v: fmtDur(c.total), l: "Jami o'qish vaqti", sub: c.activeDays + " faol kun" },
      { v: '<span id="liveToday">' + fmtDur(c.today) + "</span>", l: "Bugun", sub: "Shu hafta: " + fmtDur(c.week) },
      { v: c.done + "<small> / " + c.totalEx + "</small>", l: "Bajarilgan mashqlar", sub: pctOf(c.done, c.totalEx) + "% yakunlandi" },
      { v: c.acc == null ? "—" : c.acc + "%", l: "O'rtacha natija", sub: c.qs ? c.qs + " ta savol bo'yicha" : "Hali tekshirilmagan" },
      { v: c.streak + "<small> kun</small>", l: "Ketma-ket kunlar", sub: "Eng uzuni: " + c.bestStreak + " kun" }
    ].map(function (k) { return '<div class="kpi"><div class="kpi-v">' + k.v + '</div><div class="kpi-l">' + k.l + '</div><div class="kpi-s">' + k.sub + "</div></div>"; }).join("");

    // so'nggi 14 kun
    var vals = [], labs = [], tps = [];
    for (var i = 13; i >= 0; i--) {
      var d = addDays(now, -i), dd = s.days[dayKey(+d)] || { t: 0, p: {} };
      vals.push(Math.round(dd.t / 60));
      labs.push(i % 2 === 0 ? String(d.getDate()) : "");
      var parts = Object.keys(dd.p || {}).filter(function (p) { return dd.p[p] >= 30; }).map(function (p) { return PART_NAMES[p] + " " + fmtDur(dd.p[p]); });
      tps.push(d.getDate() + "-" + MONTHS[d.getMonth()] + ": " + fmtDur(dd.t) + (parts.length ? " · " + parts.join(", ") : ""));
    }
    var days14 = barChart(vals, labs, tps, { label: "So'nggi 14 kundagi o'qish vaqti, daqiqa", minMax: 10, fmtAxis: function (g) { return g + "d"; }, hi: 13 });

    // soatlar
    var hv = c.hours.map(function (x) { return Math.round(x / 60); });
    var hourChart = barChart(hv, hv.map(function (_, h) { return h % 3 === 0 ? pad(h) : ""; }), hv.map(function (v, h) { return pad(h) + ":00–" + pad((h + 1) % 24) + ":00 — " + fmtDur(c.hours[h]); }), { label: "Kunning qaysi soatlarida o'qilgan", minMax: 5, h: 150, barMax: 16, gap: 4, fmtAxis: function (g) { return g + "d"; }, hi: c.bestHour });
    var wmax = Math.max.apply(null, c.wdays.concat([1]));
    var wrow = c.wdays.map(function (v, i) {
      return '<div class="wd"><span>' + WD[i] + '</span><div class="wd-track"><i style="width:' + Math.round(v / wmax * 100) + '%"></i></div><em>' + fmtShort(v) + "</em></div>";
    }).join("");
    var bestTxt = c.bestHour < 0 ? "Hali ma'lumot yo'q." : "Eng faol vaqtingiz: <b>" + pad(c.bestHour) + ":00–" + pad((c.bestHour + 1) % 24) + ":00</b>." +
      (function () { var mi = c.wdays.indexOf(Math.max.apply(null, c.wdays)); return c.wdays[mi] ? " Eng ko'p o'qiladigan kun: <b>" + ["dushanba", "seshanba", "chorshanba", "payshanba", "juma", "shanba", "yakshanba"][mi] + "</b>." : ""; })();

    // partlar
    var partCards = c.parts.map(function (p) {
      var lv = level(p.qs >= 8 ? p.acc : null);
      return '<div class="pc">' +
        '<div class="pc-top">' + ring(p.qs ? p.acc : null) + '<div><h4>' + p.name + '</h4><p>' + esc(p.desc) + '</p><span class="lv ' + lv.cls + '">' + lv.txt + "</span></div></div>" +
        '<div class="pc-prog"><div class="bar"><span style="width:' + pctOf(p.done, p.total) + '%"></span></div><small>' + p.done + " / " + p.total + " mashq</small></div>" +
        '<dl class="pc-dl"><div><dt>Sarflangan vaqt</dt><dd>' + fmtDur(p.time) + "</dd></div>" +
        "<div><dt>1 mashqqa o'rtacha</dt><dd>" + (p.avg ? fmtDur(p.avg) : "—") + "</dd></div>" +
        "<div><dt>Urinishlar</dt><dd>" + p.attempts + "</dd></div>" +
        "<div><dt>Javob ko'rilgan</dt><dd>" + p.reveals + " marta</dd></div></dl>" +
        '<div class="pc-foot"><span>' + (p.last ? "Oxirgi: " + fmtWhen(p.last) : "Hali boshlanmagan") + '</span><a href="' + (nextIn(p.id, p.list) || base(p.id)) + '">' + (p.done < p.total ? "Davom etish →" : "Ochish →") + "</a></div></div>";
    }).join("");

    // ko'nikmalar
    var sk = c.skills.slice().sort(function (a, b) { return (b.pct == null ? -1 : b.pct) - (a.pct == null ? -1 : a.pct); });
    var skillRows = sk.map(function (k) {
      var lv = level(k.t >= 8 ? k.pct : null);
      return '<div class="sk" data-tip="' + esc(k.name + ": " + (k.t ? k.c + " / " + k.t + " to'g'ri" : "hali savol yechilmagan")) + '">' +
        '<div class="sk-n"><b>' + esc(k.name) + "</b><small>" + PART_NAMES[k.part] + "</small></div>" +
        '<div class="sk-track"><i class="' + lv.cls + '" style="width:' + (k.pct || 0) + '%"></i></div>' +
        '<div class="sk-v">' + (k.pct == null ? "—" : k.pct + "%") + '</div><span class="lv ' + lv.cls + '">' + lv.txt + "</span></div>";
    }).join("");

    // qayta ishlash kerak
    var redo = [];
    var cat = {}; c.parts.forEach(function (p) { p.list.forEach(function (x) { cat[p.id + "." + x.n] = x; }); });
    Object.keys(s.ex).forEach(function (k) { var e = s.ex[k]; if (e.last != null && e.last < 60) redo.push({ k: k, e: e }); });
    redo.sort(function (a, b) { return a.e.last - b.e.last; });
    var redoHTML = redo.length ? redo.slice(0, 8).map(function (r) {
      var pp = r.k.split("."), x = cat[r.k];
      return '<a class="chip" href="' + base(pp[0]) + "/" + pp[1] + '"><b>' + PART_NAMES[pp[0]] + " · " + esc(x ? x.title : "Mashq " + pp[1]) + "</b><span>" + r.e.last + "%</span></a>";
    }).join("") : '<p class="muted">60% dan past natijali mashq yo\'q. Zo\'r!</p>';

    // so'nggi urinishlar
    var logRows = c.log.slice(0, 12).map(function (l) {
      var pp = l.k.split("."), x = cat[l.k], pc = pctOf(l.s, l.t);
      return '<tr><td>' + fmtWhen(l.at) + '</td><td><a href="' + base(pp[0]) + "/" + pp[1] + '">' + PART_NAMES[pp[0]] + " · " + esc(x ? x.title : "Mashq " + pp[1]) + "</a></td>" +
        '<td class="num"><span class="sc ' + (l.r ? "lv-none" : level(pc).cls) + '">' + l.s + "/" + l.t + "</span>" + (l.r ? ' <small class="muted">javob ko\'rilgan</small>' : "") + '</td><td class="num">' + (l.d ? fmtDur(l.d) : "—") + "</td></tr>";
    }).join("");

    var tipList = tips(c).map(function (t) {
      return '<li class="tip ' + t.cls + '"><span class="tip-ic">' + t.ic + '</span><div>' + t.t + (t.go ? '<a class="tip-go" href="' + t.go + '">' + esc(t.btn || "Ochish") + " →</a>" : "") + "</div></li>";
    }).join("");

    view.innerHTML = '<div class="wrap stpage">' +
      '<div class="crumbs"><a href="#/">Bosh sahifa</a> <span>/</span> Statistika</div>' +
      '<div class="st-head"><div><h1>Statistika</h1><p>' + esc(nm) + (cur.mode === "cloud" ? " · Claude hisobi" : cur.mode === "tg" ? " · Telegram hisobi" : " · shu qurilmadagi hisob") + "</p></div>" +
      '<a class="btn primary" href="' + (function () { var w = c.parts.filter(function (p) { return p.done < p.total; })[0]; return w ? nextIn(w.id, w.list) : "#/reading"; })() + '">Mashqni davom ettirish</a></div>' +
      banner() +
      (empty ? '<div class="st-empty"><h3>Statistika shu yerda paydo bo\'ladi</h3><p>Mashq ishlay boshlang: qancha vaqt o\'qiganingiz, qaysi kunlari va soatlarda shug\'ullanganingiz, qaysi turdagi savollar qiyin yoki oson ekani avtomatik hisoblanadi.</p><a class="btn primary" href="#/reading">Mashqlarni ochish</a></div>' : "") +
      '<div class="kpis">' + kpis + "</div>" +
      '<section class="st-card tips-card"><h3>Sizga tavsiyalar</h3><ul class="tips">' + tipList + "</ul></section>" +
      '<div class="st-grid">' +
        '<section class="st-card"><div class="st-h"><h3>Faollik</h3><span class="muted">' + c.activeDays + " faol kun · " + c.sessions + " ta o'tirish</span></div>" + heatmap() +
          '<div class="heat-legend"><span>Kam</span><i class="h0"></i><i class="h1"></i><i class="h2"></i><i class="h3"></i><i class="h4"></i><span>Ko\'p</span></div></section>' +
        '<section class="st-card"><div class="st-h"><h3>So\'nggi 14 kun</h3><span class="muted">daqiqa</span></div>' + days14 + "</section>" +
      "</div>" +
      '<section class="st-card"><div class="st-h"><h3>Kuchli va zaif tomonlar</h3><span class="muted">savol turlari bo\'yicha to\'g\'ri javoblar ulushi</span></div><div class="skills">' + skillRows + '</div>' +
        '<p class="muted small">«Javoblarni ko\'rsatish» bosilgan urinishlar bu hisobga kirmaydi. Baho kamida 8 ta savoldan keyin chiqadi.</p></section>' +
      '<h2 class="st-sec">Partlar bo\'yicha</h2><div class="pcs">' + partCards + "</div>" +
      '<div class="st-grid">' +
        '<section class="st-card"><div class="st-h"><h3>Qachon o\'qiysiz</h3></div>' + hourChart + '<p class="small">' + bestTxt + '</p><div class="wds">' + wrow + "</div></section>" +
        '<section class="st-card"><div class="st-h"><h3>Qayta ishlash kerak</h3><span class="muted">oxirgi natija 60% dan past</span></div><div class="chips">' + redoHTML + "</div></section>" +
      "</div>" +
      '<section class="st-card"><div class="st-h"><h3>So\'nggi urinishlar</h3></div>' +
        (logRows ? '<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Qachon</th><th>Mashq</th><th class="num">Natija</th><th class="num">Vaqt</th></tr></thead><tbody>' + logRows + "</tbody></table></div>" : '<p class="muted">Hali tekshirilgan mashq yo\'q.</p>') +
      "</section>" +
      '<p class="muted small center">Vaqt faqat ilova ochiq va siz faol bo\'lganingizda hisoblanadi (2 daqiqa harakatsiz qolsangiz, to\'xtaydi).</p>' +
      "</div>";
    wireTips(view);
  }

  function homeStrip() {
    if (!cur) return "";
    var c = compute();
    return '<a class="home-strip" href="#/stats">' +
      '<span class="avatar">' + esc((shownName().charAt(0) || "?").toUpperCase()) + "</span>" +
      '<span class="hs-txt"><b>Salom, ' + esc(shownName()) + "!</b><small>Bugun " + fmtDur(c.today) + " · " + c.streak + " kun ketma-ket · " + c.done + "/" + c.totalEx + " mashq" + (c.acc != null ? " · o'rtacha " + c.acc + "%" : "") + "</small></span>" +
      '<span class="hs-go">Statistika →</span></a>' + banner();
  }

  /* ---------------- tooltip ---------------- */
  var tipEl = null;
  function wireTips(root) {
    if (!tipEl) { tipEl = document.createElement("div"); tipEl.className = "vz-tip"; tipEl.hidden = true; document.body.appendChild(tipEl); }
    function show(t, x, y) {
      tipEl.textContent = t; tipEl.hidden = false;
      var w = tipEl.offsetWidth, h = tipEl.offsetHeight;
      tipEl.style.left = Math.max(8, Math.min(window.innerWidth - w - 8, x - w / 2)) + "px";
      tipEl.style.top = Math.max(8, y - h - 12) + "px";
    }
    root.addEventListener("pointermove", function (e) {
      var el = e.target.closest && e.target.closest("[data-tip]");
      if (el) show(el.getAttribute("data-tip"), e.clientX, e.clientY); else tipEl.hidden = true;
    });
    root.addEventListener("pointerleave", function () { tipEl.hidden = true; });
    root.addEventListener("pointerdown", function (e) {
      var el = e.target.closest && e.target.closest("[data-tip]");
      if (el && e.pointerType !== "mouse") { var r = el.getBoundingClientRect(); show(el.getAttribute("data-tip"), r.left + r.width / 2, r.top); }
    });
  }
  window.addEventListener("hashchange", function () { if (tipEl) tipEl.hidden = true; });
  window.addEventListener("scroll", function () { if (tipEl) tipEl.hidden = true; }, { passive: true });

  window.CEFR_STATS = { render: render, homeStrip: homeStrip, compute: function () { return cur ? compute() : null; }, wireTips: wireTips };

  init();
})();
