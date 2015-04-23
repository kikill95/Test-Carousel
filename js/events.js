$(window).on('resize', function() {
    $('.carousel .element').css('height', $('body').css('height'));
});


function addMovingEffects(ourPages, $list) {
    var firstPositionX = 0,
        firstPositionY = 0,
        left = 0,
        isMoveble = false;

    $list
        .off('mousedown')
        .off('mousemove')
        .off('mouseup')
        .on('mousedown', function(e) {
            if (isMoveble) {
                isMoveble = false;
                return;
            }
            firstPositionX = e.clientX;
            firstPositionY = e.clientY;
            left = parseInt($(e.target).parent().css('marginLeft'));
            isMoveble = true;
        })
        .on('mousemove', function(e) {
            e.preventDefault();

            if ( isMoveble &&
                    ( Math.abs(e.clientX - firstPositionX) > 50 || Math.abs(e.clientY - firstPositionY) > 50) )  {

                if (Math.abs(e.clientX - firstPositionX) > Math.abs(e.clientY - firstPositionY)) {

                    $(e.target).parent().animate({
                        marginLeft: left + e.clientX - firstPositionX
                    }, 0);

                }

            }
        })
        .on('mouseup', function(e) {
            if (!isMoveble) return;
            isMoveble = false;
            var secondPositionX = e.clientX,
                secondPositionY = e.clientY,
                $element = $('.carousel .element'),
                move = false,
                horMove = false,
                rightMove = false;

            if (Math.abs(secondPositionX - firstPositionX) > parseInt($element.css('width')) / 4 ||
                    Math.abs(secondPositionY - firstPositionY) > parseInt($element.css('height')) / 4) {
                move = true;
            }
            if (Math.abs(secondPositionX - firstPositionX) > Math.abs(secondPositionY - firstPositionY)) {
                horMove = true;
            }
            if (secondPositionX > firstPositionX) {
                rightMove = true;
            }


            if (move) {

                if (horMove) {

                    if (rightMove) {

                        if ( $(e.target).prev().length ) {
                            $(e.target).parent().animate({
                                marginLeft: left + $(e.target).width()
                            }, 200, function() {
//                                $('.info-block .elements-indicator .element-indicator-active').prev().addClass('element-indicator-active');
//                                $('.info-block .elements-indicator .element-indicator-active').last().removeClass('element-indicator-active');
//                                ourPages[currentPage].current--;
                                isMoveble = false;
                            });
                        } else {
                            comeBack($(e.target));
                        }

                    } else {

                        if ( $(e.target).next().length ) {
                            $(e.target).parent().animate({
                                marginLeft: left + -$(e.target).width()
                            }, 200, function() {
//                                $('.info-block .elements-indicator .element-indicator-active').next().addClass('element-indicator-active');
//                                $('.info-block .elements-indicator .element-indicator-active').first().removeClass('element-indicator-active');
//                                ourPages[currentPage].current++;
                                isMoveble = false;
                            });
                        } else {
                            comeBack($(e.target));
                        }

                    }

                }

            } else {
                comeBack($(e.target));
            }
        });

    function comeBack($el) {
        $el.parent().animate({
            marginLeft: left
        }, 200, function() {
            isMoveble = false;
        });
    }

}
