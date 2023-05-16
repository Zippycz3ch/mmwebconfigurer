$(document).ready(function() {
    var selectedModules = localStorage.getItem('selectedCheckboxes');
    if (selectedModules) {
        selectedModules = JSON.parse(selectedModules);
        var moduleStepsHtml = '';

        for (var i = 0; i < selectedModules.length; i++) {
            var moduleId = selectedModules[i];
            var stepHtml = '<div id="' + moduleId + '" class="module-step" style="display: none;">';
            stepHtml += '<h3>' + moduleId + '</h3>';
            // Add the form fields or configuration options for the module
            // ...
            stepHtml += '</div>';
            moduleStepsHtml += stepHtml;
        }

        $('#moduleSteps').html(moduleStepsHtml);
        $('#' + selectedModules[0]).show();

        var currentStep = 0;
        var numSteps = selectedModules.length;

        $('#nextButton').click(function() {
            console.log('Next button clicked');
            if (currentStep < numSteps - 1) {
                $('#' + selectedModules[currentStep]).hide();
                currentStep++;
                $('#' + selectedModules[currentStep]).show();
                $('#prevButton').prop('disabled', false);
                if (currentStep === numSteps - 1) {
                    // Reached the last step, hide the next button and show the finish button
                    $('#nextButton').hide();
                    $('#finishButton').show();
                }
            }
        });

        $('#prevButton').click(function() {
            console.log('Previous button clicked');
            if (currentStep > 0) {
                $('#' + selectedModules[currentStep]).hide();
                currentStep--;
                $('#' + selectedModules[currentStep]).show();
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
