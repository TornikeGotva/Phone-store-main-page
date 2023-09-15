"use strict";

const leftSide = document.querySelector(".left-side");
const rightSide = document.querySelector(".right-side");
const samsungHeader = document.querySelector(".samsung");
const appleHeader = document.querySelector(".apple");

leftSide.addEventListener("mouseenter", function () {
  leftSide.classList.add("active");
  appleHeader.style.minWidth = "95vw";
});

leftSide.addEventListener("mouseleave", function () {
  leftSide.classList.remove("active");
  appleHeader.style.minWidth = "50vw";
});

rightSide.addEventListener("mouseenter", function () {
  rightSide.classList.add("active-samsung");
  samsungHeader.style.minWidth = "95vw";
});

rightSide.addEventListener("mouseleave", function () {
  rightSide.classList.remove("active-samsung");
  samsungHeader.style.minWidth = "50vw";
});
