const banner = new Swiper(".banner-section-swiper", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: 1,
  loop: true,
  spaceBetween: 30,
  //   centeredSlides: true,

  navigation: {
    nextEl: ".banner_button-next",
    prevEl: ".banner_button-prev",
  },

  // breakpoints: {
  // 1440: {
  //   slidesPerView: 3,
  // },

  //   1141: {
  //     slidesPerView: 3,
  //   },

  //   900: {
  //     slidesPerView: 2,
  //   },

  //   625: {
  //     slidesPerView: 2,
  //   },

  //   0: {
  //     slidesPerView: 1,
  //   },
  // },
});

const cards = new Swiper(".product__cards", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: 4,
  loop: true,
  spaceBetween: 30,
  //   centeredSlides: true,

  navigation: {
    nextEl: ".product__card-next",
    prevEl: ".product__card-prev",
  },

  // breakpoints: {
  // 1440: {
  //   slidesPerView: 3,
  // },

  //   1141: {
  //     slidesPerView: 3,
  //   },

  //   900: {
  //     slidesPerView: 2,
  //   },

  //   625: {
  //     slidesPerView: 2,
  //   },

  //   0: {
  //     slidesPerView: 1,
  //   },
  // },
});
