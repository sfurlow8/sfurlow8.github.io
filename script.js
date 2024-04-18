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

// function showDetails(projectId) {
//     var modal = document.getElementById('modal');
//     var modalContent = document.getElementById('modal-content');
//     var modalOverlay = document.getElementById('modal-overlay');

//     // Get project details
//     var projectDetails = document.getElementById(projectId).innerHTML;

//     // Display modal with project details
//     modal.classList.add('show');
//     modalOverlay.style.display = 'block';
//     modalContent.innerHTML = projectDetails;
// }

// function hideDetails() {
//     var modal = document.getElementById('modal');
//     var modalOverlay = document.getElementById('modal-overlay');

//     modal.classList.remove('show');
//     modalOverlay.style.display = 'none';
// }

// function closeOverlay() {
//     var modal = document.getElementById('modal');
//     var overlay = document.getElementById('overlay');
    
//     modal.style.display = 'none';
//     overlay.style.display = 'none';
// }

// // Assuming you have a modal close functionality
// document.querySelector('.close-button').addEventListener('click', function() {
//     document.getElementById('projectModal').style.display = "none";
// });

// Get all project boxes
var projectBoxes = document.querySelectorAll('.project');

// Add click event listener to each project box
projectBoxes.forEach(function(projectBox) {
    projectBox.addEventListener('click', function() {
        // Get project details from the clicked project box
        var projectDetails = projectBox.querySelector('.project-content').innerHTML;
        
        // Display modal with project details
        showDetails(projectDetails);
    });
});

// Function to display modal with project details
function showDetails(projectDetails) {
    var modal = document.getElementById('modal');
    var overlay = document.getElementById('overlay');
    var modalContent = document.getElementById('modal-content');

    modal.style.display = 'block';
    overlay.style.display = 'block';
    modalContent.innerHTML = projectDetails;
}

// Function to close modal and overlay
function hideDetails() {
    var modal = document.getElementById('modal');
    var overlay = document.getElementById('overlay');

    modal.style.display = 'none';
    overlay.style.display = 'none';
}