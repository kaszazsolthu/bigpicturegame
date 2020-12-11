let startingMinutes = 2;
let startingSeconds = startingMinutes * 60;
let clock = document.getElementById("countdown");

//setInterval(updateClock, 1000);

function updateClock() {
  if (gamePause == true) return;
  const minutes = Math.floor(startingSeconds / 60);
  let secounds = startingSeconds % 60;
  secounds = secounds < 10 ? "0" + secounds : secounds;
  clock.innerHTML = `${minutes}:${secounds}`;
  if (startingSeconds > 0) {
    startingSeconds--;
  } else {
    gameOver();
    messageDiv.style.display = "block";
    gamePause = true;
  }
}

