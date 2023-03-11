const base = document.querySelector(".base");
const bar = document.querySelector(".bar");
const menuBar = document.querySelector('nav')
base.addEventListener("click", () => {
  bar.classList.toggle("active");
  menuBar.classList.toggle('open')
});