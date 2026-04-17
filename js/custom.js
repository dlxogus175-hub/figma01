$(function () {

    lucide.createIcons();

    const main_visual_slide = new Swiper('.main_visual_slide', {
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },

        navigation: {
            nextEl: '.main_visual .arrows .next',
            prevEl: '.main_visual .arrows .prev',
        },
    });


    $('.scroll_down button').on('click', function () {

        $('html, body').animate({
            scrollTop: $('.main_info').offset().top
        }, 600);

    });

});