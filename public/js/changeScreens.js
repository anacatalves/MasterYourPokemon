//show body2 - onclick
let body1 = document.querySelector(".body1");
let body2 = document.querySelector(".body2");
let buttonSelect = document.querySelectorAll(".button-select");
let buttonExit = document.querySelector(".exit");

function toggleDetailScreen(showDetailScreen) {
    if(showDetailScreen) {
        body2.style.display = "block"
        body1.style.display = "none"
    } else {
        body1.style.display = "block"
        body2.style.display = "none"
    }
}

buttonSelect.forEach( (element) => {
    element.addEventListener('click', function() { toggleDetailScreen(true) })
})

buttonExit.addEventListener('click', function () { toggleDetailScreen(false) })

//Search bar - exit route
let exitSearch = document.querySelector(".undefined-btn");

function goBack() {
    window.history.back();
}

exitSearch.addEventListener('click', goBack);


// ANOTHER WAY TO DO IT:

/* function changeScreens() {
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

updateEventListeners(); */
