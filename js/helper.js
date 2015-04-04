function styling() {
    var height = parseInt($('body').css('height'));
    $('.carousel .element').css('height', height);
    $('.carousel .pages').css('height', height);
    $('.indicators.pages-indicator').css('top', height / 2 - $('.page-indicator').length * parseInt($('.page-indicator').css('height')) + 'px');
}



//for beginning app
var pages = new Page();
pages.addPage(['city_1.jpg', 'city_2.jpg', 'city_3.jpg', 'city_4.jpg']);
pages.addPage(['nature_1.jpg', 'nature_2.jpg', 'nature_3.jpg', 'nature_4.jpg']);
