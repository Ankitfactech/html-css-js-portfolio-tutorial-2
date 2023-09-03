function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const audio = new Audio("WhatsApp Audio 2023-09-04 at 00.04.49.mp4");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
button.addEventListener("click", () => {
audio.play();
});
});

