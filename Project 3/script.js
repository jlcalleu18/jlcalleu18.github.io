let text = document.getElementById("text_line");
let button = document.getElementById("button");
button.addEventListener("click", checkNumber);

var play = document.getElementById("play");
play.addEventListener("click", reset);

let randomNum = 0;

function reset() {
    var remove1 = text.value = '';
    score = 10;
    randomNum = Math.trunc(Math.random() * 100) + 1;
    console.log(randomNum); // delete later
}

var score = 10;
const highscore = [0];

function checkNumber() {
    score--;
    console.log(score)
    const num = Number(text.value);
    console.log(num); // delete later
    if (num !== 0) {
        if (num === randomNum) {
            console.log('You got it');
            if (highscore[0] < score) {
                highscore.push(score);
                highscore.shift();
                console.log(highscore);
            }
        } else if (num > randomNum) {
            console.log('Too high');
        } else if (num < randomNum) {
            console.log('Too Low');
        }
    } else {
        console.log('Enter a Number');
    }
}