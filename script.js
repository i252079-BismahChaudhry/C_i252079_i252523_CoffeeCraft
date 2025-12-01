document.addEventListener("DOMContentLoaded", () => {
    console.log("Homepage loaded successfully.");

    // Best Sellers Add to Cart buttons
    document.querySelectorAll(".Best-sellers .Addtocart").forEach(button => {
        button.addEventListener("click", () => {
            alert("Product added to cart successfully!");
            const productName = button.closest(".Stuff").querySelector(".icon-text2").innerText;
            console.log("Add to Cart clicked for:", productName);
        });
    });

    document.querySelector(".fa-cart-shopping").addEventListener("click", () => {
        alert("Opening your shopping cart...");
        console.log("Cart icon clicked.");
    });

    const searchInput = document.querySelector(".search-box input");
    searchInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            const value = searchInput.value.trim();
            console.log("Search query:", value);

            if (value === "") {
                alert("Please type something to search!");
            } else {
                alert(`Searching for "${value}"...`);
            }
        }
    });
});
document.querySelector(".search-box input").addEventListener("input", function (e) {
    // Not counted in the required 3 logs, but still useful — you may remove if needed
    console.log("User search query:", e.target.value);
});
