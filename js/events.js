var isMoveble = false,
    moveCarouselId = null;

function addMovingEffects(ourPages, $list) {
    var firstPositionX = 0,
        left = 0;
    isMoveble = false;

    $list
        .off('mousedown')
        .off('mousemove')
        .off('mouseup')
        .on('mousedown', function(e) {
            if (moveCarouselId !== null) return;
            if (isMoveble) {
                isMoveble = false;
                return;
            }
            firstPositionX = e.clientX;
            left = parseInt($(e.target).parent().css('marginLeft'));
            isMoveble = true;
            moveCarouselId = $(e.target).parent().parent().attr('id');
        })
        .on('mousemove', function(e) {
            e.preventDefault();
            if (moveCarouselId !== $(e.target).parent().parent().attr('id')) return;

            if ( isMoveble && ( Math.abs(e.clientX - firstPositionX) > 50 ) )  {

                $(e.target).parent().animate({
                    marginLeft: left + e.clientX - firstPositionX
                }, 0);

            }
        })
        .on('mouseup', function(e) {
            if (moveCarouselId !== $(e.target).parent().parent().attr('id')) return;
            if (!isMoveble) return;

            moveCarouselId = null;
            isMoveble = false;
            var secondPositionX = e.clientX,
                $element = $('.carousel .element'),
                move = false,
                rightMove = false;

            if (Math.abs(secondPositionX - firstPositionX) > parseInt($element.css('width')) / 4) {
                move = true;
            }
            if (secondPositionX > firstPositionX) {
                rightMove = true;
            }


            if (move) {

                if (rightMove) {

                    if ( $(e.target).prev().length ) {

                        $(e.target).parent().animate({
                            marginLeft: left + $(e.target).width()
                        }, 200, function() {
                            $(e.target).parent().parent().find('.indicators .indicator-active').prev().addClass('indicator-active');
                            $(e.target).parent().parent().find('.indicators .indicator-active').last().removeClass('indicator-active');

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
                            $(e.target).parent().parent().find('.indicators .indicator-active').next().addClass('indicator-active');
                            $(e.target).parent().parent().find('.indicators .indicator-active').first().removeClass('indicator-active');

                            isMoveble = false;
                        });

                    } else {
                        comeBack($(e.target));
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

