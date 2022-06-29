const domEls = {
  currentButton: document.querySelector('button[data-is-active="true"]'),
  reviewsControlsWrapper: document.querySelector(
    '.section-reviews__reviews-controls'
  ),
  reviewsControlButtons: document.querySelectorAll(
    '.section-reviews__reviews-controls button'
  ),
  avatars: document.querySelectorAll('.section-reviews__avatar'),
  currentAvatar: document.querySelector(
    '.section-reviews__avatar:not(.section-reviews__avatar--flipped)'
  ),
  avatarsContainer: document.querySelector(
    '.section-reviews__customers-avatars'
  ),
};
let currReviewIndx = 1;

domEls.reviewsControlsWrapper.addEventListener('click', onChangeReview);
domEls.avatarsContainer.addEventListener('click', () => {
  const indx = ++currReviewIndx > 3 ? (currReviewIndx = 1) : currReviewIndx;

  flipNthAvatar(indx);
  switchToNthReview(indx);
  updateControls(indx);
});

function onChangeReview(event) {
  const clickTarget = event.target;
  if (
    clickTarget.nodeName != 'BUTTON' ||
    clickTarget === domEls.currentButton
  ) {
    return;
  }

  currReviewIndx = clickTarget.dataset.indx;
  switchToNthReview(currReviewIndx);
  flipNthAvatar(currReviewIndx);
  updateControls(currReviewIndx);
}

function flipNthAvatar(avtIndx) {
  domEls.currentAvatar.classList.add('section-reviews__avatar--flipped');
  domEls.currentAvatar = domEls.avatars[avtIndx - 1];
  domEls.currentAvatar.classList.remove('section-reviews__avatar--flipped');
}

function switchToNthReview(revIndx) {
  document.documentElement.style.setProperty(
    '--current-review-number',
    revIndx
  );
}

function updateControls(controlToActivateIndx) {
  const buttonToActivate =
    domEls.reviewsControlButtons[controlToActivateIndx - 1];
  domEls.currentButton.dataset.isActive = 'false';
  buttonToActivate.dataset.isActive = 'true';
  domEls.currentButton = buttonToActivate;
}
