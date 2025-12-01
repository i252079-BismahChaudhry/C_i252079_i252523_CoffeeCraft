
console.log("Arabica Expresso Dark page loaded.");

document.querySelectorAll(".qty-btn").forEach(button => {
  button.addEventListener("click", () => {
    const type = button.classList.contains("plus") ? "plus" : "minus";

    alert("Quantity change.");

    console.log("Quantity button clicked:", type);
  });
});


const addBtn = document.querySelector(".add-cart-btn");
if (addBtn) {
  addBtn.addEventListener("click", () => {
    // Alert #2
    alert("Add to Cart .");

  
    console.log("Add to Cart clicked .");
  });
}


const buyBtn = document.querySelector(".buy-btn");
if (buyBtn) {
  buyBtn.addEventListener("click", () => {
    alert("Buy It Now is disabled .");
    console.log("Buy It Now clicked .");
  });
}


const heartBtn = document.querySelector(".heart-btn");
if (heartBtn) {
  heartBtn.addEventListener("click", () => {
    alert("Wishlist feature coming soon .");
    console.log("Heart / wishlist clicked .");
  });
}
