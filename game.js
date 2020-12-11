
let messageDiv = document.querySelector(".message");
let nameSendBtn = document.querySelector("#nameSendBtn");
let btn1Button = document.querySelector("#btn1");
let btn2Button = document.querySelector("#btn2");
let btn3Button = document.querySelector("#btn3");
let btn4Button = document.querySelector("#btn4");
let userName;

function saveUserName() {
  userName = document.getElementById("nameInputField").value;
  document.querySelector("#cover").style.display = "none";
  document.querySelector("#userNameContainer").innerHTML = userName;
  gamePause = false;
  setInterval(updateClock, 1000);
}
nameSendBtn.onclick = saveUserName;

let gridRow = [4, 5, 6];
let gridColumn = [4, 5, 6];
let level = 0;
let actualImage = 0;

// miközben ott a message ablak, ne lehessen kattintani
let gamePause = true;

let numberOfClicks = 0;
let userPoints = gridRow[level] * gridColumn[level];
let totalPoints = 0;
let time = 20; //sec
let timeSec = document.querySelector("#time");


function divClick() {
  if (this.className == "visible") {
    numberOfClicks++;
    if (userPoints > 0) userPoints--;

    results.innerText = "Your points: " + userPoints;
  }
  this.className = "nonvisible";
}

// ez két helyen is szerepelt, kiszerveztem függvénybe
function buttonsReset() {
  let buttons = document.getElementsByClassName("option");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.backgroundColor = "";
  }
}

const gridContainer = document.querySelector(".grid-container");
let results = document.querySelector("#results");
let finalPoint = document.querySelector("#final-point");
results.innerText = "Current points: " + userPoints;
finalPoint.innerText = "Total poinst: " + totalPoints;


gameStart();
function gameStart() {
  // kezdjük az első képpel
  actualImage = 0;
  // ha volt előző kör, akkor van egy eltüntetendő ablak
  messageDiv.style.display = "none";
  // ha volt előző kör, a gomb zöld maradt
  buttonsReset();
  gridContainer.innerHTML = "";
  // a következő két sor is a függvényen belülre kellett
  gridContainer.style.gridTemplateColumns =
    "repeat(" + gridColumn[level] + ",1fr)";
  gridContainer.style.gridTemplateRows = "repeat(" + gridRow[level] + ",1fr)";
  for (i = 0; i < gridRow[level] * gridColumn[level]; i++) {
    let divElement = document.createElement("div");
    divElement.className = "visible";
    divElement.onclick = divClick;
    gridContainer.appendChild(divElement);
  }
  gamePause = false;
}

