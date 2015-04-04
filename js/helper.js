function styling() {
    var height = parseInt($('body').css('height'));
    $('.carousel .element').css('height', height);
    $('.carousel .pages').css('height', height);
    $('.indicators.pages-indicator').css('top', height / 2 - $('.page-indicator').length * parseInt($('.page-indicator').css('height')) + 'px');
}

//indicators - elements
function setIndicator($el) {//TODO wrong element
    var list = '';
    for (var i = 0; i < $el.parent().find('li').length; i++) {

        if (i === 0) {
            list += '<li class="element-indicator element-indicator-active"></li>'
        } else {
            list += '<li class="element-indicator"></li>'
        }

    }
    $('.indicators.elements-indicator').html(list);
}

//INIT
//for beginning app
var ourPages = new Page();
(function() {
    ourPages.addPage(['city_1.jpg', 'city_2.jpg', 'city_3.jpg', 'city_4.jpg']);
    ourPages.addPage(['nature_1.jpg', 'nature_2.jpg', 'nature_3.jpg', 'nature_4.jpg']);

    //init indicators of elements
    var list = '';
    for (var i = 0; i < ourPages.pages[0].elements.length; i++) {

        if (i === 0) {
            list += '<li class="element-indicator element-indicator-active"></li>'
        } else {
            list += '<li class="element-indicator"></li>'
        }

    }
    $('.indicators.elements-indicator').html(list);
})();