// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector(".price span");
  let quantity = product.querySelector(".quantity input");

  let priceValue = parseFloat(price.innerHTML);
  let quantityValue = quantity.valueAsNumber;

  let subTotalValue = priceValue * quantityValue;

  let subTotal = product.querySelector("subtotal span");
  subTotal.innerHTML = subtotalValue;

  return subtotalValue;
}

function calculateAll() { 
  let products = document.getElementsByClassName("product");
  let totalValue += 0;
  for (let product of products) { 
    totalValue += updateSubtotal(product);
  }
  document.querySelector("#total-value span").innerText = totalValue;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log(target);
  
  const row = target.parentNode.parentNode;
  console.log(row);

  const parent = row.parentNode;
  console.log(parent);

  parent.removeChild(row);

  calculateAll();
}

// ITERATION 5

function createProduct() { 
  let createRow = document.querySelector(".create-product");
  let newProdNameInput = createRow.querySelector("input");
  let newProdNameValue = newProdNameInput.value;
  let newProdPriceInput = createRow.querySelector("input[type='number']");
  let newProdPriceValue = Number(newProdPriceInput.valueAsNumber).toFixed(2);

  const newTableRow = document.createElement("tr");
  newTableRow.className = "product";
  newTableRow.innerHTML = `
  <td class="name">
  <span>${newProdNameValue}</span>
  </td>
    <td class="price">
      $
      <span>${newProdPriceValue}</span>
    </td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `;

  const parent = document.querySelector("#cart tbody");

  parent.appendChild(newTableRow);

  const removeBtn = newTableRow.querySelector(".btn-remove");
  removeBtn.addEventListener("click", removeProduct);

  newProdNameInput.value = "";
  newProdPriceInput.value = 0;
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const removeBtns = document.querySelectorAll(".btn-remove");

  for (let inidiviualBtn of removeBtns) {
    inidiviualBtn.addEventListener("click", removeProduct);
  }

  const createBtn = document.querySelector("#create");
  if (createBtn) {
    createBtn.addEventListener("click", createProduct);
  }
});

let diego = ["coder", 32, "foodie lover"];
for (let x of diego) {
  console.log(x);
}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
