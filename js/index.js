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
