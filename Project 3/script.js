// document.getElementById().addEventListener("click", );

let text = document.getElementById("text_line");
let botton = document.getElementById("button");
boton.addEventListener("click", checkNumber);

function random() {
    var x = math.floor((math.random() * 100) + 1);
    return x;
}

// function randomnnumber() {
//     var int = document.getElementById().value;
// }

checkNumber(random());

function checkNumber(random) {
    if (text == random) {
        console.log('You got it')
            // displaytext("you got it")
    } else if (text > random) {
        console.log('too high')
            // displaytext("too high")
    } else if (text < random)
        console.log('too low')
        // displaytext("too low");
}





// document.getElementById().addEventListener("click");
// if (x == document.getElementById()) {
//     // displaytext("you got it")
// } else if (x > int) {
//     // displaytext("too high")
// } else if (x < int) displaytext("too low");