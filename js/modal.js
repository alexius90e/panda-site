const modals = document.querySelectorAll('.modal');
const contactModalForm = document.querySelector('#contactModal .contacts__form');
const contactUsButtons = document.querySelectorAll('.contact-us-button');
const contactModal = document.getElementById('contactModal');

modals.forEach((modal) => {
  modal.addEventListener('click', ({ target }) => {
    const isCloseBtn = target.classList.contains('modal__button-close');
    const isOverlay = target.classList.contains('modal');

    if (isCloseBtn || isOverlay) modal.classList.remove('active');
  });
});

contactModalForm.addEventListener('submit', (event) => {
  event.preventDefault();
  hideContactModal();
});

contactUsButtons.forEach((button) => button.addEventListener('click', showContactModal));

function showContactModal() {
  contactModal.classList.add('active');
}

function hideContactModal() {
  contactModal.classList.remove('active');
}
