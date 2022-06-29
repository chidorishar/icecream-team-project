(() => {
  const refs = {
    openModalBtn: document.querySelectorAll('[open-modal__window]'),
    closeModalBtn: document.querySelector('[close-modal__window]'),
    modal: document.querySelector('[modal__window]'),
  };

  refs.openModalBtn.forEach(el => el.addEventListener('click', toggleModal));
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
