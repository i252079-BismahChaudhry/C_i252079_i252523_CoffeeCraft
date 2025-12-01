
console.log("Menu page loaded successfully.");


document.getElementById("filterBtn").addEventListener("click", function () {
    alert("Choose your favourite filter option."); 
    console.log("Filter button clicked by the user."); 
});



const favButtons = document.querySelectorAll(".favBtn");

favButtons.forEach(button => {
    button.addEventListener("click", function () {
        console.log("Favorite button clicked."); 

        let confirmAction = confirm("Add this item to your favorites?");

        if (confirmAction) {
            alert("Item added to favorites!"); 
        }
    });
});
