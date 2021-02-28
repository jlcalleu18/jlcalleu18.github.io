let text = document.getElementById("text_line");
let button = document.getElementById("button");
button.addEventListener("click", checkNumber);
var play = document.getElementById("play");
play.addEventListener("click", reset);

let numGotIt = document.getElementById("numGotIt");
let checkNum = document.getElementById("checkNum");
let resultNumber = document.getElementById("resultNumber");


let randomNum = 0;

function reset() {
    var remove1 = text.value = '';
    score = 10;
    randomNum = Math.trunc(Math.random() * 100) + 1;
    console.log(randomNum); // delete later
    Getimg();
}

var score = 10;
const highscore = [0];



function Getimg(src) {
    let img = document.getElementById('high');
    img.src = src;
}

function checkNumber() {
    score--;
    console.log(score)
    const num = Number(text.value);
    console.log(num); // delete later
    if (num !== 0) {
        if (num === randomNum) {
            numGotIt.innerHTML = 'You got it!';
            checkNum.innerHTML = 'Correct Number!';
            Getimg("/images/win.png");
            resultNumber.innerHTML = num;
            if (highscore[0] < score) {
                highscore.push(score);
                highscore.shift();
                console.log(highscore);
            }
        } else if (num > randomNum) {
            checkNum.innerHTML = 'Too high';
            Getimg("/images/high.png");
        } else if (num < randomNum) {
            checkNum.innerHTML = 'Too Low';
            Getimg("/images/low.png");
        }
    } else {
        checkNum.innerHTML = 'Enter a Number';
        Getimg("/images/high.png");

    }
}