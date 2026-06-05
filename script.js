/* =========================
SWATI BANGLES V4.0
script.js
========================= */

/* Animated Counters */

function animateValue(id, start, end, duration){

const obj = document.getElementById(id);

if(!obj) return;

let range = end - start;
let current = start;

let increment = end > start ? 1 : -1;

let stepTime = Math.abs(Math.floor(duration / range));

let timer = setInterval(function(){

current += increment;

obj.textContent = current + "+";

if(current === end){

clearInterval(timer);

}

}, stepTime);

}

window.addEventListener("load", function(){

animateValue("years",0,18,1500);

animateValue("customers",0,1000,2000);

animateValue("designs",0,500,1800);

});

/* Product Filter */

function filterGallery(category){

const images = document.querySelectorAll(".gallery-img");

images.forEach(function(img){

if(category === "all"){

img.style.display = "block";

}

else if(img.classList.contains(category)){

img.style.display = "block";

}

else{

img.style.display = "none";

}

});

}

/* Search Bar */

const searchInput = document.getElementById("searchInput");

if(searchInput){

searchInput.addEventListener("keyup", function(){

let searchValue =
searchInput.value.toLowerCase();

const images =
document.querySelectorAll(".gallery-img");

images.forEach(function(img){

let altText =
img.alt.toLowerCase();

if(altText.includes(searchValue)){

img.style.display = "block";

}

else{

img.style.display = "none";

}

});

});

}

/* Image Lightbox */

const galleryImages =
document.querySelectorAll(".gallery-img");

const lightbox =
document.getElementById("lightbox");

const lightboxImg =
document.getElementById("lightbox-img");

const closeBtn =
document.querySelector(".close-lightbox");

if(galleryImages.length > 0){

galleryImages.forEach(function(img){

img.addEventListener("click", function(){

lightbox.style.display = "flex";

lightboxImg.src = img.src;

lightboxImg.alt = img.alt;

});

});

}

if(closeBtn){

closeBtn.addEventListener("click", function(){

lightbox.style.display = "none";

});

}

if(lightbox){

lightbox.addEventListener("click", function(e){

if(e.target === lightbox){

lightbox.style.display = "none";

}

});

}

/* Share Website */

function shareWebsite(){

if(navigator.share){

navigator.share({

title:"SWATI BANGLES",

text:"Premium Bangles & Jewellery Since 2006",

url:window.location.href

});

}else{

alert("Sharing is not supported on this device.");

}

}