function showDietPlan() {
    // Get selected weight class and goal from dropdowns
    var weightClass = document.getElementById('weight-class').value;
    var goal = document.getElementById('goal').value;

    // Construct the page URL based on selections
    var dietPage = weightClass + '-' + goal + '.html';

    // Redirect to the correct diet page
    window.location.href = dietPage;
}
