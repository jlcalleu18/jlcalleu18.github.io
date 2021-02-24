let user1 = 'Lucas';
let lucasWeight = 78;
let lucasHeight = 1.69;

let user2 = 'John'
let johnWeight = 95;
let johnHeight = 1.88;

let BMILucas = lucasWeight /(lucasHeight * lucasHeight);
let BMIJohn = johnWeight /(johnHeight * johnHeight);

let lucasHigherBMI = `${user1} BMI ${BMILucas} is higher that ${user2} BMI ${BMIJohn} `;
 let result1 = user1 + ' BMI is '+BMILucas;
 let result2 = `${user2}  BMI is ${BMIJohn}`;

console.log("Part A");
console.log(result1);
console.log(result2);
console.log(lucasHigherBMI);

// --------------Part B-------------
console.log("");
console.log("Part B");
let celsius = 30;
let fahrenheit = celsius * 9/5 + 32;
let result = `${celsius} Degrees Celsius is equal to ${fahrenheit} Degrees Fahrenheit`;
console.log(result);

let fahrenheit1 = 20;
let celsius1 = (fahrenheit1 - 32)/(9/5);
let results = `${fahrenheit1} Degrees Fahrenheit is equal to ${celsius1} Degrees Celsius`;

console.log(results);

// --------------Part C-------------
console.log("");
console.log("Part C");

// const netsAverage = (96+108+89)/3;
// const knicksAverage = (88+91+110)/3;
const netsAverage = (97+112+101)/3;
const knicksAverage = (109+95+123)/3;
// const knicksAverage = (109+95+106)/3;

console.log(`Nets Team Average is ${netsAverage}`);
console.log(`Knicks Team Average is ${knicksAverage}`);

if (netsAverage > knicksAverage &&  netsAverage >= 100) {
    console.log('Nets team won a Trophy!');
}else if (knicksAverage > netsAverage &&  knicksAverage >=100) {
    console.log('Knicks team won a Trophy!');
    
}else if (netsAverage > knicksAverage) {
    console.log(`Nets team beat Knicks team with a average of ${netsAverage}`);
    
} else if (knicksAverage > netsAverage) {
    console.log(`Knicks team beat to Nets team with a average of ${knicksAverage}`);
    
}else if (knicksAverage == netsAverage) {
    console.log('There is a draw')
}else{
    console.log('Try again')
}
