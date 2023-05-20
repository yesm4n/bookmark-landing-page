"use strict";

// Global variable setting

const displayFlex = document.querySelector(".row");
const logo = document.querySelector(".logo");
const toggleButton = document.querySelector(".toggle-button");
const navbarList = document.querySelector(".navbar-list");
const navbarSocials = document.querySelector(".navbar-socials");
const hamburger = document.querySelector(".hamburger");
const closeMenu = document.querySelector(".close");
const bookmarkHeaders = document.querySelectorAll(".bookmark-header");
const cardImg = document.querySelector(".card-img");
const cardIntro = document.querySelector(".card-intro");
const cardHeader = document.querySelector(".card-header");
const cardParagraph = document.querySelector(".card-paragraph");
const faqContent = document.querySelectorAll(".faq-content");
const arrowInactive = document.querySelectorAll(".arrow");
const arrowActive = document.querySelectorAll(".arrow-error");
const textErrorActive = document.querySelectorAll(".text-error");
const errorTextForm = document.querySelector(".error-text");
const errorImgForm = document.querySelector(".error");

// Default active classes

closeMenu.classList.add("hidden");

// Hamburger menu functionality

toggleButton.addEventListener("click", () => {
  navbarSocials.classList.toggle("active");
  if (navbarList.classList.toggle("active")) {
    hamburger.classList.add("hidden");
    closeMenu.classList.remove("hidden");
    displayFlex.style.backgroundColor = "hsl(229, 31%, 21%)";
    hamburger.classList.add("white");
    logo.classList.add("white");
  } else {
    closeMenu.classList.add("hidden");
    hamburger.classList.remove("hidden");
    displayFlex.style.backgroundColor = "white";
    hamburger.classList.remove("white");
    logo.classList.remove("white");
  }
});

// Bug handle (When navbar is left open and you change screen size)

function updateBackgroundColor() {
  if (window.innerWidth > 850) {
    navbarSocials.classList.remove("active");
    navbarList.classList.remove("active");
    displayFlex.style.backgroundColor = "";
    logo.classList.remove("white");
    hamburger.classList.remove("hidden");
    hamburger.classList.remove("white");
    closeMenu.classList.add("hidden");
  }
}

document.addEventListener("DOMContentLoaded", updateBackgroundColor);
window.addEventListener("resize", updateBackgroundColor);

// Active bookmark state, change & decoration

let unsetHeader;

for (let i = 0; i < bookmarkHeaders.length; i++) {
  bookmarkHeaders[i].addEventListener("click", () => {
    if (unsetHeader) {
      unsetHeader.classList.remove("header-active");
    }
    bookmarkHeaders[i].classList.add("header-active");
    cardImg.setAttribute(
      "src",
      `images/illustration-features-tab-${i + 1}.svg`
    );
    if (i === 1) {
      cardHeader.innerHTML = `Intelligent search`;
      cardParagraph.textContent = `Our powerful search feature will help you 
      find saves sites in no time at all. No need to trawl through all of your 
      bookmarks.`;
    } else if (i === 2) {
      cardHeader.textContent = `Share your bookmarks`;
      cardParagraph.textContent = `Easily share your bookmarks and collections with others. Create
      a shareable link that you can send at the click of a button.`;
    } else {
      cardHeader.textContent = `Bookmark in one click`;
      cardParagraph.textContent = `Organize your bookmarks however you like. Our simple
      drag-and-drop interface gives you complete control over
      how you manage your favourite sites.`;
    }

    unsetHeader = bookmarkHeaders[i];
  });
}

// FAQ section - onclick, display the appropriete paragraph

for (let i = 0; i < arrowActive.length; i++) {
  arrowInactive[i].addEventListener("click", arrowInactiveFunction);
  arrowActive[i].addEventListener("click", arrowActiveFunction);

  // Arrow functionality for active & inactive

  function arrowActiveFunction() {
    arrowInactive[i].style.display = "block";
    arrowActive[i].style.display = "none";
    textErrorActive[i].style.display = "none";
    faqContent[i].style.paddingBottom = "0";
  }

  function arrowInactiveFunction() {
    arrowActive[i].style.transform = "rotate(180deg)";
    arrowInactive[i].style.display = "none";
    arrowActive[i].style.display = "block";
    textErrorActive[i].style.display = "unset";
    faqContent[i].style.paddingBottom = "1.5em";
  }
}

// Form validation for email address

document.getElementById("myForm").addEventListener("submit", function (event) {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the email input value
  const emailInput = document.getElementById("promo-input").value;

  // Regular expression to check if the email is valid
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(emailInput)) {
    errorTextForm.style.display = "block";
    errorImgForm.style.display = "block";
  } else {
    errorTextForm.style.backgroundColor = "hsl(231, 69%, 60%)";
    errorTextForm.style.border = "solid 1px white";
    errorTextForm.textContent = "Success!";
    errorTextForm.style.display = "block";
    errorImgForm.style.display = "none";
  }
});
