function thumbnailClicks() {
    $('.thumbnail').click(function (event) {
        var imgSrc = $(event.currentTarget).find('img').attr('src');
        $('.hero img').attr('src', imgSrc);
    })
}

$(function () {
    thumbnailClicks();
});
