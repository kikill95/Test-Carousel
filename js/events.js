$(window).on('resize', function() {
    $('.carousel .element').css('height', $('body').css('height'));
});

var animation = false;

function addMovingEffects(ourPages, $list) {
    var firstPositionX = 0,
        firstPositionY = 0,
        top = 0,
        left = 0,
        canVerticalMove = true,
        canHorisontalMove = true,
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
            animation = true;
            firstPositionX = e.clientX;
            firstPositionY = e.clientY;
            top = parseInt($(e.target).parent().parent().parent().css('marginTop'));
            left = parseInt($(e.target).parent().parent().css('marginLeft'));
            canHorisontalMove = canVerticalMove = isMoveble = true;
        })
        .on('mousemove', function(e) {
            e.preventDefault();

            if ( isMoveble && animation &&
                    ( Math.abs(e.clientX - firstPositionX) > 50 || Math.abs(e.clientY - firstPositionY) > 50) )  {

                if (canHorisontalMove && Math.abs(e.clientX - firstPositionX) > Math.abs(e.clientY - firstPositionY)) {

                    $(e.target).parent().parent().animate({
                        marginLeft: left + e.clientX - firstPositionX
                    }, 0);
                    canVerticalMove = false;

                } else if (canVerticalMove) {

                    $(e.target).parent().parent().parent().animate({
                        marginTop: top + e.clientY - firstPositionY
                    }, 0);
                    canHorisontalMove = false;
                }

            }
        })
        .on('mouseup', function(e) {
            if (!isMoveble) return;
            isMoveble = false;
            animation = false;
            var secondPositionX = e.clientX,
                secondPositionY = e.clientY,
                $element = $('.carousel .element'),
                move = false,
                horMove = false,
                rightMove = false,
                downMove = false;

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
            if (secondPositionY > firstPositionY) {
                downMove = true;
            }


            if (move) {

                if (horMove) {

                    if (rightMove) {

                        if ( $(e.target).prev().length ) {
                            $(e.target).parent().parent().animate({
                                marginLeft: left + $(e.target).width()
                            }, 200, function() {
                                $('.info-block .elements-indicator .element-indicator-active').prev().addClass('element-indicator-active');
                                $('.info-block .elements-indicator .element-indicator-active').last().removeClass('element-indicator-active');
                                ourPages[currentPage].current--;
                                isMoveble = false;
                            });
                        } else {
                            comeBack($(e.target));
                        }

                    } else {

                        if ( $(e.target).next().length ) {
                            $(e.target).parent().parent().animate({
                                marginLeft: left + -$(e.target).width()
                            }, 200, function() {
                                $('.info-block .elements-indicator .element-indicator-active').next().addClass('element-indicator-active');
                                $('.info-block .elements-indicator .element-indicator-active').first().removeClass('element-indicator-active');
                                ourPages[currentPage].current++;
                                isMoveble = false;
                            });
                        } else {
                            comeBack($(e.target));
                        }

                    }

                } else {

                    if (downMove) {

                        if ( $(e.target).parent().parent().prev().length ) {
                            $(e.target).parent().parent().parent().animate({
                                marginTop: top + $(e.target).height()
                            }, 200, function() {
                                $('.info-block .pages-indicator .page-indicator-active').prev().addClass('page-indicator-active');
                                $('.info-block .pages-indicator .page-indicator-active').last().removeClass('page-indicator-active');
                                currentPage--;
                                setIndicator(ourPages, currentPage);
                                isMoveble = false;
                            });
                        } else {
                            comeBack($(e.target));
                        }

                    } else {

                        if ( $(e.target).parent().parent().next().length ) {
                            $(e.target).parent().parent().parent().animate({
                                marginTop: top + -$(e.target).height()
                            }, 200, function() {
                                $('.info-block .pages-indicator .page-indicator-active').next().addClass('page-indicator-active');
                                $('.info-block .pages-indicator .page-indicator-active').first().removeClass('page-indicator-active');
                                currentPage++;
                                setIndicator(ourPages, currentPage);
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
        $el.parent().parent().animate({
            marginLeft: left
        }, 200);
        $el.parent().parent().parent().animate({
            marginTop: top
        }, 200);
    }

}
