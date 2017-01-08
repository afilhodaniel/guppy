(function() {

  /**
   * Monitoring if document is fully loaded
   */
  document.onreadystatechange = function() {
    if(document.readyState == 'complete') {
      toggleMenus();
    }
  };

  /**
   * Toggle menus
   */
  function toggleMenus() {
    $('.gpy-toggle-menu').each(function() {
      _toggleMenu = $(this);
      _target = $(_toggleMenu.data('target'));

      _toggleMenu.on('click', function() {
        _target.toggleClass('active');
      });
    });
  }

})();