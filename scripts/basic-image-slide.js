var Swiper = new Swiper(".basicSwiper", {
    loop: true,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    slidesPerView: 1,
    pagination: {
      el: ".pagination",
      clickable: true,
      dynamicBullets: false,
      dynamicMainBullets: 1,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
});