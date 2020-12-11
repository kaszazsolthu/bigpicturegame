let pictureArray = [
  {
    category: "Films",
    picture: "img/ET.jpg",
    answer: ["E.T.", "Yoda", "Diplodocus", "Old lady"],
    hint: "The one who phoned home.",
  },
  {
    category: "Films",
    picture: "img/badBoys.jpg",
    answer: ["Bad Boyz", "Snoop Dogg", "The Last Boy Scout", "The White House"],
    hint: "The name of the team created this game",
  },
  {
    category: "Legends",
    picture: "img/snowman.jpg",
    answer: [
      "Snowman",
      "Powdered sugar",
      "Christmas tree decoration",
      "Coconut flakes",
    ],
    hint: "Anthropomorphic snow sculpture.",
  },
  {
    category: "Films",
    picture: "img/adam_sandler.jpg",
    answer: ["Adam Sandler", "Jim Carrey", "Will Ferrell", "Rowan Atkinson"],
    hint: "He acted in the 50 First Dates.",
  },
  {
    category: "Films",
    picture: "img/bill_gates.jpg",
    answer: ["Bill Gates", "Elon Musk", "Soros György", "Steve Jobs"],
    hint: "He used to be the ritchest man in the world for a long time.",
  },
  {
    category: "Films",
    picture: "img/leany-gyongy-fulbevaloval.jpg",
    answer: [
      "Girl with pearl earrings",
      "Mona Lisa",
      "Venus of Milo",
      "Whistler's mother",
    ],
    hint: "The image is also known as the Turban Woman.",
  },
  {
    category: "Films",
    picture: "img/ejjeli-orjarat.jpg",
    answer: [
      "Night patrol",
      "The three Musketeers",
      "Attack of the Mamluks",
      "The Way of Pizarro",
    ],
    hint: "Rembrandt's most famous painting.",
  },
  {
    category: "Films",
    picture: "img/ejjeli-baglyok.jpg",
    answer: [
      "Night owls",
      "Night cafe",
      "Metropolitan Solitude",
      "New York Night",
    ],
    hint:
      "A painting by Edward Hopper, one of the most famous works of American painting.",
  },
  {
    category: "Films",
    picture: "img/back_to_the_future.jpg",
    answer: [
      "Back to the Future",
      "Home Alone",
      "Knight Rider",
      "Forrest Gumb",
    ],
    hint: "Michael J. Fox's most famous film.",
  },
  {
    category: "Films",
    picture: "img/Azay-Le-Rideau.png",
    answer: ["Azay-le-Rideau", "Versailles", "Chenonceau", "Windsor"],
    hint:
      "This Renaissance castle was built around 1518-1527 by King Francis I.",
  },
  {
    category: "Films",
    picture: "img/chambord.jpeg",
    answer: ["Chambord", "Windsor", "Sant’Angelo", "Chaumont"],
    hint:
      "You can find this castle close to the river of the Kings.  It is very famous for its towers on the roof.",
  },
  {
    category: "Films",
    picture: "img/St_Angelo.png",
    answer: ["St Angelo", "Scaligero", "Alcazar", "Tower"],
    hint:
      " It was built by Emperor Adriano to be the mausoleum of his family.  You can find it in the heart of the Boots.",
  },
];

//let randomNumber = Math.floor(Math.random() * pictureArray.length);
let goodAnswer;
// a felezőgombhoz kell
let halving = false;

// tömb véletlenszerű rendezése
function randomArray(array1) {
  let tmp;
  for (let i = 0; i < array1.length; i++) {
    let number = Math.floor(Math.random() * array1.length);
    tmp = array1[i];
    array1[i] = array1[number];
    array1[number] = tmp;
  }
  return array1;
}
let pictureSelect = function () {
  gamePause = false;
  setVisibility("nonvisible", "visible");
  messageDiv.style.display = "none";
  // a segítség elrejtése
  document.getElementById("hintText").innerHTML = "*Hint appears here*";
  // felező gomb resetelése
  halving = false;
  let selectedPicture = pictureArray[actualImage].picture;
  gridContainer.style.backgroundImage = "url(" + selectedPicture + ")";
  goodAnswer = pictureArray[actualImage].answer[0];
  //console.log(pictureArray[actualImage]);
  userPoints = gridRow[level] * gridColumn[level];
  results.innerText = "Your points: " + userPoints;
  let answerArray = pictureArray[actualImage].answer.slice();
  randomArray(answerArray);
 
  buttonsReset();
  btn1Button.innerText = answerArray[0];
  btn2Button.innerText = answerArray[1];
  btn3Button.innerText = answerArray[2];
  btn4Button.innerText = answerArray[3];
};
//console.log(actualImage);
pictureSelect();
btn1Button.onclick = answerCheck;
btn2Button.onclick = answerCheck;
btn3Button.onclick = answerCheck;
btn4Button.onclick = answerCheck;
function answerCheck() {
  if (gamePause == true) return;
  gamePause = true;
  if (this.innerText == goodAnswer) {
    actualImage++;
    //console.log(actualImage);
    totalPoints += userPoints;
    if (actualImage >= pictureArray.length) {
      gameEnd();
    }
    // ezek kivéve az ifből, hogy a játék végén is zöld legyen a jó gomb
    this.style.backgroundColor = "green";
    finalPoint.innerText = "Total poinst: " + totalPoints;
    if (actualImage < pictureArray.length) {
      setVisibility("visible", "nonvisible");
      messageDiv.innerHTML =
        "Congratulations! <br> You have complated the " +
        actualImage +
        ". level!";
      let messageButton = document.createElement("button");
      messageButton.innerText = "Next level!";
      messageButton.onclick = pictureSelect;
      messageDiv.appendChild(messageButton);
    }
  } else {
    gameOver();
  }
  setTimeout(function () {
    messageDiv.style.display = "block";
  }, 2500);
}
function gameOver() {
  messageDiv.innerHTML = "Game over! <br> Your final score is: " + totalPoints;
  messageDiv.style.color = "red";
  let messageButton = document.createElement("button");
  messageButton.innerText = "Try again!";
  messageButton.onclick = resetClock;
  messageDiv.appendChild(messageButton);
  storeData(userName, totalPoints);
  document.getElementById("toplist-container").innerHTML = toplistToHTML();
}
function resetClock() {
  startingMinutes = 2;
  startingSeconds = startingMinutes * 60;
  pictureSelect();
  userPoints = gridRow[level] * gridColumn[level];
  totalPoints = 0;
  finalPoint.innerText = "Total poinst: " + totalPoints;
  userPoints = gridRow[level] * gridColumn[level];
}
function setVisibility(oldClass, newClass) {
  let nonvisibleElements = document.querySelectorAll("." + oldClass);
  for (i = 0; i < nonvisibleElements.length; i++) {
    nonvisibleElements[i].className = newClass;
  }
}
function gameEnd() {
  messageDiv.innerHTML =
    "You have completed every level! <br> Your actual score is: " + totalPoints;
  messageDiv.style.color = "green";
  let messageButton = document.createElement("button");
  messageButton.innerText = "Try harder!";
  if (level < 2) {
    level++;
  }
  messageButton.onclick = gameStart;
  messageDiv.appendChild(messageButton);
  // a képek sorrendje legyen véletlenszerű a következő körben
  pictureArray = randomArray(pictureArray);
}
