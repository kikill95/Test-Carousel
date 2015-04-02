(function() {
    $('.carousel img').css('height', $('body').css('height'));
    $(window).on('resize', function() {
        $('.carousel img').css('height', $('body').css('height'));
    });



})();
