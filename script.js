"use strict";

const leftSide = document.querySelector(".left-side");
const rightSide = document.querySelector(".right-side");
const samsungHeader = document.querySelector(".samsung");
const appleHeader = document.querySelector(".apple");

function innit() {
  samsungHeader.style.minWidth = "49.3vw";
}

innit();

leftSide.addEventListener("mouseenter", function () {
  leftSide.classList.add("active");
  appleHeader.style.minWidth = "95vw";
});

leftSide.addEventListener("mouseleave", function () {
  leftSide.classList.remove("active");
  appleHeader.style.minWidth = "49.4vw";
});

rightSide.addEventListener("mouseenter", function () {
  rightSide.classList.add("active-samsung");
  samsungHeader.style.minWidth = "95vw";
});

rightSide.addEventListener("mouseleave", function () {
  rightSide.classList.remove("active-samsung");
  samsungHeader.style.minWidth = "49.3vw";
});
