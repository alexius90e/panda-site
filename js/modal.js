const modals = document.querySelectorAll('.modal');
const contactModalForm = document.querySelector('#contactModal .contacts__form');
const contactUsButton = document.getElementById('contactUs');
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

contactUsButton.addEventListener('click', showContactModal);

function showContactModal() {
  contactModal.classList.add('active');
}

function hideContactModal() {
  contactModal.classList.remove('active');
}
