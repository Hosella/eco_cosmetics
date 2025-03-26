const menu = document.querySelector("#menu");
const closeIcon = document.querySelector("#close-icon");
const openIcon = document.querySelector("#open-icon");
const buttonUp = document.querySelector("#upButton")
const header = document.querySelector("#header")

closeIcon.addEventListener("click", () =>{
  menu.classList.add("menu-close");
  menu.classList.remove("menu-open")
})

openIcon.addEventListener("click", () =>{
  menu.classList.add("menu-open");
  menu.classList.remove("menu-close");
})

buttonUp.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
})

//btn to scroll up
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5
};

const observerCallbackForBtnUp = (entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
        buttonUp.style.opacity = "0";

        buttonUp.addEventListener("mouseover", () => {
          buttonUp.style.opacity = "0";
        })
        buttonUp.addEventListener("mouseout", () => {
          buttonUp.style.opacity = "0";
        })
      } else {
        buttonUp.style.opacity = "0.3";

        buttonUp.addEventListener("mouseover", () => {
          buttonUp.style.opacity = "0.6";
        })
        buttonUp.addEventListener("mouseout", () => {
          buttonUp.style.opacity = "0.3";
        })
      }
  });
};

const observerForBtn = new IntersectionObserver(observerCallbackForBtnUp, observerOptions);

observerForBtn.observe(header)