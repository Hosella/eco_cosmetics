const menu = document.querySelector("#menu");
const closeIcon = document.querySelector("#close-icon");
const openIcon = document.querySelector("#open-icon");
const buttonUp = document.querySelector("#upButton")
const header = document.querySelector("#header");
const body = document.querySelector("#body");
const menuItems = document.querySelectorAll(".header__menu-nav__list-item");

//menu for tablets and mobiles
closeIcon.addEventListener("click", () =>{
  menu.classList.add("menu-close");
  menu.classList.remove("menu-open");
  body.classList.remove("body-hidden");
})

openIcon.addEventListener("click", () =>{
  menu.classList.add("menu-open");
  menu.classList.remove("menu-close");
  body.classList.add("body-hidden");
})

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    menu.classList.add("menu-close");
    menu.classList.remove("menu-open");
    body.classList.remove("body-hidden");
  })
})

//btn to scroll up
buttonUp.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
})

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

//category
const radiosCategory = document.querySelectorAll('input[name="category"]');

const categoryContent = [
  {imgUrl: "hydrophilic_oil.png", title: "Hydrophilic oil", price: 160, category: "face"},
  {imgUrl: "ubtan.png", title: "Ubtan", price: 160, category: "face"},
  {imgUrl: "body_oil.jpg", title: "Body oil", price: 180, category: "body"},
  {imgUrl: "body_butter.jpg", title: "Body butter", price: 160, category: "body"},
  {imgUrl: "almond_shampoo.png", title: "Almond shampoo", price: 210, category: "hair"},
  {imgUrl: "hair_spray.jpg", title: "Hair spray", price: 170, category: "hair"},
  {imgUrl: "vanilla_candle.jpg", title: "Vanilla candle", price: 180, category: "candles"},
  {imgUrl: "forest_candle.jpg", title: "Forest candle", price: 120, category: "candles"},
];

radiosCategory.forEach((radio) => {
  radio.addEventListener("change",function () {
    const filteredContent = categoryContent.filter((contentItem) => contentItem.category === radio.value);

    document.getElementById("shop-product").innerHTML = ` 
      <div class="shop__product-card card1">
        <picture>
          <source srcset="image/for_pc/${filteredContent[0].imgUrl}" media="(min-width: 1024px)">
          <source srcset="image/for_tablets/${filteredContent[0].imgUrl}" media="(min-width: 640px)">
          <img src="image/for_mobile/${filteredContent[0].imgUrl}" alt="${filteredContent[0].title}" class="shop__product-card-img">
        </picture>
  
        <h5 class="shop__product-card-title">${filteredContent[0].title}</h5>
        <span class="shop__product-card-price">${filteredContent[0].price} UAH</span>
      </div>
  
      <div class="shop__product-card card2">
        <picture>
          <source srcset="image/for_pc/${filteredContent[1].imgUrl}" media="(min-width: 1024px)">
          <img src="image/for_tablets/${filteredContent[1].imgUrl}" alt="${filteredContent[1].title}" class="shop__product-card-img">
        </picture>

        <h5 class="shop__product-card-title">${filteredContent[1].title}</h5>
        <span class="shop__product-card-price">${filteredContent[1].price} UAH</span>
      </div>`;
  });
});