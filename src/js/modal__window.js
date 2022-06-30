(() => {
  const refs = {
    openModalBtn: document.querySelectorAll('[data-open-modal__window]'),
    closeModalBtn: document.querySelector('[data-close-modal__window]'),
    modal: document.querySelector('[data-modal__window]'),
  };

  refs.openModalBtn.forEach(el => el.addEventListener('click', toggleModal));
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
