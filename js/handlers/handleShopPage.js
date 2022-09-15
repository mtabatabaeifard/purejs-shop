import productData from "../../data/productData.js";
import shopCards from "../components/shopCards.js";
import toast from "../utils/toast.js";
import handleAddToCart from "./handleAddToCart.js";

const ul = document.querySelector("#shop-ul");
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
    console.log(e.target);
    if (e.target.innerText == "Add To cart") {
      const toastHandleDiv = document.querySelector("#toast-handle");
      toastHandleDiv.innerHTML+=(toast("alert","added to cart","show"));
      setTimeout(() => {
        toastHandleDiv.innerHTML = "";
      }, 1000);
      handleAddToCart(e.target.dataset.id);
    }
    
  });