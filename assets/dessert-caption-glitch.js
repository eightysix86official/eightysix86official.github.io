// Dessert card captions ("Small Bites", "Cup Corn", ...) briefly glitch
// into Tilt Warp or Just Breathe while the page is scrolling, then settle
// back to the site's normal caption font. Tied to scroll rather than a
// standalone timer -- each scroll update gives every caption a small
// independent chance to flicker, so it reads as scroll-triggered noise
// rather than a constant tick. Skipped under prefers-reduced-motion.
(function(){
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var captions = document.querySelectorAll('.dessert-teaser-list span');
  if (!captions.length) return;

  var FONTS = ["'Tilt Warp', sans-serif", "'Just Breathe', cursive"];
  var GLITCH_CHANCE_PER_TICK = 0.05;
  var busy = new WeakSet();

  function glitchOne(el){
    if (busy.has(el)) return;
    busy.add(el);
    el.style.fontFamily = FONTS[Math.floor(Math.random() * FONTS.length)];
    setTimeout(function(){
      el.style.fontFamily = '';
      busy.delete(el);
    }, 80 + Math.random() * 220);
  }

  var ticking = false;
  function onScroll(){
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function(){
      captions.forEach(function(el){
        if (Math.random() < GLITCH_CHANCE_PER_TICK) glitchOne(el);
      });
      ticking = false;
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
})();
