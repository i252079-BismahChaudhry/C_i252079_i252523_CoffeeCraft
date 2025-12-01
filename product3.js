
console.log("Coffee Temper product page loaded .");

document.querySelectorAll(".size-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const size = btn.dataset.size;
    const label = document.getElementById("selectedSize");
    if (label) label.textContent = size;

    alert("Size selection : " );


    console.log("Size button clicked:", size);
  });
});

document.querySelectorAll(".qty-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const type = btn.classList.contains("plus") ? "plus" : "minus";

  
    alert("Quantity change .");

    console.log("Quantity button pressed:", type);
  });
});


const addBtn = document.querySelector(".add-cart-btn");
if (addBtn) {
  addBtn.addEventListener("click", () => {
    
    alert("Add to Cart.");


    console.log("Add to Cart clicked for Coffee Temper .");
  });
}


const buyBtn = document.querySelector(".buy-btn");
if (buyBtn) {
  buyBtn.addEventListener("click", () => {
    alert("Buy It Now .");
    console.log("Buy It Now clicked .");
  });
}

const heartBtn = document.querySelector(".heart-btn");
if (heartBtn) {
  heartBtn.addEventListener("click", () => {
    alert("Wishlist feature coming soon .");
    console.log("Heart / wishlist clicked.");
  });
}
