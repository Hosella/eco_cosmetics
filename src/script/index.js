const menu = document.querySelector("#menu");
const closeIcon = document.querySelector("#close-icon");
const openIcon = document.querySelector("#open-icon");

closeIcon.addEventListener("click", () =>{
  menu.classList.add("menu-close");
  menu.classList.remove("menu-open")
})

openIcon.addEventListener("click", () =>{
  menu.classList.add("menu-open");
  menu.classList.remove("menu-close");
})