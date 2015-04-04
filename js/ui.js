var countId = function() {
        this.id = this.id || 0;
        return this.id++;
    };


function Page () {
    this.pages = [];
}
Page.prototype.addPage = function(elements) {
    this.pages.push({
        id: countId(),
        elements: elements || [],
        current: 0
    });
    renderPage(this.pages, _.last(this.pages), this.pages.length);
};
Page.prototype.insertPage = function(i, elements) {

    var clone = _.clone(this.pages),
        lng = clone.length;
    for (var j = 0, k = 0; j <= lng; j++, k++) {
        if (i !== j) {

            this.pages[j] = {
                id: clone[k].id,
                elements: clone[k].elements,
                current: clone[k].current
            };

        } else {

            this.pages[j] = {
                id: countId(),
                elements: elements || [],
                current: 0
            };
            k--;
            renderPage(this.pages, this.pages[j], i + 1);

        }
    }

};
Page.prototype.removePage = function(i) {
    this.pages = _.filter(this.pages, function(list, num) {
        return num !== i;
    });
};
Page.prototype.getPage = function(i) {
    return this.pages[i];
};
Page.prototype.getPages = function() {
    return this.pages;
};



function renderPage(ourPages, element, pagePosition) {
    var $pagesList = $('.carousel .pages .page'),
        length = $pagesList.length || 0,
        html,
        picturesCount = element.elements.length;

    html = '<li class="page"><ul class="elements">';
    for (var i = 0; i < picturesCount; i++) {
        html += '<li class="element" style="background-image: url(images/' + element.elements[i] + ')"></li>'
    }
    html += '</ul></li>';

    if (_.isNumber(pagePosition)) {
        if (pagePosition > length) {
            pagePosition = length;
        }

        if (pagePosition > 1 && length !== 0) {
            $pagesList[pagePosition - 1].after(html);
        } else {
            $('.carousel .pages').append(html);
        }

    }

    //helper functions
    styling();
    addMovingEffects(ourPages, $('.carousel .pages .page'));


    //indicators - pages
    if (length === 0) {
        $('.info-block .pages-indicator').append('<li class="page-indicator page-indicator-active"></li>');
    } else {
        $('.info-block .pages-indicator').append('<li class="page-indicator"></li>');
    }

}