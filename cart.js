// Console Log #1 – Page Loaded
console.log("Checkout page loaded (demo mode only)");

// Quantity Buttons (Alert only)
document.querySelectorAll(".qty-btn").forEach(button => {
  button.addEventListener("click", () => {

    // Alert #1
    alert("Quantity update.");

    // Console Log #2
    console.log("Quantity button clicked");
  });
});

// Refresh Button (Alert only)
document.querySelectorAll(".refresh-btn").forEach(button => {
  button.addEventListener("click", () => {

    alert("Quantity refresh .");
    console.log("Refresh clicked");
  });
});

// Remove Button (Alert only)
document.querySelectorAll(".remove-btn").forEach(button => {
  button.addEventListener("click", () => {

    // Alert #2
    alert("Remove item.");

    // Console Log #3
    console.log("Remove item");
  });
});

// Proceed Button (Alert only)
document.getElementById("payBtn").addEventListener("click", () => {

  // Alert #3
  alert("Redirecting to payment page.");

  console.log("Proceed to payment clicked");
});

// Back Button (Alert only)
document.getElementById("backBtn").addEventListener("click", () => {
  alert("Going back.");
  console.log("Back button clicked");
});
