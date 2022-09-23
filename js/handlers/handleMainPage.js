import productData from "../../data/productData.js";
import indexCards from "../components/indexCards.js";
import toast from "../utils/toast.js";
import handleAddToCart from "./handleAddToCart.js";

const div = document.querySelector("#some-of-products");
const toastHandleDiv = document.querySelector("#toast-handle");
const loggedInState = localStorage.getItem("logged in") || false;
function renderMainPageElement() {
  const filteredProducts = productData().slice(0, 3);
  filteredProducts.forEach((product) => {
    let card = indexCards(
      product.id,
      product.name,
      product.desc,
      product.price,
      product.image
    );
    div.innerHTML += card;
  });
}
renderMainPageElement();

div.addEventListener("click", (e) => {
  if (e.target.innerText == "Add to Cart") {
    
    if (loggedInState == "true") {
      
      toastHandleDiv.innerHTML += toast("alert", "added to cart", "show");
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
