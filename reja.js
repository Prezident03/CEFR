/* CEFR Companion — imtihon rejasi.
   O'quvchi imtihon sanasini va kunlik vaqtini belgilaydi; ilova qolgan mashqlarni kunlarga taqsimlaydi,
   zaif skillarga ko'proq joy beradi, oxirgi kunlarni takrorlashga ajratadi va oylik kalendar ko'rsatadi. */
(function () {
  "use strict";

  var EST = { p1: 8, p2: 10, p3: 12, p4: 15, p5: 20, l1: 8, l2: 9, l3: 9, l4: 8, l5: 12, l6: 10 };   // taxminiy daqiqa
  var NAMES = { p1: "Reading 1", p2: "Reading 2", p3: "Reading 3", p4: "Reading 4", p5: "Reading 5",
    l1: "Listening 1", l2: "Listening 2", l3: "Listening 3", l4: "Listening 4", l5: "Listening 5", l6: "Listening 6" };
  var SKILL_OF = { p1: "Bo'shliqqa so'z", p2: "E'lonlarni moslash", p3: "Sarlavha tanlash", p4: "Test + T/F/NG", p5: "C1 matn",
    l1: "Qisqa dialoglar", l2: "Monolog: bo'shliq", l3: "Gapiruvchilarni moslash", l4: "Xarita", l5: "Parchalar bo'yicha test", l6: "Ma'ruza: bo'shliq" };
  var MINS = [30, 45, 60, 90, 120];
  var MONTHS = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust", "Sentabr", "Oktabr", "Noyabr", "Dekabr"];
  var MON_S = ["yan", "fev", "mar", "apr", "may", "iyn", "iyl", "avg", "sen", "okt", "noy", "dek"];
  var WD = ["Du", "Se", "Ch", "Pa", "Ju", "Sh", "Ya"];

  function app() { return window.CEFR_APP; }
  function st() { return app().getState(); }
  function save() { var s = st(); if (window.CEFR_STORE) window.CEFR_STORE.saveState(s); }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function sec(part) { return part.charAt(0) === "l" ? "listening" : "reading"; }
  function pkey(part, n) { return sec(part) + "." + part + "." + n; }
  function href(part, n) { return "#/" + sec(part) + "/" + part + "/" + n; }
  function dkey(d) { return d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2); }
  function parseD(k) { var a = String(k).split("-"); return new Date(+a[0], +a[1] - 1, +a[2]); }
  function today0() { var d = new Date(); return new Date(d.getFullYear(), d.getMonth(), d.getDate()); }
  function addD(d, n) { var x = new Date(d.getFullYear(), d.getMonth(), d.getDate()); x.setDate(x.getDate() + n); return x; }
  function diffD(a, b) { return Math.round((b - a) / 864e5); }
  function nice(d) { return d.getDate() + "-" + MONTHS[d.getMonth()].toLowerCase(); }
  function plural(n, w) { return n + " " + w; }
  function fmtMin(m) { m = Math.round(m); if (m < 60) return m + " daq"; var h = Math.floor(m / 60), r = m % 60; return h + " soat" + (r ? " " + r + " daq" : ""); }

  function plan() { var s = st(); return s.plan && s.plan.exam ? s.plan : null; }

  /* ---------------- ma'lumotlarni yig'ish ---------------- */
  function catalog() { return app() && app().catalog ? app().catalog() : []; }
  function partAcc() {
    var out = {};
    try {
      if (window.CEFR_STATS && window.CEFR_STATS.compute) window.CEFR_STATS.compute().parts.forEach(function (p) { out[p.id] = p.acc; });
    } catch (e) {}
    return out;
  }
  function weightOf(acc) {
    if (acc == null) return 1;
    return Math.max(0.7, Math.min(1.8, 1 + (75 - acc) / 40));
  }
  function snapshot() {
    var cat = catalog(), acc = partAcc(), pool = {}, titles = {}, redo = [], total = 0, done = 0;
    cat.forEach(function (c) {
      if (!EST[c.id]) return;
      pool[c.id] = [];
      c.list.forEach(function (x) {
        titles[c.id + "." + x.n] = x.title;
        total++;
        if (x.done) {
          done++;
          if (x.total && x.score / x.total < 0.6) redo.push({ part: c.id, n: x.n, pct: x.score / x.total });
        } else pool[c.id].push(x.n);
      });
    });
    redo.sort(function (a, b) { return a.pct - b.pct; });
    var w = {};
    Object.keys(pool).forEach(function (p) { w[p] = weightOf(acc[p]); });
    return { pool: pool, titles: titles, redo: redo, total: total, done: done, w: w, acc: acc };
  }
  function remMinutes(pool) {
    var m = 0;
    Object.keys(pool).forEach(function (p) { m += pool[p].length * EST[p]; });
    return m;
  }

  /* ---------------- reja hisoblash ---------------- */
  function horizon(p) {
    var t = today0(), ex = parseD(p.exam);
    var D = diffD(t, ex);                       // imtihongacha qolgan kunlar (bugun hisobga kiradi, imtihon kuni kirmaydi)
    var R = D >= 21 ? 3 : D >= 8 ? 2 : D >= 3 ? 1 : 0;   // oxirgi takrorlash kunlari
    return { D: D, R: R, S: Math.max(1, D - R), exam: ex };
  }
  function target(p, snap, H) {
    var need = remMinutes(snap.pool) / H.S;
    var t = Math.min(p.mins, Math.max(Math.ceil(need * 1.1), 15));
    return { need: need, t: t };
  }
  // bir kunlik mashqlarni tanlash (pool o'zgaradi)
  function pickDay(pool, w, budget, lastSec) {
    var out = [], used = 0, taken = {}, last = lastSec || "";
    for (var guard = 0; guard < 8; guard++) {
      var best = null, bs = -1;
      Object.keys(pool).forEach(function (p) {
        if (!pool[p].length) return;
        if (used + EST[p] > budget + 4 && out.length) return;
        var s = w[p] * pool[p].length / (1 + 2 * (taken[p] || 0));
        if (sec(p) === last) s *= 0.75;
        if (s > bs) { bs = s; best = p; }
      });
      if (!best) break;
      var n = pool[best].shift();
      out.push({ part: best, n: n });
      used += EST[best]; taken[best] = (taken[best] || 0) + 1; last = sec(best);
      if (used >= budget - 3) break;
    }
    return out;
  }
  function reviewDay(redo, pool, w, budget) {
    var out = [], used = 0;
    while (redo.length && used < budget - 3) {
      var r = redo.shift(); out.push({ part: r.part, n: r.n, redo: true }); used += EST[r.part];
    }
    if (used < budget - 3) pickDay(pool, w, budget - used).forEach(function (x) { out.push(x); });
    return out;
  }

  // bugungi reja: kun davomida o'zgarmaydi (ertaga qayta tuziladi)
  function todayPlan(force) {
    var p = plan(); if (!p) return null;
    var tk = dkey(today0());
    if (!force && p.today && p.today.d === tk && p.today.v === p.v) return p.today.items;
    var snap = snapshot(), H = horizon(p);
    if (H.D <= 0) { p.today = { d: tk, v: p.v, items: [] }; save(); return []; }
    var T = target(p, snap, H), items;
    var reviewing = H.D <= H.R;
    if (reviewing) items = reviewDay(snap.redo.slice(), snap.pool, snap.w, p.mins);
    else {
      items = pickDay(snap.pool, snap.w, T.t);
      // har ikki kunda bitta xato qilingan mashqni qaytarish (agar bo'lsa)
      if (snap.redo.length && H.D % 2 === 0 && items.length < 6) items.push({ part: snap.redo[0].part, n: snap.redo[0].n, redo: true });
    }
    p.today = { d: tk, v: p.v, items: items };
    save();
    return items;
  }
  function itemState(x) {
    var pr = st().progress[pkey(x.part, x.n)];
    var t0 = +today0();
    if (pr && pr.done && pr.at && pr.at >= t0) return { done: true, score: pr.score, total: pr.total };
    if (!x.redo && pr && pr.done) return { done: true, score: pr.score, total: pr.total };
    return { done: false };
  }

  // kelajak kunlarni simulyatsiya qilish (kalendar uchun)
  function simulate() {
    var p = plan(); if (!p) return {};
    var snap = snapshot(), H = horizon(p), T = target(p, snap, H), days = {};
    var tItems = todayPlan();
    tItems.forEach(function (x) { if (snap.pool[x.part]) snap.pool[x.part] = snap.pool[x.part].filter(function (n) { return n !== x.n; }); });
    var redo = snap.redo.filter(function (r) { return !tItems.some(function (x) { return x.part === r.part && x.n === r.n; }); });
    var t = today0();
    days[dkey(t)] = { items: tItems, phase: H.D <= H.R ? "rev" : "main", today: true };
    var lastSec = tItems.length ? sec(tItems[tItems.length - 1].part) : "";
    for (var i = 1; i < H.D; i++) {
      var d = addD(t, i), left = H.D - i, items;
      if (left <= H.R) items = reviewDay(redo, snap.pool, snap.w, p.mins);
      else items = pickDay(snap.pool, snap.w, T.t, lastSec);
      if (items.length) lastSec = sec(items[items.length - 1].part);
      days[dkey(d)] = { items: items, phase: left <= H.R ? "rev" : "main" };
    }
    days[dkey(H.exam)] = { items: [], phase: "exam" };
    return { days: days, left: remMinutes(snap.pool) };
  }
  // o'tgan kunlarda bajarilgan mashqlar
  function doneOn() {
    var out = {}, pr = st().progress;
    Object.keys(pr).forEach(function (k) {
      var v = pr[k]; if (!v || !v.done || !v.at) return;
      var dk = dkey(new Date(v.at)); out[dk] = (out[dk] || 0) + 1;
    });
    return out;
  }

  /* ---------------- ko'rinishlar ---------------- */
  function setupHTML(p) {
    var t = today0(), min = dkey(addD(t, 1)), def = p ? p.exam : dkey(addD(t, 60)), mins = p ? p.mins : 60;
    return '<section class="pl-card pl-setup">' +
      "<h2>" + (p ? "Rejani o'zgartirish" : "Imtihon rejasini tuzamiz") + "</h2>" +
      "<p class=\"muted\">Imtihon sanasini va kuniga qancha vaqt ajrata olishingizni kiriting. Qolganini ilova o'zi hisoblaydi: har kuni nima ishlash kerakligi, zaif tomonlaringizga ko'proq e'tibor va oxirgi kunlarda takrorlash.</p>" +
      '<label class="pl-f"><span>Imtihon sanasi</span><input type="date" id="plDate" min="' + min + '" value="' + esc(def) + '"></label>' +
      '<div class="pl-f"><span>Kuniga qancha vaqt?</span><div class="pl-mins">' +
        MINS.map(function (m) { return '<button type="button" class="pl-m' + (m === mins ? " on" : "") + '" data-m="' + m + '">' + fmtMin(m) + "</button>"; }).join("") +
      "</div></div>" +
      '<div class="btn-row"><button class="btn primary" id="plSave">' + (p ? "Saqlash" : "Rejani tuzish") + "</button>" +
      (p ? '<button class="btn ghost" id="plCancel">Bekor qilish</button><button class="btn ghost danger" id="plDel">Rejani o\'chirish</button>' : "") + "</div>" +
      '<p class="pl-err" id="plErr" hidden></p></section>';
  }

  function headHTML(p, snap, H) {
    var T = target(p, snap, H), need = Math.ceil(T.need), pct = snap.total ? Math.round(snap.done / snap.total * 100) : 0;
    var status;
    if (H.D <= 0) status = '<div class="pl-st ok"><b>Imtihon kuni keldi!</b> Omad tilaymiz. Imtihondan keyin yangi sana belgilashingiz mumkin.</div>';
    else if (!remMinutes(snap.pool)) status = '<div class="pl-st ok"><b>Barcha mashqlar bajarilgan!</b> Qolgan kunlarda xato qilingan mashqlarni takrorlang.</div>';
    else if (need <= p.mins) status = '<div class="pl-st ok"><b>Reja bo\'yicha ketyapsiz.</b> Qolgan ' + (snap.total - snap.done) + " ta mashqni tugatish uchun kuniga taxminan " + fmtMin(need) + " kifoya.</div>";
    else status = '<div class="pl-st warn"><b>Vaqt biroz kam.</b> Barcha mashqlarni tugatish uchun kuniga ~' + fmtMin(need) + " kerak, siz " + fmtMin(p.mins) + " belgilagansiz. Reja zaif bo'limlarni birinchi o'ringa qo'yadi.</div>";
    return '<section class="pl-hero">' +
      '<div class="pl-count"><b>' + Math.max(0, H.D) + "</b><span>kun qoldi</span></div>" +
      '<div class="pl-hinfo"><h1>Imtihon: ' + esc(nice(H.exam)) + " " + H.exam.getFullYear() + "</h1>" +
        "<p>Kuniga " + fmtMin(p.mins) + " · " + snap.done + " / " + snap.total + " mashq bajarilgan (" + pct + "%)" +
        (H.R && H.D > 0 ? " · oxirgi " + H.R + " kun — takrorlash" : "") + "</p>" +
        '<div class="bar"><span style="width:' + pct + '%"></span></div>' +
        '<button class="btn ghost sm" id="plEdit">Sana / vaqtni o\'zgartirish</button></div></section>' + status;
  }

  function todayHTML(items, H) {
    if (H.D <= 0) return "";
    var snapT = snapshot().titles, done = 0, mins = 0;
    var rows = items.map(function (x, i) {
      var s = itemState(x); if (s.done) done++;
      mins += EST[x.part];
      var title = snapT[x.part + "." + x.n] || ("Exercise " + x.n);
      return '<a class="pl-task' + (s.done ? " done" : "") + '" href="' + href(x.part, x.n) + '">' +
        '<span class="pl-tick">' + (s.done ? "✓" : i + 1) + "</span>" +
        '<span class="pl-tx"><b>' + esc(NAMES[x.part]) + " · " + (/^(Exercise|Mashq) /.test(title) ? esc(title) : "Exercise " + x.n + " <small>" + esc(title) + "</small>") + "</b>" +
        "<small>" + esc(SKILL_OF[x.part]) + " · ~" + EST[x.part] + " daq" + (x.redo ? " · <i>xatolar ustida qayta ishlash</i>" : "") +
        (s.done && s.total ? " · natija " + s.score + "/" + s.total : "") + "</small></span>" +
        '<span class="pl-go">' + (s.done ? "Bajarildi" : "Boshlash →") + "</span></a>";
    }).join("");
    var rev = H.D <= H.R;
    return '<section class="pl-card"><div class="pl-h"><h2>Bugungi reja</h2><span class="muted">' + done + " / " + items.length + " bajarildi · ~" + fmtMin(mins) + "</span></div>" +
      (rev ? '<p class="pl-note">Takrorlash kunlari: avval past natijali mashqlarni qayta ishlang, keyin yangi mashq.</p>' : "") +
      (items.length ? '<div class="pl-tasks">' + rows + "</div>" : '<p class="muted">Bugun uchun yangi mashq qolmadi — statistika sahifasidagi "Qayta ishlash kerak" bo\'limidan foydalaning.</p>') +
      (items.length && done === items.length ? '<p class="pl-yay">Barakalla! Bugungi reja to\'liq bajarildi. Xohlasangiz, ertangi kunning mashqlaridan boshlashingiz mumkin.</p>' : "") +
      '<div class="btn-row"><button class="btn ghost sm" id="plRe">Bugungi rejani qayta tuzish</button></div></section>';
  }

  function weakHTML(snap) {
    var rows = Object.keys(snap.pool).filter(function (p) { return snap.acc[p] != null; })
      .sort(function (a, b) { return snap.acc[a] - snap.acc[b]; }).slice(0, 4);
    if (!rows.length) return '<section class="pl-card"><div class="pl-h"><h2>Zaif tomonlar</h2></div><p class="muted">Hali yetarli natija yo\'q. Bir nechta mashq bajarganingizdan so\'ng reja zaif bo\'limlaringizga avtomatik moslashadi.</p></section>';
    return '<section class="pl-card"><div class="pl-h"><h2>Zaif tomonlar</h2><span class="muted">rejada ko\'proq joy beriladi</span></div><div class="pl-weak">' +
      rows.map(function (p) {
        var a = snap.acc[p], w = snap.w[p];
        return '<div class="pl-wr"><span class="pl-wn"><b>' + esc(NAMES[p]) + "</b><small>" + esc(SKILL_OF[p]) + "</small></span>" +
          '<span class="pl-wb"><span style="width:' + a + '%" class="' + (a < 60 ? "lo" : a < 80 ? "mid" : "hi") + '"></span></span>' +
          '<span class="pl-wp">' + a + "%</span>" +
          '<span class="pl-wx">' + (w > 1.15 ? "×" + w.toFixed(1) + " ko'proq" : w < 0.9 ? "kamroq" : "odatdagidek") + "</span></div>";
      }).join("") + "</div></section>";
  }

  function calendarHTML(sim, H) {
    var past = doneOn(), t = today0(), out = "", p = plan();
    var start = parseD(p.created || dkey(t));
    if (start > t) start = t;
    var first = new Date(Math.min(+start, +t)); first = new Date(first.getFullYear(), first.getMonth(), 1);
    var last = new Date(H.exam.getFullYear(), H.exam.getMonth(), 1);
    var weeks = [];
    for (var m = new Date(first); m <= last; m = new Date(m.getFullYear(), m.getMonth() + 1, 1)) {
      var cells = "", lead = (m.getDay() + 6) % 7, dim = new Date(m.getFullYear(), m.getMonth() + 1, 0).getDate();
      for (var i = 0; i < lead; i++) cells += '<span class="pl-c empty"></span>';
      for (var d = 1; d <= dim; d++) {
        var dt = new Date(m.getFullYear(), m.getMonth(), d), k = dkey(dt), info = sim.days[k], cls = "pl-c", lab = "", tip = "";
        if (dt < t) {
          var n = past[k] || 0;
          cls += " past" + (n ? " did" : "");
          lab = n ? n + "✓" : ""; tip = nice(dt) + ": " + (n ? n + " ta mashq bajarilgan" : "mashq yo'q");
        } else if (info) {
          if (info.phase === "exam") { cls += " exam"; lab = "IMTIHON"; tip = nice(dt) + ": imtihon kuni"; }
          else {
            cls += info.phase === "rev" ? " rev" : " main";
            if (info.today) cls += " today";
            lab = info.items.length ? info.items.length + " ta" : (info.phase === "rev" ? "takror" : "—");
            var by = {}; info.items.forEach(function (x) { by[NAMES[x.part]] = (by[NAMES[x.part]] || 0) + 1; });
            tip = nice(dt) + (info.phase === "rev" ? " (takrorlash)" : "") + ": " + (Object.keys(by).map(function (q) { return q + " ×" + by[q]; }).join(", ") || (info.phase === "rev" ? "xatolarni takrorlash" : "yangi mashq qolmadi"));
          }
        } else cls += " off";
        cells += '<button type="button" class="' + cls + '" data-k="' + k + '" data-tip="' + esc(tip) + '"><i>' + d + "</i><em>" + esc(lab) + "</em></button>";
      }
      out += '<div class="pl-month"><h4>' + MONTHS[m.getMonth()] + " " + m.getFullYear() + '</h4><div class="pl-grid">' + WD.map(function (w) { return '<span class="pl-wd">' + w + "</span>"; }).join("") + cells + "</div></div>";
    }
    // haftalik yo'nalish
    var wk = [], cur = null;
    Object.keys(sim.days).sort().forEach(function (k) {
      var info = sim.days[k]; if (info.phase === "exam") return;
      var dt = parseD(k), mon = addD(dt, -((dt.getDay() + 6) % 7)), mk = dkey(mon);
      if (!cur || cur.k !== mk) { cur = { k: mk, from: dt, to: dt, n: 0, by: {}, rev: false }; wk.push(cur); }
      cur.to = dt; cur.n += info.items.length; if (info.phase === "rev") cur.rev = true;
      info.items.forEach(function (x) { cur.by[x.part] = (cur.by[x.part] || 0) + 1; });
    });
    var wrows = wk.map(function (w, i) {
      var top = Object.keys(w.by).sort(function (a, b) { return w.by[b] - w.by[a]; }).slice(0, 3).map(function (q) { return NAMES[q] + " (" + w.by[q] + ")"; }).join(", ");
      return '<div class="pl-wk"><span class="pl-wkn">' + (i + 1) + '-hafta</span><span class="pl-wkd">' + w.from.getDate() + " " + MON_S[w.from.getMonth()] + " – " + w.to.getDate() + " " + MON_S[w.to.getMonth()] + "</span>" +
        '<span class="pl-wkt">' + (w.n ? w.n + " ta mashq: " + esc(top) : (w.rev ? "xato qilingan va qiyin mashqlarni takrorlash" : "yangi mashq qolmadi")) + (w.rev ? ' <b class="pl-rv">takrorlash</b>' : "") + "</span></div>";
    }).join("");
    return '<section class="pl-card"><div class="pl-h"><h2>Oylik reja</h2><span class="muted">kunni bossangiz, o\'sha kunning mashqlari chiqadi</span></div>' +
      '<div class="pl-legend"><span><i class="lg did"></i>bajarilgan</span><span><i class="lg main"></i>yangi mashqlar</span><span><i class="lg rev"></i>takrorlash</span><span><i class="lg exam"></i>imtihon</span></div>' +
      '<div class="pl-months">' + out + '</div><div class="pl-day" id="plDay" hidden></div></section>' +
      '<section class="pl-card"><div class="pl-h"><h2>Haftalik yo\'nalish</h2></div><div class="pl-weeks">' + wrows + "</div></section>";
  }

  function tipsHTML(H) {
    var tips = H.D > 30
      ? ["Har kuni oz-ozdan, lekin to'xtovsiz ishlang — bu bir kunda ko'p ishlashdan samaraliroq.", "Listening mashqlarida avval audiosiz savollarni o'qing, keyin tinglang.", "Xato qilgan savolingiz tahlilini albatta o'qing: xato sababini bilish keyingi safar ball beradi."]
      : H.D > 7
      ? ["Endi imtihon formatiga ko'nikish muhim: mashqlarni vaqt bilan ishlang.", "Zaif bo'limlaringizdagi mashqlarni qoldirmang.", "Tarjimani o'chirib ishlab ko'ring — imtihonda tarjima bo'lmaydi."]
      : ["Yangi narsa o'rganishdan ko'ra, xato qilgan mashqlaringizni qayta ishlang.", "Imtihon oldidan yaxshi uxlang — bu ham tayyorgarlikning bir qismi.", "Listeningda har bir audio ikki marta eshittirilishini unutmang: birinchisida asosiy fikr, ikkinchisida tafsilot."];
    return '<section class="pl-card"><div class="pl-h"><h2>Maslahatlar</h2></div><ul class="pl-tips">' + tips.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ul></section>";
  }

  var editing = false;
  function render(view) {
    var p = plan();
    if (!p || editing) {
      view.innerHTML = '<div class="wrap pl-wrap"><div class="crumbs"><a href="#/">Bosh sahifa</a> <span>/</span> Imtihon rejasi</div>' + setupHTML(p) + "</div>";
      wireSetup(view, p);
      return;
    }
    var snap = snapshot(), H = horizon(p), items = todayPlan(), sim = H.D > 0 ? simulate() : { days: {} };
    var other = window.CEFR_ED && window.CEFR_ED.here ? '<p class="muted small">Reja shu sahifadagi bo\'limlar bo\'yicha tuziladi (' + window.CEFR_ED.here.map(function (x) { return NAMES[x]; }).join(", ") + ", Reading). Alohida sahifadagi bo'limlar u yerning o'z rejasida hisoblanadi.</p>" : "";
    view.innerHTML = '<div class="wrap pl-wrap"><div class="crumbs"><a href="#/">Bosh sahifa</a> <span>/</span> Imtihon rejasi</div>' +
      headHTML(p, snap, H) + todayHTML(items, H) +
      '<div class="pl-two">' + weakHTML(snap) + tipsHTML(H) + "</div>" +
      (H.D > 0 ? calendarHTML(sim, H) : "") + other + "</div>";
    wireMain(view, sim);
  }

  function wireSetup(view, p) {
    var mins = p ? p.mins : 60;
    Array.prototype.forEach.call(view.querySelectorAll(".pl-m"), function (b) {
      b.onclick = function () {
        mins = +b.getAttribute("data-m");
        Array.prototype.forEach.call(view.querySelectorAll(".pl-m"), function (x) { x.classList.toggle("on", x === b); });
      };
    });
    view.querySelector("#plSave").onclick = function () {
      var v = view.querySelector("#plDate").value, err = view.querySelector("#plErr");
      if (!v || parseD(v) <= today0()) { err.textContent = "Imtihon sanasi bugundan keyingi kun bo'lishi kerak."; err.hidden = false; return; }
      var s = st(), old = s.plan || {};
      s.plan = { exam: v, mins: mins, created: old.created || dkey(today0()), v: (old.v || 0) + 1 };
      save(); editing = false; render(view); window.scrollTo(0, 0);
    };
    var c = view.querySelector("#plCancel"); if (c) c.onclick = function () { editing = false; render(view); };
    var d = view.querySelector("#plDel"); if (d) d.onclick = function () {
      if (d.getAttribute("data-sure")) { var s = st(); delete s.plan; save(); editing = false; render(view); return; }
      d.setAttribute("data-sure", "1"); d.textContent = "Rostdan o'chirilsinmi? Yana bir bosing";
    };
  }
  function wireMain(view, sim) {
    var e = view.querySelector("#plEdit"); if (e) e.onclick = function () { editing = true; render(view); window.scrollTo(0, 0); };
    var r = view.querySelector("#plRe"); if (r) r.onclick = function () { todayPlan(true); render(view); };
    var box = view.querySelector("#plDay"), titles = snapshot().titles;
    Array.prototype.forEach.call(view.querySelectorAll(".pl-c[data-k]"), function (c) {
      c.onclick = function () {
        var k = c.getAttribute("data-k"), info = sim.days && sim.days[k];
        Array.prototype.forEach.call(view.querySelectorAll(".pl-c.sel"), function (x) { x.classList.remove("sel"); });
        c.classList.add("sel");
        var dt = parseD(k), html;
        if (info && info.phase === "exam") html = "<b>" + nice(dt) + "</b> — imtihon kuni. Omad!";
        else if (info) {
          html = "<b>" + nice(dt) + (info.today ? " (bugun)" : "") + (info.phase === "rev" ? " · takrorlash" : "") + "</b>" +
            (info.items.length ? "<ul>" + info.items.map(function (x) {
              var t = titles[x.part + "." + x.n] || "";
              return '<li><a href="' + href(x.part, x.n) + '">' + esc(NAMES[x.part]) + " · Exercise " + x.n + "</a>" + (t && !/^(Exercise|Mashq) /.test(t) ? " <small>" + esc(t) + "</small>" : "") + (x.redo ? " <i>(qayta)</i>" : "") + "</li>";
            }).join("") + "</ul>" : "<p>Yangi mashq qolmadi — xato qilingan mashqlarni takrorlang.</p>") +
            (info.today ? "" : '<p class="muted small">Kelajakdagi kunlar taxminiy: har kuni bajarganingizga qarab reja o\'zi yangilanadi.</p>');
        } else html = "<b>" + nice(dt) + "</b> — " + (dt < today0() ? "o'tgan kun." : "reja davridan tashqarida.");
        box.innerHTML = html; box.hidden = false;
      };
    });
    if (window.CEFR_STATS && window.CEFR_STATS.wireTips) window.CEFR_STATS.wireTips(view);
  }

  /* ---------------- bosh sahifa kartasi ---------------- */
  function homeCard() {
    if (!app()) return "";
    var p = plan();
    if (!p) return '<a class="pl-home empty" href="#/reja"><span class="pl-hi">📅</span><span class="pl-ht"><b>Imtihon sanangizni belgilang</b><small>Ilova kunlik va oylik reja tuzib beradi: har kuni nima ishlash kerakligini ko\'rsatadi.</small></span><span class="hs-go">Reja tuzish →</span></a>';
    var H = horizon(p);
    if (H.D <= 0) return '<a class="pl-home" href="#/reja"><span class="pl-num"><b>0</b><small>kun</small></span><span class="pl-ht"><b>Imtihon kuni!</b><small>Omad tilaymiz.</small></span><span class="hs-go">Reja →</span></a>';
    var items = todayPlan(), done = items.filter(function (x) { return itemState(x).done; }).length;
    var nextX = items.filter(function (x) { return !itemState(x).done; })[0];
    return '<a class="pl-home" href="#/reja"><span class="pl-num"><b>' + H.D + "</b><small>kun</small></span>" +
      '<span class="pl-ht"><b>Imtihongacha ' + H.D + " kun · bugun " + done + "/" + items.length + " mashq</b>" +
      "<small>" + (nextX ? "Keyingisi: " + esc(NAMES[nextX.part]) + " · Exercise " + nextX.n : items.length ? "Bugungi reja bajarildi — barakalla!" : "Bugun uchun yangi mashq yo'q") + "</small></span>" +
      '<span class="pl-mini"><span style="width:' + (items.length ? Math.round(done / items.length * 100) : 100) + '%"></span></span>' +
      '<span class="hs-go">Reja →</span></a>';
  }

  window.CEFR_PLAN = { render: render, homeCard: homeCard, todayPlan: todayPlan };
})();
