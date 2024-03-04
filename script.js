"use strict";
function biggerPhoto(src) {
  const container = document.getElementById("selectedPhoto_div");
  const photo = document.querySelector(".container_photo_1");
  photo.src = src;
  container.style.display = "flex";
}
function disablePhoto() {
  const container = document.getElementById("selectedPhoto_div");
  container.style.display = "none";
}
function navChange() {
  const list = document.querySelector(".mobile_nav_ul");
  list.classList.toggle("hidden");
}
