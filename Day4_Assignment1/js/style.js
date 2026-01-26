const menuToggle = document.getElementById("menu-toggle");
const menuClose = document.getElementById("menu-close");
const nav = document.getElementById("nav");

menuToggle.addEventListener('click', () => {
  nav.classList.add('is-show');
});

menuClose.addEventListener('click', () => {
  nav.classList.remove('is-show');
});