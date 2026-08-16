/* ============================================================
   Dreamland Micro Lending — shared site behavior
   ============================================================ */

(function () {
  'use strict';

  /* ---------- Mobile navigation ---------- */
  function initMobileNav() {
    var btn = document.querySelector('.menu-btn');
    var nav = document.querySelector('.mobile-nav');
    var overlay = document.querySelector('.nav-overlay');
    if (!btn || !nav) return;

    function toggle(force) {
      var open = typeof force === 'boolean' ? force : !nav.classList.contains('active');
      btn.classList.toggle('active', open);
      nav.classList.toggle('active', open);
      if (overlay) overlay.classList.toggle('active', open);
      document.body.style.overflow = open ? 'hidden' : '';
    }

    btn.addEventListener('click', function () { toggle(); });
    if (overlay) overlay.addEventListener('click', function () { toggle(false); });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () { toggle(false); });
    });
    window.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') toggle(false);
    });
  }

  /* ---------- Sticky header shrink ---------- */
  function initHeader() {
    var header = document.querySelector('.site-header');
    if (!header) return;
    var onScroll = function () {
      header.classList.toggle('scrolled', window.scrollY > 16);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------- Scroll reveal ---------- */
  function initReveal() {
    var els = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
    if (!('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('visible'); });
      return;
    }
    var io = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach(function (el) { io.observe(el); });

    // Fallback: also reveal anything already inside the viewport on scroll/resize,
    // so content can never remain hidden if the observer callback lags.
    function revealInView() {
      var vh = window.innerHeight || document.documentElement.clientHeight;
      els.forEach(function (el) {
        if (el.classList.contains('visible')) return;
        var r = el.getBoundingClientRect();
        if (r.top < vh - 40 && r.bottom > 0) el.classList.add('visible');
      });
    }
    window.addEventListener('scroll', revealInView, { passive: true });
    window.addEventListener('resize', revealInView);
    revealInView();
  }

  /* ---------- FAQ accordion ---------- */
  function initFaq() {
    document.querySelectorAll('.faq-item').forEach(function (item) {
      var q = item.querySelector('.faq-q');
      if (!q) return;
      q.addEventListener('click', function () {
        var open = item.classList.contains('open');
        // close siblings within same list
        var list = item.parentElement;
        if (list) {
          list.querySelectorAll('.faq-item.open').forEach(function (other) {
            if (other !== item) other.classList.remove('open');
          });
        }
        item.classList.toggle('open', !open);
        q.setAttribute('aria-expanded', String(!open));
      });
    });
  }

  /* ---------- Footer year ---------- */
  function initYear() {
    document.querySelectorAll('.js-year').forEach(function (el) {
      el.textContent = String(new Date().getFullYear());
    });
  }

  /* ---------- Back to top ---------- */
  function initToTop() {
    var btn = document.querySelector('.to-top');
    if (!btn) return;
    var onScroll = function () {
      btn.classList.toggle('show', window.scrollY > 600);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------- Team bio read more ---------- */
  function initReadMore() {
    document.querySelectorAll('.read-more-btn').forEach(function (button) {
      button.addEventListener('click', function () {
        var bioFull = button.previousElementSibling;
        var isExpanded = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', String(!isExpanded));
        if (bioFull && bioFull.classList) bioFull.classList.toggle('expanded', !isExpanded);
        button.textContent = isExpanded ? 'Read more' : 'Read less';
      });
    });
  }

  /* ---------- Active nav link ---------- */
  function initActiveNav() {
    var path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.desktop-nav a, .mobile-nav a').forEach(function (link) {
      var href = (link.getAttribute('href') || '').split('#')[0].split('?')[0];
      if (!href) return;
      var isHome = path === 'index.html' || path === '';
      if ((isHome && href === 'index.html') || (href !== 'index.html' && href === path)) {
        link.classList.add('active');
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initMobileNav();
    initHeader();
    initReveal();
    initFaq();
    initReadMore();
    initYear();
    initToTop();
    initActiveNav();
  });
})();
