function showPoints() {
    results.innerText = "Your points: " + userPoints;
}


// felező
function helper1Click() {
    // ne lehessen mégegyszer felezni ugyanannál a képnél
    if(halving) return;
    // a pictureSelect függvényben falsére lesz állítva
    halving = true;
    let buttons = document.getElementsByClassName("option");
    let i = 0;
    // addig ismételjük, amíg két rossz választ nem találunk
    while(i < 2) {
        // választunk véletlenszerűen egy gombot
        let rnd = Math.floor(Math.random() * 4);
        // ha rossz válasz, megjelöljük
        if(buttons[rnd].innerText != goodAnswer && buttons[rnd].style.backgroundColor != 'red') {
            buttons[rnd].style.backgroundColor = 'red';
            i++;
        }
    }
    // pontlevonás - csak a fele pont marad
    userPoints = Math.round(userPoints * 0.5);
    showPoints();
}


// hint kiírása
function helper2Click() {
    // ezt vissza lesz állítva a pictureSelect függvényben
    document.getElementById('hintText').innerHTML = pictureArray[actualImage].hint;
    // pontlevonás - ötöt levonunk
    userPoints -= 5;
    if(userPoints < 0) userPoints = 0;
    showPoints();
}


// jó válasz megadása
function helper3Click() {
    let buttons = document.getElementsByClassName("option");
    for (let i = 0; i < buttons.length; i++) {
        if(buttons[i].innerText == goodAnswer) {
            buttons[i].style.backgroundColor = 'green';
        }
    }
    // pontlevonás - csak egy pont marad
    if(userPoints > 1) userPoints = 1;
    showPoints();
}


document.getElementById('helperBtn-1').onclick = helper1Click;
document.getElementById('helperBtn-2').onclick = helper2Click;
document.getElementById('helperBtn-3').onclick = helper3Click;