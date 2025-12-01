document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("filterForm");
  const clearBtn = document.getElementById("clearBtn");
  const priceRange = document.getElementById("priceRange");

  // Console Log #1 – page loaded
  console.log("Coffee Craft filter page loaded.");

  // APPLY FILTERS BUTTON
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const data = new FormData(form);
      const values = Object.fromEntries(data.entries());
      const allEmpty = Object.values(values).every(v => v === "" || v === null);

      if (allEmpty) {
        // Alert #1
        alert("Please enter at least one filter before applying.");
      } else {
        // Alert #2
        alert("Filters applied.");
      }

      // Console Log #2
      console.log("Apply Filters clicked:", values);
    });
  }

  // CLEAR ALL BUTTON
  if (clearBtn) {
    clearBtn.addEventListener("click", function () {
      // Alert #3
      alert("Clear All .");

      // Console Log #3
      console.log("Clear All clicked.");
    });
  }

  // ✅ PRICE RANGE – LOCKED COMPLETELY
  if (priceRange) {

    // Prevent movement
    priceRange.addEventListener("input", function (event) {
      event.preventDefault();
      // reset to default value (center)
      priceRange.value = priceRange.defaultValue;

      alert("Price range selection .");
      console.log("Blocked price slider move attempt.");
    });

  }

});
