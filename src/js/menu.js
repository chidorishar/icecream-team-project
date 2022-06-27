const menuBttns = document.querySelectorAll('[data-menu-button]');
const mobileMenuRef = document.querySelector('[data-menu]');

menuBttns.forEach(el => el.addEventListener('click', toggleMenuVisibility));

function toggleMenuVisibility(event) {
  const target = event.currentTarget;

  if (target.nodeName != 'BUTTON') {
    return;
  }

  const expanded = target.getAttribute('aria-expanded') === 'true' || false;

  menuBttns.forEach(el => el.setAttribute('aria-expanded', !expanded));

  document.body.classList.toggle('js-is-menu-open');
}
