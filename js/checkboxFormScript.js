$(document).ready(function() {
  // Handle form submission
  $('#checkboxForm').submit(function(e) {
      e.preventDefault(); // Prevent the default form submission behavior

      // Store the selected checkboxes' IDs in localStorage
      var checkboxes = document.querySelectorAll('input[type="checkbox"]');
      var selectedCheckboxes = [];

      checkboxes.forEach(function(checkbox) {
          if (checkbox.checked) {
              selectedCheckboxes.push(checkbox.id);
          }
      });

      console.log("Selected checkboxes:", selectedCheckboxes);

      localStorage.setItem('selectedCheckboxes', JSON.stringify(selectedCheckboxes));
      console.log("Data saved:", localStorage.getItem('selectedCheckboxes'));

      // Redirect to modulesconfiguration.html
      console.log("Redirecting to modulesconfiguration.html...");
      window.location.href = 'modulesconfiguration.html';
  });
});
