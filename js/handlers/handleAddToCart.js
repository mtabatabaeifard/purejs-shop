import productData from "../../data/productData.js";

const currentCartItem = localStorage.getItem("cart");
const parsedData = JSON.parse(currentCartItem) || [];

let amount = 1;
function handleAddToCart(id) {
  let cart = parsedData;
  const filteredProduct = productData().filter((product) => product.id == id);
  filteredProduct[0].amount = amount;

  if (cart.length > 0) {
    let filteredProducts = cart.filter(
      (product) => product.id !== filteredProduct[0].id
    );

    if (filteredProducts.length > 0) {
      cart.forEach((product) => {
        if (product.id == filteredProduct[0].id) {
          amount++;
          filteredProduct[0].amount = amount;
          let finalCart = [...filteredProducts, ...filteredProduct];
          localStorage.setItem("cart", JSON.stringify(finalCart));
        } else {
          cart.push(filteredProduct[0]);
          localStorage.setItem("cart", JSON.stringify(cart));
        }
      });
    } else {
      cart.forEach((product) => {
        if (product.id == filteredProduct[0].id) {
          amount++;
          filteredProduct[0].amount = amount;
          let finalCart = [...filteredProducts, ...filteredProduct];
          localStorage.setItem("cart", JSON.stringify(finalCart));
        } else {
          cart.push(filteredProduct[0]);
          localStorage.setItem("cart", JSON.stringify(cart));
        }
      });
    }
  } else {
    cart.push(filteredProduct[0]);
    localStorage.setItem("cart", JSON.stringify(cart));
  }
}
export default handleAddToCart;
