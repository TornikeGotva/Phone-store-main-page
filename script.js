"use strict";

const leftSide = document.querySelector(".left-side");
const rightSide = document.querySelector(".right-side");
const samsungHeader = document.querySelector(".samsung");
const appleHeader = document.querySelector(".apple");
const storeContainer = document.querySelector(".container");
const samsungBtn = document.getElementById("samsungBtn");
const appleBtn = document.getElementById("appleBtn");
const barClick = document.getElementById("bar");
const appleBarClick = document.getElementById("Applebar");
const barDisplay = document.getElementById("barDisplay");
const appleBarDisplay = document.getElementById("AppleBarDisplay");
const mainReturn = document.getElementById("main");
const appleMainReturn = document.getElementById("Applemain");
const samsungSection = document.querySelector(".samsung-section");
const appleSection = document.querySelector(".apple-section");
const closeBar = document.getElementById("closeBar");
const appleCloseBar = document.getElementById("AppleCloseBar");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const appleleftArrow = document.querySelector(".apple-left-arrow");
const applerightArrow = document.querySelector(".apple-right-arrow");
const firstImg = document.getElementById("firstImg");
const containerImgs = document.querySelectorAll(
  ".samsung-section_main_wrapper_img"
);
const appleContainerImgs = document.querySelectorAll(
  ".apple-section_main_wrapper_img"
);
const imgWrapper = document.querySelector(".samsung-section_main_wrapper");
const phonesBtn = document.getElementById("phones");
const applePhonesBtn = document.getElementById("applePhones");

const questionnaireBtn = document.querySelectorAll(
  ".samsung-section_questionnaire_box"
);
const questionnaireText = document.querySelectorAll(
  ".samsung-section_questionnaire_box_p"
);
const questionnaireArrow = document.querySelectorAll(
  ".samsung-section_questionnaire_box_arrow"
);

const appleQuestionnaireArrow = document.querySelectorAll(
  ".apple-section_questionnaire_box_arrow"
);

const questionnaireWrapper = document.querySelectorAll(
  ".samsung-section_questionnaire_box_wrapper"
);

const samsungFAQ = document.querySelector(".questionnaire-header");
const appleSamsungFAQ = document.querySelector(".apple-questionnaire-header");
const appleFaqBtn = document.getElementById("appleFaq");
const faqBtn = document.getElementById("faq");
const aboutBtn = document.getElementById("about");
const appleAboutBtn = document.getElementById("appleAbout");
const samsungFooter = document.querySelector(".samsung-section_footer");
const appleFooter = document.querySelector(".apple-section_footer");
const cartBtn = document.getElementById("cart");
const appleCartBtn = document.getElementById("appleCart");

const cartOpacity = document.querySelector(".samsung-section_header_cart");
const appleCartOpacity = document.querySelector(".apple-section_header_cart");
const firstCart = document.getElementById("firstCart");
const shopBtn = document.querySelectorAll(
  ".samsung-section_shop_description_button"
);
const appleShopBtn = document.querySelectorAll(
  ".apple-section_shop_description_button"
);
const cartRemove = document.querySelector(
  ".samsung-section_header_cart_box_remove"
);

const appleCartRemove = document.querySelector(
  ".apple-section_header_cart_box_remove"
);

let curSlide = 0;

function innit() {
  samsungSection.style.display = "none";
  updateImg();
  appleSection.style.display = "none";
}

innit();

function updateImg() {
  if (curSlide > containerImgs.length && appleContainerImgs) {
    curSlide = 1;
  } else if (curSlide < 1) {
    curSlide = containerImgs.length && appleContainerImgs.length;
  }

  containerImgs.forEach((s, _) => {
    s.style.transform = `translateX(${(curSlide - 2) * 52.3}rem)`;
  });

  appleContainerImgs.forEach((s, _) => {
    s.style.transform = `translateX(${(curSlide - 2) * 52.3}rem)`;
  });
}
// for samsung slide
leftArrow.addEventListener("click", function () {
  curSlide++;
  updateImg();
});

rightArrow.addEventListener("click", function () {
  curSlide--;
  updateImg();
});

// for apple slide
appleleftArrow.addEventListener("click", function () {
  curSlide++;
  updateImg();
});

applerightArrow.addEventListener("click", function () {
  curSlide--;
  updateImg();
});

// left side transform
leftSide.addEventListener("mouseenter", function () {
  leftSide.classList.add("active");
  appleHeader.style.minWidth = "95vw";
});

leftSide.addEventListener("mouseleave", function () {
  leftSide.classList.remove("active");
  appleHeader.style.minWidth = "50vw";
});

// right side transform

rightSide.addEventListener("mouseenter", function () {
  rightSide.classList.add("active-samsung");
  samsungHeader.style.minWidth = "95vw";
});

rightSide.addEventListener("mouseleave", function () {
  rightSide.classList.remove("active-samsung");
  samsungHeader.style.minWidth = "50vw";
});

// display samsung section
samsungBtn.addEventListener("click", function () {
  samsungSection.style.display = "grid";
  storeContainer.style.display = "none";
});

// Display nav
barClick.addEventListener("click", function () {
  barDisplay.classList.remove("list-hidden");
  barClick.classList.add("list-hidden");
});

