/* ============================================================
   APP — shared theme + language logic for every page.
   Requires translations.js (I18N) to be loaded first, and
   should itself be loaded in <head> (no defer) so the theme
   and language attributes are set before first paint.

   Pages with dynamic content (index.html) should listen for
   the "langchange" event on document to re-render.
   ============================================================ */
(function () {
  const root = document.documentElement;
  const STORAGE_THEME = "site-theme";
  const STORAGE_LANG = "site-lang";

  function getInitialTheme() {
    const saved = localStorage.getItem(STORAGE_THEME);
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  }

  function getInitialLang() {
    const saved = localStorage.getItem(STORAGE_LANG);
    if (saved === "pt" || saved === "en") return saved;
    return "pt";
  }

  function setThemeAttr(theme) {
    root.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_THEME, theme);
  }

  function setLangAttr(lang) {
    root.setAttribute("data-lang", lang);
    root.setAttribute("lang", lang === "pt" ? "pt-PT" : "en");
    localStorage.setItem(STORAGE_LANG, lang);
  }

  function renderTranslations(lang) {
    const dict = (typeof I18N !== "undefined" && (I18N[lang] || I18N.pt)) || {};

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      if (dict[key] !== undefined) el.setAttribute("aria-label", dict[key]);
    });

    const langCode = document.querySelector("#langToggle .lang-code");
    if (langCode) langCode.textContent = lang === "pt" ? "EN" : "PT";
  }

  // Set attributes immediately (before paint) to avoid a theme/lang flash.
  setThemeAttr(getInitialTheme());
  setLangAttr(getInitialLang());

  document.addEventListener("DOMContentLoaded", () => {
    renderTranslations(root.getAttribute("data-lang"));

    const themeToggle = document.querySelector("#themeToggle");
    const langToggle = document.querySelector("#langToggle");

    if (themeToggle) {
      themeToggle.addEventListener("click", () => {
        const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
        setThemeAttr(next);
      });
    }

    if (langToggle) {
      langToggle.addEventListener("click", () => {
        const next = root.getAttribute("data-lang") === "pt" ? "en" : "pt";
        setLangAttr(next);
        renderTranslations(next);
        document.dispatchEvent(new CustomEvent("langchange", { detail: { lang: next } }));
      });
    }
  });
})();
