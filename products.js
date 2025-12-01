
const cartButtons = document.querySelectorAll(".addCart");

cartButtons.forEach(button => {
    button.addEventListener("click", () => {

        console.log("Add to Cart clicked:", button.parentElement.querySelector("h3").textContent);

        alert("Product added to cart successfully!");

    });
});
