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

    $(".transport-type__item").click(function(){
        $(".transport-type__item").removeClass("active");
        $(this).addClass("active")
    })

    $(".rent-type__item").click(function(){
        $(".rent-type__item").removeClass("active");
        $(this).addClass("active")
    })

})