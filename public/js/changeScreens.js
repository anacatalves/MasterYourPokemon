//show body2 - onclick
let body1 = document.querySelector(".body1");
let body2 = document.querySelector(".body2");
let buttonSelect = document.querySelectorAll(".button-select");
let buttonExit = document.querySelectorAll(".exit");

function changeScreens() {
    if(body1.style.display == "block") {
        body1.style.display = "none"
    } 
    if (body2.style.display == "none") {
        body2.style.display = "block"
    }    
}
    
function backToMainScreen() {
    if (body2.style.display == "block") {
        body2.style.display = "none"
    }
    if (body1.style.display == "none") {
        body1.style.display = "block";
    }
}

//Since using querySelectorAll creates an array of 'buttons',
//we have to use forEach to apply the EventListeners to all butons.

function updateEventListeners() {
    buttonSelect.forEach( (element) => {
        element.addEventListener('click', changeScreens)
    })

    buttonExit.forEach((element) => {
        element.addEventListener('click', backToMainScreen)
    }) 
}

updateEventListeners();



//Another way to do it:

/* function toggleDetailScreen(showDetailScreen) {
    if(showDetailScreen) {
        body2.style.display = "block"
        body1.style.display = "none"
    } else {
        body1.style.display = "block"
        body2.style.display = "none"
    }
} */

// and add onclick events on the buttons html:
// true for the arrow, false for the exit.