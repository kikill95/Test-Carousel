var id = 0;

function Page () {
    this.pages = [];
}
Page.prototype.addPage = function(url, elements) {
    this.pages.push({
        id: id++,
        url: url || '',
        elements: elements || []
    });
    render(_.last(this.pages), this.pages.length);
};
Page.prototype.insertPage = function(i, url, elements) {

    var clone = _.clone(this.pages),
        lng = clone.length;
    for (var j = 0, k = 0; j <= lng; j++, k++) {
        if (i !== j) {

            this.pages[j] = {
                id: clone[k].id,
                url: clone[k].url,
                elements: clone[k].elements
            };

        } else {

            this.pages[j] = {
                id: id++,
                url: url || '',
                elements: elements || []
            };
            k--;
            render(this.pages[j], i + 1);

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