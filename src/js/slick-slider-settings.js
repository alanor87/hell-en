$('.reviews').slick({
    mobileFirst: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    infinite: false,
    autoplay: false,
    autoplayspeed: 1000,
    centerMode: true,
    centerPadding: 20,
    prevArrow: '<span class="arrow-left"></span>',
    nextArrow: '<span class="arrow-right"></span>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: true
            }
        }
    ]
});
$('.reviews-thumbs').slick({
    autoplay: false,
    mobileFirst: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    asNavFor: '.reviews',
    dots: false,
    centerMode: false,
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