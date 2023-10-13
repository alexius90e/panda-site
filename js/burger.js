const header = document.querySelector('.header');
const headerNav = document.querySelector('.header__nav');
const burgerButton = document.querySelector('.header__burger-btn');

burgerButton.addEventListener('click', () => {
  header.classList.toggle('active');
});

headerNav.addEventListener('click', () => {
  header.classList.remove('active');
});
