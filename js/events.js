(function() {
    var firstPositionX = 0,
        firstPositionY = 0,
        $element = $('.carousel .element'),
        $elements = $('.carousel .elements');

    $element.css('height', $('body').css('height'))
        .on('mousedown', function(e) {
            firstPositionX = e.clientX;
            firstPositionY = e.clientY;
        })
        .on('mouseup', function(e) {
            var secondPositionX = e.clientX,
                secondPositionY = e.clientY;
            if ( Math.abs(secondPositionX - firstPositionX) > parseInt($element.css('width')) / 4 ||
                    Math.abs(secondPositionY - firstPositionY) > parseInt($element.css('height')) / 4 ) {

                if (Math.abs(secondPositionX - firstPositionX) > Math.abs(secondPositionY - firstPositionY)) {
                    if (secondPositionX > firstPositionX) {
                        console.log('right');
                    } else {
                        console.log('left');
                    }
                } else {
                    if (secondPositionY > firstPositionY) {
                        console.log('down');
                    } else {
                        console.log('up');
                    }
                }

            } else {
                console.log('stay here');
            }
        })
        .on('dragstart', function(e) {
            e.preventDefault();
        });
    //because we don't want to change images size on zooming
    $(window).on('resize', function() {
        $element.css('height', $('body').css('height'));
    });



})();
