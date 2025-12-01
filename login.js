//----------------------login page -----------------------------
/* -------------------------------------
   ✔ Console Log #2 – Forgot Password
--------------------------------------*/
document.getElementById("forgotPass").addEventListener("click", function () {
    console.log("Forgot password link pressed.");

    // ✔ Alert #3 – confirmation prompt
    let confirmAction = confirm("Do you want to reset your password?");
    if (confirmAction) {
        alert("Password reset link sent!");
    }
});

/* -------------------------------------
   ✔ Console Log #3 – Create Account
--------------------------------------*/
document.getElementById("createAcc").addEventListener("click", function () {
    console.log("Navigating to the account creation page...");
    alert("Redirecting to create account...");
});

/* Back button action */
document.getElementById("backBtn").addEventListener("click", function () {
    alert("Returning to previous page...");
});
/*-------------------------Login ----------------------------*/
// -----------------------------
// 1. USER CLICKS LOGIN BUTTON
// -----------------------------
document.getElementById("loginBtn").addEventListener("click", function () {

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Console log #1 — debugging input values
    console.log("Login attempt with:", { email: email, passwordEntered: password !== "" });

    // Alert #1 — form validation
    if (email === "" || password === "") {
        alert("Please fill in both email and password.");
        return;
    }

    // Simulated login success
    alert("Login successful! Welcome back.");
});

// -----------------------------
// 2. FORGOT PASSWORD CLICK
// -----------------------------
document.getElementById("forgotPass").addEventListener("click", function () {

    // Console log #2 — user interaction
    console.log("Forgot Password link clicked.");

    // Alert #2 — helpful guidance
    alert("Password reset link has been sent to your email.");

});

// -----------------------------
// 3. CREATE ACCOUNT CLICK
// -----------------------------
document.getElementById("createAcc").addEventListener("click", function () {

    // Console log #3 — redirection test
    console.log("Create Account link clicked → redirecting...");

    // Alert #3 — confirmation before action
    alert("Redirecting to Sign Up page.");
    window.location.href = "signup.html";
});

// -----------------------------
// 4. BACK BUTTON
// -----------------------------
document.getElementById("backBtn").addEventListener("click", function () {
    window.history.back();
});