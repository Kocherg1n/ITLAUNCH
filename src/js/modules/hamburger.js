// hamburger menu close/open

const hamburgerButtonOpen = document.querySelector('.hamburger');
const hamburgerMenu = document.querySelector('.menu-mobile');
const hamburgerButtonClose = document.querySelector('.menu-mobile__button-close-icon');
const mobileNavItem = document.querySelectorAll('.menu-mobile__nav-link');

hamburgerButtonOpen.addEventListener('click', () => {
  hamburgerMenu.style.display = 'flex';
  document.body.style.overflow = 'hidden';
});

hamburgerButtonClose.addEventListener('click', () => {
  hamburgerMenu.style.display = 'none';
  document.body.style.overflow = 'visible';
});

mobileNavItem.forEach(el => {
  el.addEventListener('click', () => {
    document.body.style.overflow = 'visible';
    hamburgerMenu.style.display = 'none';
  })
});
