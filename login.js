
document.getElementById("forgotPass").addEventListener("click", function () {
    console.log("Forgot password link pressed.");

    // ✔ Alert #3 – confirmation prompt
    let confirmAction = confirm("Do you want to reset your password?");
    if (confirmAction) {
        alert("Password reset link sent!");
    }
});


document.getElementById("createAcc").addEventListener("click", function () {
    console.log("Navigating to the account creation page...");
    alert("Redirecting to create account...");
});

/* Back button action */
document.getElementById("backBtn").addEventListener("click", function () {
    alert("Returning to previous page...");
});

document.getElementById("loginBtn").addEventListener("click", function () {

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    console.log("Login attempt with:", { email: email, passwordEntered: password !== "" });

    if (email === "" || password === "") {
        alert("Please fill in both email and password.");
        return;
    }

  
    alert("Login successful! Welcome back.");
});


document.getElementById("forgotPass").addEventListener("click", function () {


    console.log("Forgot Password link clicked.");

    
    alert("Password reset link has been sent to your email.");

});

document.getElementById("createAcc").addEventListener("click", function () {

  
    console.log("Create Account link clicked → redirecting...");

    alert("Redirecting to Sign Up page.");
    window.location.href = "signup.html";
});


document.getElementById("backBtn").addEventListener("click", function () {
    window.history.back();
});
