function showSection(sectionId) {
    // Hide all sections
    var sections = document.getElementsByClassName('section');
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }
    // Show the selected section
    var selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

// Initially show the default section when the page loads
document.addEventListener("DOMContentLoaded", function() {
    showSection('aboutme'); // Change 'bio' to the ID of the default section you want to show
});