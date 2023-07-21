"use strict";

// desktop hamburger menu

let catalogBar = document.querySelector(".navbar__catalog-bars");
let hamMenu = document.querySelector(".hamburger__menu");
let backdrop = document.querySelector(".backdrop");

catalogBar.addEventListener("click", () => {
  catalogBar.classList.toggle("active");
  hamMenu.classList.toggle("active");
  backdrop.classList.toggle("hidden");
});

// mobile hamburger menu

let hamburgerMenu = document.querySelector(".page__head-hamburger");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
});

// let categories = document.querySelectorAll(".category");
// let gameNames = document.querySelectorAll(".category__name");

// gameNames.forEach((element, i) => {
//   element.addEventListener("mouseover", () => {
//     categories.forEach((subelement) => {
//       subelement.classList.remove("active");
//     });
//     categories[i].classList.add("active");
//   });
// });

// basket order product delete

let deleteProducts = document.querySelectorAll(".delete");

deleteProducts.forEach((deleteProduct) => {
  deleteProduct.addEventListener("click", () => {
    let products = document.querySelectorAll(".basket__products-card");
    const id = deleteProduct.getAttribute("data-id");
    products.forEach((product) => {
      let productId = product.getAttribute("data-id");
      if (id == productId) {
        let productPrice = parseFloat(
          product.querySelector(".price strong").textContent
        );
        let amount = document.querySelector(".amount strong");
        let allPrice = parseFloat(amount.textContent);
        if (allPrice >= 0) {
          allPrice -= productPrice;
        }
        amount.textContent = allPrice + " ₽";
        product.remove();
      }
    });
    if (products.length - 1 == 0) {
      document.querySelector(".basket__products").textContent =
        "Basket is empty!";
    }
  });
});

let plusButtons = document.querySelectorAll(".plus");

plusButtons.forEach((plusButton) => {
  plusButton.addEventListener("click", () => {
    let count = parseFloat(
      plusButton.parentElement.querySelector("span").textContent
    );

    let amount = document.querySelector(".amount strong");
    let allPrice = parseFloat(amount.textContent);
    let product = parseFloat(
      plusButton.parentElement.parentElement.querySelector(".price strong")
        .textContent
    );
    if (count >= 0) {
      count += 1;
      allPrice += product;
      amount.textContent = allPrice + " ₽";
      plusButton.parentElement.querySelector("span").textContent =
        count + " шт";
    }
  });
});

let minusButtons = document.querySelectorAll(".minus");

minusButtons.forEach((minusButton) => {
  minusButton.addEventListener("click", () => {
    let count = parseFloat(
      minusButton.parentElement.querySelector("span").textContent
    );
    let amount = document.querySelector(".amount strong");
    let allPrice = parseFloat(amount.textContent);
    let product = parseFloat(
      minusButton.parentElement.parentElement.querySelector(".price strong")
        .textContent
    );
    if (count > 1) {
      let product = parseFloat(
        minusButton.parentElement.parentElement.querySelector(".price strong")
          .textContent
      );
      count -= 1;
      allPrice -= product;
      amount.textContent = allPrice + " ₽";
      minusButton.parentElement.querySelector("span").textContent =
        count + " шт";
    }
  });
});

// basket product amount

const a = "sgu37bjgk_";
let input = document.querySelector(".promocode");
let checkbox = document.querySelector(".checkbox");
let warning = document.querySelector(".warning");

input.addEventListener("input", (e) => {
  if (input.value == a) {
    checkbox.classList.toggle("active");
    warning.textContent = " ";
  } else if (!input.value == a || input.value < a) {
    checkbox.classList.remove("active");
    warning.textContent = "Промо-код недействителен";
  } else if (input.value == " ") {
    warning.textContent = " ";
  } else {
    checkbox.classList.remove("active");
    warning.textContent = "";
  }
});
