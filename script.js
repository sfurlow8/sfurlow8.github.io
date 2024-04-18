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

// // Get all project boxes
// var projectBoxes = document.querySelectorAll('.project');

// // Add click event listener to each project box
// projectBoxes.forEach(function(projectBox) {
//     projectBox.addEventListener('click', function() {
//         // Get project details from the clicked project box
//         var projectDetails = projectBox.querySelector('.project-content').innerHTML;
        
//         // Display modal with project details
//         showDetails(projectDetails);
//     });
// });

// // Function to display modal with project details
// function showDetails(projectDetails) {
//     var modal = document.getElementById('modal');
//     var overlay = document.getElementById('overlay');
//     var modalContent = document.getElementById('modal-content');

//     modal.style.display = 'block';
//     overlay.style.display = 'block';
//     modalContent.innerHTML = projectDetails;
// }

// // Function to close modal and overlay
// function hideDetails() {
//     var modal = document.getElementById('modal');
//     var overlay = document.getElementById('overlay');

//     modal.style.display = 'none';
//     overlay.style.display = 'none';
// }

// var clickableDivs = document.querySelectorAll('.project');
// var modal = document.getElementById("myModal");
// var modalContent = document.getElementById("modalContent");

// // Add click event listener to each div
// clickableDivs.forEach(function(div) {
//     div.addEventListener('click', function() {
//         var content = div.getAttribute('data-content');
//         showModal(content);
//     });
// });

// // Show the modal with specified content
// function showModal(content) {
//     modalContent.innerHTML = content;
//     modal.style.display = "block";
// }

// // Close the modal when the close button or outside of the modal is clicked
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
// document.getElementsByClassName("close")[0].onclick = function() {
//     modal.style.display = "none";
// }

const open_coma = document.getElementById('coma');
const modal_container_coma = document.getElementById('modal-container-coma');
const close_coma = document.getElementById('close-coma');

open_coma.addEventListener('click', () => {
    modal_container_coma.classList.add('show');
});

close_coma.addEventListener('click', () => {
    modal_container_coma.classList.remove('show');
});

const open_yeast = document.getElementById('yeast');
const modal_container_yeast = document.getElementById('modal-container-yeast');
const close_yeast = document.getElementById('close-yeast');

open_yeast.addEventListener('click', () => {
    modal_container_yeast.classList.add('show');
});

close_yeast.addEventListener('click', () => {
    modal_container_yeast.classList.remove('show');
});

const open_pd = document.getElementById('pd');
const modal_container_pd = document.getElementById('modal-container-pd');
const close_pd = document.getElementById('close-pd');

open_pd.addEventListener('click', () => {
    modal_container_pd.classList.add('show');
});

close_pd.addEventListener('click', () => {
    modal_container_pd.classList.remove('show');
});

const open_dataeng = document.getElementById('dataeng');
const modal_container_dataeng = document.getElementById('modal-container-dataeng');
const close_dataeng = document.getElementById('close-dataeng');

open_dataeng.addEventListener('click', () => {
    modal_container_dataeng.classList.add('show');
});

close_dataeng.addEventListener('click', () => {
    modal_container_dataeng.classList.remove('show');
});

const open_tumor = document.getElementById('tumor');
const modal_container_tumor = document.getElementById('modal-container-tumor');
const close_tumor = document.getElementById('close-tumor');

open_tumor.addEventListener('click', () => {
    modal_container_tumor.classList.add('show');
});

close_tumor.addEventListener('click', () => {
    modal_container_tumor.classList.remove('show');
});