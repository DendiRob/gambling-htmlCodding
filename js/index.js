new Swiper('.slider__left', {
    loop: true,
    direction: "vertical",
    spaceBetween: 0,
    slidesPerView: 'auto',
    autoplay: {     
        delay: 1,
        disableOnInteraction: false,
    },
    speed: 5000,
    allowTouchMove: false,
});
new Swiper('.slider__right', {
    loop: true,
    direction: "vertical",
    spaceBetween: 0,
    slidesPerView: 'auto',
    autoplay: {     
        delay: 1,
        disableOnInteraction: false,
    },
    speed: 5000,
    allowTouchMove: false,
});
new Swiper('.slider__middle', {
    loop: true,
    direction: "vertical",
    spaceBetween: 0,
    slidesPerView: 'auto',
    autoplay: {     
        delay: 1,
        disableOnInteraction: false,
        reverseDirection: true,
    },
    speed: 5000,
    allowTouchMove: false,
});