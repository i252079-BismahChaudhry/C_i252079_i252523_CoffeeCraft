
console.log("Checkout page loaded (demo mode only)");

document.querySelectorAll(".qty-btn").forEach(button => {
  button.addEventListener("click", () => {

    // Alert #1
    alert("Quantity update.");

    console.log("Quantity button clicked");
  });
});

document.querySelectorAll(".refresh-btn").forEach(button => {
  button.addEventListener("click", () => {

    alert("Quantity refresh .");
    console.log("Refresh clicked");
  });
});

document.querySelectorAll(".remove-btn").forEach(button => {
  button.addEventListener("click", () => {

  
    alert("Remove item.");

    console.log("Remove item");
  });
});


document.getElementById("payBtn").addEventListener("click", () => {

  alert("Redirecting to payment page.");

  console.log("Proceed to payment clicked");
});

document.getElementById("backBtn").addEventListener("click", () => {
  alert("Going back.");
  console.log("Back button clicked");
});
