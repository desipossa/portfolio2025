$(function () {

    const tl = gsap.timeline();

    tl
        .from('.main_visual h2', { x: 640, opacity: 0, delay: 1 })
        .from('.main_visual p', { x: 640, opacity: 0 })
        .from('.main_visual .me', { x: 640, opacity: 0, rotation: 360 });


    const hs = new Swiper('.header .cube .header_slide', {
        loop: true,
        effect: "cube",
        grabCursor: true,
        cubeEffect: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
        },
    })

    $('.wrapper').fullpage({
        anchors: ['intro', 'portfolio', 'profile'],
        fixedElements: '.header, .footer',
        onLeave: function (o, d, dr) {
            let idx = d.index;
            if (idx == 0) {
                tl.restart();
            }

            hs.slideToLoop(idx);


            $('.header .side_nav li').removeClass('on');
            $('.header .side_nav li').eq(idx).addClass('on');
        }
    });

});

$(function () {

})