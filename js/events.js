//because we don't want to change images size on zooming
$(window).on('resize', function() {
    $('.carousel .element').css('height', $('body').css('height'));
});



function addMovingEffects(ourPages, $list) {
    var firstPositionX = 0,
        firstPositionY = 0,
        top = 0,
        left = 0;

    $list
        .off('mousedown')
        .off('mousemove')
        .off('mouseup')
        .on('mousedown', function(e) {
            firstPositionX = e.clientX;
            firstPositionY = e.clientY;
            top = parseInt($(e.target).parent().parent().parent().css('marginTop'));
            left = parseInt($(e.target).parent().parent().css('marginLeft'));
        })
        .on('mousemove', function(e) {
            if ( ( firstPositionX !== 0 || firstPositionY !== 0 ) &&
                    ( Math.abs(e.clientX - firstPositionX) > 50 || Math.abs(e.clientY - firstPositionY) > 50) )  {
                    //if we are really moving

                if (Math.abs(e.clientX - firstPositionX) > Math.abs(e.clientY - firstPositionY)) {
                    $(e.target).parent().parent().animate({//includes + and -
                        marginLeft: left + e.clientX - firstPositionX
                    }, 0);
                } else {
                    $(e.target).parent().parent().parent().animate({//includes + and -
                        marginTop: top + e.clientY - firstPositionY
                    }, 0);
                }

            }
        })
        .on('mouseup', function(e) {
            var secondPositionX = e.clientX,
                secondPositionY = e.clientY,
                $element = $('.carousel .element');
            if ( Math.abs(secondPositionX - firstPositionX) > parseInt($element.css('width')) / 4 ||
                    Math.abs(secondPositionY - firstPositionY) > parseInt($element.css('height')) / 4 ) {

                if (Math.abs(secondPositionX - firstPositionX) > Math.abs(secondPositionY - firstPositionY)) {
                //horizontal move
                    if (secondPositionX > firstPositionX) {
                    //go right
                        if ( $(e.target).prev().length ) {
                            $(e.target).parent().parent().animate({
                                marginLeft: left + $(e.target).width()
                            }, 200);

                            $('.info-block .elements-indicator .element-indicator-active').prev().addClass('element-indicator-active');
                            $('.info-block .elements-indicator .element-indicator-active').last().removeClass('element-indicator-active');
                            ourPages[currentPage].current--;
                        } else {
                            comeBack($(e.target));
                        }

                    } else {
                    //go left
                        if ( $(e.target).next().length ) {
                            $(e.target).parent().parent().animate({
                                marginLeft: left + -$(e.target).width()
                            }, 200);

                            $('.info-block .elements-indicator .element-indicator-active').next().addClass('element-indicator-active');
                            $('.info-block .elements-indicator .element-indicator-active').first().removeClass('element-indicator-active');
                            ourPages[currentPage].current++;
                        } else {
                            comeBack($(e.target));
                        }

                    }

                } else {
                //vertical move
                    if (secondPositionY > firstPositionY) {
                    //go up
                        if ( $(e.target).parent().parent().prev().length ) {
                            $(e.target).parent().parent().parent().animate({
                                marginTop: top + $(e.target).height()
                            }, 200);

                            $('.info-block .pages-indicator .page-indicator-active').prev().addClass('page-indicator-active');
                            $('.info-block .pages-indicator .page-indicator-active').last().removeClass('page-indicator-active');
                            currentPage--;
                            setIndicator(ourPages.pages, currentPage);

                        } else {
                            comeBack($(e.target));
                        }

                    } else {
                    //go down
                        if ( $(e.target).parent().parent().next().length ) {
                            $(e.target).parent().parent().parent().animate({
                                marginTop: top + -$(e.target).height()
                            }, 200);

                            $('.info-block .pages-indicator .page-indicator-active').next().addClass('page-indicator-active');
                            $('.info-block .pages-indicator .page-indicator-active').first().removeClass('page-indicator-active');
                            currentPage++;
                            setIndicator(ourPages.pages, currentPage);

                        } else {
                            comeBack($(e.target));
                        }

                    }

                }

            } else {
                comeBack($(e.target));
            }
            firstPositionX = firstPositionY = 0;//we finished it (for mousemove condition)
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
