let cart = JSON.parse(localStorage.getItem("cartStorage"));
let cartContainer = document.getElementById("items");
let cartStorages = [...cart];

function addToCart(name, price) {
  if (cart === null) {
    cart = [];
  }
  cart.push({ productName: name, productPrice: price });
  localStorage.setItem("cartStorage", JSON.stringify(cart));
  cartStorages = [...cart];
}


function showCart() {
  let totalAmount = 0;
  let itemNumber = 0;
  cartContainer.innerHTML = "";

  cartStorages.forEach(function(cartItems) {
    cartContainer.innerHTML +=
      `
      <div class = "cartcol1">
        
        <h3 id='desc'> ${cartItems.productName}</h3>
        <p id='price'> <i class="fa-solid fa-peso-sign"></i>${cartItems.productPrice}.00</p>

        <button onclick="removeItem(${itemNumber})"><i class="fa-regular fa-trash-can"></i></button>
      </div>
      `;
    totalAmount += cartItems.productPrice;
    itemNumber++;
  });

  cartContainer.innerHTML +=
    `
    <div class = 'totalWrap'>
    <div class = "cartcol2">
    <h3>TOTAL AMOUNT:</h3> <p id='total'><i class="fa-solid fa-peso-sign"></i>${totalAmount}.00</p>
    </div>
    <div class = 'checkoutBtn'>
    <button> CHECK OUT </button>
    </div>
    </div>
    `;
}

function removeItem(itemNumber) {
  cartStorages.splice(itemNumber, 1);
  cart = [...cartStorages];
  localStorage.setItem('cartStorage', JSON.stringify(cart));
  cartContainer.innerHTML = '';
  showCart();
}
