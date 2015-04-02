(function() {
    $('.carousel img').css('height', $('body').css('height'));
    //because we don't want to change image size on zooming
    $(window).on('resize', function() {
        $('.carousel img').css('height', $('body').css('height'));
    });



})();
