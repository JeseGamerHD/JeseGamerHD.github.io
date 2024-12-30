// Customized for project cards in the home page
var swiper = new Swiper(".slide-container", {
  sliderPerGroup: 3,
  spaceBetween: 30,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",

  // These are true by default, they prevent "accidental" clicks when the slides can be grabbed
  // Disable to prevent issues when using clickable things inside the slides (buttons, anchors etc)
  preventClicks: false,
  preventClicksPropagation: false,

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

// Basic version meant for displaying one big image at a time
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