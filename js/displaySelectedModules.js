$(document).ready(function() {
    var selectedModules = localStorage.getItem('selectedCheckboxes');
    if (selectedModules) {
        selectedModules = JSON.parse(selectedModules);
        var outputText = "Selected Modules: " + selectedModules.join(", ");
        $('#selectedModulesOutput').text(outputText);
        console.log("Selected Modules:", selectedModules);
    } else {
        $('#selectedModulesOutput').text("No modules selected");
        console.log("No modules selected");
    }
});
