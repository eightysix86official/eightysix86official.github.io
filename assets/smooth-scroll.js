// Lenis-style momentum scroll, hand-rolled instead of vendored: indigo-laboratory.it
// uses Lenis to smooth wheel input into an eased scroll rather than the browser's
// stock 1:1 jump-per-tick. This reproduces that *feel* with ~30 lines of vanilla JS
// instead of a new dependency -- matches how this site already avoids libraries
// (see the reveal-up IntersectionObserver in index.html for the same reasoning).
// Skipped under prefers-reduced-motion, and leaves touch scrolling untouched since
// touch devices already have native momentum.
(function(){
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if ('ontouchstart' in window) return;

  var current = window.scrollY;
  var target = current;
  var ease = 0.09;
  var ticking = false;
  var stepCount = 0;
  // Hard ceiling on how long a single momentum run is allowed to chase its
  // target: guarantees the rAF loop always terminates even under input this
  // script didn't anticipate (a very large accumulated delta, or rapid-fire
  // synthetic wheel events), instead of the loop dragging on indefinitely.
  var MAX_STEPS = 180;

  function maxScroll(){
    return document.documentElement.scrollHeight - window.innerHeight;
  }

  function step(){
    stepCount++;
    current += (target - current) * ease;
    if (Math.abs(target - current) < 0.5 || stepCount > MAX_STEPS){ current = target; }
    window.scrollTo(0, current);
    if (current !== target){
      requestAnimationFrame(step);
    } else {
      ticking = false;
    }
  }

  window.addEventListener('wheel', function(e){
    // Let scrollable interior elements (the nav dropdowns) behave natively
    // instead of fighting the page-level momentum for their own scroll.
    if (e.target.closest && e.target.closest('.nav-dropdown')) return;
    e.preventDefault();
    if (!ticking){ current = window.scrollY; target = current; stepCount = 0; }
    target = Math.max(0, Math.min(target + e.deltaY, maxScroll()));
    if (!ticking){ ticking = true; requestAnimationFrame(step); }
  }, { passive: false });

  window.addEventListener('resize', function(){
    target = Math.max(0, Math.min(target, maxScroll()));
  });
})();
