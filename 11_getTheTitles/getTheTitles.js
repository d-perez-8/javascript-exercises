const getTheTitles = function(booksObject) {
    return booksObject.map(function (book) {
        return book.title;
    });
};

// Do not edit below this line
module.exports = getTheTitles;
