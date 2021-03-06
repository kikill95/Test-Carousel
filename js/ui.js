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
        elements: elements || []
    });
    renderPage(this.pages, _.last(this.pages), this.pages.length);
};
Page.prototype.insertPage = function(i, elements) {

    var clone = _.clone(this.pages),
        lng = clone.length,
        j,
        k;
    for (j = 0, k = 0; j <= lng; j++, k++) {
        if (i !== j) {

            this.pages[j] = {
                id: clone[k].id,
                elements: clone[k].elements
            };

        } else {

            this.pages[j] = {
                id: countId(),
                elements: elements || []
            };
            k--;

        }
    }

    $('.carousel .pages').html('');
    var length = this.pages.length;
    for (j = 0; j < length; j++) {
        renderPage(this.pages, this.pages[j], j + 1);
    }

};
Page.prototype.removePage = function(i) {
    this.pages = _.filter(this.pages, function(list, num) {
        return num !== i;
    });
    $('.carousel .pages').html('');
    var length = this.pages.length;
    for (var j = 0; j < length; j++) {
        renderPage(this.pages, this.pages[j], j + 1);
    }
};
Page.prototype.getPage = function(i) {
    return this.pages[i];
};
Page.prototype.getPages = function() {
    return this.pages;
};



function renderPage(ourPages, element, pagePosition) {
    var length = $('.carousel .pages .page').length || 0,
        html,
        picturesCount = element.elements.length,
        i;

    html = '<li class="page" id="' + element.id +  '"><ul class="elements">';
    for (i = 0; i < picturesCount; i++) {
        html += '<li class="element" style="background-image: url(images/' + element.elements[i] + ')"></li>'
    }
    html += '</ul><ul class="indicators">';
    for (i = 0; i < picturesCount; i++) {

        if (i === 0) {
            html += '<li class="indicator-active"></li>'
        } else {
            html += '<li></li>'
        }

    }
    html += '</ul></li>';

    if (_.isNumber(pagePosition)) {
        $('.carousel .pages').append(html);
    }

    styling(pagePosition);
    addMovingEffects(ourPages, $('.carousel .pages .page'));

}