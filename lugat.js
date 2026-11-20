/* CEFR Companion — onlayn lug'at (#/dict): inglizcha <-> o'zbekcha qidiruv, talaffuz, misollar.
   Ma'lumot dict_data.js dan (birinchi ochilganda yuklanadi). */
(function () {
  var D = null, LOW = null, loading = false, waiters = [];
  var HKEY = "cefr_dict_hist";
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  var SRC = (function () { var s = document.currentScript && document.currentScript.src || ""; var m = s.match(/\?v=\d+/); return m ? m[0] : ""; })();
  function load(cb) {
    if (D) { cb(); return; }
    waiters.push(cb); if (loading) return; loading = true;
    var sc = document.createElement("script"); sc.src = "dict_data.js" + SRC;
    sc.onload = function () {
      D = window.CEFR_DICT; LOW = D.e.map(function (e) { return e[0].toLowerCase(); });
      D.U = D.u.map(function (u) { return u[0].toLowerCase(); });
      var w = waiters; waiters = []; w.forEach(function (f) { f(); });
    };
    sc.onerror = function () { loading = false; var w = waiters; waiters = []; w.forEach(function (f) { f("err"); }); };
    document.head.appendChild(sc);
  }
  function hist() { try { return JSON.parse(localStorage.getItem(HKEY)) || []; } catch (e) { return []; } }
  function pushHist(w) { var h = hist().filter(function (x) { return x !== w; }); h.unshift(w); try { localStorage.setItem(HKEY, JSON.stringify(h.slice(0, 20))); } catch (e) {} }

  /* ---------- qidiruv ---------- */
  function lowerBound(arr, q) { var lo = 0, hi = arr.length; while (lo < hi) { var m = (lo + hi) >> 1; if (arr[m] < q) lo = m + 1; else hi = m; } return lo; }
  function prefix(arr, q, n) { var out = [], i = lowerBound(arr, q); while (i < arr.length && out.length < n && arr[i].indexOf(q) === 0) out.push(i++); return out; }
  function findEn(w) {
    w = String(w || "").toLowerCase().trim(); if (!w) return -1;
    var i = lowerBound(LOW, w); if (LOW[i] === w) return i;
    var f = D.f[w]; if (f) { i = lowerBound(LOW, f); if (LOW[i] === f) return i; }
    var c = [w.replace(/'s$/, ""), w.replace(/ies$/, "y"), w.replace(/ied$/, "y"), w.replace(/es$/, ""), w.replace(/s$/, ""), w.replace(/ed$/, ""), w.replace(/ed$/, "e"), w.replace(/d$/, ""), w.replace(/ing$/, ""), w.replace(/ing$/, "e"), w.replace(/(.)\1ing$/, "$1"), w.replace(/(.)\1ed$/, "$1"), w.replace(/er$/, ""), w.replace(/est$/, ""), w.replace(/ly$/, "")];
    for (var k = 0; k < c.length; k++) { if (c[k] && c[k] !== w) { i = lowerBound(LOW, c[k]); if (LOW[i] === c[k]) return i; } }
    return -1;
  }
  function lev(a, b) {
    if (Math.abs(a.length - b.length) > 2) return 9;
    var p = [], i, j; for (j = 0; j <= b.length; j++) p[j] = j;
    for (i = 1; i <= a.length; i++) { var prev = p[0]; p[0] = i; for (j = 1; j <= b.length; j++) { var t = p[j]; p[j] = Math.min(p[j] + 1, p[j - 1] + 1, prev + (a[i - 1] === b[j - 1] ? 0 : 1)); prev = t; } }
    return p[b.length];
  }
  function suggest(q) {
    var out = [];
    for (var i = 0; i < LOW.length && out.length < 40; i++) { if (LOW[i][0] === q[0]) { var d = lev(q, LOW[i]); if (d <= 2) out.push([d, i]); } }
    return out.sort(function (a, b) { return a[0] - b[0]; }).slice(0, 6).map(function (x) { return x[1]; });
  }
  function senseText(e) { return e[2].map(function (d) { return d[2].join("; "); }).join("; "); }
  function search(q) {
    q = String(q || "").toLowerCase().trim(); var res = { en: [], uz: [], rev: [], exact: -1, sug: [] };
    if (!q) return res;
    res.exact = findEn(q);
    var pre = prefix(LOW, q, 30); if (res.exact >= 0 && pre.indexOf(res.exact) < 0) pre.unshift(res.exact);
    res.en = pre.slice(0, 30);
    if (q.length >= 2) {
      res.uz = prefix(D.U, q, 15);
      if (q.length >= 3) {
        var re = new RegExp("(^|[\\s;,(])" + q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
        for (var i = 0; i < D.e.length && res.rev.length < 25; i++) if (re.test(senseText(D.e[i]))) res.rev.push(i);
      }
    }
    if (!res.en.length && !res.uz.length && !res.rev.length && /^[a-z]+$/.test(q)) res.sug = suggest(q);
    return res;
  }

  /* ---------- ovoz ---------- */
  var VOICES = null;
  function voice(lang) {
    if (!window.speechSynthesis) return null;
    VOICES = VOICES || speechSynthesis.getVoices();
    if (!VOICES.length) VOICES = speechSynthesis.getVoices();
    return VOICES.filter(function (v) { return v.lang && v.lang.replace("_", "-").indexOf(lang) === 0; })[0] || VOICES.filter(function (v) { return /^en/i.test(v.lang); })[0] || null;
  }
  function say(t, lang) {
    if (!window.speechSynthesis) return false;
    try { speechSynthesis.cancel(); var u = new SpeechSynthesisUtterance(t); var v = voice(lang || "en-US"); if (v) u.voice = v; u.lang = lang || "en-US"; u.rate = 0.9; speechSynthesis.speak(u); return true; } catch (e) { return false; }
  }
  var CAN_SAY = !!window.speechSynthesis;

  /* ---------- ko'rinishlar ---------- */
  var Q = "";
  function head() { return '<div class="wrap dc-wrap"><div class="crumbs"><a href="#/">Bosh sahifa</a> <span>/</span> <a href="#/dict">Lug\'at</a></div>'; }
  function searchBox(v) {
    return '<div class="dc-search"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg><input id="dcQ" type="search" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Inglizcha yoki o\'zbekcha so\'z…" value="' + esc(v || "") + '"><button id="dcX" aria-label="Tozalash"' + (v ? "" : " hidden") + '>×</button></div><div id="dcRes"></div>';
  }
  function short(e) { var d = e[2][0]; return d ? d[2][0] : ""; }
  function resultsHTML(q) {
    if (!q.trim()) return homeExtras();
    var r = search(q), h = "";
    if (r.exact >= 0) { var e = D.e[r.exact]; h += '<a class="dc-hit top" href="#/dict/' + encodeURIComponent(e[0]) + '"><b>' + esc(e[0]) + "</b>" + (e[1] ? "<i>/" + esc(e[1]) + "/</i>" : "") + "<span>" + esc(short(e)) + "</span></a>"; }
    var en = r.en.filter(function (i) { return i !== r.exact; });
    if (en.length) h += '<h3 class="dc-h">Inglizcha → o\'zbekcha</h3><div class="dc-list">' + en.map(function (i) { var e = D.e[i]; return '<a class="dc-hit" href="#/dict/' + encodeURIComponent(e[0]) + '"><b>' + esc(e[0]) + "</b><span>" + esc(short(e)) + "</span></a>"; }).join("") + "</div>";
    if (r.uz.length) h += '<h3 class="dc-h">O\'zbekcha → inglizcha</h3><div class="dc-list">' + r.uz.map(function (i) { var u = D.u[i]; return '<div class="dc-hit uz"><b>' + esc(u[0]) + "</b><span>" + esc(u[1]) + "</span></div>"; }).join("") + "</div>";
    if (r.rev.length) h += '<h3 class="dc-h">Tarjimasida «' + esc(q) + '» bor so\'zlar</h3><div class="dc-list">' + r.rev.map(function (i) { var e = D.e[i]; return '<a class="dc-hit" href="#/dict/' + encodeURIComponent(e[0]) + '"><b>' + esc(e[0]) + "</b><span>" + esc(senseText(e).slice(0, 90)) + "</span></a>"; }).join("") + "</div>";
    if (!h) h = '<div class="dc-empty"><p>«' + esc(q) + '» topilmadi.</p>' + (r.sug.length ? "<p>Balki shuni nazarda tutdingiz:</p><div class=\"dc-chips\">" + r.sug.map(function (i) { return '<a href="#/dict/' + encodeURIComponent(D.e[i][0]) + '">' + esc(D.e[i][0]) + "</a>"; }).join("") + "</div>" : "") + "</div>";
    return h;
  }
  function wordOfDay() {
    var pool = [], i; for (i = 0; i < D.e.length; i += 1) { var e = D.e[i]; if (e[3].length && e[1] && e[0].length >= 6 && /^[a-z]+$/.test(e[0])) pool.push(i); }
    var d = new Date(), n = d.getFullYear() * 400 + d.getMonth() * 31 + d.getDate();
    return D.e[pool[(n * 7919) % pool.length]];
  }
  function homeExtras() {
    var h = "", hs = hist(), w = wordOfDay();
    h += '<a class="dc-wod" href="#/dict/' + encodeURIComponent(w[0]) + '"><small>📅 Kun so\'zi</small><b>' + esc(w[0]) + "</b>" + (w[1] ? "<i>/" + esc(w[1]) + "/</i>" : "") + "<span>" + esc(short(w)) + "</span></a>";
    if (hs.length) h += '<h3 class="dc-h">🕘 Oxirgi qidiruvlar <button id="dcHc" class="dc-link">tozalash</button></h3><div class="dc-chips">' + hs.map(function (x) { return '<a href="#/dict/' + encodeURIComponent(x) + '">' + esc(x) + "</a>"; }).join("") + "</div>";
    h += '<p class="dc-note">📚 ' + D.e.length.toLocaleString("en").replace(/,/g, " ") + " ta inglizcha va " + D.u.length.toLocaleString("en").replace(/,/g, " ") + " ta o'zbekcha so'z · talaffuz · kitoblardagi misollar tarjimasi bilan</p>";
    return h;
  }
  function viewHome() {
    return head() + '<div class="dc-hero"><h1>Lug\'at</h1><p>Inglizcha ↔ o\'zbekcha. So\'z, talaffuz va kitoblardagi misollar.</p></div>' + searchBox(Q) + "</div>";
  }
  function inVocab(w) { try { var s = window.CEFR_STORE.getState(); return !!(s.vocab && s.vocab[w.toLowerCase()]); } catch (e) { return false; } }
  function viewWord(word) {
    var i = findEn(word);
    if (i < 0) { Q = word; return viewHome(); }
    var e = D.e[i]; pushHist(e[0]);
    var h = head() + searchBox("") +
      '<article class="dc-card"><div class="dc-top"><div><h1>' + esc(e[0]) + "</h1>" + (e[1] ? '<span class="dc-ipa">/' + esc(e[1]) + "/</span>" : "") + "</div>" +
      '<div class="dc-acts">' + (CAN_SAY ? '<button class="dc-say" data-say="' + esc(e[0]) + '" data-l="en-US" title="Amerikacha">🔊 US</button><button class="dc-say" data-say="' + esc(e[0]) + '" data-l="en-GB" title="Britancha">🔊 UK</button>' : "") +
      '<button class="dc-fav' + (inVocab(e[0]) ? " on" : "") + '" id="dcFav">' + (inVocab(e[0]) ? "⭐ So'zlarimda" : "☆ So'zlarimga") + "</button></div></div>";
    if (word.toLowerCase() !== e[0].toLowerCase()) h += '<p class="dc-form">«' + esc(word) + "» — <b>" + esc(e[0]) + "</b> so'zining shakli</p>";
    e[2].forEach(function (d) {
      h += '<section class="dc-pos">' + (d[0] || d[1] || d[3] ? '<div class="dc-ph">' + (d[0] ? '<span class="dc-p">' + esc(d[0]) + "</span>" : "") + (d[1] ? '<span class="dc-g">' + esc(d[1]) + "</span>" : "") + (d[3] ? '<span class="dc-k">kurs matnlaridan</span>' : "") + "</div>" : "") +
        '<ol class="dc-senses">' + d[2].map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("") + "</ol></section>";
    });
    // iboralar
    var ph = prefix(LOW, e[0].toLowerCase() + " ", 12);
    if (ph.length) h += '<section class="dc-pos"><div class="dc-ph"><span class="dc-p">iboralar</span></div><div class="dc-list">' + ph.map(function (k) { var x = D.e[k]; return '<a class="dc-hit" href="#/dict/' + encodeURIComponent(x[0]) + '"><b>' + esc(x[0]) + "</b><span>" + esc(short(x)) + "</span></a>"; }).join("") + "</div></section>";
    if (e[3].length) {
      var re = new RegExp("\\b(" + e[0].replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "[a-z]*)", "i");
      h += '<section class="dc-ex"><h3>📖 Kitoblardagi misollar</h3>' + e[3].map(function (k) {
        var x = D.x[k]; return '<div class="dc-exi"><p class="en">' + esc(x[0]).replace(re, "<mark>$1</mark>") + (CAN_SAY ? ' <button class="dc-say sm" data-say="' + esc(x[0]) + '" data-l="en-GB">🔊</button>' : "") + "</p>" + (x[1] ? '<p class="uz">' + esc(x[1]) + "</p>" : "") + "</div>";
      }).join("") + "</section>";
    }
    var pv = D.e[i - 1], nx = D.e[i + 1];
    h += '<div class="dc-nav">' + (pv ? '<a href="#/dict/' + encodeURIComponent(pv[0]) + '">← ' + esc(pv[0]) + "</a>" : "<span></span>") + (nx ? '<a href="#/dict/' + encodeURIComponent(nx[0]) + '">' + esc(nx[0]) + " →</a>" : "") + "</div>";
    h += '<p class="dc-src">Manba: uz-en-dictionary (MIT), CMU talaffuz lug\'ati; misollar — ilovadagi kitob matnlari.</p></article></div>';
    return h;
  }
  function wire(view) {
    var q = view.querySelector("#dcQ"), res = view.querySelector("#dcRes"), x = view.querySelector("#dcX"), t = null;
    function upd() { Q = q.value; x.hidden = !Q; res.innerHTML = resultsHTML(Q); wireRes(); }
    function wireRes() {
      var hc = view.querySelector("#dcHc"); if (hc) hc.onclick = function () { try { localStorage.removeItem(HKEY); } catch (e) {} upd(); };
    }
    if (q) {
      if (/^#\/dict\/?$/.test(location.hash)) { res.innerHTML = resultsHTML(Q); wireRes(); }
      q.oninput = function () { clearTimeout(t); t = setTimeout(upd, 90); };
      q.onkeydown = function (e) { if (e.key === "Enter") { var r = search(q.value); if (r.exact >= 0) location.hash = "#/dict/" + encodeURIComponent(D.e[r.exact][0]); else if (r.en.length) location.hash = "#/dict/" + encodeURIComponent(D.e[r.en[0]][0]); q.blur(); } };
      x.onclick = function () { q.value = ""; upd(); q.focus(); };
      if (/^#\/dict\/?$/.test(location.hash) && !("ontouchstart" in window)) setTimeout(function () { q.focus(); }, 50);
    }
    view.querySelectorAll(".dc-say").forEach(function (b) { b.onclick = function () { say(b.dataset.say, b.dataset.l); }; });
    var fav = view.querySelector("#dcFav");
    if (fav) fav.onclick = function () {
      var w = view.querySelector(".dc-top h1").textContent, i = findEn(w), e = D.e[i], s = window.CEFR_STORE.getState(), k = w.toLowerCase();
      if (!s.vocab) s.vocab = {};
      if (s.vocab[k]) delete s.vocab[k];
      else { var ex = e[3].length ? D.x[e[3][0]][0] : ""; s.vocab[k] = { w: w, uz: short(e), s: ex, at: Date.now(), box: 0, due: Date.now() }; }
      window.CEFR_STORE.saveState(s);
      fav.classList.toggle("on", !!s.vocab[k]); fav.textContent = s.vocab[k] ? "⭐ So'zlarimda" : "☆ So'zlarimga";
    };
  }
  function route(parts, view) {
    if (parts[0] !== "dict") return false;
    var word = parts[1] ? decodeURIComponent(parts.slice(1).join("/")) : "";
    if (!D) {
      view.innerHTML = head() + '<div class="dc-hero"><h1>Lug\'at</h1></div><p class="dc-note">Lug\'at yuklanmoqda…</p></div>';
      load(function (err) {
        if (!/^#\/dict/.test(location.hash)) return;
        if (err) { view.innerHTML = head() + '<p class="dc-note">Lug\'atni yuklab bo\'lmadi. Internetni tekshiring.</p></div>'; return; }
        route(location.hash.replace(/^#\/?/, "").split("/").filter(Boolean), document.getElementById("view"));
      });
      return true;
    }
    view.innerHTML = word ? viewWord(word) : viewHome(); wire(view);
    return true;
  }
  // tarjima oynasidan lug'atga havola
  window.addEventListener("cefr:tr", function (ev) {
    var d = ev.detail || {}; if (!d.word || !d.sheet) return;
    var a = document.createElement("a"); a.className = "dc-trlink"; a.href = "#/dict/" + encodeURIComponent(((d.info && d.info.lemma) || d.word).toLowerCase());
    a.textContent = "📖 Lug'atda to'liq ochish →"; d.sheet.appendChild(a);
  });
  if (window.speechSynthesis && speechSynthesis.onvoiceschanged !== undefined) speechSynthesis.onvoiceschanged = function () { VOICES = speechSynthesis.getVoices(); };
  window.CEFR_DICTUI = { route: route, load: load };
})();
