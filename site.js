// Apple-style scroll reveal: content fades and rises into view as you scroll.
window.__revealReady = true;
(function () {
  var selector = [
    '.page-hero .container',
    '.hero-grid > *',
    '.tech-strip',
    '.section-head',
    '.work-card',
    '.sample',
    '.case-heading',
    '.case-facts',
    '.network-note',
    '.privacy-note',
    '.case-summary',
    '.about-copy',
    '.timeline-item',
    '.contact-inner',
    '.gallery:not(.side-gallery) .shot',
    '.side-gallery .shot'
  ].join(',');

  var els = Array.prototype.slice.call(document.querySelectorAll(selector));
  // A work card that contains its own photo gallery reveals photo-by-photo instead of all at once.
  els = els.filter(function (el) {
    return !(el.classList.contains('work-card') && el.querySelector('.side-gallery'));
  });

  els.forEach(function (el, i) {
    el.setAttribute('data-reveal', '');
    // A slower, clearer sequence makes the reveal easy to see on large desktop screens,
    // where several blocks can enter the viewport at the same time.
    el.style.transitionDelay = Math.min(i * 120, 600) + 'ms';
  });

  if (!('IntersectionObserver' in window)) {
    els.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18, rootMargin: '0px 0px -10% 0px' });

  // Give the browser one beat to paint the hidden starting state before revealing.
  window.setTimeout(function () {
    els.forEach(function (el) { io.observe(el); });
  }, 160);

  // Gentle parallax drift on the giant home-page surname as you scroll.
  var mark = document.querySelector('.hero-watermark');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (mark && !reduceMotion) {
    var ticking = false;
    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          var desktop = window.innerWidth >= 801;
          var y = Math.min(window.scrollY * (desktop ? 0.16 : 0.08), desktop ? 90 : 60);
          mark.style.transform = 'translateX(-50%) translateY(' + y + 'px)';
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }
})();
