// Мобильное меню
const burger = document.querySelector('.burger'),
  mainMenu = document.querySelector('.main-nav');

burger.addEventListener('click', function () {
  burger.classList.toggle('burger_active');
  mainMenu.classList.toggle('main-nav_active');
});

// Footer меню
const footerMenuButtons = document.querySelectorAll('.footer__heading'),
  footerMenu = document.querySelectorAll('.footer-menu');

for (let i = 0; i < footerMenuButtons.length; i++) {
  footerMenuButtons[i].onclick = function () {
    footerMenu[i].classList.toggle('footer-menu_active');
  }
}
