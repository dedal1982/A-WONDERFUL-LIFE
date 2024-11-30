const swiper = new Swiper(".examples__swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  slidesPerView: 4,
  spaceBetween: 40,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    375: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    425: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
  },
  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const swiperReviews = new Swiper(".reviews__swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  slidesPerView: 4,
  spaceBetween: 40,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    375: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    425: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
  },
  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
