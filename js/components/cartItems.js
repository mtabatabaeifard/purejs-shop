function cartItems(productID,productName,productDesc,productPrice,productImage){
    const el = `
    <div class="card mb-3 mx-auto" style="max-width: 1200px">
    <div class="row g-0">
      <div class="col-md-4">
        <img
          src="${productImage}"
          class="img-fluid rounded-start"
          alt="..."
        />
      </div>
      <div class="col-md-8">
        <div class="card-body d-flex flex-column align-items-center">
          <h5 class="card-title">${productName}</h5>
          <p class="card-text text-center">
            Numbers in Cart:
            <span class="d-flex justify-content-center">
              <button class="btn btn-primary">-</button>
              <input
                type="text"
                name=""
                id=""
                class="form-control w-50"
                style="border: none; text-align: center"
                disabled
                value="1"
              />
              <button class="btn btn-primary">+</button>
            </span>
          </p>
          <p class="card-text mt-4">
            <small class="text-muted">price:</small><span>${productPrice}</span>
          </p>
          <button type="button" class="btn btn-danger" data-id ="${productID}">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-trash3-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
    `;
    return el;
};

export default cartItems;