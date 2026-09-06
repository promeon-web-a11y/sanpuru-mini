/* 澄家リフォーム Mini サンプル — main.js
   DESIGN.md §9 に準拠：ヘッダー追従 / モバイルナビ / スクロールリビールのみ。
   過剰なアニメーションは追加しないこと。 */
(function () {
  'use strict';

  window.__revealInit = true;   // head の保険タイマーに「JSは動作中」と伝える

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* ---- ヘッダー：スクロールで薄い影 ---- */
  var header = document.querySelector('.header');
  if (header) {
    var syncHeader = function () {
      header.classList.toggle('is-scrolled', window.scrollY > 8);
    };
    syncHeader();
    window.addEventListener('scroll', syncHeader, { passive: true });
  }

  /* ---- モバイルナビの開閉 ---- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    var setOpen = function (open) {
      nav.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
      document.body.classList.toggle('nav-open', open);
    };
    toggle.addEventListener('click', function () {
      setOpen(!nav.classList.contains('is-open'));
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setOpen(false);
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth > 900) setOpen(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) setOpen(false);
    });
  }

  /* ---- スクロールリビール（まとまり単位・1回のみ） ---- */
  var reveals = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  if (!reveals.length) return;

  if (reduceMotion.matches || !('IntersectionObserver' in window)) {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var el = entry.target;
      var siblings = el.parentElement
        ? Array.prototype.filter.call(el.parentElement.children, function (c) {
            return c.classList && c.classList.contains('reveal');
          })
        : [el];
      var idx = siblings.indexOf(el);
      el.style.transitionDelay = Math.min(idx * 80, 240) + 'ms';
      el.classList.add('is-visible');
      io.unobserve(el);
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.12 });

  reveals.forEach(function (el) { io.observe(el); });
})();
