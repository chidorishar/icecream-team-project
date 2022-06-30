(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-location-open]'),
    closeModalBtn: document.querySelector('[data-location-close]'),
    modal: document.querySelector('[data-location]'),
    scrolling: document.querySelector('[data-location-scrolling'),
  };
  let isShown = false;

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.modal.addEventListener('click', onBackdropClick);

  function toggleModal() {
    document.body.classList.toggle('location-open');
    refs.modal.classList.toggle('is-hidden');
    isShown
      ? document.body.removeEventListener('keydown', onKeyDown)
      : document.body.addEventListener('keydown', onKeyDown);
    isShown = !isShown;
  }

  function onBackdropClick(event) {
    if (event.target != event.currentTarget) {
      return;
    }
    toggleModal();
  }

  function onKeyDown(event) {
    event.code === 'Escape' ? toggleModal() : none;
  }
})();
