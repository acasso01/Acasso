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
    el.style.transitionDelay = Math.min((i % 3) * 80, 160) + 'ms';
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
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });

  els.forEach(function (el) { io.observe(el); });

  // Gentle parallax drift on the giant home-page surname as you scroll.
  var mark = document.querySelector('.hero-watermark');
  if (mark) {
    var ticking = false;
    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          var y = Math.min(window.scrollY * 0.08, 60);
          mark.style.transform = 'translateX(-50%) translateY(' + y + 'px)';
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }
})();
