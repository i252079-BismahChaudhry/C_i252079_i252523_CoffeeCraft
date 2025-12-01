// Console Log #1 – page ready
console.log("product page loaded.");

// Handle color clicks (alert only)
document.querySelectorAll(".color-dot").forEach(dot => {
  dot.addEventListener("click", () => {
    const color = dot.dataset.color;

    // Alert #1
    alert("Color selection. ");

    // Console Log #2
    console.log("Color dot clicked:", color);
  });
});

// Quantity buttons (no real change, just alerts)
document.querySelectorAll(".qty-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const type = btn.classList.contains("plus") ? "plus" : "minus";

    // Alert #2
    alert("Quantity change (" + type + ") .");

    console.log("Quantity button pressed:", type);
  });
});

// Add to Cart – alert only
document.querySelector(".add-cart-btn").addEventListener("click", () => {
  // Alert #3
  alert("Add to Cart sucessfully.");

  // Console Log #3
  console.log("Add to Cart clicked .");
});

// Buy It Now – extra alert + log (optional)
document.querySelector(".buy-btn").addEventListener("click", () => {
  alert("Buy It Now .");
  console.log("Buy It Now clicked.");
});

// Heart button – extra fun alert
document.querySelector(".heart-btn").addEventListener("click", () => {
  alert("feature comming soon.");
  console.log("Heart click.");
});
