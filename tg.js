/* Telegram Mini App moslamasi: tema, to'liq ekran, orqaga tugmasi. Telegramdan tashqarida hech narsa qilmaydi. */
(function () {
  var W = window.Telegram && window.Telegram.WebApp;
  if (!W || !W.initData) return;
  document.documentElement.classList.add("in-tg");
  try { W.ready(); } catch (e) {}
  try { W.expand(); } catch (e) {}
  try { if (W.disableVerticalSwipes) W.disableVerticalSwipes(); } catch (e) {}

  // Tema: foydalanuvchi o'zi tanlamagan bo'lsa, Telegram temasiga ergashamiz
  function userChose() { try { var v = localStorage.getItem("cefr_night"); return v === "1" || v === "0"; } catch (e) { return false; } }
  function applyTheme() {
    var dark = W.colorScheme === "dark";
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
    if (document.body && !userChose()) document.body.classList.toggle("night", dark);
    paint();
  }
  function paint() {
    var night = document.body ? document.body.classList.contains("night") : W.colorScheme === "dark";
    var bg = night ? "#1a120a" : "#fff8f2";
    try { if (W.setHeaderColor) W.setHeaderColor(bg); if (W.setBackgroundColor) W.setBackgroundColor(bg); if (W.setBottomBarColor) W.setBottomBarColor(bg); } catch (e) {}
  }
  applyTheme();
  document.addEventListener("DOMContentLoaded", function () {
    applyTheme();
    try { new MutationObserver(paint).observe(document.body, { attributes: true, attributeFilter: ["class"] }); } catch (e) {}
  });
  try { W.onEvent("themeChanged", function () { applyTheme(); if (window.CEFR_APP) window.CEFR_APP.render(); }); } catch (e) {}

  // Orqaga tugmasi
  function parent(h) {
    var p = h.replace(/^#\/?/, "").split("/").filter(Boolean);
    if (!p.length) return null;
    var mob = document.documentElement.classList.contains("mob");
    if (p.length === 1 && /^(stats|reja|mashq|profil)$/.test(p[0])) return mob ? null : "#/";
    if (p[0] === "kalit") return mob ? "#/profil" : "#/";
    if (p.length === 1 && /^(reading|listening|writing|speaking|lugat|duel|mock|ovoz)$/.test(p[0])) return mob ? "#/mashq" : "#/";
    if (p.length === 1 && /^(guruh|karta)$/.test(p[0])) return mob ? "#/profil" : "#/";
    if (p[0] === "speaking" && p[1] === "x") return "#/speaking/" + (!p[3] || p[3] === "all" ? "m" : p[3]);
    p.pop();
    if (p.length === 1 && (p[0] === "reading" || p[0] === "listening")) return "#/" + p[0];
    return p.length ? "#/" + p.join("/") : "#/";
  }
  function syncBack() {
    var BB = W.BackButton; if (!BB) return;
    if (parent(location.hash || "#/")) BB.show(); else BB.hide();
  }
  try {
    W.BackButton.onClick(function () { var t = parent(location.hash || "#/"); location.hash = t || "#/"; });
  } catch (e) {}
  window.addEventListener("hashchange", syncBack);
  syncBack();

  // Tashqi havolalar Telegram brauzerida ochilsin
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest("a[href^='http']");
    if (!a || !W.openLink) return;
    e.preventDefault();
    try { W.openLink(a.href); } catch (x) { window.open(a.href, "_blank"); }
  }, true);
})();
