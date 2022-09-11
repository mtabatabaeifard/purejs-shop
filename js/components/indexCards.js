function indexCards(productID,productName,productDesc,productPrice,productImage){
   const el = `
   <div class="card" data-id="${productID}">
     <img
       src="${productImage}"
       class="card-img-top"
       alt="..."
     />
     <div class="card-body">
       <h5 class="card-title">${productName}</h5>
       <p class="card-text">
         ${productDesc}
       </p>
     </div>
     <div class="card-footer d-flex flex-column align-items-center">
       <span class="text-danger fs-4">
         <label class="productPrice">${productPrice}</label>T
       </span>
       <button class="btn btn-success">Add to Cart</button>
     </div>
   </div>`;
   return el;
}
export default indexCards;