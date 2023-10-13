const reviewSlider = new Swiper('.reviews__swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 16,
  setWrapperSize: true,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    993: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
  navigation: {
    nextEl: '.reviews__slider-btn_next',
    prevEl: '.reviews__slider-btn_prev',
  },
});

const breakpoint = window.matchMedia('(min-width: 576px)');

let gallerySlider;

const breakpointChecker = function () {
  if (breakpoint.matches === true) {
    if (gallerySlider !== undefined) gallerySlider.destroy(true, true);
    return;
  } else if (breakpoint.matches === false) {
    return enableSwiper();
  }
};

const enableSwiper = function () {
  gallerySlider = new Swiper('.gallery__slider', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: '.gallery__button_next',
      prevEl: '.gallery__button_prev',
    },
  });
};

breakpoint.addEventListener('change', breakpointChecker);

breakpointChecker();
