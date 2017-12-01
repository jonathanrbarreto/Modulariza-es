//Ged Modal Element

var modal = document.getElementById('simplemodal');

//Get Open Modal Button

var modalbtn = document.getElementById('modalbtn');

//Get Close Button

var closebtn = document.getElementsByClassName('closebtn')[0];

//Listen for open click

modalbtn.addEventListener('click', openModal);

//Listen for close click

closebtn.addEventListener('click', closeModal);

//Listen for Outside Click

window.addEventListener('click', clickOutside);

//Function to open modal

function openModal () {
    modal.style.display = 'block';
}

//Function to close modal

function closeModal () {
    modal.style.display = 'none';
}

//Functio to close modal if outside

function clickOutside (e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}