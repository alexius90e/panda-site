const maskOptions = {
  mask: '+{995} 000 000 000',
};

const phoneInputClassNames = ['contact-form__phone', 'contacts__form-input_phone'];

const phoneInputs = phoneInputClassNames
  .map((name) => document.querySelectorAll(`.${name}`))
  .reduce((acc, array) => [...acc, ...array], []);

phoneInputs.forEach((inputElement) => IMask(inputElement, maskOptions));
