var containsChars = function(where, what) {

  var containsChar = function(where, what) { return !!(where.indexOf(what) + 1); }
  var allChars = what.split('');

  for(var i = 0; i < allChars.length; i++) {
    if (!containsChar(where, allChars[i])) return false;
  }

  return true;
};

Template.searchBar.rendered = function() {
  var $search = $('.searchbar'),
      $searchField = $('#searchbar-field');

  function hide() {

    function hideComplete() {
      $search.hide();
      $searchField.val('');
    }

    $search.removeClass('active');

    if($.support.transition)
      $search.one($.support.transition.end, hideComplete).emulateTransitionEnd(150);
    else
      hideComplete();

  }

  $(document).on('keydown', function(e) {
    if(document.activeElement.tagName === 'BODY' || document.activeElement.id === 'searchbar-field') {
      if($search.is(':visible')) {
        switch(e.which) {
          case 27:
            hide();
            $searchField.blur();
            break;
          case 13:
            $searchField.blur();
            break;
          default:
            $searchField.focus();
            break;
        }
      } else {
        $search.show().addClass('active');
        $searchField.focus();
      }
    }
  });

  $searchField.on('blur', function(e) {
    if(e.target.value === '') hide();
  });

  $search.bindWithDelay('keyup change', function(e) {
    var val = e.target.value.toLowerCase();

    $('[data-search]').each(function(i) {
      if(containsChars(this.getAttribute('data-search'), val))
        this.style.display = '';
      else
        this.style.display = 'none';
    });
  }, 0);
};