(function () {
  'use strict';

  /* ---------- 回到顶部 ---------- */
  var btn = document.getElementById('back-to-top');
  if (btn) {
    window.addEventListener('scroll', function () {
      btn.classList.toggle('show', window.scrollY > 400);
    }, { passive: true });
    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------- 语言切换 ---------- */
  // 目标语言 URL 由 build.js 写入 <body data-lang-target="/en/...">
  var langBtn = document.getElementById('nav-lang');
  if (langBtn) {
    var target = document.body.getAttribute('data-lang-target');
    if (target) {
      langBtn.setAttribute('href', target);
      langBtn.addEventListener('click', function () {
        try { localStorage.setItem('lang', document.body.getAttribute('data-lang-code') || ''); } catch (e) {}
      });
    }
  }

  /* ---------- 主题切换 ---------- */
  var wrap = document.querySelector('.nav-theme-wrap');
  var themeBtn = document.getElementById('nav-theme-btn');
  var menu = document.getElementById('nav-theme-menu');
  if (!wrap || !themeBtn || !menu) return;

  var sun = document.getElementById('nav-icon-sun');
  var moon = document.getElementById('nav-icon-moon');
  var mqDark = window.matchMedia('(prefers-color-scheme: dark)');

  function isDarkMode(t) {
    return t === 'dark' || (t === 'auto' && mqDark.matches);
  }
  function syncIcon(t) {
    var dark = isDarkMode(t);
    if (sun && moon) {
      sun.style.display = dark ? 'none' : 'inline';
      moon.style.display = dark ? 'inline' : 'none';
    }
  }
  function setActive(t) {
    menu.querySelectorAll('[data-theme-set]').forEach(function (b) {
      b.classList.toggle('active', b.getAttribute('data-theme-set') === t);
    });
  }
  function applyTheme(t) {
    if (t === 'auto') document.documentElement.removeAttribute('data-theme');
    else document.documentElement.setAttribute('data-theme', t);
  }

  var saved = (function () {
    try { return localStorage.getItem('theme') || 'auto'; } catch (e) { return 'auto'; }
  })();
  syncIcon(saved);
  setActive(saved);

  // 切换菜单显隐
  themeBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    var open = wrap.classList.toggle('open');
    themeBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  document.addEventListener('click', function () {
    wrap.classList.remove('open');
    themeBtn.setAttribute('aria-expanded', 'false');
  });
  menu.addEventListener('click', function (e) {
    var b = e.target.closest('[data-theme-set]');
    if (!b) return;
    var t = b.getAttribute('data-theme-set');
    try { localStorage.setItem('theme', t); } catch (err) {}
    applyTheme(t);
    saved = t;
    syncIcon(t);
    setActive(t);
    wrap.classList.remove('open');
  });

  // 跟随系统：auto 模式下系统主题变化时更新图标
  mqDark.addEventListener('change', function () {
    var cur = (function () { try { return localStorage.getItem('theme') || 'auto'; } catch (e) { return 'auto'; } })();
    if (cur === 'auto') syncIcon('auto');
  });
})();
