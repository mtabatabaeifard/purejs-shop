function shopCards(
  productID,
  productName,
  productDesc,
  productPrice,
  productImage
) {
  const el = `<li class="list-item card m-2 w-25">
    <img src="${productImage}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${productName}</h5>
    <p class="card-text">
        ${productDesc}
        <span class="text-danger fs-5">
            <br><label class="productPrice">${productPrice}</label>T
        </span>
    </p>
    <a href="#" class="btn btn-success" data-id="${productID}">Add To cart</a>
    </div>
</li>`;
  return el;
}
export default shopCards;