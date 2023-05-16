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
                url: 'content/' + moduleId + 'Options.json',
                async: false,
                dataType: 'json',
                success: function(data) {
                    optionsData = data;
                }
            });

            stepHtml += '<form>';
            stepHtml += '<h5>' + optionsData.title + '</h5>';

            // Generate form fields based on the options
            for (var j = 0; j < optionsData.fields.length; j++) {
                var field = optionsData.fields[j];
                stepHtml += '<div class="form-group">';
                stepHtml += '<label for="' + moduleId + '_' + field.id + '">' + field.label + '</label>';

                var fieldId = moduleId + '_' + field.id;
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

        var currentStep = 0;

        $('#nextButton').click(function() {
            if (currentStep < numSteps - 1) {
                $('#step_' + selectedModules[currentStep]).hide();
                currentStep++;
                $('#step_' + selectedModules[currentStep]).show();
                $('#prevButton').prop('disabled', false);
                if (currentStep === numSteps - 1) {
                    // Reached the last step, hide the next button and show the finish button
                    $('#nextButton').hide();
                    $('#finishButton').show();
                }
            }
        });

        $('#prevButton').click(function() {
            if (currentStep > 0) {
                $('#step_' + selectedModules[currentStep]).hide();
                currentStep--;
                $('#step_' + selectedModules[currentStep]).show();
                $('#nextButton').show();
                $('#finishButton').hide();
                if (currentStep === 0) {
                    // Reached the first step, disable the previous button
                    $('#prevButton').prop('disabled', true);
                }
            }
        });
    }
});
