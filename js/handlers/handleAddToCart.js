import productData from "../../data/productData.js";

const currentCartItem = localStorage.getItem("cart");
const parsedData = JSON.parse(currentCartItem) || [];

function handleAddToCart(id) {
  let cart = parsedData;
  const filteredProduct = productData().filter((product) => product.id == id);
  cart.push(filteredProduct);
  localStorage.setItem("cart", JSON.stringify(cart));

}
export default handleAddToCart;