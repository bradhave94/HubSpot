(function($){
  $(window).on('ready load resize', function(){
    var max = 0,
        mobile = $(window).width();
    $(".equal-height").css('min-height', 'inherit');

    if ( mobile > 767 ){
      $(".equal-height").each(function(index, el) {
        if( $(this).outerHeight() > max ){
            max = $(this).outerHeight();
        }
      });
      $(".equal-height").css('min-height', max);
    }
  });
})(jQuery);
