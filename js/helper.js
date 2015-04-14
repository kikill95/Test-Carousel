function styling(index) {
    var height = parseInt($('body').css('height')),
        width = parseInt($('body').css('width'));

    $('.carousel .element').css('height', height)
        .css('width', width);
    $('.carousel .elements').dizziness(width, index);
    $('.carousel .pages').css('height', height);
    $('.carousel .page').css('height', height);
    $('.indicators.pages-indicator').css('top', height / 2 - $('.pages-indicator li').length * parseInt($('.pages-indicator li').css('height')) + 'px');
}
jQuery.fn.extend({
    dizziness: function(width, index) {
        var $element = $(this[index - 1]),
            length = $element.children().length;
        this.css('width', length * parseInt(width) + 'px');
    }
});


function setIndicator(ourPages, currentPage) {
    var list = '';
    for (var i = 0; i < ourPages[currentPage].elements.length; i++) {

        if (i === ourPages[currentPage].current) {
            list += '<li class="element-indicator-active"></li>'
        } else {
            list += '<li></li>'
        }

    }
    $('.indicators.elements-indicator').html(list);
}




var ourPages = new Page();
var currentPage = 0;
$('body')
    .on('selectstart', function(e) {
        e.preventDefault();
    })
    .on('dragstart', function(e) {
        e.preventDefault();
    })
    .on('dblclick', function(e) {
        e.preventDefault();
    });

(function() {
    ourPages.addPage(['nature_1.jpg', 'nature_2.jpg', 'nature_3.jpg', 'nature_4.jpg']);
    ourPages.addPage(['city_1.jpg', 'city_2.jpg', 'city_3.jpg', 'city_4.jpg']);
    ourPages.addPage(['graphic_1.jpg', 'graphic_2.jpg', 'graphic_3.jpg', 'graphic_4.jpg']);
    ourPages.addPage(['space_1.jpg', 'space_2.jpg', 'space_3.jpg', 'space_4.jpg']);


    var list = '';
    for (var i = 0; i < ourPages.pages[currentPage].elements.length; i++) {

        if (i === 0) {
            list += '<li class="element-indicator-active"></li>'
        } else {
            list += '<li></li>'
        }

    }
    $('.indicators.elements-indicator').html(list);
})();