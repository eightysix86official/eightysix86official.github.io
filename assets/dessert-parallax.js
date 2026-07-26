// Local Menu dessert photos drift at a different rate than the page scroll
// as each card crosses the viewport -- indigo-laboratory.it reference: no
// distortion, just a speed differential between image and page so photos
// feel like they're gliding past rather than pinned flat to their card.
// Position-based (derived from each card's spot in the viewport, not
// scroll velocity), so it reads identically on touch and desktop --
// smooth-scroll.js's momentum easing on desktop-only doesn't matter here.
// Skipped under prefers-reduced-motion, matching the rest of this site.
(function(){
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var wraps = document.querySelectorAll('.dessert-teaser-img-wrap');
  if (!wraps.length) return;

  var items = [];
  for (var i = 0; i < wraps.length; i++){
    var img = wraps[i].querySelector('img');
    if (img) items.push({ wrap: wraps[i], img: img });
  }

  // Each img is sized 150%-tall / top:-25% in CSS, giving 25% of the wrap's
  // own height as drift slack on each edge. Keeping this under that (with
  // margin) means the drift never reveals empty space top or bottom.
  var STRENGTH = 0.22;
  var ticking = false;

  function update(){
    var vh = window.innerHeight;
    for (var i = 0; i < items.length; i++){
      var rect = items[i].wrap.getBoundingClientRect();
      var center = rect.top + rect.height / 2;
      // -1 when the card's center is at the viewport top, +1 at the bottom.
      var progress = (center - vh / 2) / (vh / 2);
      if (progress < -1) progress = -1;
      if (progress > 1) progress = 1;
      var offsetPx = progress * STRENGTH * rect.height;
      items[i].img.style.transform = 'translateY(' + offsetPx.toFixed(1) + 'px)';
    }
    ticking = false;
  }

  function onScroll(){
    if (!ticking){
      ticking = true;
      requestAnimationFrame(update);
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  update();
})();
