$('.star-rating').raty({
    path: '/assets',
    readyOnly: true,
    score: funtion() {
        return $(this).attr('data-score')
    }
});
