(() => {
  const refs = {
    openModalBtn: document.querySelector('[open-modal__window]'),
    closeModalBtn: document.querySelector('[close-modal__window]'),
    modal: document.querySelector('[modal__window]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
