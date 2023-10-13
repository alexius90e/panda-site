const modals = document.querySelectorAll('.modal');
const contactModalForm = document.querySelector('#contactModal .contacts__form');
const contactUsButton = document.getElementById('contactUs');
const contactModal = document.getElementById('contactModal');
const successModal = document.getElementById('successModal');

console.log(modals);

modals.forEach((modal) => {
  modal.addEventListener('click', ({ target }) => {
    const isCloseBtn = target.classList.contains('modal__button-close');
    const isOverlay = target.classList.contains('modal');

    if (isCloseBtn || isOverlay) modal.classList.remove('active');
  });
});

contactModalForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(contactModalForm);
  const name = formData.get('name');
  const phone = formData.get('phone');
  console.log(name, phone);
  hideContactModal();
  showSuccessModal();
  setTimeout(hideSuccessModal, 2000);
});

contactUsButton.addEventListener('click', showContactModal);

function showContactModal() {
  contactModal.classList.add('active');
}

function hideContactModal() {
  contactModal.classList.remove('active');
}

function showSuccessModal() {
  successModal.classList.add('active');
}

function hideSuccessModal() {
  successModal.classList.remove('active');
}
