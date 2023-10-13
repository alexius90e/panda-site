const contactForms = document.querySelectorAll('.callback-form');
const successModal = document.getElementById('successModal');

function showSuccessModal() {
  successModal.classList.add('active');
}

function hideSuccessModal() {
  successModal.classList.remove('active');
}

function initSuccessModal() {
  showSuccessModal();
  setTimeout(hideSuccessModal, 2000);
}

contactForms.forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);

    const userPhone = formData.get('userPhone');
    const userName = formData.has('userName') ? formData.get('userName') : 'unknown';
    const content = formData.has('userMessage') ? formData.get('userMessage') : 'no message';
    const subject = 'Хочу прийти на экскурсию';

    form.reset();

    fetch('../contact-form-handler.php', {
      method: 'POST',
      data: { userName, userPhone, content, subject },
    }).then(() => initSuccessModal());
  });
});
