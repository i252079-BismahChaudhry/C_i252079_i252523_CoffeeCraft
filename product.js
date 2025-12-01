
console.log("product page loaded.");


document.querySelectorAll(".color-dot").forEach(dot => {
  dot.addEventListener("click", () => {
    const color = dot.dataset.color;

  
    alert("Color selection. ");


    console.log("Color dot clicked:", color);
  });
});


document.querySelectorAll(".qty-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const type = btn.classList.contains("plus") ? "plus" : "minus";

    alert("Quantity change (" + type + ") .");

    console.log("Quantity button pressed:", type);
  });
});

document.querySelector(".add-cart-btn").addEventListener("click", () => {
  
  alert("Add to Cart sucessfully.");


  console.log("Add to Cart clicked .");
});


document.querySelector(".buy-btn").addEventListener("click", () => {
  alert("Buy It Now .");
  console.log("Buy It Now !!hurry to checkout.");
});


document.querySelector(".heart-btn").addEventListener("click", () => {
  alert("Your Favourites!!");
  console.log("Heart click.");
});
