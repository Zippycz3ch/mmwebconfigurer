$(document).ready(function() {
    var selectedModules = localStorage.getItem('selectedCheckboxes');
    if (selectedModules) {
        selectedModules = JSON.parse(selectedModules);
        var moduleStepsHtml = '';
        var numSteps = selectedModules.length;

        for (var i = 0; i < numSteps; i++) {
            var moduleId = selectedModules[i];
            var displayStyle = i === 0 ? '' : 'display: none;';
            var stepHtml = '<div id="step_' + moduleId + '" class="module-step" style="' + displayStyle + '">';
            stepHtml += '<h4>' + moduleId + '</h4>';

            // Fetch the module options JSON synchronously (using $.ajax with async: false)
            var optionsData;
            $.ajax({
                url: 'content/' + moduleId + 'Options.json',options
                async: false,
                dataType: 'json',
                success: function(data) {
                    optionsData = data;
                }
            });

            stepHtml += '<form id="form_' + moduleId + '">';
            stepHtml += '<h5>' + optionsData.title + '</h5>';

            // Generate form fields based on the options
            for (var j = 0; j < optionsData.fields.length; j++) {
                var field = optionsData.fields[j];
                stepHtml += '<div class="form-group">';
                stepHtml += '<label for="' + moduleId + '_' + field.label + '">' + field.label + '</label>';

                var fieldId = moduleId + '_' + field.label;
                if (field.type === 'select') {
                    stepHtml += '<select class="form-control" id="' + fieldId + '">';
                    for (var k = 0; k < field.options.length; k++) {
                        stepHtml += '<option>' + field.options[k] + '</option>';
                    }
                    stepHtml += '</select>';
                } else if (field.type === 'checkbox') {
                    stepHtml += '<input type="checkbox" id="' + fieldId + '">';
                } else {
                    stepHtml += '<input type="text" class="form-control" id="' + fieldId + '">';
                }

                stepHtml += '</div>';
            }

            stepHtml += '</form>';
            stepHtml += '</div>';
            moduleStepsHtml += stepHtml;
        }

        $('#moduleSteps').html(moduleStepsHtml);

        // ...
    }
});
