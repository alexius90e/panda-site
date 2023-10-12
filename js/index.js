const phoneInputs = document.querySelectorAll('.contact-form__phone');

const maskOptions = {
  mask: '+{995} 000 000 000',
};

phoneInputs.forEach((inputElement) => {
  const mask = IMask(inputElement, maskOptions);
});

const contactsFormInputPhone = document.querySelector('.contacts__form-input_phone');

const contactsFormInputPhoneMask = IMask(contactsFormInputPhone, maskOptions);

const priceItems = document.querySelectorAll('.prices__item');

priceItems.forEach((item) =>
  item.addEventListener('click', (event) => {
    const priceItem = event.currentTarget;
    const isToggler = event.target.classList.contains('prices__item-toggler');

    if (isToggler) priceItem.classList.toggle('active');
  })
);

const faqItems = document.querySelectorAll('.faq__item');

faqItems.forEach((item) =>
  item.addEventListener('click', (event) => {
    const faqItem = event.currentTarget;
    const isToggler = event.target.classList.contains('faq__item-toggler');
    const isActive = faqItem.classList.contains('active');

    faqItems.forEach((item) => item.classList.remove('active'));

    if (isToggler && isActive) faqItem.classList.remove('active');

    if (isToggler && !isActive) faqItem.classList.add('active');
  })
);

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
