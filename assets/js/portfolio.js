/* BE ARCH — renderização do portfólio (home, listagem e página de projeto) */
(function () {
  'use strict';
  var PROJECTS = window.BE_PROJECTS || [];

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function tileHTML(p) {
    return '' +
      '<a class="tile reveal" href="/projeto.html?p=' + encodeURIComponent(p.slug) + '">' +
        '<img src="' + esc(p.cover) + '" alt="' + esc(p.title) + '" loading="lazy" />' +
        '<div class="tile-info">' +
          '<span class="tile-cat">' + esc(p.category) + '</span>' +
          '<span class="tile-name">' + esc(p.title) + '</span>' +
        '</div>' +
      '</a>';
  }

  /* ---------- HOME: 3 projetos em destaque ---------- */
  var homeGrid = document.getElementById('homeGallery');
  if (homeGrid) {
    var featured = PROJECTS.filter(function (p) { return p.featured; });
    if (featured.length < 3) featured = PROJECTS.slice(0, 3);
    homeGrid.innerHTML = featured.slice(0, 3).map(tileHTML).join('');
  }

  /* ---------- PORTFÓLIO: todos os projetos + filtros ---------- */
  var portGrid = document.getElementById('portfolioGrid');
  if (portGrid) {
    function primaryTag(p) { return (p.category.split('·')[0] || '').trim(); }
    var tags = [];
    PROJECTS.forEach(function (p) {
      var t = primaryTag(p);
      if (tags.indexOf(t) === -1) tags.push(t);
    });

    var filterBox = document.getElementById('portfolioFilters');
    if (filterBox) {
      var btns = ['<button class="filter is-active" data-f="all">Todos</button>']
        .concat(tags.map(function (t) {
          return '<button class="filter" data-f="' + esc(t) + '">' + esc(t) + '</button>';
        }));
      filterBox.innerHTML = btns.join('');
      filterBox.addEventListener('click', function (e) {
        var b = e.target.closest('.filter');
        if (!b) return;
        filterBox.querySelectorAll('.filter').forEach(function (x) { x.classList.remove('is-active'); });
        b.classList.add('is-active');
        var f = b.getAttribute('data-f');
        portGrid.querySelectorAll('.tile').forEach(function (tile) {
          var show = f === 'all' || tile.getAttribute('data-tag') === f;
          tile.style.display = show ? '' : 'none';
        });
      });
    }

    portGrid.innerHTML = PROJECTS.map(function (p) {
      return tileHTML(p).replace('<a class="tile reveal"',
        '<a class="tile reveal" data-tag="' + esc(primaryTag(p)) + '"');
    }).join('');
  }

  /* ---------- PÁGINA DO PROJETO ---------- */
  var projRoot = document.getElementById('projeto');
  if (projRoot) {
    var params = new URLSearchParams(window.location.search);
    var slug = params.get('p');
    var idx = PROJECTS.findIndex(function (p) { return p.slug === slug; });
    var p = PROJECTS[idx];

    if (!p) {
      projRoot.innerHTML =
        '<div class="container projeto-404">' +
          '<p class="eyebrow">Projeto não encontrado</p>' +
          '<h1>Ops, não encontramos esse projeto.</h1>' +
          '<p><a class="btn" href="/portfolio/">Ver todos os projetos</a></p>' +
        '</div>';
      document.title = 'Projeto não encontrado — BE ARCH';
    } else {
      document.title = p.title + ' — BE ARCH';
      var meta = [];
      if (p.location) meta.push('<div><span>Local</span><strong>' + esc(p.location) + '</strong></div>');
      if (p.year) meta.push('<div><span>Ano</span><strong>' + esc(p.year) + '</strong></div>');
      if (p.area) meta.push('<div><span>Área</span><strong>' + esc(p.area) + '</strong></div>');

      var gallery = p.images.map(function (src, i) {
        return '<figure class="shot reveal" data-i="' + i + '">' +
          '<img src="' + esc(src) + '" alt="' + esc(p.title) + ' — imagem ' + (i + 1) + '" loading="lazy" />' +
          '</figure>';
      }).join('');

      var prev = PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length];
      var next = PROJECTS[(idx + 1) % PROJECTS.length];

      projRoot.innerHTML =
        '<header class="projeto-hero">' +
          '<div class="container">' +
            '<nav class="breadcrumb"><a href="/">Início</a><span>/</span>' +
              '<a href="/portfolio/">Portfólio</a><span>/</span><em>' + esc(p.title) + '</em></nav>' +
            '<p class="eyebrow">' + esc(p.category) + '</p>' +
            '<h1>' + esc(p.title) + '</h1>' +
            '<p class="projeto-desc">' + esc(p.description) + '</p>' +
            (meta.length ? '<div class="projeto-meta">' + meta.join('') + '</div>' : '') +
          '</div>' +
        '</header>' +
        '<section class="projeto-gallery"><div class="container"><div class="shots">' + gallery + '</div></div></section>' +
        '<section class="projeto-nav"><div class="container">' +
            '<a class="pn pn--prev" href="/projeto.html?p=' + encodeURIComponent(prev.slug) + '">' +
              '<span>← Anterior</span><strong>' + esc(prev.title) + '</strong></a>' +
            '<a class="pn pn--all" href="/portfolio/">Todos os projetos</a>' +
            '<a class="pn pn--next" href="/projeto.html?p=' + encodeURIComponent(next.slug) + '">' +
              '<span>Próximo →</span><strong>' + esc(next.title) + '</strong></a>' +
        '</div></section>' +
        '<section class="section section--dark projeto-cta"><div class="container">' +
            '<h2>Gostou desse projeto?</h2>' +
            '<p>Vamos criar o seu. O primeiro passo é uma conversa.</p>' +
            '<a class="btn" target="_blank" rel="noopener" href="https://wa.me/5547999999999?text=Ol%C3%A1!%20Vi%20o%20projeto%20' + encodeURIComponent(p.title) + '%20e%20gostaria%20de%20um%20or%C3%A7amento.">Falar no WhatsApp</a>' +
        '</div></section>';

      /* Lightbox */
      buildLightbox(p.images);
    }
  }

  function buildLightbox(images) {
    var box = document.createElement('div');
    box.className = 'lightbox';
    box.innerHTML =
      '<button class="lb-close" aria-label="Fechar">×</button>' +
      '<button class="lb-prev" aria-label="Anterior">‹</button>' +
      '<img class="lb-img" alt="" />' +
      '<button class="lb-next" aria-label="Próximo">›</button>';
    document.body.appendChild(box);
    var imgEl = box.querySelector('.lb-img');
    var cur = 0;
    function show(i) { cur = (i + images.length) % images.length; imgEl.src = images[cur]; }
    function open(i) { show(i); box.classList.add('open'); document.body.style.overflow = 'hidden'; }
    function close() { box.classList.remove('open'); document.body.style.overflow = ''; }
    document.querySelectorAll('.shot').forEach(function (fig, i) {
      fig.addEventListener('click', function () { open(i); });
    });
    box.querySelector('.lb-close').addEventListener('click', close);
    box.querySelector('.lb-next').addEventListener('click', function () { show(cur + 1); });
    box.querySelector('.lb-prev').addEventListener('click', function () { show(cur - 1); });
    box.addEventListener('click', function (e) { if (e.target === box) close(); });
    document.addEventListener('keydown', function (e) {
      if (!box.classList.contains('open')) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') show(cur + 1);
      if (e.key === 'ArrowLeft') show(cur - 1);
    });
  }
})();
