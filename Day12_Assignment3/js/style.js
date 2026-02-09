const nav = document.getElementById("gnav");
const btn = document.getElementById("menu-btn");

btn.addEventListener('click', () => {
  nav.classList.toggle("hidden");
});