// return to main menu
mainReturn.addEventListener("click", function () {
  storeContainer.style.display = "flex";
  samsungSection.style.display = "none";
});

// close bar
closeBar.addEventListener("click", function () {
  barDisplay.classList.add("list-hidden");
  barClick.classList.remove("list-hidden");
});

// Smooth scroll
phonesBtn.addEventListener("click", function () {
  let samsungShop = document.querySelector(".samsung-section_shop");
  samsungShop.scrollIntoView({ behavior: "smooth" });
});

faqBtn.addEventListener("click", function () {
  samsungFAQ.scrollIntoView({ behavior: "smooth" });
});

aboutBtn.addEventListener("click", function () {
  samsungFooter.scrollIntoView({ behavior: "smooth" });
});

// Questionnaire display
questionnaireArrow.forEach((el) => {
  el.addEventListener("click", () => {
    el.nextElementSibling.classList.toggle("hidden");
    el.style.transform =
      el.style.transform === "rotate(180deg)"
        ? "rotate(0deg)"
        : "rotate(180deg)";
  });
});

// Add to cart
cartBtn.addEventListener("mouseenter", function () {
  let cartOpacity = document.querySelector(".samsung-section_header_cart");
  cartOpacity.classList.remove("opacity");
});

cartOpacity.addEventListener("mouseleave", function () {
  let cartOpacity = document.querySelector(".samsung-section_header_cart");
  cartOpacity.classList.add("opacity");
});

// Add to cart functionality

function getData(e) {
  const id = e.target;
  const item = id.parentElement.parentElement;
  const image = item.getElementsByClassName("samsung-section_shop_img")[0].src;
  const description = item.getElementsByClassName(
    "samsung-section_shop_description_header"
  )[0].innerText;

  const price = item.getElementsByClassName(
    "samsung-section_shop_description_price"
  )[0].innerText;

  const markup = `<div class='samsung-section_header_cart_box'>
  <h2 class="samsung-section_header_cart_box_header">${description}</h2>
  <span class="samsung-section_header_cart_box_price">${price}</span>
  <img
    class="samsung-section_header_cart_box_img"
    src="${image}"
    alt="samsung phone"
  />
  </div>
  
  `;

  cartOpacity.insertAdjacentHTML("beforeend", markup);
}

shopBtn.forEach((el) => [el.addEventListener("click", getData)]);

cartRemove.addEventListener("click", function (e) {
  const id = e.target;
  const item = id.nextElementSibling.remove();
});

// Apple section

// display apple section
appleBtn.addEventListener("click", function () {
  appleSection.style.display = "grid";
  storeContainer.style.display = "none";
});

// Display nav
appleBarClick.addEventListener("click", function () {
  appleBarDisplay.classList.remove("apple-list-hidden");
  appleBarClick.classList.add("apple-list-hidden");
});

// return to main menu
appleMainReturn.addEventListener("click", function () {
  storeContainer.style.display = "flex";
  appleSection.style.display = "none";
});

// close bar
appleCloseBar.addEventListener("click", function () {
  appleBarDisplay.classList.add("apple-list-hidden");
  appleBarClick.classList.remove("apple-list-hidden");
});

// Apple smooth scroll
applePhonesBtn.addEventListener("click", function () {
  let appleShop = document.querySelector(".apple-section_shop");
  appleShop.scrollIntoView({ behavior: "smooth" });
});

appleFaqBtn.addEventListener("click", function () {
  appleSamsungFAQ.scrollIntoView({ behavior: "smooth" });
});

appleAboutBtn.addEventListener("click", function () {
  appleFooter.scrollIntoView({ behavior: "smooth" });
});

// apple faq questions
appleQuestionnaireArrow.forEach((el) => {
  el.addEventListener("click", () => {
    el.nextElementSibling.classList.toggle("hidden");
    el.style.transform =
      el.style.transform === "rotate(180deg)"
        ? "rotate(0deg)"
        : "rotate(180deg)";
  });
});

// Add to cart
appleCartBtn.addEventListener("mouseenter", function () {
  let cartOpacity = document.querySelector(".apple-section_header_cart");
  cartOpacity.classList.remove("opacity");
});

appleCartOpacity.addEventListener("mouseleave", function () {
  let cartOpacity = document.querySelector(".apple-section_header_cart");
  cartOpacity.classList.add("opacity");
});

// apple add to cart functionality
function appleGetData(e) {
  const id = e.target;
  const item = id.parentElement.parentElement;
  const image = item.getElementsByClassName("apple-section_shop_img")[0].src;
  const description = item.getElementsByClassName(
    "apple-section_shop_description_header"
  )[0].innerText;

  const price = item.getElementsByClassName(
    "apple-section_shop_description_price"
  )[0].innerText;

  const markup = `<div class='apple-section_header_cart_box'>
  <h2 class="apple-section_header_cart_box_header">${description}</h2>
  <span class="apple-section_header_cart_box_price">${price}</span>
  <img
    class="apple-section_header_cart_box_img"
    src="${image}"
    alt="iphone 14"
  />
  </div>
  
  `;

  appleCartOpacity.insertAdjacentHTML("beforeend", markup);
}

appleShopBtn.forEach((el) => [el.addEventListener("click", appleGetData)]);

appleCartRemove.addEventListener("click", function (e) {
  const id = e.target;
  const item = id.nextElementSibling.remove();
});
