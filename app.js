/* CEFR Companion - Reading Parts 1-2 */
(function () {
  "use strict";

  var LS_KEY = "cefr_companion_v1";

  var SECTIONS = [
    { id: "reading",   name: "Reading",   desc: "Matnlar, testlar, savollar", badge: "R", active: true },
    { id: "listening", name: "Listening", desc: "Audio, testlar, transkript", badge: "L", active: !!window.CEFR_LISTEN },
    { id: "writing",   name: "Writing",   desc: "Task 1, Task 2, essaylar",   badge: "W", active: false },
    { id: "speaking",  name: "Speaking",  desc: "Part 1, Part 2, Part 3",     badge: "S", active: false }
  ];

  var PARTS = [
    { id: "p1", no: 1, name: "Part 1", desc: "Bo'shliqqa bitta so'z (gap-fill)", active: true },
    { id: "p2", no: 2, name: "Part 2", desc: "E'lonlarni vaziyatlarga moslashtirish", active: true },
    { id: "p3", no: 3, name: "Part 3", desc: "Paragraflarga sarlavha tanlash", active: true },
    { id: "p4", no: 4, name: "Part 4", desc: "Test + To'g'ri/Noto'g'ri/Berilmagan", active: true },
    { id: "p5", no: 5, name: "Part 5", desc: "Bo'shliqqa matndan so'z/son + test (C1)", active: true }
  ];

  /* ---------- state ---------- */
  function load() {
    if (window.CEFR_STORE) return window.CEFR_STORE.getState();
    try {
      var s = JSON.parse(localStorage.getItem(LS_KEY));
      if (s && s.progress) return s;
    } catch (e) {}
    return { progress: {}, history: [] };
  }
  var state = load();
  function save() {
    if (window.CEFR_STORE) { window.CEFR_STORE.saveState(state); return; }
    try { localStorage.setItem(LS_KEY, JSON.stringify(state)); } catch (e) {}
  }
  function track(part, n, score, total, sub) {
    if (window.CEFR_TRACK) { try { window.CEFR_TRACK.attempt(part, n, score, total, sub); } catch (e) {} }
  }
  function trackReveal(part) {
    if (window.CEFR_TRACK) { try { window.CEFR_TRACK.reveal(part, curN); } catch (e) {} }
  }

  /* ---------- content ---------- */
  var items = READING_P1.map(function (row) {
    return {
      n: row[0],
      pages: String(row[1]).split(",").map(Number),
      answers: String(row[2]).split(",")
    };
  });
  var byNo = {};
  items.forEach(function (it) { byNo[it.n] = it; });

  function pkey(n) { return "reading.p1." + n; }
  var p2Items = (READING_P2 || []).concat(READING_P2_EXERCISES || []);
  var p2Catalog = READING_P2_CATALOG || [];
  var p2ByNo = {};
  p2Items.forEach(function (it) { p2ByNo[it.n] = it; });
  function p2key(n) { return "reading.p2." + n; }

  var p3Items = (typeof READING_P3_EXERCISES !== "undefined") ? READING_P3_EXERCISES : [];
  var p3ByNo = {};
  p3Items.forEach(function (it) { p3ByNo[it.n] = it; });
  function p3key(n) { return "reading.p3." + n; }

  var p4Items = (typeof READING_P4_EXERCISES !== "undefined") ? READING_P4_EXERCISES : [];
  var p4ByNo = {};
  p4Items.forEach(function (it) { p4ByNo[it.n] = it; });
  function p4key(n) { return "reading.p4." + n; }

  var p5Items = (typeof READING_P5_EXERCISES !== "undefined") ? READING_P5_EXERCISES : [];
  var p5ByNo = {};
  p5Items.forEach(function (it) { p5ByNo[it.n] = it; });
  function p5key(n) { return "reading.p5." + n; }
  function p5Answers(it) {
    return it.gaps.map(function (g) { return g.answer; }).concat(it.mcq.map(function (m) { return m.answer; }));
  }
  function isDone(key) { return !!(state.progress[key] && state.progress[key].done); }

  function bodyOf(n) {
    var txt = (typeof READING_P1_TEXT !== "undefined") ? READING_P1_TEXT[n] : null;
    return (txt && txt.body) ? txt.body : "";
  }
  function gapCountOf(n) {
    var m = bodyOf(n).match(/\{\{\d+\}\}/g);
    return (m && m.length) ? m.length : (byNo[n] ? byNo[n].answers.length : 0);
  }

  /* ---------- helpers ---------- */
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function norm(s) {
    return String(s || "").toLowerCase().trim()
      .replace(/[.,!?;:'"()\[\]]/g, "")
      .replace(/\s+/g, " ");
  }
  function isCorrect(input, answer) {
    var got = norm(input);
    if (!got) return false;
    return String(answer).split("/").some(function (a) { return norm(a) === got; });
  }
  function filledPassage(n, answers, targetNum) {
    return bodyOf(n).replace(/\{\{(\d+)\}\}/g, function (marker, rawNum) {
      var num = parseInt(rawNum, 10);
      if (num === targetNum) return "__TARGET_GAP__";
      var answer = answers[num - 1];
      return answer ? String(answer).split("/")[0].trim() : "[bo'shliq]";
    }).replace(/\s+/g, " ").trim();
  }
  function sentenceAroundGap(n, answers, targetNum) {
    var text = filledPassage(n, answers, targetNum);
    var marker = "__TARGET_GAP__";
    var pos = text.indexOf(marker);
    if (pos < 0) return "";
    var start = Math.max(text.lastIndexOf(".", pos), text.lastIndexOf("!", pos), text.lastIndexOf("?", pos)) + 1;
    var ends = [text.indexOf(".", pos), text.indexOf("!", pos), text.indexOf("?", pos)].filter(function (x) { return x >= 0; });
    var end = ends.length ? Math.min.apply(Math, ends) + 1 : text.length;
    return text.slice(start, end).replace(marker, answers[targetNum - 1] || "").trim();
  }
  function wordOccurs(text, word) {
    var haystack = String(text || "").toLowerCase();
    var needle = String(word || "").toLowerCase();
    if (!needle) return false;
    var pos = haystack.indexOf(needle);
    while (pos >= 0) {
      var before = pos ? haystack.charAt(pos - 1) : "";
      var after = haystack.charAt(pos + needle.length);
      if (!/[a-z0-9]/i.test(before) && !/[a-z0-9]/i.test(after)) return true;
      pos = haystack.indexOf(needle, pos + 1);
    }
    return false;
  }
  function repeatedClue(n, answers, targetNum) {
    var text = filledPassage(n, answers, targetNum);
    var sentences = text.match(/[^.!?]+[.!?]?/g) || [];
    var variants = String(answers[targetNum - 1] || "").split("/");
    for (var i = 0; i < sentences.length; i++) {
      if (sentences[i].indexOf("__TARGET_GAP__") >= 0) continue;
      var sentence = sentences[i].trim();
      for (var j = 0; j < variants.length; j++) {
        if (wordOccurs(sentence, variants[j].trim())) return sentence;
      }
    }
    return "";
  }
  function fmtDate(ts) {
    var d = new Date(ts);
    function p(x) { return ("0" + x).slice(-2); }
    return p(d.getDate()) + "." + p(d.getMonth() + 1) + "." + d.getFullYear() + " " + p(d.getHours()) + ":" + p(d.getMinutes());
  }

  /* ---------- top bar ---------- */
  function topbar() {
    var night = document.body.classList.contains("night");
    document.getElementById("topbar").innerHTML =
      '<div class="brand" onclick="location.hash=\'#/\'">CEFR Companion<small>Personal English workspace</small></div>' +
      '<div class="top-actions">' +
        (window.CEFR_AUTH && window.CEFR_AUTH.current() ? '<button class="icon-btn stats-btn" id="statsBtn" title="Statistika"><svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M5 20V11M12 20V5M19 20v-6" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg><span>Statistika</span></button>' : "") +
        (window.CEFR_AUTH && window.CEFR_AUTH.current() && window.CEFR_PLAN ? '<button class="icon-btn stats-btn" id="planBtn" title="Imtihon rejasi"><svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><rect x="4" y="5" width="16" height="15" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M4 10h16M9 3v4M15 3v4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg><span>Reja</span></button>' : "") +
        '<button class="icon-btn" id="trBtn" aria-pressed="' + (window.CEFR_TR && CEFR_TR.isOn() ? "true" : "false") + '" title="Matndagi so\'zni bossangiz tarjimasi chiqadi">Tarjima: ' + (window.CEFR_TR && CEFR_TR.isOn() ? "yoqiq" : "o\'chiq") + "</button>" +
        '<button class="icon-btn" id="nightBtn">' + (night ? "Kunduzgi" : "Tungi") + " rejim</button>" +
        (window.CEFR_AUTH ? window.CEFR_AUTH.chipHTML() : "") +
      "</div>";
    var sb = document.getElementById("statsBtn");
    if (sb) sb.onclick = function () { location.hash = "#/stats"; };
    var pb = document.getElementById("planBtn");
    if (pb) pb.onclick = function () { location.hash = "#/reja"; };
    if (window.CEFR_AUTH) window.CEFR_AUTH.wireChip();
    document.getElementById("trBtn").onclick = function () { if (window.CEFR_TR) { CEFR_TR.toggle(); topbar(); } };
    document.getElementById("nightBtn").onclick = function () {
      document.body.classList.toggle("night");
      var n = document.body.classList.contains("night");
      try { localStorage.setItem("cefr_night", n ? "1" : "0"); } catch (e) {}
      topbar();
    };
  }

  /* ---------- views ---------- */
  function viewHome() {
    var total = items.length + p2Catalog.length + p3Items.length + p4Items.length + p5Items.length;
    var done = items.filter(function (it) { return state.progress[pkey(it.n)] && state.progress[pkey(it.n)].done; }).length +
      p2Catalog.filter(function (it) {
        return p2ByNo[it.n] && state.progress[p2key(it.n)] && state.progress[p2key(it.n)].done;
      }).length +
      p3Items.filter(function (it) { return state.progress[p3key(it.n)] && state.progress[p3key(it.n)].done; }).length +
      p4Items.filter(function (it) { return state.progress[p4key(it.n)] && state.progress[p4key(it.n)].done; }).length +
      p5Items.filter(function (it) { return isDone(p5key(it.n)); }).length;
    var pct = total ? Math.round(done / total * 100) : 0;

    var cards = SECTIONS.map(function (s) {
      var stat = "";
      if (s.id === "reading") {
        stat = '<div class="bar"><span style="width:' + pct + '%"></span></div>' +
               '<div class="go">' + done + " / " + total + " mashq bajarilgan · Ochish →</div>";
      } else if (s.id === "listening" && window.CEFR_LISTEN) {
        var ld = window.CEFR_LISTEN.doneCount(), lt = window.CEFR_LISTEN.total();
        stat = '<div class="bar"><span style="width:' + (lt ? Math.round(ld / lt * 100) : 0) + '%"></span></div>' +
               '<div class="go">' + ld + " / " + lt + " mashq bajarilgan · Ochish →</div>";
      } else {
        stat = '<div class="go" style="color:var(--text3)">Tez orada</div>';
      }
      return '<div class="card ' + (s.active ? "active" : "locked") + '" ' +
        (s.active ? 'onclick="location.hash=\'#/' + s.id + '\'"' : "") + ">" +
        (s.active ? "" : '<span class="tag">Tez orada</span>') +
        '<div class="badge">' + s.badge + "</div>" +
        "<h3>" + s.name + "</h3><p>" + s.desc + "</p>" + stat +
        "</div>";
    }).join("");

    return '<div class="wrap"><div class="hero">' +
      "<h1>CEFR Companion</h1>" +
      "<p>Shaxsiy ingliz tili tayyorgarlik ish maydoni</p></div>" +
      (window.CEFR_STATS ? window.CEFR_STATS.homeStrip() : "") +
      (window.CEFR_PLAN && window.CEFR_AUTH && window.CEFR_AUTH.current() ? window.CEFR_PLAN.homeCard() : "") +
      '<div class="cards">' + cards + "</div></div>";
  }

  function viewReading() {
    var rows = PARTS.map(function (p) {
      var right = "", cls = p.active ? "active" : "locked";
      var click = "";
      if (p.active) {
        if (p.id === "p1") {
          var total = items.length;
          var done = items.filter(function (it) { return state.progress[pkey(it.n)] && state.progress[pkey(it.n)].done; }).length;
          right = done + " / " + total + " bajarildi";
        } else if (p.id === "p2") {
          var p2Done = p2Catalog.filter(function (it) {
            return p2ByNo[it.n] && state.progress[p2key(it.n)] && state.progress[p2key(it.n)].done;
          }).length;
          right = p2Done + " / " + p2Catalog.length + " bajarildi";
        } else if (p.id === "p3") {
          var p3Done = p3Items.filter(function (it) {
            return state.progress[p3key(it.n)] && state.progress[p3key(it.n)].done;
          }).length;
          right = p3Done + " / " + p3Items.length + " bajarildi";
        } else if (p.id === "p4") {
          var p4Done = p4Items.filter(function (it) {
            return state.progress[p4key(it.n)] && state.progress[p4key(it.n)].done;
          }).length;
          right = p4Done + " / " + p4Items.length + " bajarildi";
        } else {
          var p5Done = p5Items.filter(function (it) { return isDone(p5key(it.n)); }).length;
          right = p5Done + " / " + p5Items.length + " bajarildi";
        }
        click = 'onclick="location.hash=\'#/reading/' + p.id + '\'"';
      } else {
        right = "Tez orada";
      }
      return '<div class="part-row ' + cls + '" ' + click + ">" +
        '<div class="part-num">' + p.no + "</div>" +
        '<div class="meta"><h3>' + p.name + "</h3><p>" + p.desc + "</p></div>" +
        '<div class="right">' + right + "</div></div>";
    }).join("");

    return '<div class="wrap">' +
      '<div class="crumbs"><a href="#/">Bosh sahifa</a> <span>/</span> Reading</div>' +
      '<h1 class="title">Reading</h1>' +
      '<p class="subtitle">' + esc(BOOK.name) + " — " + esc(BOOK.authors) + "</p>" +
      '<div class="rule"></div>' +
      '<div class="part-list">' + rows + "</div></div>";
  }

  function viewPart() {
    var total = items.length;
    var doneCount = 0, attempts = 0, scoreSum = 0, scoreTot = 0;
    items.forEach(function (it) {
      var p = state.progress[pkey(it.n)];
      if (p && p.done) {
        doneCount++;
        attempts += p.attempts || 1;
        scoreSum += p.score || 0;
        scoreTot += p.total || gapCountOf(it.n);
      }
    });
    var avg = attempts ? Math.round(scoreSum / scoreTot * 100) : 0;

    var cards = items.map(function (it) {
      var p = state.progress[pkey(it.n)];
      var cls = p && p.done ? "done" : "";
      var cnt = gapCountOf(it.n);
      var mark = "";
      if (p && p.done) {
        var full = (p.score || 0) === (p.total || cnt);
        mark = '<span class="mark' + (full ? "" : " half") + '">' + (p.score || 0) + "/" + (p.total || cnt) + "</span>";
      }
      return '<div class="ex-card ' + cls + '" onclick="location.hash=\'#/reading/p1/' + it.n + '\'">' +
        mark + '<div class="n">Exercise ' + it.n + "</div>" +
        '<div class="s">' + cnt + " ta bo'shliq</div></div>";
    }).join("");

    var hist = state.history.slice(0, 12).map(function (h) {
      return '<div class="hist-item" onclick="location.hash=\'#/reading/p1/' + h.n + '\'">' +
        '<span class="h-n">Exercise ' + h.n + "</span>" +
        '<span class="h-s">' + h.score + "/" + h.total + "</span>" +
        '<span class="h-d">' + fmtDate(h.at) + "</span></div>";
    }).join("") || '<div class="empty">Hali tugallangan mashq yo\'q</div>';

    return '<div class="wrap">' +
      '<div class="crumbs"><a href="#/">Bosh sahifa</a> <span>/</span> <a href="#/reading">Reading</a> <span>/</span> Part 1</div>' +
      '<h1 class="title">Part 1</h1>' +
      '<p class="subtitle">' + esc(BOOK.name) + " · Bo'shliqqa matn ichidan bitta so'z qo'ying</p>" +
      '<div class="rule"></div>' +
      '<div class="stats">' +
        '<div class="stat"><div class="k">Bajarilgan</div><div class="v">' + doneCount + "<small> / " + total + "</small></div></div>" +
        '<div class="stat"><div class="k">O\'rtacha natija</div><div class="v">' + avg + "<small>%</small></div></div>" +
        '<div class="stat"><div class="k">Urinishlar</div><div class="v">' + attempts + "</div></div>" +
      "</div>" +
      '<div class="ex-grid">' + cards + "</div>" +
      '<div class="hist"><h2>Topshiriqlar tarixi</h2>' + hist + "</div>" +
      "</div>";
  }

  function viewPart2() {
    var doneCount = 0, attempts = 0, scoreSum = 0, scoreTot = 0;
    var cards = p2Catalog.map(function (topic) {
      var it = p2ByNo[topic.n];
      var p = it ? state.progress[p2key(topic.n)] : null;
      var cls = p && p.done ? "done" : "";
      if (p && p.done) {
        doneCount++;
        attempts += p.attempts || 1;
        scoreSum += p.score || 0;
        scoreTot += p.total || (it ? it.texts.length : 0);
      }
      var total = it ? it.texts.length : 0;
      var mark = p && p.done
        ? '<span class="mark' + ((p.score || 0) === total ? "" : " half") + '">' + (p.score || 0) + "/" + total + "</span>"
        : "";
      return '<button type="button" class="ex-card p2-ex-card ' + cls + '"' +
        (it ? ' onclick="location.hash=\'#/reading/p2/' + topic.n + '\'"' : " disabled") + ">" +
        mark + '<div class="n">Exercise ' + topic.n + "</div>" +
        '<div class="s">' + esc(topic.title) + "</div>" +
        '<div class="p2-card-meta">' +
          (it ? it.texts.length + " ta e'lon · " + it.statements.length + " vaziyat" : "Kontent topilmadi") +
        "</div></button>";
    }).join("");
    var sample = p2ByNo[0];
    var sampleCard = sample
      ? '<h2 class="p2-section-title">Namuna</h2>' +
        '<div class="ex-grid"><button type="button" class="ex-card sample-card" onclick="location.hash=\'#/reading/p2/0\'">' +
        '<div class="n">Namuna</div><div class="s">' + esc(sample.title) + "</div>" +
        '<div class="p2-card-meta">' + sample.texts.length + " ta e'lon · alohida mashq</div></button></div>"
      : "";
    var avg = scoreTot ? Math.round(scoreSum / scoreTot * 100) : 0;

    return '<div class="wrap">' +
      '<div class="crumbs"><a href="#/">Bosh sahifa</a> <span>/</span> <a href="#/reading">Reading</a> <span>/</span> Part 2</div>' +
      '<h1 class="title">Part 2</h1>' +
      '<p class="subtitle">' + esc(BOOK.name) + " · E'lonlarni vaziyatlarga moslashtirish</p>" +
      '<p class="p2-hint">Har bir mashqda e\'lonlar va vaziyatlar soni turlicha bo\'lishi mumkin. Har bir harfni faqat bir marta tanlang.</p>' +
      '<div class="rule"></div>' +
      '<div class="stats">' +
        '<div class="stat"><div class="k">Bajarilgan</div><div class="v">' + doneCount + "<small> / " + p2Catalog.length + "</small></div></div>" +
        '<div class="stat"><div class="k">O\'rtacha natija</div><div class="v">' + avg + "<small>%</small></div></div>" +
        '<div class="stat"><div class="k">Urinishlar</div><div class="v">' + attempts + "</div></div>" +
      "</div>" +
      sampleCard +
      '<h2 class="p2-section-title">Kitobdagi mashqlar (' + p2Catalog.length + ')</h2>' +
      (cards ? '<div class="ex-grid">' + cards + "</div>" : '<div class="empty">Part 2 mashqlari hozircha yo\'q</div>') +
      "</div>";
  }

  var ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

  function viewPart3() {
    var doneCount = 0, attempts = 0, scoreSum = 0, scoreTot = 0;
    var cards = p3Items.map(function (it) {
      var p = state.progress[p3key(it.n)];
      var cls = p && p.done ? "done" : "";
      var total = it.paragraphs.length;
      if (p && p.done) {
        doneCount++;
        attempts += p.attempts || 1;
        scoreSum += p.score || 0;
        scoreTot += p.total || total;
      }
      var mark = p && p.done
        ? '<span class="mark' + ((p.score || 0) === total ? "" : " half") + '">' + (p.score || 0) + "/" + total + "</span>"
        : "";
      return '<button type="button" class="ex-card p2-ex-card ' + cls + '" onclick="location.hash=\'#/reading/p3/' + it.n + '\'">' +
        mark + '<div class="n">Exercise ' + it.n + "</div>" +
        '<div class="s">' + esc(it.title || it.topic || "") + "</div>" +
        '<div class="p2-card-meta">' + it.paragraphs.length + " ta paragraf · " + it.headings.length + " sarlavha</div>" +
        "</button>";
    }).join("");
    var avg = scoreTot ? Math.round(scoreSum / scoreTot * 100) : 0;

    return '<div class="wrap">' +
      '<div class="crumbs"><a href="#/">Bosh sahifa</a> <span>/</span> <a href="#/reading">Reading</a> <span>/</span> Part 3</div>' +
      '<h1 class="title">Part 3</h1>' +
      '<p class="subtitle">' + esc(BOOK.name) + " · Har bir paragrafga mos sarlavhani tanlang</p>" +
      '<p class="p2-hint">Har bir mashqda bir nechta paragraf va undan ko\'proq sarlavha beriladi. Ortiqcha sarlavhalar hech bir paragrafga to\'g\'ri kelmaydi — har birini faqat bir marta ishlating.</p>' +
      '<div class="rule"></div>' +
      '<div class="stats">' +
        '<div class="stat"><div class="k">Bajarilgan</div><div class="v">' + doneCount + "<small> / " + p3Items.length + "</small></div></div>" +
        '<div class="stat"><div class="k">O\'rtacha natija</div><div class="v">' + avg + "<small>%</small></div></div>" +
        '<div class="stat"><div class="k">Urinishlar</div><div class="v">' + attempts + "</div></div>" +
      "</div>" +
      (cards ? '<div class="ex-grid">' + cards + "</div>" : '<div class="empty">Part 3 mashqlari hozircha yo\'q</div>') +
      "</div>";
  }

  function viewP3Exercise(n) {
    var it = p3ByNo[n];
    if (!it) return '<div class="wrap"><div class="empty">Mashq topilmadi</div></div>';
    var progress = state.progress[p3key(n)] || {};
    var headingRows = it.headings.map(function (row) {
      return '<li class="statement-row"><b>' + esc(row[0]) + '</b><span>' + esc(row[1]) + "</span></li>";
    }).join("");
    var paragraphCards = it.paragraphs.map(function (para, idx) {
      var value = progress.user && progress.user[idx] ? progress.user[idx] : "";
      return '<article class="match-card" data-i="' + idx + '">' +
        '<h3>Paragraph ' + (ROMAN[idx] || (idx + 1)) + "</h3>" +
        '<p>' + esc(para.body) + "</p>" +
        '<label for="p3match-' + idx + '">Mos sarlavha:</label>' +
        '<select class="match-select" id="p3match-' + idx + '" data-i="' + idx + '" aria-label="Paragraph ' + (idx + 1) + ' javobi">' +
          '<option value="">Sarlavhani tanlang</option>' +
          it.headings.map(function (row) {
            return '<option value="' + esc(row[0]) + '"' + (value === row[0] ? " selected" : "") + ">" +
              esc(row[0]) + ") " + esc(row[1]) + "</option>";
          }).join("") +
        '</select><span class="match-result" aria-live="polite"></span></article>';
    }).join("");

    return '<div class="ex-layout match-layout">' +
      '<div class="pane-book match-book">' +
        '<div class="match-page-top"><button class="btn ghost" id="backTopBtn">← Part 3 ro\'yxatiga qaytish</button></div>' +
        (it.title ? '<div class="p3-text-head"><h2 class="passage-title">' + esc(it.title) + "</h2>" + (it.sub ? '<p class="p3-sub">' + esc(it.sub) + "</p>" : "") + "</div>" : "") +
        '<div class="match-list">' + paragraphCards + "</div></div>" +
      '<div class="pane-ans match-ans">' +
        '<div class="crumbs"><a href="#/">Bosh sahifa</a> <span>/</span> <a href="#/reading">Reading</a> <span>/</span> <a href="#/reading/p3">Part 3</a></div>' +
        '<div class="ans-head"><h2>Exercise ' + it.n + " · " + esc(it.title || it.topic || "") + "</h2>" +
        '<div class="book">' + esc(BOOK.name) + " · Part 3</div></div>" +
        '<div class="ans-instruction">Har bir paragrafga mos sarlavhani tanlang. Har bir harfni faqat bir marta ishlating; ' +
          Math.max(0, it.headings.length - it.paragraphs.length) + " ta sarlavha ortiqcha.</div>" +
        '<div class="statement-list"><h3>Sarlavhalar ro\'yxati A–' + esc(it.headings[it.headings.length - 1][0]) + "</h3><ol>" + headingRows + "</ol></div>" +
        '<div id="matchNotice" class="match-notice" aria-live="polite"></div>' +
        '<div id="resBox"></div>' +
        '<div class="analysis-panel" id="analysisPanel" hidden></div>' +
        '<div class="btn-row">' +
          '<button class="btn primary" id="checkBtn">Tekshirish</button>' +
          '<button class="btn ghost" id="analysisBtn" aria-expanded="false" hidden>Tahlilni ko\'rish</button>' +
          '<button class="btn ghost" id="revealBtn">Javoblarni ko\'rsatish</button>' +
          (n < p3Items.length ? '<button class="btn ghost" id="nextBtn">Keyingi →</button>' : "") +
        "</div>" +
        '<div class="btn-row" style="margin-top:10px">' +
          '<button class="btn ghost" id="resetBtn">Qayta boshlash</button>' +
          '<button class="btn ghost" id="backBtn">Ro\'yxatga qaytish</button>' +
        "</div>" +
      "</div></div>";
  }

  var P4_TF = [["A", "True"], ["B", "False"], ["C", "No Information"]];

  function viewPart4() {
    var doneCount = 0, attempts = 0, scoreSum = 0, scoreTot = 0;
    var cards = p4Items.map(function (it) {
      var p = state.progress[p4key(it.n)];
      var cls = p && p.done ? "done" : "";
      var total = it.answers.length;
      if (p && p.done) {
        doneCount++;
        attempts += p.attempts || 1;
        scoreSum += p.score || 0;
        scoreTot += p.total || total;
      }
      var mark = p && p.done
        ? '<span class="mark' + ((p.score || 0) === total ? "" : " half") + '">' + (p.score || 0) + "/" + total + "</span>"
        : "";
      return '<button type="button" class="ex-card p2-ex-card ' + cls + '" onclick="location.hash=\'#/reading/p4/' + it.n + '\'">' +
        mark + '<div class="n">Exercise ' + it.n + "</div>" +
        '<div class="s">' + esc(it.title || "Matn") + "</div>" +
        '<div class="p2-card-meta">' + it.questions.length + " ta test · " + it.statements.length + " ta True/False</div>" +
        "</button>";
    }).join("");
    var avg = scoreTot ? Math.round(scoreSum / scoreTot * 100) : 0;

    return '<div class="wrap">' +
      '<div class="crumbs"><a href="#/">Bosh sahifa</a> <span>/</span> <a href="#/reading">Reading</a> <span>/</span> Part 4</div>' +
      '<h1 class="title">Part 4</h1>' +
      '<p class="subtitle">' + esc(BOOK.name) + " · Muqobil javobli test + To'g'ri/Noto'g'ri/Berilmagan</p>" +
      '<p class="p2-hint">Har bir mashqda bitta matn va 9 ta savol beriladi: 1–4 test savollari, 5–9 jumlalar (True / False / No Information).</p>' +
      '<div class="rule"></div>' +
      '<div class="stats">' +
        '<div class="stat"><div class="k">Bajarilgan</div><div class="v">' + doneCount + "<small> / " + p4Items.length + "</small></div></div>" +
        '<div class="stat"><div class="k">O\'rtacha natija</div><div class="v">' + avg + "<small>%</small></div></div>" +
        '<div class="stat"><div class="k">Urinishlar</div><div class="v">' + attempts + "</div></div>" +
      "</div>" +
      (cards ? '<div class="ex-grid">' + cards + "</div>" : '<div class="empty">Part 4 mashqlari hozircha yo\'q</div>') +
      "</div>";
  }

  function viewP4Exercise(n) {
    var it = p4ByNo[n];
    if (!it) return '<div class="wrap"><div class="empty">Mashq topilmadi</div></div>';
    var progress = state.progress[p4key(n)] || {};
    var user = progress.user || [];

    var paras = paragraphsOf(it.body).map(function (para) {
      return "<p>" + esc(para) + "</p>";
    }).join("");

    var mcq = it.questions.map(function (q, qi) {
      var selected = user[qi] || "";
      var opts = q.options.map(function (opt, oi) {
        var letter = String.fromCharCode(65 + oi);
        return '<label class="p4-opt"><input type="radio" name="p4q' + qi + '" value="' + letter + '" data-i="' + qi + '"' +
          (selected === letter ? " checked" : "") + '><span class="p4-opt-l">' + letter + '</span><span class="p4-opt-t">' + esc(opt) + "</span></label>";
      }).join("");
      return '<article class="p4-q" data-i="' + qi + '"><h3><span class="p4-qn">' + (qi + 1) + "</span>" + esc(q.q) + "</h3>" +
        '<div class="p4-opts">' + opts + '</div><span class="match-result" aria-live="polite"></span></article>';
    }).join("");

    var tfs = it.statements.map(function (st, si) {
      var qi = 4 + si;
      var selected = user[qi] || "";
      var opts = P4_TF.map(function (pair) {
        return '<label class="p4-opt p4-opt-tf"><input type="radio" name="p4q' + qi + '" value="' + pair[0] + '" data-i="' + qi + '"' +
          (selected === pair[0] ? " checked" : "") + '><span class="p4-opt-l">' + pair[0] + '</span><span class="p4-opt-t">' + pair[1] + "</span></label>";
      }).join("");
      return '<article class="p4-q p4-tf" data-i="' + qi + '"><h3><span class="p4-qn">' + qi + "</span>" + esc(st.s) + "</h3>" +
        '<div class="p4-opts">' + opts + '</div><span class="match-result" aria-live="polite"></span></article>';
    }).join("");

    return '<div class="ex-layout">' +
      '<div class="pane-book" id="paneBook">' +
        '<div class="match-page-top"><button class="btn ghost" id="backTopBtn">← Part 4 ro\'yxatiga qaytish</button></div>' +
        '<div class="passage-sheet">' +
          (it.title ? '<h2 class="passage-title">' + esc(it.title) + "</h2>" : "") +
          '<div class="passage-text">' + paras + "</div></div></div>" +
      '<div class="pane-ans">' +
        '<div class="crumbs"><a href="#/">Bosh sahifa</a> <span>/</span> <a href="#/reading">Reading</a> <span>/</span> <a href="#/reading/p4">Part 4</a></div>' +
        '<div class="ans-head"><h2>Exercise ' + it.n + (it.title ? " · " + esc(it.title) : "") + "</h2>" +
        '<div class="book">' + esc(BOOK.name) + " · Part 4</div></div>" +
        '<div class="ans-instruction">1–4: matnga mos <b>to\'g\'ri javobni</b> tanlang. 5–9: jumla matnga mos kelsa <b>True (A)</b>, zid bo\'lsa <b>False (B)</b>, matnda berilmagan bo\'lsa <b>No Information (C)</b>.</div>' +
        '<div class="p4-group-title">Muqobil javobli test</div>' +
        '<div class="p4-questions">' + mcq + "</div>" +
        '<div class="p4-group-title">True / False / No Information</div>' +
        '<div class="p4-questions">' + tfs + "</div>" +
        '<div id="resBox"></div>' +
        '<div class="analysis-panel" id="analysisPanel" hidden></div>' +
        '<div class="btn-row">' +
          '<button class="btn primary" id="checkBtn">Tekshirish</button>' +
          '<button class="btn ghost" id="analysisBtn" aria-expanded="false" hidden>Tahlilni ko\'rish</button>' +
          '<button class="btn ghost" id="revealBtn">Javoblarni ko\'rsatish</button>' +
          (n < p4Items.length ? '<button class="btn ghost" id="nextBtn">Keyingi →</button>' : "") +
        "</div>" +
        '<div class="btn-row" style="margin-top:10px">' +
          '<button class="btn ghost" id="resetBtn">Qayta boshlash</button>' +
          '<button class="btn ghost" id="backBtn">Ro\'yxatga qaytish</button>' +
        "</div>" +
      "</div></div>";
  }

  /* ---------- part 5 views ---------- */
  function viewPart5() {
    var doneCount = 0, attempts = 0, scoreSum = 0, scoreTot = 0;
    var cards = p5Items.map(function (it) {
      var p = state.progress[p5key(it.n)];
      var total = it.gaps.length + it.mcq.length;
      if (p && p.done) {
        doneCount++;
        attempts += p.attempts || 1;
        scoreSum += p.score || 0;
        scoreTot += p.total || total;
      }
      var mark = p && p.done
        ? '<span class="mark' + ((p.score || 0) === total ? "" : " half") + '">' + (p.score || 0) + "/" + total + "</span>"
        : "";
      return '<button type="button" class="ex-card p2-ex-card ' + (p && p.done ? "done" : "") + '" onclick="location.hash=\'#/reading/p5/' + it.n + '\'">' +
        mark + '<div class="n">Exercise ' + it.n + "</div>" +
        '<div class="s">' + esc(it.title || "Matn") + "</div>" +
        '<div class="p2-card-meta">' + it.gaps.length + " ta bo'shliq · " + it.mcq.length + " ta test</div>" +
        "</button>";
    }).join("");
    var avg = scoreTot ? Math.round(scoreSum / scoreTot * 100) : 0;

    return '<div class="wrap">' +
      '<div class="crumbs"><a href="#/">Bosh sahifa</a> <span>/</span> <a href="#/reading">Reading</a> <span>/</span> Part 5</div>' +
      '<h1 class="title">Part 5</h1>' +
      '<p class="subtitle">' + esc(BOOK.name) + " · Bo'shliqni matndan to'ldirish + muqobil javobli test</p>" +
      '<p class="p2-hint">Har bir mashqda C1 darajadagi uzun matn va 6 ta savol bor: 1–4 bo\'shliqqa matndan <b>bitta so\'z va/yoki son</b> yoziladi (javoblar matnda ketma-ket keladi), 5–6 muqobil javobli test.</p>' +
      '<div class="rule"></div>' +
      '<div class="stats">' +
        '<div class="stat"><div class="k">Bajarilgan</div><div class="v">' + doneCount + "<small> / " + p5Items.length + "</small></div></div>" +
        '<div class="stat"><div class="k">O\'rtacha natija</div><div class="v">' + avg + "<small>%</small></div></div>" +
        '<div class="stat"><div class="k">Urinishlar</div><div class="v">' + attempts + "</div></div>" +
      "</div>" +
      (cards ? '<div class="ex-grid">' + cards + "</div>" : '<div class="empty">Part 5 mashqlari hozircha yo\'q</div>') +
      "</div>";
  }

  function viewP5Exercise(n) {
    var it = p5ByNo[n];
    if (!it) return notFound("#/reading/p5", "Part 5");
    var user = (state.progress[p5key(n)] || {}).user || [];

    var paras = paragraphsOf(it.body).map(function (para) { return "<p>" + esc(para) + "</p>"; }).join("");

    var gaps = it.gaps.map(function (g, gi) {
      var parts = String(g.text).split("____");
      var input = '<input class="gap-input p5-gap" data-i="' + gi + '" type="text" autocomplete="off" spellcheck="false" aria-label="' + (gi + 1) + '-bo\'shliq" value="' + esc(user[gi] || "") + '">';
      return '<article class="p4-q p5-g" data-i="' + gi + '"><h3><span class="p4-qn">' + (gi + 1) + "</span>" +
        '<span class="p5-sent">' + esc(parts[0]) + '<span class="gap">' + input + "</span>" + esc(parts.slice(1).join("____")) + "</span></h3>" +
        '<span class="match-result" aria-live="polite"></span></article>';
    }).join("");

    var mcq = it.mcq.map(function (q, mi) {
      var qi = it.gaps.length + mi;
      var opts = q.options.map(function (opt, oi) {
        var letter = String.fromCharCode(65 + oi);
        return '<label class="p4-opt"><input type="radio" name="p5q' + qi + '" value="' + letter + '" data-i="' + qi + '"' +
          (user[qi] === letter ? " checked" : "") + '><span class="p4-opt-l">' + letter + '</span><span class="p4-opt-t">' + esc(opt) + "</span></label>";
      }).join("");
      return '<article class="p4-q" data-i="' + qi + '"><h3><span class="p4-qn">' + (qi + 1) + "</span>" + esc(q.q) + "</h3>" +
        '<div class="p4-opts">' + opts + '</div><span class="match-result" aria-live="polite"></span></article>';
    }).join("");

    return '<div class="ex-layout">' +
      '<div class="pane-book" id="paneBook">' +
        '<div class="match-page-top"><button class="btn ghost" id="backTopBtn">← Part 5 ro\'yxatiga qaytish</button></div>' +
        '<div class="passage-sheet">' +
          (it.title ? '<h2 class="passage-title">' + esc(it.title) + "</h2>" : "") +
          '<div class="passage-text">' + paras + "</div></div></div>" +
      '<div class="pane-ans">' +
        '<div class="crumbs"><a href="#/">Bosh sahifa</a> <span>/</span> <a href="#/reading">Reading</a> <span>/</span> <a href="#/reading/p5">Part 5</a></div>' +
        '<div class="ans-head"><h2>Exercise ' + it.n + (it.title ? " · " + esc(it.title) : "") + "</h2>" +
        '<div class="book">' + esc(BOOK.name) + " · Part 5</div></div>" +
        '<div class="ans-instruction">1–4: bo\'shliqqa matndan <b>bitta so\'z va/yoki son</b> yozing (ONE WORD and/or A NUMBER). 5–6: <b>to\'g\'ri javobni</b> tanlang.</div>' +
        '<div class="p4-group-title">Bo\'shliqlarni to\'ldiring</div>' +
        '<div class="p4-questions">' + gaps + "</div>" +
        '<div class="p4-group-title">Muqobil javobli test</div>' +
        '<div class="p4-questions">' + mcq + "</div>" +
        '<div id="resBox"></div>' +
        '<div class="analysis-panel" id="analysisPanel" hidden></div>' +
        '<div class="btn-row">' +
          '<button class="btn primary" id="checkBtn">Tekshirish</button>' +
          '<button class="btn ghost" id="analysisBtn" aria-expanded="false" hidden>Tahlilni ko\'rish</button>' +
          '<button class="btn ghost" id="revealBtn">Javoblarni ko\'rsatish</button>' +
          (p5ByNo[n + 1] ? '<button class="btn ghost" id="nextBtn">Keyingi →</button>' : "") +
        "</div>" +
        '<div class="btn-row" style="margin-top:10px">' +
          '<button class="btn ghost" id="resetBtn">Qayta boshlash</button>' +
          '<button class="btn ghost" id="backBtn">Ro\'yxatga qaytish</button>' +
        "</div>" +
      "</div></div>";
  }

  function notFound(listHash, label) {
    return '<div class="wrap"><div class="crumbs"><a href="#/">Bosh sahifa</a> <span>/</span> <a href="#/reading">Reading</a> <span>/</span> <a href="' + listHash + '">' + label + "</a></div>" +
      '<div class="empty">Mashq topilmadi. <a href="' + listHash + '">' + label + " ro'yxatiga qaytish</a></div></div>";
  }

  /* ---------- passage rendering ---------- */
  function paragraphsOf(body) {
    var raw = String(body || "").replace(/\r/g, "").split(/\n{2,}/);
    var paras = [];
    raw.forEach(function (p) {
      p = p.replace(/\n/g, " ").replace(/\s+/g, " ").trim();
      if (!p) return;
      if (paras.length) {
        var prev = paras[paras.length - 1];
        var prevEnds = /[.!?…]["'’)\]]?$/.test(prev.replace(/\{\{\d+\}\}/g, "").trim());
        var nextStarts = /^["'“A-Z]/.test(p);
        if (!(prevEnds && nextStarts)) { paras[paras.length - 1] = prev + " " + p; return; }
      }
      paras.push(p);
    });
    return paras;
  }

  function gapHTML(num) {
    var idx = num - 1;
    var p = state.progress[pkey(curN)];
    var val = (p && p.user && p.user[idx] != null) ? esc(p.user[idx]) : "";
    return '<span class="gap" data-i="' + idx + '">' +
      '<input class="gap-input" data-i="' + idx + '" type="text" autocomplete="off" spellcheck="false" value="' + val + '">' +
      '<span class="gn">' + num + "</span>" +
      '<span class="gap-correction" aria-live="polite"></span></span>';
  }

  function escapeWithGaps(text) {
    var parts = text.split(/\{\{(\d+)\}\}/);
    var out = "";
    for (var i = 0; i < parts.length; i++) {
      if (i % 2 === 0) out += esc(parts[i]);
      else out += gapHTML(parseInt(parts[i], 10));
    }
    return out;
  }

  function passageHTML(n) {
    var txt = (typeof READING_P1_TEXT !== "undefined") ? READING_P1_TEXT[n] : null;
    var title = "";
    var paras;
    if (txt && txt.body && txt.body.trim()) {
      if (txt.title) title = '<h2 class="passage-title">' + esc(txt.title) + "</h2>";
      paras = paragraphsOf(txt.body).map(function (para) {
        return "<p>" + escapeWithGaps(para) + "</p>";
      }).join("");
    } else {
      paras = '<p class="passage-missing">Bu mashq uchun matn topilmadi.</p>';
    }
    return '<div class="passage-sheet" id="passage">' + title +
      '<div class="passage-text">' + paras + "</div></div>";
  }

  function viewExercise(n) {
    var it = byNo[n];
    if (!it) return notFound("#/reading/p1", "Part 1");

    return '<div class="ex-layout">' +
      '<div class="pane-book" id="paneBook">' +
        '<div class="match-page-top"><button class="btn ghost" id="backTopBtn">← Part 1 ro\'yxatiga qaytish</button></div>' +
        passageHTML(n) + "</div>" +
      '<div class="pane-ans">' +
        '<div class="crumbs"><a href="#/">Bosh sahifa</a> <span>/</span> <a href="#/reading">Reading</a> <span>/</span> <a href="#/reading/p1">Part 1</a></div>' +
        '<div class="ans-head"><h2>Exercise ' + it.n + "</h2>" +
        '<div class="book">' + esc(BOOK.name) + " · Part 1</div></div>" +
        '<div class="ans-instruction">Matn ichidagi bo\'shliqlarga <b>bitta so\'z</b> yozing. So\'z matnning boshqa joyida uchraydi.</div>' +
        '<div id="resBox"></div>' +
        '<div class="analysis-panel" id="analysisPanel" hidden></div>' +
        '<div class="gap-meter"><div class="gm-bar"><span id="gmBar"></span></div>' +
        '<div class="gm-txt"><b id="gmDone">0</b> / ' + gapCountOf(it.n) + " ta bo\'shliq</div></div>" +
        '<div class="btn-row">' +
          '<button class="btn primary" id="checkBtn">Tekshirish</button>' +
          '<button class="btn ghost" id="analysisBtn" aria-expanded="false" hidden>Tahlilni ko\'rish</button>' +
          '<button class="btn ghost" id="revealBtn">Javoblarni ko\'rsatish</button>' +
          (byNo[n + 1] ? '<button class="btn ghost" id="nextBtn">Keyingi →</button>' : "") +
        "</div>" +
        '<div class="btn-row" style="margin-top:10px">' +
          '<button class="btn ghost" id="resetBtn">Qayta boshlash</button>' +
          '<button class="btn ghost" id="backBtn">Ro\'yxatga qaytish</button>' +
        "</div>" +
      "</div></div>";
  }

  function viewP2Exercise(n) {
    var it = p2ByNo[n];
    if (!it) {
      var topic = p2Catalog.filter(function (entry) { return entry.n === n; })[0];
      if (!topic) return '<div class="wrap"><div class="empty">Mashq topilmadi</div></div>';
      return '<div class="wrap"><div class="crumbs"><a href="#/">Bosh sahifa</a> <span>/</span> <a href="#/reading">Reading</a> <span>/</span> <a href="#/reading/p2">Part 2</a></div>' +
        '<button class="btn ghost" onclick="location.hash=\'#/reading/p2\'">← Part 2 ro\'yxatiga qaytish</button>' +
        '<h1 class="title">Exercise ' + topic.n + " · " + esc(topic.title) + "</h1>" +
        '<div class="empty">Bu mashq uchun raqamlashtirilgan matn topilmadi.</div></div>';
    }
    var progress = state.progress[p2key(n)] || {};
    var statementRows = it.statements.map(function (row) {
      return '<li class="statement-row"><b>' + esc(row[0]) + '</b><span>' + esc(row[1]) + "</span></li>";
    }).join("");
    var textRows = it.texts.map(function (text, idx) {
      var value = progress.user && progress.user[idx] ? progress.user[idx] : "";
      return '<article class="match-card" data-i="' + idx + '">' +
        '<h3>E\'lon ' + (idx + 1) + (text.title ? ' · <span class="mc-title">' + esc(text.title) + "</span>" : "") + "</h3>" +
        '<p class="notice-body">' + esc(text.body) + "</p>" +
        '<label for="match-' + idx + '">Mos vaziyat:</label>' +
        '<select class="match-select" id="match-' + idx + '" data-i="' + idx + '" aria-label="E\'lon ' + (idx + 1) + ' javobi">' +
          '<option value="">Variantni tanlang</option>' +
          it.statements.map(function (row) {
            return '<option value="' + esc(row[0]) + '"' + (value === row[0] ? " selected" : "") + ">" + esc(row[0]) + "</option>";
          }).join("") +
        '</select><span class="match-result" aria-live="polite"></span></article>';
    }).join("");

    return '<div class="ex-layout match-layout">' +
      '<div class="pane-book match-book">' +
        '<div class="match-page-top"><button class="btn ghost" id="backTopBtn">← Part 2 ro\'yxatiga qaytish</button></div>' +
        '<div class="match-list">' + textRows + "</div></div>" +
      '<div class="pane-ans match-ans">' +
        '<div class="crumbs"><a href="#/">Bosh sahifa</a> <span>/</span> <a href="#/reading">Reading</a> <span>/</span> <a href="#/reading/p2">Part 2</a></div>' +
        '<div class="ans-head"><h2>' + esc(it.label || ("Exercise " + it.n)) + " · " + esc(it.title || "") + "</h2>" +
        '<div class="book">' + esc(BOOK.name) + " · Part 2</div></div>" +
        '<div class="ans-instruction">' + (it.instr ? '<i>' + esc(it.instr) + '</i><br>' : '') + 'Har bir e\'lonni mos vaziyat bilan belgilang. Har bir harfni faqat bir marta ishlating; ' +
          Math.max(0, it.statements.length - it.texts.length) + " ta variant ortiqcha.</div>" +
        (it.intro ? '<h3 class="p2-intro">' + esc(it.intro) + '</h3>' : '') +
        '<div class="statement-list"><h3>Vaziyatlar A–' + esc(it.statements[it.statements.length - 1][0]) + '</h3><ol>' + statementRows + "</ol></div>" +
        '<div id="matchNotice" class="match-notice" aria-live="polite"></div>' +
        '<div id="resBox"></div>' +
        '<div class="analysis-panel" id="analysisPanel" hidden></div>' +
        '<div class="btn-row">' +
          '<button class="btn primary" id="checkBtn">Tekshirish</button>' +
          '<button class="btn ghost" id="analysisBtn" aria-expanded="false" hidden>Tahlilni ko\'rish</button>' +
          '<button class="btn ghost" id="revealBtn">Javoblarni ko\'rsatish</button>' +
          (n > 0 && n < p2Catalog.length ? '<button class="btn ghost" id="nextBtn">Keyingi →</button>' : "") +
        "</div>" +
        '<div class="btn-row" style="margin-top:10px">' +
          '<button class="btn ghost" id="resetBtn">Qayta boshlash</button>' +
          '<button class="btn ghost" id="backBtn">Ro\'yxatga qaytish</button>' +
        "</div>" +
      "</div></div>";
  }

  /* ---------- exercise logic ---------- */
  function gapInputs() { return document.querySelectorAll("#passage .gap-input"); }

  function collectInputs() {
    var vals = [];
    Array.prototype.forEach.call(gapInputs(), function (inp) {
      vals[parseInt(inp.getAttribute("data-i"), 10)] = inp.value;
    });
    return vals;
  }

  function gapEl(inp) { return inp.parentNode.classList.contains("gap") ? inp.parentNode : null; }

  function clearFeedback() {
    Array.prototype.forEach.call(document.querySelectorAll("#passage .gap"), function (g) {
      g.classList.remove("ok", "bad");
      var correction = g.querySelector(".gap-correction");
      if (correction) correction.textContent = "";
    });
    var resBox = document.getElementById("resBox");
    var panel = document.getElementById("analysisPanel");
    var button = document.getElementById("analysisBtn");
    if (resBox) resBox.innerHTML = "";
    if (panel) { panel.hidden = true; panel.innerHTML = ""; }
    if (button) {
      button.hidden = true;
      button.textContent = "Tahlilni ko'rish";
      button.setAttribute("aria-expanded", "false");
    }
  }

  function applyResult(results, answers) {
    Array.prototype.forEach.call(document.querySelectorAll("#passage .gap"), function (g) {
      var idx = parseInt(g.getAttribute("data-i"), 10);
      g.classList.remove("ok", "bad");
      var correct = !!results[idx];
      g.classList.add(correct ? "ok" : "bad");
      var correction = g.querySelector(".gap-correction");
      if (correction) {
        var variants = String(answers[idx] || "").split("/").map(function (a) { return a.trim(); });
        correction.textContent = correct ? "" : " → " + variants.join(" / ");
      }
    });
  }

  function updateMeter() {
    var ins = gapInputs(), filled = 0;
    Array.prototype.forEach.call(ins, function (inp) { if (inp.value.trim()) filled++; });
    var done = document.getElementById("gmDone"), bar = document.getElementById("gmBar");
    if (done) done.textContent = filled;
    if (bar) bar.style.width = (ins.length ? Math.round(filled / ins.length * 100) : 0) + "%";
  }

  function check() {
    var it = byNo[curN];
    var vals = collectInputs();
    var results = [], score = 0, total = 0;
    Array.prototype.forEach.call(gapInputs(), function (inp) {
      var idx = parseInt(inp.getAttribute("data-i"), 10);
      var ok = isCorrect(vals[idx], it.answers[idx]);
      results[idx] = ok;
      total++;
      if (ok) score++;
    });

    applyResult(results, it.answers);

    document.getElementById("resBox").innerHTML =
      '<div class="res ' + (total && score === total ? "ok" : "bad") + '">' +
      "Natija: " + score + " / " + total + " (" + (total ? Math.round(score / total * 100) : 0) + "%)" +
      (total && score === total ? " — mukammal!" : "") + "</div>";
    var analysisPanel = document.getElementById("analysisPanel");
    var analysisBtn = document.getElementById("analysisBtn");
    analysisPanel.hidden = true;
    analysisPanel.innerHTML = "";
    analysisBtn.hidden = false;
    analysisBtn.textContent = "Tahlilni ko'rish";
    analysisBtn.setAttribute("aria-expanded", "false");

    var p = state.progress[pkey(curN)] || {};
    p.done = true;
    p.score = score;
    p.total = total;
    p.attempts = (p.attempts || 0) + 1;
    p.user = vals;
    p.at = Date.now();
    state.progress[pkey(curN)] = p;
    state.history.unshift({ n: curN, score: score, total: total, at: Date.now() });
    if (state.history.length > 200) state.history.length = 200;
    save();
    track("p1", curN, score, total, { p1: [score, total] });
  }

  function reveal() {
    trackReveal("p1");
    var it = byNo[curN];
    clearFeedback();
    Array.prototype.forEach.call(gapInputs(), function (inp) {
      var idx = parseInt(inp.getAttribute("data-i"), 10);
      inp.value = it.answers[idx] != null ? String(it.answers[idx]).split("/")[0].trim() : "";
      var g = gapEl(inp);
      if (g) g.classList.add("ok");
    });
    updateMeter();
  }

  function reset() {
    clearFeedback();
    Array.prototype.forEach.call(gapInputs(), function (inp) {
      inp.value = "";
      var g = gapEl(inp);
      if (g) g.classList.remove("ok", "bad");
    });
    updateMeter();
  }

  function toggleAnalysis() {
    var panel = document.getElementById("analysisPanel");
    var button = document.getElementById("analysisBtn");
    if (panel.hidden) {
      var it = byNo[curN];
      var vals = collectInputs();
      var rows = [];
      Array.prototype.forEach.call(gapInputs(), function (inp) {
        var idx = parseInt(inp.getAttribute("data-i"), 10);
        var targetNum = idx + 1;
        var accepted = String(it.answers[idx] || "").split("/").map(function (a) { return a.trim(); });
        var sentence = sentenceAroundGap(curN, it.answers, targetNum);
        var clue = repeatedClue(curN, it.answers, targetNum);
        var student = String(vals[idx] || "").trim() || "Javob kiritilmagan";
        var why = clue
          ? "Matnning boshqa jumlasida shu kalit so'z yana uchraydi. Bu takroriy ishora va gapning mazmuni javobni tasdiqlaydi."
          : "To'liq jumlani o'qing. Bo'shliqning oldi-keyinidagi so'zlar va umumiy mazmun to'g'ri javobni aniqlashga yordam beradi.";
        rows.push(
          '<article class="analysis-item">' +
            '<h3>Bo\'shliq ' + targetNum + '</h3>' +
            '<p><b>Sizning javobingiz:</b> ' + esc(student) + '</p>' +
            '<p><b>Rasmiy javob:</b> ' + esc(accepted.join(" / ")) + '</p>' +
            '<p class="analysis-evidence"><b>Matndagi jumla:</b> “' + esc(sentence || "[jumla topilmadi]") + '”</p>' +
            (clue ? '<p class="analysis-evidence"><b>Matndagi ishora:</b> “' + esc(clue) + '”</p>' : "") +
            '<p class="analysis-why"><b>Nega shu javob?</b> ' + why + '</p>' +
          '</article>'
        );
      });
      panel.innerHTML = '<h2>Javoblar tahlili</h2>' +
        '<p class="analysis-intro">Jumla va passage ichidagi ishoralarni solishtirib, javob nima uchun mosligini ko\'ring.</p>' +
        rows.join("");
      panel.hidden = false;
      button.textContent = "Tahlilni yashirish";
      button.setAttribute("aria-expanded", "true");
    } else {
      panel.hidden = true;
      button.textContent = "Tahlilni ko'rish";
      button.setAttribute("aria-expanded", "false");
    }
  }

  function p2Selects() { return document.querySelectorAll(".match-select"); }

  function clearP2Feedback() {
    Array.prototype.forEach.call(document.querySelectorAll(".match-card"), function (card) {
      card.classList.remove("ok", "bad");
      var result = card.querySelector(".match-result");
      if (result) result.textContent = "";
    });
    var resBox = document.getElementById("resBox");
    var panel = document.getElementById("analysisPanel");
    var button = document.getElementById("analysisBtn");
    if (resBox) resBox.innerHTML = "";
    if (panel) { panel.hidden = true; panel.innerHTML = ""; }
    if (button) {
      button.hidden = true;
      button.textContent = "Tahlilni ko'rish";
      button.setAttribute("aria-expanded", "false");
    }
  }

  function collectP2Inputs() {
    var vals = [];
    Array.prototype.forEach.call(p2Selects(), function (select) {
      vals[parseInt(select.getAttribute("data-i"), 10)] = select.value;
    });
    return vals;
  }

  function applyP2Result(vals, it) {
    Array.prototype.forEach.call(p2Selects(), function (select) {
      var idx = parseInt(select.getAttribute("data-i"), 10);
      var card = select.parentNode;
      var correct = vals[idx] === it.texts[idx].answer;
      card.classList.add(correct ? "ok" : "bad");
      var result = card.querySelector(".match-result");
      if (result) result.textContent = correct ? "To'g'ri" : "To'g'ri javob: " + it.texts[idx].answer;
    });
  }

  function checkP2() {
    var it = p2ByNo[curN];
    var vals = collectP2Inputs();
    var score = 0;
    it.texts.forEach(function (text, idx) {
      if (vals[idx] === text.answer) score++;
    });
    applyP2Result(vals, it);
    document.getElementById("resBox").innerHTML =
      '<div class="res ' + (score === it.texts.length ? "ok" : "bad") + '">' +
      "Natija: " + score + " / " + it.texts.length + " (" +
      Math.round(score / it.texts.length * 100) + "%)" +
      (score === it.texts.length ? " — mukammal!" : "") + "</div>";

    var panel = document.getElementById("analysisPanel");
    var button = document.getElementById("analysisBtn");
    panel.hidden = true;
    panel.innerHTML = "";
    button.hidden = false;
    button.textContent = "Tahlilni ko'rish";
    button.setAttribute("aria-expanded", "false");

    var p = state.progress[p2key(curN)] || {};
    p.done = true;
    p.score = score;
    p.total = it.texts.length;
    p.attempts = (p.attempts || 0) + 1;
    p.user = vals;
    p.at = Date.now();
    state.progress[p2key(curN)] = p;
    save();
    track("p2", curN, score, it.texts.length, { p2: [score, it.texts.length] });
  }

  function toggleP2Analysis() {
    var panel = document.getElementById("analysisPanel");
    var button = document.getElementById("analysisBtn");
    if (panel.hidden) {
      var it = p2ByNo[curN];
      var vals = collectP2Inputs();
      var rows = it.texts.map(function (text, idx) {
        var letter = text.answer;
        var statement = it.statements.filter(function (row) { return row[0] === letter; })[0];
        var response = vals[idx] || "Javob tanlanmagan";
        var state = vals[idx] ? (vals[idx] === letter ? " is-ok" : " is-bad") : "";
        return '<article class="analysis-item' + state + '">' +
          '<h3>E\'lon ' + (idx + 1) + (text.title ? ' · <span class="mc-title">' + esc(text.title) + "</span>" : "") + "</h3>" +
          '<p><b>Siz tanlagan:</b> ' + esc(response) + "</p>" +
          '<p><b>To\'g\'ri javob:</b> ' + esc(letter) + " — " + esc(statement ? statement[1] : "") + "</p>" +
          '<p class="analysis-why"><b>Nega mos?</b> ' + esc(text.explanation) + "</p>" +
        "</article>";
      });
      panel.innerHTML = '<h2>Javoblar tahlili</h2>' +
        '<p class="analysis-intro">E\'londagi kalit ma\'lumotni vaziyatdagi sinonim yoki mazmun bilan solishtiring.</p>' +
        rows.join("");
      panel.hidden = false;
      button.textContent = "Tahlilni yashirish";
      button.setAttribute("aria-expanded", "true");
    } else {
      panel.hidden = true;
      button.textContent = "Tahlilni ko'rish";
      button.setAttribute("aria-expanded", "false");
    }
  }

  function revealP2() {
    trackReveal("p2");
    var it = p2ByNo[curN];
    it.texts.forEach(function (text, idx) { p2Selects()[idx].value = text.answer; });
    clearP2Feedback();
    Array.prototype.forEach.call(document.querySelectorAll(".match-card"), function (card) {
      card.classList.add("ok");
    });
    var p = state.progress[p2key(curN)] || {};
    p.user = collectP2Inputs();
    state.progress[p2key(curN)] = p;
    save();
  }

  function resetP2() {
    Array.prototype.forEach.call(p2Selects(), function (select) { select.value = ""; });
    clearP2Feedback();
    var p = state.progress[p2key(curN)] || {};
    p.user = [];
    state.progress[p2key(curN)] = p;
    save();
  }

  /* ---------- part 3 logic ---------- */
  function p3Selects() { return document.querySelectorAll(".match-select"); }

  function applyP3Result(vals, it) {
    Array.prototype.forEach.call(p3Selects(), function (select) {
      var idx = parseInt(select.getAttribute("data-i"), 10);
      var card = select.parentNode;
      var para = it.paragraphs[idx];
      var correct = vals[idx] === para.answer;
      card.classList.add(correct ? "ok" : "bad");
      var result = card.querySelector(".match-result");
      if (result) {
        var right = it.headings.filter(function (row) { return row[0] === para.answer; })[0];
        result.textContent = correct ? "To'g'ri" : "To'g'ri javob: " + para.answer + (right ? " — " + right[1] : "");
      }
    });
  }

  function checkP3() {
    var it = p3ByNo[curN];
    var vals = collectP2Inputs();
    var score = 0;
    it.paragraphs.forEach(function (para, idx) { if (vals[idx] === para.answer) score++; });
    applyP3Result(vals, it);
    document.getElementById("resBox").innerHTML =
      '<div class="res ' + (score === it.paragraphs.length ? "ok" : "bad") + '">' +
      "Natija: " + score + " / " + it.paragraphs.length + " (" +
      Math.round(score / it.paragraphs.length * 100) + "%)" +
      (score === it.paragraphs.length ? " — mukammal!" : "") + "</div>";

    var panel = document.getElementById("analysisPanel");
    var button = document.getElementById("analysisBtn");
    panel.hidden = true;
    panel.innerHTML = "";
    button.hidden = false;
    button.textContent = "Tahlilni ko'rish";
    button.setAttribute("aria-expanded", "false");

    var p = state.progress[p3key(curN)] || {};
    p.done = true;
    p.score = score;
    p.total = it.paragraphs.length;
    p.attempts = (p.attempts || 0) + 1;
    p.user = vals;
    p.at = Date.now();
    state.progress[p3key(curN)] = p;
    save();
    track("p3", curN, score, it.paragraphs.length, { p3: [score, it.paragraphs.length] });
  }

  function toggleP3Analysis() {
    var panel = document.getElementById("analysisPanel");
    var button = document.getElementById("analysisBtn");
    if (panel.hidden) {
      var it = p3ByNo[curN];
      var vals = collectP2Inputs();
      var rows = it.paragraphs.map(function (para, idx) {
        var heading = it.headings.filter(function (row) { return row[0] === para.answer; })[0];
        var response = vals[idx] || "Tanlanmagan";
        return '<article class="analysis-item">' +
          "<h3>Paragraph " + (ROMAN[idx] || (idx + 1)) + "</h3>" +
          '<p><b>Siz tanlagan:</b> ' + esc(response) + "</p>" +
          '<p><b>To\'g\'ri javob:</b> ' + esc(para.answer) + " — " + esc(heading ? heading[1] : "") + "</p>" +
          '<p class="analysis-evidence"><b>Kalit joy:</b> “' + esc(para.evidence || para.body) + '”</p>' +
          '<p class="analysis-why"><b>Nega mos?</b> ' + esc(para.explanation) + "</p>" +
        "</article>";
      });
      panel.innerHTML = '<h2>Javoblar tahlili</h2>' +
        '<p class="analysis-intro">Paragrafning asosiy fikrini sarlavhadagi kalit so\'zlar bilan solishtiring. Ortiqcha sarlavhalar hech bir paragrafga mos kelmaydi.</p>' +
        rows.join("");
      panel.hidden = false;
      button.textContent = "Tahlilni yashirish";
      button.setAttribute("aria-expanded", "true");
    } else {
      panel.hidden = true;
      button.textContent = "Tahlilni ko'rish";
      button.setAttribute("aria-expanded", "false");
    }
  }

  function revealP3() {
    trackReveal("p3");
    var it = p3ByNo[curN];
    it.paragraphs.forEach(function (para, idx) { p3Selects()[idx].value = para.answer; });
    clearP2Feedback();
    Array.prototype.forEach.call(document.querySelectorAll(".match-card"), function (card) {
      card.classList.add("ok");
    });
    var p = state.progress[p3key(curN)] || {};
    p.user = collectP2Inputs();
    state.progress[p3key(curN)] = p;
    save();
  }

  function resetP3() {
    Array.prototype.forEach.call(p3Selects(), function (select) { select.value = ""; });
    clearP2Feedback();
    var p = state.progress[p3key(curN)] || {};
    p.user = [];
    state.progress[p3key(curN)] = p;
    save();
  }

  /* ---------- part 4 logic ---------- */
  function p4Radios() { return document.querySelectorAll(".p4-q input[type=radio]"); }

  function clearP4Feedback() {
    Array.prototype.forEach.call(document.querySelectorAll(".p4-q"), function (card) {
      card.classList.remove("ok", "bad");
      var result = card.querySelector(".match-result");
      if (result) result.textContent = "";
    });
    var resBox = document.getElementById("resBox");
    var panel = document.getElementById("analysisPanel");
    var button = document.getElementById("analysisBtn");
    if (resBox) resBox.innerHTML = "";
    if (panel) { panel.hidden = true; panel.innerHTML = ""; }
    if (button) {
      button.hidden = true;
      button.textContent = "Tahlilni ko'rish";
      button.setAttribute("aria-expanded", "false");
    }
  }

  function collectP4Inputs() {
    var vals = [];
    Array.prototype.forEach.call(p4Radios(), function (radio) {
      if (radio.checked) vals[parseInt(radio.getAttribute("data-i"), 10)] = radio.value;
    });
    return vals;
  }

  function applyP4Result(vals, it) {
    Array.prototype.forEach.call(document.querySelectorAll(".p4-q"), function (card) {
      var idx = parseInt(card.getAttribute("data-i"), 10);
      card.classList.remove("ok", "bad");
      var correct = vals[idx] === it.answers[idx];
      card.classList.add(correct ? "ok" : "bad");
      var result = card.querySelector(".match-result");
      if (result) result.textContent = correct ? "To'g'ri" : "To'g'ri javob: " + it.answers[idx];
    });
  }

  function checkP4() {
    var it = p4ByNo[curN];
    var vals = collectP4Inputs();
    var score = 0, total = it.answers.length;
    for (var i = 0; i < total; i++) { if (vals[i] === it.answers[i]) score++; }
    applyP4Result(vals, it);
    document.getElementById("resBox").innerHTML =
      '<div class="res ' + (score === total ? "ok" : "bad") + '">' +
      "Natija: " + score + " / " + total + " (" + Math.round(score / total * 100) + "%)" +
      (score === total ? " — mukammal!" : "") + "</div>";

    var panel = document.getElementById("analysisPanel");
    var button = document.getElementById("analysisBtn");
    panel.hidden = true;
    panel.innerHTML = "";
    button.hidden = false;
    button.textContent = "Tahlilni ko'rish";
    button.setAttribute("aria-expanded", "false");

    var p = state.progress[p4key(curN)] || {};
    p.done = true;
    p.score = score;
    p.total = total;
    p.attempts = (p.attempts || 0) + 1;
    p.user = vals;
    p.at = Date.now();
    state.progress[p4key(curN)] = p;
    save();
    var nq = it.questions.length, m4 = 0, t4 = 0;
    for (var k = 0; k < total; k++) { if (vals[k] === it.answers[k]) { if (k < nq) m4++; else t4++; } }
    track("p4", curN, score, total, { p4m: [m4, nq], p4t: [t4, total - nq] });
  }

  function p4AnswerText(it, idx, letter) {
    if (!letter) return "Tanlanmagan";
    if (idx < it.questions.length) {
      var oi = letter.charCodeAt(0) - 65;
      var opt = it.questions[idx].options[oi];
      return letter + (opt ? " — " + opt : "");
    }
    var tf = P4_TF.filter(function (pair) { return pair[0] === letter; })[0];
    return letter + (tf ? " — " + tf[1] : "");
  }

  function toggleP4Analysis() {
    var panel = document.getElementById("analysisPanel");
    var button = document.getElementById("analysisBtn");
    if (panel.hidden) {
      var it = p4ByNo[curN];
      var vals = collectP4Inputs();
      var rows = it.answers.map(function (answer, idx) {
        var isMcq = idx < it.questions.length;
        var prompt = isMcq ? it.questions[idx].q : it.statements[idx - it.questions.length].s;
        var ex = (it.explain && it.explain[idx]) || {};
        var ok = vals[idx] === answer;
        return '<article class="analysis-item ' + (ok ? "is-ok" : "is-bad") + '">' +
          "<h3>" + (isMcq ? "Savol " : "Jumla ") + (idx + 1) + (ok ? " · to'g'ri" : " · xato") + "</h3>" +
          '<p><b>Savol/jumla:</b> ' + esc(prompt) + "</p>" +
          '<p><b>Siz tanlagan:</b> ' + esc(p4AnswerText(it, idx, vals[idx])) + "</p>" +
          '<p><b>To\'g\'ri javob:</b> ' + esc(p4AnswerText(it, idx, answer)) + "</p>" +
          (ex.evidence ? '<p class="analysis-evidence"><b>Matndagi dalil:</b> “' + esc(ex.evidence) + '”</p>' : "") +
          '<p class="analysis-why"><b>Nega?</b> ' + esc(ex.why || "") + "</p>" +
        "</article>";
      }).join("");
      panel.innerHTML = '<h2>Javoblar tahlili</h2>' +
        '<p class="analysis-intro">Har bir savol uchun matndagi dalil va javob nega to\'g\'ri ekanligi ko\'rsatilgan.</p>' +
        rows;
      panel.hidden = false;
      button.textContent = "Tahlilni yashirish";
      button.setAttribute("aria-expanded", "true");
    } else {
      panel.hidden = true;
      button.textContent = "Tahlilni ko'rish";
      button.setAttribute("aria-expanded", "false");
    }
  }

  function revealP4() {
    trackReveal("p4");
    var it = p4ByNo[curN];
    clearP4Feedback();
    Array.prototype.forEach.call(p4Radios(), function (radio) {
      var idx = parseInt(radio.getAttribute("data-i"), 10);
      radio.checked = (radio.value === it.answers[idx]);
    });
    Array.prototype.forEach.call(document.querySelectorAll(".p4-q"), function (card) {
      card.classList.add("ok");
    });
    var p = state.progress[p4key(curN)] || {};
    p.user = collectP4Inputs();
    state.progress[p4key(curN)] = p;
    save();
  }

  function resetP4() {
    Array.prototype.forEach.call(p4Radios(), function (radio) { radio.checked = false; });
    clearP4Feedback();
    var p = state.progress[p4key(curN)] || {};
    p.user = [];
    state.progress[p4key(curN)] = p;
    save();
  }

  /* ---------- part 5 logic ---------- */
  function p5Inputs() { return document.querySelectorAll(".p5-gap"); }

  function collectP5Inputs() {
    var vals = [];
    Array.prototype.forEach.call(p5Inputs(), function (inp) {
      vals[parseInt(inp.getAttribute("data-i"), 10)] = inp.value;
    });
    Array.prototype.forEach.call(document.querySelectorAll(".p4-q input[type=radio]"), function (radio) {
      if (radio.checked) vals[parseInt(radio.getAttribute("data-i"), 10)] = radio.value;
    });
    return vals;
  }

  function p5IsRight(it, idx, val) {
    if (idx < it.gaps.length) return isCorrect(val, it.gaps[idx].answer);
    return val === it.mcq[idx - it.gaps.length].answer;
  }

  function p5AnswerText(it, idx, val) {
    if (idx < it.gaps.length) return String(val || "").trim() ? String(val).trim() : "Javob kiritilmagan";
    if (!val) return "Tanlanmagan";
    var opt = it.mcq[idx - it.gaps.length].options[val.charCodeAt(0) - 65];
    return val + (opt ? " — " + opt : "");
  }

  function p5Evidence(it, answer) {
    var sentences = paragraphsOf(it.body).join(" ").match(/[^.!?]+[.!?]+["'’”]?/g) || [];
    var variants = String(answer).split("/");
    for (var i = 0; i < sentences.length; i++) {
      for (var j = 0; j < variants.length; j++) {
        if (wordOccurs(sentences[i], variants[j].trim())) return sentences[i].trim();
      }
    }
    return "";
  }

  function checkP5() {
    var it = p5ByNo[curN];
    var vals = collectP5Inputs();
    var total = it.gaps.length + it.mcq.length, score = 0;
    Array.prototype.forEach.call(document.querySelectorAll(".p4-q"), function (card) {
      var idx = parseInt(card.getAttribute("data-i"), 10);
      var ok = p5IsRight(it, idx, vals[idx]);
      if (ok) score++;
      card.classList.remove("ok", "bad");
      card.classList.add(ok ? "ok" : "bad");
      var result = card.querySelector(".match-result");
      if (result) {
        var right = idx < it.gaps.length ? it.gaps[idx].answer.split("/").join(" / ") : it.mcq[idx - it.gaps.length].answer;
        result.textContent = ok ? "To'g'ri" : "To'g'ri javob: " + right;
      }
    });
    document.getElementById("resBox").innerHTML =
      '<div class="res ' + (score === total ? "ok" : "bad") + '">' +
      "Natija: " + score + " / " + total + " (" + Math.round(score / total * 100) + "%)" +
      (score === total ? " — mukammal!" : "") + "</div>";
    var panel = document.getElementById("analysisPanel");
    var button = document.getElementById("analysisBtn");
    panel.hidden = true;
    panel.innerHTML = "";
    button.hidden = false;
    button.textContent = "Tahlilni ko'rish";
    button.setAttribute("aria-expanded", "false");

    var p = state.progress[p5key(curN)] || {};
    p.done = true;
    p.score = score;
    p.total = total;
    p.attempts = (p.attempts || 0) + 1;
    p.user = vals;
    p.at = Date.now();
    state.progress[p5key(curN)] = p;
    save();
    var ng = it.gaps.length, g5 = 0, m5 = 0;
    for (var k = 0; k < total; k++) { if (p5IsRight(it, k, vals[k])) { if (k < ng) g5++; else m5++; } }
    track("p5", curN, score, total, { p5g: [g5, ng], p5m: [m5, total - ng] });
  }

  function toggleP5Analysis() {
    var panel = document.getElementById("analysisPanel");
    var button = document.getElementById("analysisBtn");
    if (!panel.hidden) {
      panel.hidden = true;
      button.textContent = "Tahlilni ko'rish";
      button.setAttribute("aria-expanded", "false");
      return;
    }
    var it = p5ByNo[curN];
    var vals = collectP5Inputs();
    var rows = p5Answers(it).map(function (answer, idx) {
      var isGap = idx < it.gaps.length;
      var prompt = isGap ? it.gaps[idx].text : it.mcq[idx - it.gaps.length].q;
      var mq = isGap ? null : it.mcq[idx - it.gaps.length];
      var evidence = isGap ? p5Evidence(it, answer) : (mq.evidence || "");
      var why = isGap
        ? (evidence
          ? "Savoldagi gap matndagi shu jumlani boshqa so'zlar bilan qayta ifodalaydi. Bo'shliqqa grammatik jihatdan ham mos keladigan so'z aynan matndan olinadi."
          : "Savoldagi kalit so'zlarning sinonimlarini matndan qidiring; javob matnda oldingi savol javobidan keyin keladi.")
        : (mq.explanation || "Savoldagi kalit so'zlarga mos qismni matndan toping.");
      var ok = vals[idx] != null && vals[idx] !== "" && p5IsRight(it, idx, vals[idx]);
      var state = (vals[idx] == null || vals[idx] === "") ? "" : (ok ? " is-ok" : " is-bad");
      return '<article class="analysis-item' + state + '">' +
        "<h3>" + (isGap ? "Bo'shliq " : "Savol ") + (idx + 1) + "</h3>" +
        '<p><b>Savol:</b> ' + esc(prompt) + "</p>" +
        '<p><b>Sizning javobingiz:</b> ' + esc(p5AnswerText(it, idx, vals[idx])) + "</p>" +
        '<p><b>To\'g\'ri javob:</b> ' + esc(isGap ? answer.split("/").join(" / ") : p5AnswerText(it, idx, answer)) + "</p>" +
        (evidence ? '<p class="analysis-evidence"><b>Matndagi dalil:</b> “' + esc(evidence) + '”</p>' : "") +
        '<p class="analysis-why"><b>Nega?</b> ' + esc(why) + "</p>" +
      "</article>";
    }).join("");
    panel.innerHTML = '<h2>Javoblar tahlili</h2>' +
      '<p class="analysis-intro">Har bir javob uchun matndagi dalil va qisqa izoh berilgan.</p>' +
      rows;
    panel.hidden = false;
    button.textContent = "Tahlilni yashirish";
    button.setAttribute("aria-expanded", "true");
  }

  function clearP5Feedback() {
    Array.prototype.forEach.call(document.querySelectorAll(".p4-q"), function (card) {
      card.classList.remove("ok", "bad");
      var result = card.querySelector(".match-result");
      if (result) result.textContent = "";
    });
    document.getElementById("resBox").innerHTML = "";
    var panel = document.getElementById("analysisPanel");
    var button = document.getElementById("analysisBtn");
    panel.hidden = true;
    panel.innerHTML = "";
    button.hidden = true;
  }

  function saveP5Draft() {
    var p = state.progress[p5key(curN)] || {};
    p.user = collectP5Inputs();
    state.progress[p5key(curN)] = p;
    save();
  }

  function revealP5() {
    trackReveal("p5");
    var it = p5ByNo[curN];
    clearP5Feedback();
    Array.prototype.forEach.call(p5Inputs(), function (inp) {
      inp.value = it.gaps[parseInt(inp.getAttribute("data-i"), 10)].answer.split("/")[0];
    });
    Array.prototype.forEach.call(document.querySelectorAll(".p4-q input[type=radio]"), function (radio) {
      var idx = parseInt(radio.getAttribute("data-i"), 10);
      radio.checked = radio.value === it.mcq[idx - it.gaps.length].answer;
    });
    Array.prototype.forEach.call(document.querySelectorAll(".p4-q"), function (card) { card.classList.add("ok"); });
    saveP5Draft();
  }

  function resetP5() {
    Array.prototype.forEach.call(p5Inputs(), function (inp) { inp.value = ""; });
    Array.prototype.forEach.call(document.querySelectorAll(".p4-q input[type=radio]"), function (radio) { radio.checked = false; });
    clearP5Feedback();
    saveP5Draft();
  }

  function wireP5Exercise() {
    document.getElementById("checkBtn").onclick = checkP5;
    document.getElementById("analysisBtn").onclick = toggleP5Analysis;
    document.getElementById("revealBtn").onclick = revealP5;
    document.getElementById("resetBtn").onclick = resetP5;
    document.getElementById("backBtn").onclick = function () { location.hash = "#/reading/p5"; };
    document.getElementById("backTopBtn").onclick = function () { location.hash = "#/reading/p5"; };
    var nb = document.getElementById("nextBtn");
    if (nb) nb.onclick = function () { location.hash = "#/reading/p5/" + (curN + 1); };
    var inputs = p5Inputs();
    Array.prototype.forEach.call(inputs, function (inp, i) {
      inp.addEventListener("input", function () { clearP5Feedback(); saveP5Draft(); });
      inp.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
          e.preventDefault();
          if (i < inputs.length - 1) inputs[i + 1].focus();
        }
      });
    });
    Array.prototype.forEach.call(document.querySelectorAll(".p4-q input[type=radio]"), function (radio) {
      radio.addEventListener("change", function () { clearP5Feedback(); saveP5Draft(); });
    });
  }

  /* ---------- routing ---------- */
  var curN = null;

  function render() {
    topbar();
    var view = document.getElementById("view");
    var parts = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
    var auth = window.CEFR_AUTH;
    if (auth && !auth.isReady()) { view.innerHTML = auth.loadingHTML(); return; }
    if (auth && !auth.current()) { auth.renderLogin(view); window.scrollTo(0, 0); return; }

    if (parts[0] === "reja" && window.CEFR_PLAN) {
      window.CEFR_PLAN.render(view);
    } else if (parts[0] === "stats" && window.CEFR_STATS) {
      window.CEFR_STATS.render(view);
    } else if (parts[0] === "listening" && window.CEFR_LISTEN) {
      window.CEFR_LISTEN.render(parts, view);
    } else if (parts.length === 0) {
      view.innerHTML = viewHome();
    } else if (parts[0] === "reading" && parts.length === 1) {
      view.innerHTML = viewReading();
    } else if (parts[0] === "reading" && parts[1] === "p1" && parts.length === 2) {
      view.innerHTML = viewPart();
    } else if (parts[0] === "reading" && parts[1] === "p1" && parts.length === 3) {
      curN = parseInt(parts[2], 10);
      view.innerHTML = viewExercise(curN);
      wireIf(wireExercise);
    } else if (parts[0] === "reading" && parts[1] === "p2" && parts.length === 2) {
      view.innerHTML = viewPart2();
    } else if (parts[0] === "reading" && parts[1] === "p2" && parts.length === 3) {
      curN = parseInt(parts[2], 10);
      view.innerHTML = viewP2Exercise(curN);
      wireIf(wireP2Exercise);
    } else if (parts[0] === "reading" && parts[1] === "p3" && parts.length === 2) {
      view.innerHTML = viewPart3();
    } else if (parts[0] === "reading" && parts[1] === "p3" && parts.length === 3) {
      curN = parseInt(parts[2], 10);
      view.innerHTML = viewP3Exercise(curN);
      wireIf(wireP3Exercise);
    } else if (parts[0] === "reading" && parts[1] === "p4" && parts.length === 2) {
      view.innerHTML = viewPart4();
    } else if (parts[0] === "reading" && parts[1] === "p4" && parts.length === 3) {
      curN = parseInt(parts[2], 10);
      view.innerHTML = viewP4Exercise(curN);
      wireIf(wireP4Exercise);
    } else if (parts[0] === "reading" && parts[1] === "p5" && parts.length === 2) {
      view.innerHTML = viewPart5();
    } else if (parts[0] === "reading" && parts[1] === "p5" && parts.length === 3) {
      curN = parseInt(parts[2], 10);
      view.innerHTML = viewP5Exercise(curN);
      wireIf(wireP5Exercise);
    } else {
      view.innerHTML = viewHome();
    }
    window.scrollTo(0, 0);
  }

  function wireIf(fn) { if (document.getElementById("checkBtn")) fn(); }

  function wireExercise() {
    document.getElementById("checkBtn").onclick = check;
    document.getElementById("analysisBtn").onclick = toggleAnalysis;
    document.getElementById("revealBtn").onclick = reveal;
    document.getElementById("resetBtn").onclick = reset;
    document.getElementById("backBtn").onclick = function () { location.hash = "#/reading/p1"; };
    document.getElementById("backTopBtn").onclick = function () { location.hash = "#/reading/p1"; };
    var nb = document.getElementById("nextBtn");
    if (nb) nb.onclick = function () { location.hash = "#/reading/p1/" + (curN + 1); };

    // live meter + enter key -> next input / check
    var inputs = gapInputs();
    Array.prototype.forEach.call(inputs, function (inp, i) {
      inp.addEventListener("input", function () {
        updateMeter();
        clearFeedback();
      });
      inp.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
          e.preventDefault();
          if (i < inputs.length - 1) inputs[i + 1].focus();
          else check();
        }
      });
    });
    updateMeter();
    if (inputs.length) inputs[0].focus();
  }

  function wireP2Exercise() {
    document.getElementById("checkBtn").onclick = checkP2;
    document.getElementById("analysisBtn").onclick = toggleP2Analysis;
    document.getElementById("revealBtn").onclick = revealP2;
    document.getElementById("resetBtn").onclick = resetP2;
    document.getElementById("backBtn").onclick = function () { location.hash = "#/reading/p2"; };
    document.getElementById("backTopBtn").onclick = function () { location.hash = "#/reading/p2"; };
    var nb = document.getElementById("nextBtn");
    if (nb) nb.onclick = function () { location.hash = "#/reading/p2/" + (curN + 1); };

    Array.prototype.forEach.call(p2Selects(), function (select) {
      select.addEventListener("change", function () {
        var notice = document.getElementById("matchNotice");
        var duplicate = false;
        if (select.value) {
          Array.prototype.forEach.call(p2Selects(), function (other) {
            if (other !== select && other.value === select.value) {
              other.value = "";
              duplicate = true;
            }
          });
        }
        notice.textContent = duplicate
          ? "Bu harf boshqa e'londan olib tashlandi: har bir variant faqat bir marta ishlatiladi."
          : "";
        clearP2Feedback();
        var p = state.progress[p2key(curN)] || {};
        p.user = collectP2Inputs();
        state.progress[p2key(curN)] = p;
        save();
      });
    });
  }

  function wireP3Exercise() {
    document.getElementById("checkBtn").onclick = checkP3;
    document.getElementById("analysisBtn").onclick = toggleP3Analysis;
    document.getElementById("revealBtn").onclick = revealP3;
    document.getElementById("resetBtn").onclick = resetP3;
    document.getElementById("backBtn").onclick = function () { location.hash = "#/reading/p3"; };
    document.getElementById("backTopBtn").onclick = function () { location.hash = "#/reading/p3"; };
    var nb = document.getElementById("nextBtn");
    if (nb) nb.onclick = function () { location.hash = "#/reading/p3/" + (curN + 1); };

    Array.prototype.forEach.call(p3Selects(), function (select) {
      select.addEventListener("change", function () {
        var notice = document.getElementById("matchNotice");
        var duplicate = false;
        if (select.value) {
          Array.prototype.forEach.call(p3Selects(), function (other) {
            if (other !== select && other.value === select.value) {
              other.value = "";
              duplicate = true;
            }
          });
        }
        notice.textContent = duplicate
          ? "Bu sarlavha boshqa paragrafdan olib tashlandi: har bir variant faqat bir marta ishlatiladi."
          : "";
        clearP2Feedback();
        var p = state.progress[p3key(curN)] || {};
        p.user = collectP2Inputs();
        state.progress[p3key(curN)] = p;
        save();
      });
    });
  }

  function wireP4Exercise() {
    document.getElementById("checkBtn").onclick = checkP4;
    document.getElementById("analysisBtn").onclick = toggleP4Analysis;
    document.getElementById("revealBtn").onclick = revealP4;
    document.getElementById("resetBtn").onclick = resetP4;
    document.getElementById("backBtn").onclick = function () { location.hash = "#/reading/p4"; };
    document.getElementById("backTopBtn").onclick = function () { location.hash = "#/reading/p4"; };
    var nb = document.getElementById("nextBtn");
    if (nb) nb.onclick = function () { location.hash = "#/reading/p4/" + (curN + 1); };

    Array.prototype.forEach.call(p4Radios(), function (radio) {
      radio.addEventListener("change", function () {
        clearP4Feedback();
        var p = state.progress[p4key(curN)] || {};
        p.user = collectP4Inputs();
        state.progress[p4key(curN)] = p;
        save();
      });
    });
  }

  window.addEventListener("hashchange", render);
  window.CEFR_APP = {
    render: render,
    getState: function () { return state; },
    setState: function (s) { state = (s && s.progress) ? s : { progress: {}, history: [] }; if (!state.history) state.history = []; },
    legacyState: function () { try { var s = JSON.parse(localStorage.getItem(LS_KEY)); return s && s.progress ? s : null; } catch (e) { return null; } },
    catalog: function () {
      function mk(list, key, title) { return list.map(function (it) { var p = state.progress[key(it.n)]; return { n: it.n, title: title(it), done: !!(p && p.done), score: p && p.score, total: p && p.total }; }); }
      return [
        { id: "p1", name: "Part 1", desc: PARTS[0].desc, list: mk(items, pkey, function (it) { return "Mashq " + it.n; }) },
        { id: "p2", name: "Part 2", desc: PARTS[1].desc, list: mk(p2Catalog.filter(function (t) { return p2ByNo[t.n]; }), p2key, function (t) { return t.title; }) },
        { id: "p3", name: "Part 3", desc: PARTS[2].desc, list: mk(p3Items, p3key, function (it) { return it.title || ("Mashq " + it.n); }) },
        { id: "p4", name: "Part 4", desc: PARTS[3].desc, list: mk(p4Items, p4key, function (it) { return it.title || ("Mashq " + it.n); }) },
        { id: "p5", name: "Part 5", desc: PARTS[4].desc, list: mk(p5Items, p5key, function (it) { return it.title || ("Mashq " + it.n); }) }
      ].concat(window.CEFR_LISTEN ? window.CEFR_LISTEN.catalog() : []);
    }
  };
  (function initTheme() {
    var saved = null;
    try { saved = localStorage.getItem("cefr_night"); } catch (e) {}
    var night;
    if (saved === "1" || saved === "0") night = saved === "1";
    else {
      var forced = document.documentElement.getAttribute("data-theme");
      night = forced ? forced === "dark" : !!(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
    if (night) document.body.classList.add("night");
  })();
  render();
})();

/* ---------- bosganda tarjima (so'z + jumla) ---------- */
(function () {
  var TR = window.TARJIMA || { s: {}, l: [], w: {} };
  var ABBR = { mr: 1, mrs: 1, ms: 1, dr: 1, st: 1, prof: 1, jr: 1, sr: 1, vs: 1, etc: 1, no: 1, co: 1, inc: 1, ltd: 1, mt: 1, ave: 1, rd: 1, approx: 1, "e.g": 1, "i.e": 1 };
  var OPEN = "\"'“‘([", CLOSE = "\"'”’)]", END = ".!?…";
  var ZONES = ".ln-said, .ln-ans, .tx-t, .passage-text p, .passage-title, .p3-sub, .match-card p, .match-card h3 .mc-title, .statement-row span, .p4-q > h3, .p5-sent";
  var on = true;
  try { on = localStorage.getItem("cefr_tr") !== "0"; } catch (e) {}

  function isUpperAscii(ch) { return /[A-Z0-9]/.test(ch); }
  function split(text) {
    var t = String(text).replace(/\s+/g, " ").trim(), out = [], start = 0, i = 0, n = t.length;
    while (i < n) {
      var c = t.charAt(i);
      if (END.indexOf(c) >= 0) {
        var j = i + 1;
        while (j < n && END.indexOf(t.charAt(j)) >= 0) j++;
        while (j < n && CLOSE.indexOf(t.charAt(j)) >= 0) j++;
        if (j < n && t.charAt(j) === " ") {
          var k = j + 1;
          if (k < n && OPEN.indexOf(t.charAt(k)) >= 0) k++;
          if (k < n && isUpperAscii(t.charAt(k))) {
            var m = /([A-Za-z.]+)$/.exec(t.slice(start, i));
            var w = m ? m[1].toLowerCase() : "";
            if (c === "." && (ABBR[w] || /^[a-z]$/.test(w) || /^([a-z]\.)+[a-z]$/.test(w))) { i = j; continue; }
            out.push(t.slice(start, j).trim()); start = j + 1; i = j + 1; continue;
          }
        }
        i = j; continue;
      }
      i++;
    }
    if (t.slice(start).trim()) out.push(t.slice(start).trim());
    return out;
  }
  function key(s) { return String(s).toLowerCase().replace(/[^a-z]/g, ""); }

  var keys = null;
  function findSentence(s) {
    var k = key(s);
    if (!k) return null;
    if (TR.s[k]) return TR.s[k];
    if (!keys) keys = Object.keys(TR.s);
    var best = null, bestLen = 0;
    for (var i = 0; i < keys.length; i++) {
      var c = keys[i];
      if (c.length > 12 && (k.indexOf(c) >= 0 || c.indexOf(k) >= 0)) {
        var l = Math.min(c.length, k.length);
        if (l > bestLen) { bestLen = l; best = c; }
      }
    }
    return best && bestLen > k.length * 0.6 ? TR.s[best] : null;
  }
  function findWord(w) {
    var f = String(w).toLowerCase().replace(/[’]/g, "'").replace(/^'+|'+$/g, "");
    var cands = [f, f.replace(/'s$/, ""), f.replace(/s'$/, "s"), f.replace(/-/g, "")];
    for (var i = 0; i < cands.length; i++) {
      var idx = TR.w[cands[i]];
      if (idx != null && TR.l[idx]) return { lemma: TR.l[idx][0], gloss: TR.l[idx][1] };
    }
    if (f.indexOf("-") > 0) {
      var parts = f.split("-"), gl = [];
      for (var j = 0; j < parts.length; j++) {
        var r = parts[j] && findWord(parts[j]);
        if (!r) return null;
        gl.push(parts[j] + ": " + r.gloss.split(/[;,]/)[0]);
      }
      return { lemma: f, gloss: gl.join(" + ") };
    }
    return null;
  }

  function blockText(block, node, offset) {
    var raw = "", pos = -1;
    (function walk(el) {
      for (var ch = el.firstChild; ch; ch = ch.nextSibling) {
        if (ch.nodeType === 3) {
          if (ch === node) pos = raw.length + offset;
          raw += ch.nodeValue;
        } else if (ch.nodeType === 1) {
          if (ch.classList.contains("gap")) { raw += " ___ "; continue; }
          if (ch.classList.contains("gap-correction") || ch.tagName === "INPUT") continue;
          walk(ch);
        }
      }
    })(block);
    return { raw: raw, pos: pos };
  }

  function caretAt(x, y) {
    if (document.caretRangeFromPoint) {
      var r = document.caretRangeFromPoint(x, y);
      return r ? { node: r.startContainer, offset: r.startOffset } : null;
    }
    if (document.caretPositionFromPoint) {
      var p = document.caretPositionFromPoint(x, y);
      return p ? { node: p.offsetNode, offset: p.offset } : null;
    }
    return null;
  }

  var sheet = null, marked = null;
  function ensureSheet() {
    if (sheet) return sheet;
    sheet = document.createElement("div");
    sheet.className = "tr-sheet";
    sheet.setAttribute("role", "dialog");
    sheet.setAttribute("aria-label", "Tarjima");
    sheet.hidden = true;
    document.body.appendChild(sheet);
    sheet.addEventListener("click", function (e) { if (e.target.closest(".tr-close")) close(); });
    return sheet;
  }
  function close() {
    if (sheet) sheet.hidden = true;
    if (marked) { marked.classList.remove("tr-active"); marked = null; }
  }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; });
  }
  function show(word, wordInfo, en, uz, block) {
    ensureSheet();
    if (marked) marked.classList.remove("tr-active");
    marked = block; block.classList.add("tr-active");
    var wl = word
      ? '<div class="tr-word"><b>' + esc(word) + "</b>" +
        (wordInfo ? (wordInfo.lemma && wordInfo.lemma !== word.toLowerCase() ? ' <span class="tr-lemma">(' + esc(wordInfo.lemma) + ")</span>" : "") +
          ' <span class="tr-gloss">— ' + esc(wordInfo.gloss) + "</span>" :
          (/^[A-Z]/.test(word) ? ' <span class="tr-gloss tr-none">— atoqli ot (ism, joy yoki nom)</span>' : ' <span class="tr-gloss tr-none">— lug\'atda topilmadi</span>')) + "</div>"
      : "";
    sheet.innerHTML = '<button type="button" class="tr-close" aria-label="Yopish">×</button>' + wl +
      '<div class="tr-en">' + esc(en) + "</div>" +
      '<div class="tr-uz">' + (uz ? esc(uz) : (/^[^a-z]*$|^([A-Z0-9][\w'’&.-]*\s*){1,4}$/.test(en.trim()) ? '<span class="tr-none">Nom yoki sarlavha — tarjima talab qilinmaydi.</span>' : '<span class="tr-none">Bu jumla tarjimasi topilmadi.</span>')) + "</div>";
    sheet.hidden = false;
  }

  document.addEventListener("click", function (e) {
    if (!on) return;
    var t = e.target;
    if (sheet && sheet.contains(t)) return;
    if (t.closest("input, select, button, label, a, textarea")) return;
    var block = t.closest(ZONES);
    if (!block || !block.closest("#view")) { close(); return; }
    var sel = window.getSelection && window.getSelection();
    if (sel && String(sel).length > 1) return;
    var c = caretAt(e.clientX, e.clientY);
    if (!c || c.node.nodeType !== 3 || !block.contains(c.node)) return;
    var v = c.node.nodeValue, a = c.offset, b = c.offset, re = /[A-Za-z'’\-]/;
    while (a > 0 && re.test(v.charAt(a - 1))) a--;
    while (b < v.length && re.test(v.charAt(b))) b++;
    var word = v.slice(a, b).replace(/^['’\-]+|['’\-]+$/g, "");
    var bt = blockText(block, c.node, c.offset);
    var before = bt.raw.slice(0, Math.max(0, bt.pos)).replace(/\s+/g, " ").replace(/^\s+/, "");
    var sents = split(bt.raw), acc = 0, sent = sents[0] || "";
    for (var i = 0; i < sents.length; i++) {
      acc += sents[i].length + 1;
      if (before.length < acc) { sent = sents[i]; break; }
    }
    if (block.getAttribute("data-uz")) { show(word, word ? findWord(word) : null, block.textContent.trim(), block.getAttribute("data-uz"), block); return; }
    show(word, word ? findWord(word) : null, sent, findSentence(sent), block);
  });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
  window.addEventListener("hashchange", close);

  window.CEFR_TR = {
    isOn: function () { return on; },
    toggle: function () {
      on = !on;
      try { localStorage.setItem("cefr_tr", on ? "1" : "0"); } catch (e) {}
      document.body.classList.toggle("tr-on", on);
      if (!on) close();
      return on;
    }
  };
  document.body.classList.toggle("tr-on", on);
  try { window.dispatchEvent(new HashChangeEvent("hashchange")); } catch (e) {}
})();
