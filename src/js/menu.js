const menuBttns = document.querySelectorAll('[data-menu-button]');
const mobileMenuRef = document.querySelector('[data-menu]');

menuBttns.forEach(el => el.addEventListener('click', toggleMenuVisibility));

function toggleMenuVisibility(event) {
  const target = event.currentTarget;
  console.log(target.nodeName);
  if (target.nodeName != 'BUTTON') {
    return;
  }

  const expanded = target.getAttribute('aria-expanded') === 'true' || false;
  console.log(target);

  menuBttns.forEach(el => {
    el.setAttribute('aria-expanded', !expanded);
    el.classList.toggle('is-open');
  });

  document.body.classList.toggle('js-menu-is-open');
  mobileMenuRef.classList.toggle('is-open');
}
