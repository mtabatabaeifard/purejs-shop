import productData from "../../data/productData.js";
import indexCards from "../components/indexCards.js";

function renderMainPageElement() {
    const div = document.querySelector("#some-of-products");
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