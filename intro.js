let pictureAreaArray = document.querySelectorAll(".pictureGallery");
let welcomeText = document.querySelector(".displayWelcome");
window.onclick = nonDisplay;
console.log(pictureAreaArray);
function nonDisplay() {
    console.log(pictureAreaArray.length);
    for (i = 0; i < pictureAreaArray.length; i++) {

        pictureAreaArray[i].className += " noDisplay";
        console.log(pictureAreaArray[i]);
    }
    welcomeText.className = "displayFlex";
    document.querySelector(".welcomeT").className = "welcomeText";
    console.log(welcomeText);
}

console.log("első időszámláló start");

let timeStart= Math.round(new Date());
timeActual=0
while(timeActual<timeStart+3600){
    timeActual= Math.round(new Date());
};


let bodyElement = document.querySelector(".bodyNonVisible");
console.log(bodyElement);
bodyElement.className = "bodyVisible";

console.log("második időszámláló start");

timeStart= Math.round(new Date());
timeActual=0
while(timeActual<timeStart+3600){
    timeActual= Math.round(new Date());
};

// nonDisplay();
