
document.addEventListener("DOMContentLoaded", function () {
  
    document.getElementById("signupBtn").addEventListener("click", function () {
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let pass = document.getElementById("password").value.trim();
        let confirmPass = document.getElementById("confirmPassword").value.trim();

        if (!name || !email || !pass || !confirmPass) {
            alert("Please fill in all fields.");
            return;
        }

        if (pass !== confirmPass) {
            alert("Passwords do not match!");
            return;
        }

        alert("Account created successfully!");
    });

    document.querySelector(".google-btn").addEventListener("click", function () {
        alert("Google authentication currently unavailable.");
    });

   
    document.querySelector(".facebook-btn").addEventListener("click", function () {
        alert("Facebook authentication is not enabled yet.");
    });

   
    document.getElementById("backBtn").addEventListener("click", function () {
        window.history.back();
    });
});