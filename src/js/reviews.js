domEls = {
  currentButton: document.querySelector('button[data-is-active="true"]'),
  reviewsControls: document.querySelector('.section-reviews__reviews-controls'),
};

domEls.reviewsControls.addEventListener('click', onChangeReview);

function onChangeReview(event) {
  const clickTarget = event.target;
  if (
    clickTarget.nodeName != 'BUTTON' ||
    clickTarget === domEls.currentButton
  ) {
    return;
  }

  domEls.currentButton.dataset.isActive = 'false';
  domEls.currentButton = clickTarget;
  domEls.currentButton.dataset.isActive = 'true';
  console.log('clicked');
  document.documentElement.style.setProperty(
    '--current-review-number',
    domEls.currentButton.dataset.indx
  );
}
