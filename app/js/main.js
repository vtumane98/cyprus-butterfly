$(document).ready(function () {

    var mainSlider = new Swiper('.main-slider', {
        speed: 650,
        pagination: {
            el: '.main-slider .slider-pagination',
            clickable: true,
            bulletActiveClass: "active",
        },
        navigation: {
            nextEl: '.slider-button-next',
            prevEl: '.slider-button-prev',
        },
        autoplay: {
            delay: 4000,
        },
    });

    var cardSlider = new Swiper('.card-slider', {
        speed: 450,
        spaceBetween: 16,
        pagination: {
            el: '.card-slider .slider-pagination',
            clickable: true,
            bulletActiveClass: "active",
        },
        navigation: {
            nextEl: '.card-slider .slider-button-next',
            prevEl: '.card-slider .slider-button-prev',
        },
        breakpoints: {
            1440: {
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
            1140: {
                slidesPerView: 3,
                slidesPerGroup: 3,
            },
            970: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 12,
            },
            0: {
                slidesPerView: "auto",
                slidesPerGroup: 1,
                spaceBetween: 18,
                freeMode: true,
            },
        },
    });

    var goodsSlider = new Swiper('.goods-slider', {
        speed: 450,
        spaceBetween: 14,
        simulateTouch: false,
        breakpoints: {
            1440: {
              slidesPerView: 4,
            },
            1140: {
                slidesPerView: 3,
            },
            970: {
                slidesPerView: 3,
            },
            0: {
                slidesPerView: "auto",
                slidesPerGroup: 1,
                spaceBetween: 12,
                freeMode: true,
                simulateTouch: true,
            },
        },
    });

    var photoSlider = new Swiper('.photo-slider', {
        speed: 450,
        slidesPerView: 1,
        pagination: {
            el: '.photo-slider .slider-pagination',
            clickable: true,
            bulletActiveClass: "active",
        },
        navigation: {
            nextEl: '.photo-slider .slider-button-next',
            prevEl: '.photo-slider .slider-button-prev',
        },
    });

    var locationSlider = new Swiper('.location-slider', {
        speed: 450,
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30,
        pagination: {
            el: '.location-slider .slider-pagination',
            clickable: true,
            bulletActiveClass: "active",
        },
        navigation: {
            nextEl: '.location-slider .slider-button-next',
            prevEl: '.location-slider .slider-button-prev',
        },
        breakpoints: {
            970: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 30,
            },
            0: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 10,
            },
        },
    });

    $(".transport-type__tab").slice(1).removeClass("active");

    $(".rent-type__tab").slice(1).removeClass("active");

    
    $(".transport-type__item").on("click", function() {
        $(this).addClass("active").siblings().removeClass("active");
        $(".transport-type__tab").removeClass("active").eq($(this).index()).addClass("active");
    })

    $(".rent-type__item").on("click", function() {
        $(this).addClass("active").siblings().removeClass("active");
        $(".rent-type__tab").removeClass("active").eq($(this).index()).addClass("active");
    })

    $(".burger-menu").click(function(){
        $(".header-nav").addClass("active")
    })

    $(".burger-menu__close").click(function(){
        $(".header-nav").removeClass("active")
    })

    $(".header-search__btn").click(function(){
        $(".header-search__label").toggleClass('active');
        $(".header-logo").toggleClass('active')
    })

})