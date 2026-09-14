(function () {
  var toggle = document.querySelector('.nav-toggle');
  var header = document.querySelector('.site-header');
  if (toggle && header) {
    toggle.addEventListener('click', function () {
      var open = header.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Scroll-reveal. Elements are visible by default in CSS (no .reveal-pending
  // class); we only opt them into the hidden pre-animation state here, once
  // we know we can actually reveal them again. If anything below fails partway
  // or the observer never fires, the timeout guarantees content still appears.
  var revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length && !reduceMotion && 'IntersectionObserver' in window) {
    try {
      revealEls.forEach(function (el) { el.classList.add('reveal-pending'); });
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
      revealEls.forEach(function (el) { io.observe(el); });

      // Safety net: if the observer never fires for some elements (odd
      // viewport/embedding contexts), force them visible after a few seconds
      // rather than leaving content permanently hidden.
      setTimeout(function () {
        revealEls.forEach(function (el) { el.classList.add('is-visible'); });
        io.disconnect();
      }, 3000);
    } catch (e) {
      revealEls.forEach(function (el) { el.classList.remove('reveal-pending'); });
    }
  }

  // Subtle scroll parallax. Transform-only, one scroll listener shared by
  // every .parallax element, rAF-throttled, and skipped entirely under
  // reduced motion. Each element's data-speed sets how far it drifts
  // relative to normal scroll (small values only — this should read as
  // "alive", not as a moving-parts effect).
  var parallaxEls = Array.prototype.slice.call(document.querySelectorAll('.parallax'));
  if (parallaxEls.length && !reduceMotion) {
    var ticking = false;
    var updateParallax = function () {
      var vh = window.innerHeight;
      parallaxEls.forEach(function (el) {
        var speed = parseFloat(el.getAttribute('data-speed') || '0.08');
        var rect = el.getBoundingClientRect();
        var center = rect.top + rect.height / 2;
        var offset = (center - vh / 2) * speed;
        el.style.setProperty('--parallax-y', offset.toFixed(1) + 'px');
      });
      ticking = false;
    };
    var onScroll = function () {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };
    updateParallax();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
  }

  // Count-up stats
  var statEls = document.querySelectorAll('.stat__number[data-target]');
  if (statEls.length) {
    function animateCount(el) {
      var target = el.getAttribute('data-target');
      var numeric = parseFloat(target.replace(/[^0-9.]/g, ''));
      if (isNaN(numeric)) { el.textContent = target; return; }
      var prefix = target.match(/^[^0-9]*/)[0];
      var suffix = target.match(/[^0-9]*$/)[0];
      if (reduceMotion) { el.textContent = target; return; }
      var start = null;
      var duration = 1400;
      function step(ts) {
        if (!start) start = ts;
        var progress = Math.min((ts - start) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        var current = Math.round(numeric * eased);
        el.textContent = prefix + current.toLocaleString() + suffix;
        if (progress < 1) requestAnimationFrame(step);
        else el.textContent = target;
      }
      requestAnimationFrame(step);
    }

    if (!('IntersectionObserver' in window)) {
      statEls.forEach(function (el) { el.textContent = el.getAttribute('data-target'); });
    } else {
      try {
        var statIo = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              animateCount(entry.target);
              statIo.unobserve(entry.target);
            }
          });
        }, { threshold: 0.4 });
        statEls.forEach(function (el) { statIo.observe(el); });

        // Safety net: never leave a stat stuck at "0" if the observer
        // doesn't fire for some reason.
        setTimeout(function () {
          statEls.forEach(function (el) {
            if (el.textContent === '0') el.textContent = el.getAttribute('data-target');
          });
          statIo.disconnect();
        }, 3000);
      } catch (e) {
        statEls.forEach(function (el) { el.textContent = el.getAttribute('data-target'); });
      }
    }
  }
})();
