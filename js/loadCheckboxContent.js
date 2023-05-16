$(document).ready(function() {
    // Fetch the checkbox options from a JSON file
    $.getJSON('content/checkboxOptions.json', function(data) {
        var checkboxContent = '';

        // Iterate over the options and generate the checkbox elements
        data.options.forEach(function(option) {
            checkboxContent += '<div class="form-check">';
            checkboxContent += '<input class="form-check-input" type="checkbox" id="' + option.id + '">';
            checkboxContent += '<label class="form-check-label" for="' + option.id + '">' + option.label + '</label>';
            checkboxContent += '</div>';
        });

        console.log("Checkbox options loaded:", data.options);
        console.log("Generated checkbox elements:", checkboxContent);

        // Append the generated checkbox elements to the checkboxContent div
        $('#checkboxContent').html(checkboxContent);
    });
});
