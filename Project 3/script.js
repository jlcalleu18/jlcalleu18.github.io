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
    img();
}

var score = 10;
const highscore = [0];

// function img() {
//     var image = document.createElement("IMG");
//     image.setAttribute("src", "images/high.png");
//     document.querySelector('low').appendChild(x);
// }





function checkNumber() {
    score--;
    console.log(score)
    const num = Number(text.value);
    console.log(num); // delete later
    if (num !== 0) {
        if (num === randomNum) {
            numGotIt.innerHTML = 'You got it!';
            checkNum.innerHTML = 'Correct Number!';
            resultNumber.innerHTML = num;
            if (highscore[0] < score) {
                highscore.push(score);
                highscore.shift();
                console.log(highscore);
            }
        } else if (num > randomNum) {
            checkNum.innerHTML = 'Too high';
        } else if (num < randomNum) {
            checkNum.innerHTML = 'Too Low';
        }
    } else {
        checkNum.innerHTML = 'Enter a Number';

    }
}