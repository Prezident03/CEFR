/* CEFR Companion — qo'llanmalar: #/qollanma (ro'yxat) va #/qollanma/<part> (dars).
   Part ro'yxati sahifalarida "Bu part qanday ishlanadi?" banneri. Claude va Telegram'da ishlaydi. */
(function () {
  var G = window.CEFR_GUIDES;
  if (!G) return;
  var SECC = { reading: "r", listening: "l", writing: "w", speaking: "s" };
  var ICO = {
    reading: '<path d="M3 5.5C5.5 4 8.5 4 12 6c3.5-2 6.5-2 9-.5V19c-2.5-1.5-5.5-1.5-9 .5-3.5-2-6.5-2-9-.5z"/><path d="M12 6v13.5"/>',
    listening: '<path d="M4 15v-3a8 8 0 0 1 16 0v3"/><rect x="3" y="14" width="5" height="6" rx="2"/><rect x="16" y="14" width="5" height="6" rx="2"/>',
    writing: '<path d="M15 4l5 5L9 20H4v-5z"/><path d="M13 6l5 5"/>',
    speaking: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/>'
  };
  function ic(n) { return '<svg class="gd-i" viewBox="0 0 24 24" aria-hidden="true">' + ICO[n] + "</svg>"; }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function st() { return window.CEFR_STORE ? window.CEFR_STORE.getState() : { progress: {} }; }
  function seen() { var s = st(); if (!s.guides) s.guides = {}; return s.guides; }
  function markSeen(id) { var g = seen(); if (!g[id]) { g[id] = Date.now(); if (window.CEFR_STORE) window.CEFR_STORE.saveState(st()); } }
  function secName(id) { return { reading: "Reading", listening: "Listening", writing: "Writing", speaking: "Speaking" }[id]; }
  var ANS = {};   // namuna javoblari: { "p1.0": {v, ok} }

  /* ---------- ro'yxat ---------- */
  function viewHub() {
    var sg = seen(), total = 0, done = 0;
    var h = '<div class="wrap gd-wrap"><div class="crumbs"><a href="#/">Bosh sahifa</a> <span>/</span> Qo\'llanmalar</div>' +
      '<div class="gd-hub-hero"><span>📘</span><div><h1>Qo\'llanmalar</h1><p>Har bir part qanday ishlanadi: format, qadamma-qadam yechish usuli, tuzoqlar va qisqa namuna. Mashqdan oldin 3–4 daqiqa o\'qing — keyin ancha oson bo\'ladi.</p></div></div>';
    G.sections.forEach(function (S) {
      h += '<section class="gd-sec c-' + S.c + '"><div class="gd-sec-h">' + ic(S.id) + "<b>" + S.name + "</b><small>" + esc(S.note) + '</small></div><div class="gd-cards">';
      S.parts.forEach(function (pid) {
        var g = G.g[pid]; if (!g) return; total++; var ok = !!sg[pid]; if (ok) done++;
        h += '<a class="gd-card' + (ok ? " ok" : "") + '" href="#/qollanma/' + pid + '"><small>' + esc(g.no) + "</small><b>" + esc(g.title) + "</b><em>" + (ok ? "✓ O'qilgan" : "≈3 daqiqa") + "</em></a>";
      });
      h += "</div></section>";
    });
    h += '<p class="gd-note">O\'qilgan: ' + done + " / " + total + "</p></div>";
    return h;
  }

  /* ---------- dars ---------- */
  function itemHTML(pid, i, it) {
    var key = pid + "." + i, a = ANS[key], h = '<div class="gd-q" data-q="' + key + '"><p class="gd-qt">' + it.q + "</p>";
    if (it.k === "gap") {
      h += '<div class="gd-gap"><input type="text" autocomplete="off" spellcheck="false" placeholder="Javobingiz" value="' + esc(a ? a.v : "") + '"' + (a ? " disabled" : "") + '><button class="btn primary" data-chk="' + key + '"' + (a ? " hidden" : "") + ">Tekshirish</button></div>";
    } else {
      h += '<div class="gd-opts">' + it.o.map(function (o, k) {
        var cls = a ? (k === it.a ? " ok" : k === a.v ? " bad" : "") : "";
        return '<button class="gd-opt' + cls + '" data-pick="' + key + '" data-k="' + k + '"' + (a ? " disabled" : "") + ">" + esc(o) + "</button>";
      }).join("") + "</div>";
    }
    if (a) h += '<div class="gd-why ' + (a.ok ? "ok" : "bad") + '"><b>' + (a.ok ? "✓ To'g'ri!" : "✗ To'g'ri javob: " + esc(it.k === "gap" ? it.a[0] : it.o[it.a])) + "</b> " + it.why + "</div>";
    return h + "</div>";
  }
  function viewGuide(pid) {
    var g = G.g[pid]; if (!g) return viewHub();
    var S = G.sections.filter(function (x) { return x.id === g.sec; })[0], c = SECC[g.sec];
    var idx = S.parts.indexOf(pid), prev = S.parts[idx - 1], next = S.parts[idx + 1];
    var h = '<div class="wrap gd-wrap"><div class="crumbs"><a href="#/">Bosh sahifa</a> <span>/</span> <a href="#/qollanma">Qo\'llanmalar</a> <span>/</span> ' + esc(secName(g.sec) + " " + g.no) + "</div>" +
      '<header class="gd-head c-' + c + '"><span class="gd-hi">' + ic(g.sec) + '</span><div><small>' + esc(secName(g.sec) + " · " + g.no) + "</small><h1>" + esc(g.title) + "</h1></div></header>" +
      '<div class="gd-chips c-' + c + '">' + g.chips.map(function (x) { return "<span>" + esc(x) + "</span>"; }).join("") + "</div>" +
      '<section class="gd-box"><h2>🎯 Nima so\'raladi?</h2><p>' + g.what + "</p></section>" +
      '<section class="gd-box"><h2>🧭 Qadamma-qadam</h2><ol class="gd-steps c-' + c + '">' + g.steps.map(function (s) { return "<li><b>" + esc(s.t) + "</b><p>" + s.d + "</p></li>"; }).join("") + "</ol></section>" +
      '<section class="gd-box gd-trap"><h2>⚠️ Ko\'p uchraydigan xatolar</h2><ul>' + g.traps.map(function (t) { return "<li>" + t + "</li>"; }).join("") + "</ul></section>";
    if (g.phrases) h += '<section class="gd-box"><h2>💬 Foydali iboralar</h2><div class="gd-phr">' + g.phrases.map(function (p) { return "<span>" + esc(p) + "</span>"; }).join("") + "</div></section>";
    if (g.example) {
      h += '<section class="gd-box gd-ex c-' + c + '"><h2>✏️ ' + esc(g.example.title) + "</h2>" + (g.example.text ? '<div class="gd-text">' + g.example.text + "</div>" : "") +
        g.example.items.map(function (it, i) { return itemHTML(pid, i, it); }).join("") + "</section>";
    }
    if (g.tip) h += '<div class="gd-tip">⏱ <b>Vaqt maslahati:</b> ' + esc(g.tip) + "</div>";
    if (g.more) h += '<p class="gd-more">📚 ' + esc(g.more) + ' <a href="' + g.list + '">Ochish →</a></p>';
    h += '<div class="gd-cta"><a class="btn primary gd-go" href="' + g.go + '" data-seen="' + pid + '">Mashqni boshlash →</a><a class="btn ghost" href="' + g.list + '" data-seen="' + pid + '">Barcha mashqlar</a></div>' +
      '<div class="gd-nav">' + (prev ? '<a href="#/qollanma/' + prev + '">← ' + esc(G.g[prev].no) + "</a>" : "<span></span>") + '<a href="#/qollanma">Barcha qo\'llanmalar</a>' + (next ? '<a href="#/qollanma/' + next + '">' + esc(G.g[next].no) + " →</a>" : "<span></span>") + "</div></div>";
    return h;
  }
  function wire(view, pid) {
    view.querySelectorAll("[data-chk]").forEach(function (b) {
      b.onclick = function () {
        var key = b.dataset.chk, inp = b.parentNode.querySelector("input"), v = (inp.value || "").trim();
        if (!v) { inp.focus(); return; }
        var p = key.split("."), it = G.g[p[0]].example.items[+p[1]];
        var norm = function (x) { return String(x).toLowerCase().replace(/[^a-z0-9 -]/g, "").trim(); };
        ANS[key] = { v: v, ok: it.a.some(function (x) { return norm(x) === norm(v); }) };
        repaint(pid);
      };
    });
    view.querySelectorAll(".gd-gap input").forEach(function (inp) { inp.onkeydown = function (e) { if (e.key === "Enter") { var b = inp.parentNode.querySelector("[data-chk]"); if (b) b.click(); } }; });
    view.querySelectorAll("[data-pick]").forEach(function (b) {
      b.onclick = function () {
        var key = b.dataset.pick, p = key.split("."), it = G.g[p[0]].example.items[+p[1]], k = +b.dataset.k;
        ANS[key] = { v: k, ok: k === it.a }; repaint(pid);
      };
    });
    view.querySelectorAll("[data-seen]").forEach(function (a) { a.addEventListener("click", function () { markSeen(a.dataset.seen); }); });
  }
  function repaint(pid) {
    var v = document.getElementById("view"), y = window.scrollY;
    v.innerHTML = viewGuide(pid); wire(v, pid); window.scrollTo(0, y);
    var all = G.g[pid].example.items.every(function (it, i) { return ANS[pid + "." + i]; });
    if (all) markSeen(pid);
  }

  /* ---------- part sahifalaridagi banner ---------- */
  function partFromHash() {
    var p = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
    if (p.length === 2 && ((p[0] === "reading" && /^p[1-5]$/.test(p[1])) || (p[0] === "listening" && /^l[1-6]$/.test(p[1])) || (p[0] === "writing" && /^w[12]$/.test(p[1])) || (p[0] === "speaking" && /^s[1-4]$/.test(p[1])))) return { part: p[1] };
    if (p.length === 1 && /^(reading|listening|writing|speaking)$/.test(p[0])) return { sec: p[0] };
    return null;
  }
  function banner() {
    var v = document.getElementById("view"); if (!v || v.querySelector(".gd-banner")) return;
    var h0 = location.hash.replace(/^#\/?/, "");
    if (h0 === "" || h0 === "mashq") {
      var anchor = h0 === "" ? (v.querySelector(".m-h2") || v.querySelector(".cards")) : (v.querySelector(".pro-tiles") || v.querySelector(".m-sec"));
      if (!anchor) return;
      var hb = document.createElement("a"); hb.className = "gd-banner hub"; hb.href = "#/qollanma";
      var n = Object.keys(seen()).length, t = Object.keys(G.g).length;
      hb.innerHTML = "<span>📘</span><span><b>Qo'llanmalar — har bir part qanday ishlanadi</b><small>" + (n ? n + " / " + t + " o'qilgan" : "Reading, Listening, Writing, Speaking: format, usul, namunalar") + "</small></span><i>→</i>";
      anchor.parentNode.insertBefore(hb, anchor); return;
    }
    var x = partFromHash(); if (!x) return;
    var host = v.querySelector(".part-head") || v.querySelector(".hero") || v.querySelector(".crumbs");
    if (!host) return;
    var b = document.createElement("a"); b.className = "gd-banner";
    if (x.part) {
      var g = G.g[x.part]; if (!g) return;
      var ok = !!seen()[x.part];
      b.href = "#/qollanma/" + x.part; if (!ok) b.classList.add("new");
      b.innerHTML = "<span>📘</span><span><b>" + (ok ? "Qo'llanmani qayta ko'rish" : "Bu part qanday ishlanadi?") + "</b><small>" + (ok ? esc(g.no) + " · format, usul, tuzoqlar" : "Mashqdan oldin 3 daqiqalik qo'llanma: format, qadamlar, namuna") + "</small></span><i>→</i>";
    } else {
      b.href = "#/qollanma"; b.innerHTML = "<span>📘</span><span><b>" + secName(x.sec) + " qo'llanmalari</b><small>Har bir part qanday ishlanadi — qadamma-qadam</small></span><i>→</i>";
    }
    host.parentNode.insertBefore(b, host.nextSibling);
  }
  var bt = null;
  document.addEventListener("DOMContentLoaded", function () {
    var v = document.getElementById("view");
    if (v) new MutationObserver(function () { clearTimeout(bt); bt = setTimeout(banner, 40); }).observe(v, { childList: true });
  });

  function route(parts, view) {
    if (parts[0] !== "qollanma") return false;
    if (parts[1] && G.g[parts[1]]) { view.innerHTML = viewGuide(parts[1]); wire(view, parts[1]); }
    else view.innerHTML = viewHub();
    return true;
  }
  window.CEFR_GUIDE = { route: route, seen: seen, count: function () { return Object.keys(G.g).length; } };
})();
