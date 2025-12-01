
document.addEventListener("click", function (e) {
    if (e.target.type === "radio") {
        console.log("User selected:", e.target.value);
    }
});


function goBack() {
    alert("Are you sure you want to go back?");
    console.log("Back button clicked");
}

function addToCart() {
    let coffee = document.querySelector('input[name="coffee"]:checked');
    let roast = document.querySelector('input[name="roast"]:checked');

    if (!coffee || !roast) {
        alert("Please select both coffee type and roast level.");
        console.log("Validation failed: Missing selection");
        return;
    }

    console.log("Coffee selected:", coffee.value, "| Roast:", roast.value);
    alert("Product added to cart successfully!");
}

document.getElementById("loginBtn").addEventListener("click", function () {
    console.log("Login button clicked.");

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    console.log("User typed → Email:", email, " Password:", password);

    if (email === "" || password === "") {
        alert("Please fill in both email and password.");
        return;
    }

    if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        return;
    }


    alert("Login successful! Welcome back.");
});