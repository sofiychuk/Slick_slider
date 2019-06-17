window.onload = function () {
    $('.ba-slider__text').hide();
    $('.ba-slider-card').on('mouseover', showText);

    function showText(event) {
        console.log(this)
        var imgId = $(this).attr('data-slider-id');
        $('#' + imgId).show();
        $(this).mouseleave(
            function () {
                $('.ba-slider__text').hide();
            }
        )
    };

    $('.ba-slider').slick({
        dots: true,
        infinite: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3,
        prevArrow: $('.slider-arrow_prev'),
        nextArrow: $('.slider-arrow_next'),

    })
}