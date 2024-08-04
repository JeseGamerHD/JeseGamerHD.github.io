var swiper = new Swiper(".slide-container", {
    sliderPerGroup: 3,
    spaceBetween: 30,
    loop: true,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: false,
      dynamicMainBullets: 1,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    breakpoints: {
      1100: {
        slidesPerView: 3,
      },
      750: {
        slidesPerView: 2,
      },
      450: {
        slidesPerView: 1,
      },
    },
  });