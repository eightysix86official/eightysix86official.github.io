// Shared nav-dropdown toggle for Story/Neighbourhood/Local Menu/Cultural
// Edition. Included on every page (homepage + all 4 subpages) so the same
// nav works identically everywhere. Dropdown links are plain <a href> to
// real pages now -- no panel-opening JS needed, this only handles opening
// and closing the dropdown menu itself.
(function(){
  var carets = Array.from(document.querySelectorAll('.nav-caret'));
  function closeAllDropdowns(except){
    carets.forEach(function(c){
      if (c === except) return;
      c.setAttribute('aria-expanded', 'false');
      var dd = document.getElementById(c.getAttribute('aria-controls'));
      if (dd) dd.classList.remove('is-open');
    });
  }
  carets.forEach(function(caret){
    caret.addEventListener('click', function(e){
      e.stopPropagation();
      var dd = document.getElementById(caret.getAttribute('aria-controls'));
      var isOpen = caret.getAttribute('aria-expanded') === 'true';
      closeAllDropdowns(isOpen ? null : caret);
      caret.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
      if (dd) dd.classList.toggle('is-open', !isOpen);
    });
  });
  document.addEventListener('click', function(){ closeAllDropdowns(null); });
  document.addEventListener('keydown', function(e){
    if (e.key === 'Escape') closeAllDropdowns(null);
  });
})();
