let text = document.getElementById("text_line");
let button = document.getElementById("button");
button.addEventListener("click", checkNumber);
var play = document.getElementById("play");
play.addEventListener("click", reset);

let numGotIt = document.getElementById("numGotIt");
let resultNumber = document.getElementById("resultNumber");
let checkNum = document.getElementById("checkNum");
let sc = document.getElementById("sc");
let Highsc = document.getElementById("Highsc");

let randomNum = 0;

function reset() {
    var remove1 = text.value = '';
    score = 10;
    randomNum = Math.trunc(Math.random() * 100) + 1;
    console.log(randomNum); // delete later
    sc.innerHTML = '';
}

function Getimg(src) {
    let img = document.getElementById('high');
    img.src = src;
}
reset();
var score = 10;
const highscore = [0];

function checkNumber() {
    score--;
    console.log(score)
    sc.innerHTML = score;
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
                Highsc.innerHTML = highscore;

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
        Getimg("/images/Error1.png");

    }
}