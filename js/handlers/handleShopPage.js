import productData from "../../data/productData.js";
import shopCards from "../components/shopCards.js";
import toast from "../utils/toast.js";
import handleAddToCart from "./handleAddToCart.js";

const ul = document.querySelector("#shop-ul");
const loggedInState = localStorage.getItem("logged in") || false;
const toastHandleDiv = document.querySelector("#toast-handle");



function renderShopCards() {
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
  renderShopCards();

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
      }
    }
    
  });