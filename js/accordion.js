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
