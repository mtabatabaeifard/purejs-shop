import productData from "../../data/productData.js";
import shopCards from "../components/shopCards.js";

function renderShopCards() {
  const ul = document.querySelector("#shop-ul");
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

