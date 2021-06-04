var burgerMenu = document.querySelector('.burger__menu');

function toggleBurgerMenu(burger) {
  burger.classList.toggle('active');
}

burgerMenu.onclick = function () {
  toggleBurgerMenu(burgerMenu);
}

headerOverlay.onclick = function () {
  toggleBurgerMenu(burgerMenu);
}