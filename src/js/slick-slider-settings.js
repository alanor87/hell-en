$('.reviews').slick({
    mobileFirst: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    infinite: false,
    autoplay: false,
    centerMode: true,
    centerPadding: 20,
    prevArrow: '<span class="arrow-left"></span>',
    nextArrow: '<span class="arrow-right"></span>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: true,
            }
        }
    ]
});
$('.reviews-thumbs').slick({
    autoplay: false,
    infinite: true,
    mobileFirst: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.reviews',
    dots: false,
    centerMode: true,
    centerPadding: 30,
    focusOnSelect: true,
    prevArrow: '<span class="arrow-left"></span>',
    nextArrow: '<span class="arrow-right"></span>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 7,
                arrows: false,
                settings: "unslick"
            }
        }
    ]
});