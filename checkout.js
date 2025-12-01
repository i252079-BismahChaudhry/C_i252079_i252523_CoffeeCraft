console.log("Checkout page loaded successfully.");

document.getElementById("placeOrderBtn").addEventListener("click", function () {

    console.log("Place Order button clicked.");

    let name = document.getElementById("fullName").value;
    let address = document.getElementById("address").value;

    if (name === "" || address === "") {
        alert("Please fill out all required billing fields!");
        return;
    }

    console.log("Billing Info:", {
        name: name,
        address: address
    });

    alert("Order placed successfully!");
});


document.querySelector(".back-btn").addEventListener("click", function () {
    alert("Are you sure you want to go back?");
});
