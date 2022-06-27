const productCards = document.querySelectorAll('.product-cards__card');

productCards.forEach(el => el.addEventListener('click', rotateCards));

function rotateCards(event) {
  if (event.target.nodeName != 'BUTTON') {
    return;
  }

  event.currentTarget.classList.toggle('is-flipped');
}
