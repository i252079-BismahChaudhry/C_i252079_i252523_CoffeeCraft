
console.log("Menu page loaded successfully.");


document.getElementById("filterBtn").addEventListener("click", function () {
    alert("Filter feature is coming soon!"); // Alert #1
    console.log("Filter button clicked by the user."); // Console #2
});



const favButtons = document.querySelectorAll(".favBtn");

favButtons.forEach(button => {
    button.addEventListener("click", function () {
        console.log("Favorite button clicked."); // Console #3

        let confirmAction = confirm("Add this item to your favorites?"); // Alert #2

        if (confirmAction) {
            alert("Item added to favorites!"); // Alert #3
        }
    });
});
