import cartItems from "../components/cartItems.js";
import toast from "../utils/toast.js";

const currentCartItem = localStorage.getItem("cart") || undefined;
const loggedInState = localStorage.getItem("logged in") || false;
const cartItemsSection = document.querySelector(".cart-items");
const cartContent = document.querySelector(".cart-content");
const finalPrice = document.querySelector("#final-price");
const toastHandleDiv = document.querySelector("#toast-handle");

let totalPrice = [];




function renderCartElements() {
  const parsedCartItem = JSON.parse(currentCartItem);
  const sortedParsedItem = parsedCartItem.sort((a,b)=>a-b);
  sortedParsedItem.forEach((cartItem) => {
    cartContent.innerHTML += cartItems(
      cartItem.id,
      cartItem.name,
      cartItem.desc,
      cartItem.price,
      cartItem.image,
      cartItem.amount
    );
    totalPrice.push((cartItem.amount) * (cartItem.price));
});
}
if (currentCartItem == undefined) {
  cartItemsSection.innerHTML = `<h5 class="alert-danger">error:cart is empty</h5>`;
}
if (currentCartItem.length == 2) {
  cartItemsSection.innerHTML = `<h5 class="alert-danger">error:cart is empty</h5>`;
}
if (loggedInState == false) {
  cartItemsSection.innerHTML = `<h5 class="alert-danger">error:please login first</h5>`;
}

if (currentCartItem != undefined) {
  renderCartElements();
}

cartContent.addEventListener("click", (e) => {
  const parsedCartItem = JSON.parse(currentCartItem);
  if (e.target.innerText == "+") {
    const currentProductId =
      e.target.parentElement.parentElement.parentElement.dataset.id;
    parsedCartItem.map((cartItem) => {
      if (cartItem.id == currentProductId) {
        cartItem.amount++;
        const filtredCartItems = parsedCartItem.filter(
          (cartItem) => cartItem.id != currentProductId
        );
        const updatedCartItems = [...filtredCartItems, cartItem];
        localStorage.setItem("cart", JSON.stringify(updatedCartItems));
        location.reload();
      }
    });
  }
  if (e.target.innerText == "-") {
    const currentProductId =
      e.target.parentElement.parentElement.parentElement.dataset.id;
    parsedCartItem.map((cartItem) => {
      if (cartItem.id == currentProductId) {
        if (cartItem.amount == 1) {
          toastHandleDiv.innerHTML+=toast("error", "you can't decrease the amount of item in cart lower than 1 if you want to remove , use remove button", "show");
          setTimeout(() => {
            toastHandleDiv.innerHTML = "";
          }, 4000);
        }else{
          cartItem.amount--;
          const filtredCartItems = parsedCartItem.filter(
            (cartItem) => cartItem.id != currentProductId
          );
          const updatedCartItems = [...filtredCartItems, cartItem];
          localStorage.setItem("cart", JSON.stringify(updatedCartItems));
          location.reload();
        }
      }
    });
  }
  if (e.target.dataset.action == "deleteProduct") {
    const productID = e.target.dataset.id;
    parsedCartItem.map((cartItem) => {
      if (cartItem.id == productID) {
        const filtredCartItems = parsedCartItem.filter(
          (cartItem) => cartItem.id != productID
        );
        localStorage.setItem("cart", JSON.stringify(filtredCartItems));
        location.reload();
      }
    });
  }
});


const totalFinalPrice = totalPrice.reduce((a, b) => a + b, 0)
finalPrice.innerHTML = `TotalPrice:${totalFinalPrice}T
<button class="btn btn-success">purchase</button>
`;

finalPrice.addEventListener("click", (e) =>{
    const finalPriceInRials = totalFinalPrice * 10;
    if (e.target.innerText == "purchase"){
       location.href=`https://idpay.ir/mtabatabaeifard/${finalPriceInRials}`
    }
})