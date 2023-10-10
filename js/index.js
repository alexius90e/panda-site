const phoneInputs = document.querySelectorAll('.contact-form__phone');

phoneInputs.forEach((inputElement) => {
  const maskOptions = {
    mask: '+{995} 000 000 000',
  };
  const mask = IMask(inputElement, maskOptions);
});

const priceItems = document.querySelectorAll('.prices__item');

priceItems.forEach((item) =>
  item.addEventListener('click', (event) => {
    const priceItem = event.currentTarget;
    const isToggler = event.target.classList.contains('prices__item-toggler');

    if (isToggler) priceItem.classList.toggle('active');
  })
);
