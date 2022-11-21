import productData from "../../data/productData.js";
import shopCards from "../components/shopCards.js";
import toast from "../utils/toast.js";
import handleAddToCart from "./handleAddToCart.js";

const ul = document.querySelector("#shop-ul");
const loggedInState = localStorage.getItem("logged in") || false;
const toastHandleDiv = document.querySelector("#toast-handle");
const priceSortLTHButton = document.querySelector("#price-sort-lth");
const priceSortHTLButton = document.querySelector("#price-sort-htl");
const priceSortResetButton = document.querySelector("#price-sort-reset");
const searchBtn = document.querySelector("#search-btn");
const searchInput = document.querySelector("#search-input");
searchBtn.addEventListener("click",(e)=>{
  e.preventDefault();
  productData().map((product)=>{
    if (product.name == searchInput.value) {
      ul.innerHTML ="";
      const cards = shopCards(
        product.id,
        product.name,
        product.desc,
        product.price,
        product.image
      );
      ul.innerHTML += cards;
    }
    
  })
})


function renderShopCardsByLTHPrice() {
  // renders shop cards from lower to higher price sorting
  const sortedProducts = productData().sort((a,b)=>a.price - b.price);
  sortedProducts.forEach((product) => {
    const cards = shopCards(
      product.id,
      product.name,
      product.desc,
      product.price,
      product.image
    );
    ul.innerHTML += cards;
  });
}

function renderShopCardsByHTLPrice() {
  // renders shop cards from higher to lower price sorting
  const sortedProducts = productData().sort((a,b)=>a.price - b.price).reverse();
  sortedProducts.forEach((product) => {
    const cards = shopCards(
      product.id,
      product.name,
      product.desc,
      product.price,
      product.image
    );
    ul.innerHTML += cards;
  });
}


function renderShopCardsDefault() {
  // renders shop cards by default sorting
  productData().forEach((product) => {
    const cards = shopCards(
      product.id,
      product.name,
      product.desc,
      product.price,
      product.image
    );
    ul.innerHTML += cards;
  });
}
  renderShopCardsDefault();


  priceSortLTHButton.addEventListener("click", ()=>{
    ul.innerHTML = "";
    renderShopCardsByLTHPrice();
  })


  priceSortHTLButton.addEventListener("click", ()=>{
    ul.innerHTML = "";
    renderShopCardsByHTLPrice();
  })



  priceSortResetButton.addEventListener("click", ()=>{
    ul.innerHTML = "";
    renderShopCardsDefault();
  })




  ul.addEventListener('click',(e)=>{
    if (e.target.innerText == "Add To cart") {
      if(loggedInState === "true") {
        toastHandleDiv.innerHTML+=(toast("alert","added to cart","show"));
        setTimeout(() => {
          toastHandleDiv.innerHTML = "";
        }, 1000);
        handleAddToCart(e.target.dataset.id);
      }
      else{
        toastHandleDiv.innerHTML +=toast("error", "please login first to add items to your cart","show");
        setTimeout(() => {
          toastHandleDiv.innerHTML = "";
        }, 1000);
      }
    }
    
  });