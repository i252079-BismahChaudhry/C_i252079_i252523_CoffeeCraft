
    document.addEventListener("DOMContentLoaded", function() {

        console.log("Contact Page Loaded Successfully");

    
    const form = document.getElementById("contactForm");

    if(form) {   // Safety check
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            let name = document.getElementById("name").value.trim();
            let email = document.getElementById("email").value.trim();
            let subject = document.getElementById("subject").value.trim();
            let message = document.getElementById("message").value.trim();

            console.log("Form Data Entered:", { name, email, subject, message });

            if (name === "") {
                alert("Please enter your name.");
                return;
            }

            if (email === "" || !email.includes("@")) {
                alert("Please enter a valid email address!");
                return;
            }

            alert("Your message has been sent successfully!");

            console.log("Form submitted successfully!");

            form.reset();
        });
    }

    document.querySelectorAll(".faq-question").forEach(faq => {
        faq.addEventListener("click", function () {
            console.log("FAQ clicked:", this.innerText.trim());
        });
    });

});

