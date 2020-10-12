$(function() {

    /* Services https://kenwheeler.github.io/slick/ */
    let slider = $("#servicesSlider");

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: true
    });
});
