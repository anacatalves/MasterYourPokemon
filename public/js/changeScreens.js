//show body2 - onclick
let body1 = document.querySelector(".body1");
let body2 = document.querySelector(".body2");
let buttonSelect = document.querySelector(".button-select");
let buttonExit = document.querySelector(".exit");


function changeScreens() {
    if (body1.style.display == "block") {
        body1.style.display = "none"
    }
    if (body2.style.display == "none") {
        body2.style.display = "block"
    }
}
buttonSelect.addEventListener('click', changeScreens);

function backToMainScreen () {
    if (body2.style.display == "block") {
        body2.style.display = "none"
    }
    if (body1.style.display == "none") {
        body1.style.display = "block";
    }
}
buttonExit.addEventListener('click', backToMainScreen);



