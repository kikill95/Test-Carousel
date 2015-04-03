//(function() {
    var firstPositionX = 0,
        firstPositionY = 0,
        $element = $('.carousel .element'),
        top = 0,
        left = 0;

    $element.css('height', $('body').css('height'));
    $('.carousel .page')
        .on('mousedown', function(e) {
            firstPositionX = e.clientX;
            firstPositionY = e.clientY;
            top = parseInt($(e.target).parent().parent().css('marginTop'));
            left = parseInt($(e.target).parent().parent().css('marginLeft'));console.log( top );
        })
        .on('mousemove', function(e) {
            if ( ( firstPositionX !== 0 || firstPositionY !== 0 ) &&
                    ( Math.abs(e.clientX - firstPositionX) > 50 || Math.abs(e.clientY - firstPositionY) > 50) )  {
                    //if we really are moving

                if (Math.abs(e.clientX - firstPositionX) > Math.abs(e.clientY - firstPositionY)) {
                    $(e.target).parent().parent().animate({//includes + and -
                        marginLeft: left + e.clientX - firstPositionX
                    }, 0);
                } else {
                    $(e.target).parent().parent().animate({//includes + and -
                        marginTop: top + e.clientY - firstPositionY
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
                        $(e.target).parent().parent().animate({
                            marginLeft: left + $(e.target).width()
                        }, 200);
                    } else {
                        $(e.target).parent().parent().animate({
                            marginLeft: left + -$(e.target).width()
                        }, 200);
                    }
                } else {
                    if (secondPositionY > firstPositionY) {
                        $(e.target).parent().parent().animate({
                            marginTop: top + $(e.target).height()
                        }, 200);
                    } else {
                        $(e.target).parent().parent().animate({
                            marginTop: top + -$(e.target).height()
                        }, 200);
                    }
                }

            } else {//come back
                $(e.target).parent().parent().animate({
                    marginLeft: left,
                    marginTop: top
                }, 200);
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



//})();
