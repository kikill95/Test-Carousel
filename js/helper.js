styling();

function styling() {
    var height = parseInt($('body').css('height'));
    $('.carousel .element').css('height', height);
    $('.carousel .pages').css('height', height);
    $('.indicators.pages-indicator').css('top', height / 2 - $('.page-indicator').length * parseInt($('.page-indicator').css('height')) + 'px');
}