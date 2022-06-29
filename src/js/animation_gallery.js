const options = { threshold: [0.5] };
const observer = new IntersectionObserver(onEntry, options);
const galleryContainer = document.querySelector('.gallery__content');

observer.observe(galleryContainer);

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}

//images animation
const galleryImages = document.querySelectorAll('.gallery__img');
let currZIndex = 999;

galleryContainer.addEventListener('mouseover', onImageHover);
galleryContainer.addEventListener('mouseout', onImageMouseLeave);

function onImageHover(event) {
  const target = event.target;

  if (target.nodeName != 'IMG') {
    return;
  }

  target.style.zIndex = currZIndex++;
  currZIndex > 1000 ? (currZIndex = 2) : null;
  galleryImages.forEach(img =>
    img != target ? img.classList.add('gallery__img--blurred-grayscaled') : null
  );
}

function onImageMouseLeave(event) {
  const target = event.target;

  if (target.nodeName != 'IMG') {
    return;
  }

  galleryImages.forEach(img =>
    img.classList.remove('gallery__img--blurred-grayscaled')
  );

  setTimeout(() => (target.style.zIndex = 1), 300);
}
