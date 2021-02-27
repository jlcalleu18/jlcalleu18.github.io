let text = document.getElementById("text_line");
let button = document.getElementById("button");
button.addEventListener("click", checkNumber);

// let play = document.getElementById("play");
// play.addEventListener("click", )
function random() {
    let x = Math.trunc(Math.random() * 100) + 1;
    return x;
}

const random1 = random();
console.log(random1); // delete later
var score = 10;

const highscore = [0];

function checkNumber() {
    score--;
    console.log(score)
    const num = Number(text.value);
    console.log(num); // delete later
    if (num !== 0) {
        if (num === random1) {
            console.log('You got it');
            if (highscore[0] < score) {
                highscore.push(score);
                highscore.shift();
                console.log(highscore);
            }
        } else if (num > random1) {
            console.log('Too high');
        } else if (num < random1) {
            console.log('Too Low');
        }
    } else {
        console.log('Enter a Number');
    }
}

function checkHighscore() {

}