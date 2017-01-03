(function() {

  /**
   * This hack monitors the offset top of all elements that contain
   * the .mifix class (including when the viewport is resized) and applies
   * the .mifixed class when the element reaches the top of the viewport
   **/
  $('.mifix').each(function() {
    var _this = $(this);
    var _top = _this.offset().top;

    $(window).on('resize', function() {
      $('html, body').animate({
        scrollTop: 0
      }, 0);

      _this.removeClass('affix');

      _top = _this.offset().top;
    });

    $(window).on('scroll', function() {
      if($(window).scrollTop() >= _top) {
        _this.addClass('affix');
      } else {
        _this.removeClass('mifixed');
      }
    });
  });

})();