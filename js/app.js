const bar = document.querySelector(".bar");
const body = document.querySelector("body");
const close = document.querySelector(".close");
const mainMenu = document.querySelector("menu");

bar.addEventListener("click", () => {
  mainMenu.style.display = "flex";
  body.style.overflow = "hidden";
});

close.addEventListener("click", () => {
  mainMenu.style.display = "none";
  body.style.overflow = "auto";
});
