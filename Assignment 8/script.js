
// Part A
console.log('Part A')
const meal = 'lunch';
switch (meal) {
    case 'breakfast':
        console.log('coffe+bagle+Sandwich');
        break;
    case 'lunch':
        console.log('coffe+bagle+Sandwich');
        break;
    case 'Dinner':
        console.log('Pasa');
    default:
        console.log('No food');
        break;
}

// Part B1
console.log('Part B1')
function foodFor4(originalFood) {

    return originalFood * 4;
}

function timeFor4(originalTime) {

    return originalTime * 4;
}

function microwave(foodWeight, time, mode) {

    const food4 = foodFor4(Number(foodWeight));
    const time4 = timeFor4(Number(time));

    const redyToEat = `Your food weight is ${food4} for 4 persons and it will be heated for ${time4} mins under ${mode}`
    return console.log(redyToEat);
}

microwave('23', 20, 'reheat');

// Part B2.
console.log('Part B2')
const bill = 275;
const tip1 = bill * .15;
const tip2 = bill * .20;

bill >= 50 && bill <= 300 ? console.log(`The bill is ${bill} and the tip ${tip1}: total ${bill + tip1}`) : console.log(`The bill is ${bill} and the tip ${tip2}: total ${bill + tip2}`);


// Part C.
console.log('Part C')
function calcAverage(n1, n2, n3) {
    const sum = Number(n1) + Number(n2) + Number(n2);
    const avg = sum / 3;
    return avg;
}
function checkWinner() {
    const avgNets = calcAverage(44, 23, 71);
    const avgKnicks = calcAverage(65, 54, 49);
    if (avgNets > avgKnicks) {
        console.log(`Nets team beat Knicks team with a average of ${avgNets} vs ${avgKnicks}`);

    } else if (avgKnicks > avgNets) {
        console.log(`Knicks team beat to Nets team with a average of ${avgKnicks} vs ${avgNets}`);

    } else {
        console.log('Try again')
    }
}
checkWinner();

// Practice D
console.log('Part D');

function celsiusToFahrenheit(celsius) {
    Number(celsius);
    const fahrenheit = celsius * 9 / 5 + 32;
    const result = `${celsius}°C is equal to ${fahrenheit}°F`;
    return result;
}

function fahrenheitToCelsius(fahrenheit) {
    Number(fahrenheit);
    const celsius = (fahrenheit - 32) / (9 / 5);
    const result = `${fahrenheit}°F is equal to ${celsius}°C`;
    return console.log(result);
}
console.log(celsiusToFahrenheit(20));
console.log(fahrenheitToCelsius(23));