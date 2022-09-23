import cartItems from "../components/cartItems.js";

const currentCartItem = localStorage.getItem("cart") || undefined;
const loggedInState = localStorage.getItem("logged in") || false;
const cartItemsSection = document.querySelector(".cart-items");
const cartContent = document.querySelector(".cart-content");


if (currentCartItem == undefined) {
  cartItemsSection.innerHTML = `<h5 class="alert-danger">error:cart is empty</h5>`;
}
if(loggedInState == false) {
    cartItemsSection.innerHTML = `<h5 class="alert-danger">error:please login first</h5>`;
}

if (currentCartItem != undefined) {
    const parsedCartItem = JSON.parse(currentCartItem);
    parsedCartItem.forEach((cartItem) => {
        cartContent.innerHTML += cartItems(cartItem.id , cartItem.name , cartItem.desc , cartItem.price , cartItem.image)
    });
    
}
