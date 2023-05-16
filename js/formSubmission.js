$(document).ready(function() {
    // Store form data in localStorage on save button click
    $('#saveButton').click(function() {
        var formData = {};

        // Get the input values from the form
        $('#modulesForm :input').each(function() {
            var inputId = $(this).attr('id');

            // Exclude buttons from storing in localStorage
            if (!inputId.endsWith('Button')) {
                var inputValue = $(this).val();
                formData[inputId] = inputValue;
            }
        });

        // Store the form data in localStorage
        localStorage.setItem('formData', JSON.stringify(formData));
        console.log('Form data saved to localStorage:', formData);
    });
});
