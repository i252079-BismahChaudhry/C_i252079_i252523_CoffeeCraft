document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("filterForm");
  const clearBtn = document.getElementById("clearBtn");
  const priceRange = document.getElementById("priceRange");


  console.log("Coffee Craft filter page loaded.");


  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const data = new FormData(form);
      const values = Object.fromEntries(data.entries());
      const allEmpty = Object.values(values).every(v => v === "" || v === null);

      if (allEmpty) {
   
        alert("Please enter at least one filter before applying.");
      } else {
      
        alert("Filters applied.");
      }

 
      console.log("Apply Filters clicked:", values);
    });
  }


  
  if (clearBtn) {
    clearBtn.addEventListener("click", function () {
     
      alert("Clear All .");

  
      console.log("Clear All clicked.");
    });
  }

  if (priceRange) {


    priceRange.addEventListener("input", function (event) {
      event.preventDefault();
   
      priceRange.value = priceRange.defaultValue;

      alert("Price range selection .");
      console.log("Blocked price slider move attempt.");
    });

  }

});
