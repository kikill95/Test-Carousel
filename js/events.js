(function() {
    var firstPositionX = 0,
        firstPositionY = 0,
        $element = $('.carousel .element');

    $element.css('height', $('body').css('height'))
        .on('mousedown', function(e) {
            firstPositionX = e.clientX;
            firstPositionY = e.clientY;
        })
        .on('mousemove', function(e) {
            if ( ( firstPositionX !== 0 || firstPositionY !== 0 ) &&
                    ( Math.abs(e.clientX - firstPositionX) > 50 || Math.abs(e.clientY - firstPositionY) > 50) )  {
                    //if we really moving

                if (Math.abs(e.clientX - firstPositionX) > Math.abs(e.clientY - firstPositionY)) {
                    $(e.target).animate({//includes + and -
                        marginLeft: e.clientX - firstPositionX
                    }, 0);
                } else {
                    $(e.target).animate({//includes + and -
                        marginTop: e.clientY - firstPositionY
                    }, 0);
                }

            }
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

            } else {//come back
                $(e.target).animate({
                    marginLeft: 0,
                    marginTop: 0
                }, 100);
            }
            firstPositionX = firstPositionY = 0;//we finish it (for mousemove)
        })
        .on('dragstart', function(e) {
            e.preventDefault();
        });

    //because we don't want to change images size on zooming
    $(window).on('resize', function() {
        $element.css('height', $('body').css('height'));
    });



})();
