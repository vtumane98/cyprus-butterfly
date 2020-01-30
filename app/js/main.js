document.addEventListener("DOMContentLoaded", function () {

    $('.main-slider').owlCarousel({
        items:1,
        loop:true,
        nav:true,
        dots:true,
        smartSpeed:650,
    })

    $('.card-slider').owlCarousel({
        items:4,
        nav:true,
        dots:true,
        smartSpeed:250,
        slideBy: 4,
        autoWidth: true,
        mouseDrag: false,
    })

    $('.goods-slider').owlCarousel({
        items:4,
        smartSpeed:250,
        slideBy: 4,
    })

    $('.photo-slider').owlCarousel({
        items:1,
        loop:true,
        nav:true,
        dots:true,
        smartSpeed:650,
    })

    $('.location-slider').owlCarousel({
        items:2,
        smartSpeed:250,
        slideBy: 2,
        margin: 8,
        nav:true,
        dots:true,
    })

    $(".transport-type__item").on("click", function() {
        $(this).addClass("active").siblings().removeClass("active");
        $(".transport-type__tab").removeClass("active").eq($(this).index()).addClass("active");
    })

    $(".rent-type__item").on("click", function() {
        $(this).addClass("active").siblings().removeClass("active");
        $(".rent-type__tab").removeClass("active").eq($(this).index()).addClass("active");
    })

})