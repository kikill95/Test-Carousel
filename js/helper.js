function styling() {
    var height = parseInt($('body').css('height')),
        width = parseInt($('body').css('width'));

    $('.carousel .element').css('height', height)
        .css('width', width);
    $('.carousel .elements').dizziness(width);
    $('.carousel .pages').css('height', height);
    $('.indicators.pages-indicator').css('top', height / 2 - $('.page-indicator').length * parseInt($('.page-indicator').css('height')) + 'px');
}
jQuery.fn.extend({
    dizziness: function(width) {
        this.css('width', this.last().children().length * parseInt(width) + 'px');
    }
});


//indicators - elements
function setIndicator(ourPages, currentPage) {
    var list = '';
    for (var i = 0; i < ourPages[currentPage].elements.length; i++) {

        if (i === ourPages[currentPage].current) {
            list += '<li class="element-indicator element-indicator-active"></li>'
        } else {
            list += '<li class="element-indicator"></li>'
        }

    }
    $('.indicators.elements-indicator').html(list);
}




//------------START------------
//for beginning app
var ourPages = new Page();
var currentPage = 0;
(function() {
    ourPages.addPage(['city_1.jpg', 'city_2.jpg', 'city_3.jpg', 'city_4.jpg']);
    ourPages.addPage(['nature_1.jpg', 'nature_2.jpg', 'nature_3.jpg', 'nature_4.jpg']);

    //init indicators of elements
    var list = '';
    for (var i = 0; i < ourPages.pages[currentPage].elements.length; i++) {

        if (i === 0) {
            list += '<li class="element-indicator element-indicator-active"></li>'
        } else {
            list += '<li class="element-indicator"></li>'
        }

    }
    $('.indicators.elements-indicator').html(list);
})();