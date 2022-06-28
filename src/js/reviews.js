const domEls = {
  currentButton: document.querySelector('button[data-is-active="true"]'),
  reviewsControls: document.querySelector('.section-reviews__reviews-controls'),
  avatars: document.querySelectorAll('.section-reviews__avatar'),
  currentAvatar: document.querySelector(
    '.section-reviews__avatar:not(.section-reviews__avatar--flipped)'
  ),
  avatarsContainer: document.querySelector(
    '.section-reviews__customers-avatars'
  ),
};

domEls.reviewsControls.addEventListener('click', onChangeReview);
domEls.avatarsContainer.addEventListener('click', () => {
  const rnd = Math.floor(Math.random() * (3 - 1) + 1);

  flipNthAvatar(rnd);
  switchToNthReview(rnd);
});

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
  const currReviewIndx = domEls.currentButton.dataset.indx;
  domEls.currentButton.dataset.isActive = 'true';
  switchToNthReview(currReviewIndx);
  flipNthAvatar(currReviewIndx);
}

function flipNthAvatar(avtIndx) {
  console.log(avtIndx);
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
