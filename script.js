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
    showSection('aboutme');
});


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

const open_synthpop = document.getElementById('synthpop');
const modal_container_synthpop = document.getElementById('modal-container-synthpop');
const close_synthpop = document.getElementById('close-synthpop');

open_synthpop.addEventListener('click', () => {
    modal_container_synthpop.classList.add('show');
});

close_synthpop.addEventListener('click', () => {
    modal_container_synthpop.classList.remove('show');
});

const open_scorer = document.getElementById('scorer');
const modal_container_scorer = document.getElementById('modal-container-scorer');
const close_scorer = document.getElementById('close-scorer');

open_scorer.addEventListener('click', () => {
    modal_container_scorer.classList.add('show');
});

close_scorer.addEventListener('click', () => {
    modal_container_scorer.classList.remove('show');
});