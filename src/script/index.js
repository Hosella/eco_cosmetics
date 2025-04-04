const menu = document.querySelector("#menu");
const closeIcon = document.querySelector("#close-icon");
const openIcon = document.querySelector("#open-icon");
const buttonUp = document.querySelector("#upButton")
const header = document.querySelector("#header");
const body = document.querySelector("#body");
const menuItems = document.querySelectorAll(".header__menu-nav__list-item");

//menu for tablets and mobiles
const menuActions = () => {
  body.classList.toggle("body-hidden");
  menu.classList.toggle("active");
}

closeIcon.addEventListener("click", () => menuActions())

openIcon.addEventListener("click", () => menuActions())

menuItems.forEach((item) => {
  item.addEventListener("click", () => menuActions())
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
const shopButton = document.getElementById("shop-button");
const shopProducts = document.querySelector(".shop__products");

const categoryContent = [
  {imgUrl: "hydrophilic_oil.png", title: "Hydrophilic oil", price: 160, category: "face"},
  {imgUrl: "ubtan.png", title: "Ubtan", price: 160, category: "face"},
  {imgUrl: "ubtan.png", title: "Face mask", price: 60, category: "face"},
  {imgUrl: "ubtan.png", title: "Cream", price: 110, category: "face"},
  {imgUrl: "body_oil.jpg", title: "Body oil", price: 180, category: "body"},
  {imgUrl: "body_butter.jpg", title: "Body butter", price: 160, category: "body"},
  {imgUrl: "body_butter.jpg", title: "Body cream", price: 160, category: "body"},
  {imgUrl: "almond_shampoo.png", title: "Almond shampoo", price: 210, category: "hair"},
  {imgUrl: "hair_spray.jpg", title: "Hair spray", price: 170, category: "hair"},
  {imgUrl: "vanilla_candle.jpg", title: "Vanilla candle", price: 180, category: "candles"},
  {imgUrl: "forest_candle.jpg", title: "Forest candle", price: 120, category: "candles"},
];

const handleAddCards = (product) => {
  shopProducts.insertAdjacentHTML('beforeend', `
    <div class="shop__products-card">
      <picture>
        <source srcset="image/for_pc/${product.imgUrl}" media="(min-width: 1024px)">
        <source srcset="image/for_tablets/${product.imgUrl}" media="(min-width: 640px)">
        <img src="image/for_mobile/${product.imgUrl}" alt="${product.title}" class="shop__products-card-img">
      </picture>

      <div class="shop__products-card-texts">
      <h5>${product.title}</h5>
      <span>${product.price} UAH</span>
      </div>
    </div>
  `);
}

categoryContent.filter(contentItem => contentItem.category === "face").map(item => handleAddCards(item))

radiosCategory.forEach((radio) => {
  radio.addEventListener("change",function () {
    const filteredContent = categoryContent.filter(contentItem => contentItem.category === radio.value);

    shopButton.innerHTML = "all products";
    shopProducts.classList.remove("show-all")
    document.getElementById("shop-products").innerHTML = "";

    filteredContent.forEach(product => handleAddCards(product));
  });
});

shopButton.addEventListener("click", (e) => {
  if (e.target.innerHTML === "all products") {
    e.target.innerHTML = "show less"
  } else {
    e.target.innerHTML = "all products"
    document.querySelector(".shop").scrollIntoView({ behavior: 'smooth' });
  }

  shopProducts.classList.toggle("show-all");
})

//video
const mediaContainer = document.querySelector(".hero__media");
const mediaPhoto = mediaContainer.querySelector(".hero__media-picture");
const mediaVideo = mediaContainer.querySelector(".hero__media-video");

mediaContainer.addEventListener("mouseenter", () => {
  mediaPhoto.style.display = "none";
  mediaVideo.style.display = "block";
});

mediaContainer.addEventListener("mouseleave", () => {
  mediaPhoto.style.display = "block";
  mediaVideo.style.display = "none";
  mediaVideo.currentTime = 0;
});