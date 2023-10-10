const phoneInputs = document.querySelectorAll('.contact-form__phone');

phoneInputs.forEach((inputElement) => {
  const maskOptions = {
    mask: '+{995} 000 000 000',
  };
  const mask = IMask(inputElement, maskOptions);
});
