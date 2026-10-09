/* ==========================================================================
   《致敬失败者》Toward the Failures — 交互脚本
   主题 / 语言模式 / 字号 / 目录抽屉 / 进度条 / 首页搜索 / 键盘翻页
   ========================================================================== */
(function () {
  'use strict';

  var KEY = { theme: 'tf-theme', lang: 'tf-lang', fs: 'tf-fs' };
  var html = document.documentElement;

  function read(k, d) { try { return localStorage.getItem(k) || d; } catch (e) { return d; } }
  function write(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }

  /* ---------- 主题 ---------- */
  function setTheme(t) {
    html.setAttribute('data-theme', t);
    write(KEY.theme, t);
    document.querySelectorAll('[data-act="theme"]').forEach(function (b) {
      b.textContent = t === 'dark' ? '☀' : '☾';
      b.title = t === 'dark' ? '切换到日间模式' : '切换到夜读模式';
    });
  }
  /* ---------- 语言模式 ---------- */
  function setLang(l) {
    html.setAttribute('data-lang', l);
    write(KEY.lang, l);
    document.querySelectorAll('[data-act="lang"]').forEach(function (b) {
      b.classList.toggle('on', b.getAttribute('data-lang-val') === l);
    });
  }
  /* ---------- 字号 ---------- */
  function setFs(f) {
    html.setAttribute('data-fs', String(f));
    write(KEY.fs, String(f));
  }

  document.addEventListener('DOMContentLoaded', function () {
    /* 初始化 */
    setTheme(read(KEY.theme, 'light'));
    setLang(read(KEY.lang, 'both'));
    setFs(read(KEY.fs, '2'));

    /* 顶栏按钮 */
    document.querySelectorAll('[data-act="theme"]').forEach(function (b) {
      b.addEventListener('click', function () {
        setTheme(html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
      });
    });
    document.querySelectorAll('[data-act="lang"]').forEach(function (b) {
      b.addEventListener('click', function () { setLang(b.getAttribute('data-lang-val')); });
    });
    document.querySelectorAll('[data-act="fs-in"]').forEach(function (b) {
      b.addEventListener('click', function () { setFs(Math.min(4, (+html.getAttribute('data-fs') || 2) + 1)); });
    });
    document.querySelectorAll('[data-act="fs-out"]').forEach(function (b) {
      b.addEventListener('click', function () { setFs(Math.max(1, (+html.getAttribute('data-fs') || 2) - 1)); });
    });

    /* ---------- 目录抽屉 ---------- */
    var drawer = document.getElementById('drawer');
    var scrim = document.getElementById('scrim');
    function openDrawer() { if (drawer) { drawer.classList.add('open'); scrim.classList.add('open'); } }
    function closeDrawer() { if (drawer) { drawer.classList.remove('open'); scrim.classList.remove('open'); } }
    document.querySelectorAll('[data-act="menu"]').forEach(function (b) {
      b.addEventListener('click', function () {
        drawer.classList.contains('open') ? closeDrawer() : openDrawer();
      });
    });
    if (scrim) scrim.addEventListener('click', closeDrawer);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeDrawer();
    });

    /* 抽屉内搜索过滤 */
    var dfilter = document.getElementById('drawer-filter');
    if (dfilter) {
      dfilter.addEventListener('input', function () {
        var q = dfilter.value.trim().toLowerCase();
        document.querySelectorAll('#drawer .dr-item').forEach(function (a) {
          var hit = !q || (a.getAttribute('data-q') || '').indexOf(q) >= 0;
          a.classList.toggle('hidden', !hit);
        });
      });
    }

    /* ---------- 阅读进度 & 回到顶部 ---------- */
    var bar = document.getElementById('progress');
    var totop = document.getElementById('totop');
    function onScroll() {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      var p = h > 0 ? (window.scrollY / h) * 100 : 0;
      if (bar) bar.style.width = p.toFixed(2) + '%';
      if (totop) totop.classList.toggle('show', window.scrollY > 500);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    if (totop) totop.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });

    /* ---------- 键盘翻页 ---------- */
    var prev = document.body.getAttribute('data-prev');
    var next = document.body.getAttribute('data-next');
    document.addEventListener('keydown', function (e) {
      var tag = (e.target.tagName || '').toLowerCase();
      if (tag === 'input' || tag === 'textarea') return;
      if (e.key === 'ArrowLeft' && prev) location.href = prev;
      if (e.key === 'ArrowRight' && next) location.href = next;
      if (e.key === 'h' && !e.metaKey && !e.ctrlKey) location.href = document.body.getAttribute('data-home') || 'index.html';
    });

    /* ---------- 首页搜索 ---------- */
    var q = document.getElementById('q');
    if (q) {
      var cards = Array.prototype.slice.call(document.querySelectorAll('.grid > .card'));
      var hint = document.getElementById('empty-hint');
      function filter() {
        var s = q.value.trim().toLowerCase();
        var shown = 0;
        cards.forEach(function (c) {
          var hit = !s || (c.getAttribute('data-q') || '').indexOf(s) >= 0;
          c.classList.toggle('hidden', !hit);
          if (hit) shown++;
        });
        document.querySelectorAll('.part-block').forEach(function (pb) {
          var any = pb.querySelectorAll('.card:not(.hidden)').length > 0;
          pb.classList.toggle('hidden', !any);
        });
        if (hint) hint.classList.toggle('hidden', shown > 0);
      }
      q.addEventListener('input', filter);
      document.addEventListener('keydown', function (e) {
        if (e.key === '/' && document.activeElement !== q) { e.preventDefault(); q.focus(); }
      });
    }
  });
})();
