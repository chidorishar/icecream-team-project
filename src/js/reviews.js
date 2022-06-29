const domEls = {
  currentButton: document.querySelector('button[data-is-active="true"]'),
  reviewsControlsWrapper: document.querySelector(
    '.section-reviews__reviews-controls'
  ),
  reviewsControlButtons: document.querySelectorAll(
    '.section-reviews__reviews-controls button'
  ),
  avatars: document.querySelectorAll('.section-reviews__avatar'),
  avatarsContainer: document.querySelector(
    '.section-reviews__customers-avatars'
  ),
};
let prevReviewIndx = 0;
let currReviewIndx = 1;
let nextReviewIndx = 1;
let currentYRot = 0;

domEls.reviewsControlsWrapper.addEventListener('click', onChangeReview);
domEls.avatarsContainer.addEventListener('click', nextReview);

function onChangeReview(event) {
  const clickTarget = event.target;
  if (
    clickTarget.nodeName != 'BUTTON' ||
    clickTarget === domEls.currentButton
  ) {
    return;
  }

  nextReviewIndx = clickTarget.dataset.indx;
  switchToNthReview(nextReviewIndx);
  flipNthAvatar(nextReviewIndx);
  updateControls(nextReviewIndx);
  prevReviewIndx = prevReviewIndx != 0 ? currReviewIndx : 1;
  currReviewIndx = nextReviewIndx;
}

function flipNthAvatar(avtIndx) {
  const nextAvatar = domEls.avatars[avtIndx - 1];
  const prevAvatar = domEls.avatars[prevReviewIndx - 1];

  prevAvatar?.classList.add('section-reviews__avatar--opaque');
  nextAvatar.classList.remove('section-reviews__avatar--opaque');
  if (avtIndx > currReviewIndx) {
    currentYRot += 180;
  } else {
    currentYRot -= 180;
  }
  updateYRotation(nextAvatar, currentYRot);
  updateYRotation(domEls.avatarsContainer, currentYRot);
}

function switchToNthReview(revIndx) {
  document.documentElement.style.setProperty(
    '--current-review-number',
    currReviewIndx
  );
  document.documentElement.style.setProperty('--next-review-number', revIndx);
  document
    .querySelector('.section-reviews__reviews-quotes')
    .classList.remove('section-reviews__reviews-quotes--translated-with-anim');
  setTimeout(
    () =>
      document
        .querySelector('.section-reviews__reviews-quotes')
        .classList.add('section-reviews__reviews-quotes--translated-with-anim'),
    40
  );
}

function updateControls(controlToActivateIndx) {
  const buttonToActivate =
    domEls.reviewsControlButtons[controlToActivateIndx - 1];
  domEls.currentButton.dataset.isActive = 'false';
  buttonToActivate.dataset.isActive = 'true';
  domEls.currentButton = buttonToActivate;
}

function nextReview() {
  ++nextReviewIndx > 3 ? (nextReviewIndx = 1) : nextReviewIndx;

  flipNthAvatar(nextReviewIndx);
  switchToNthReview(nextReviewIndx);
  updateControls(nextReviewIndx);
  prevReviewIndx = prevReviewIndx != 0 ? currReviewIndx : 1;
  currReviewIndx = nextReviewIndx;
}

function updateYRotation(element, deltaRot) {
  element.style.transform = `rotateY(${deltaRot}deg)`;
}
