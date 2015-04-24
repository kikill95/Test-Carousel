function styling(index) {
    var height = parseInt($('body').css('height')) / 2,
        width = parseInt($('body').css('width')) / 2 | 0;

    $('.carousel .elements').dizziness(width + 1, index);
    $('.carousel .element').css('height', height)
        .css('width', width);
    $('.carousel .pages').css('height', height);
    $('.carousel .page').css('height', height)
        .css('width', width);
    $('.page .indicators').css('width', width);
}
jQuery.fn.extend({
    dizziness: function(width, index) {
        var $element = $(this[index - 1]),
            length = $element.children().length;
        this.css('width', length * parseInt(width) + 'px');
    }
});



var ourPages = new Page();
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
    ourPages.insertPage(0, ['space_1.jpg', 'space_2.jpg', 'space_3.jpg', 'space_4.jpg']);
})();