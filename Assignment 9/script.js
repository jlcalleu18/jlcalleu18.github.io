console.log('Part A1');

function calTip(bill) {
    const bill1 = Number(bill);
    if (bill1 >= 50 && bill1 <= 300) {
        return bill1 * .15;
    } else {
        return bill1 * .20;
    }
}

console.log(`Tip of 100$ is ${calTip(100)}`);

const bills1 = new Array(125, 555, 44);
const tips1 = new Array(calTip(bills1[0]), calTip(bills1[1]), calTip(bills1[2]));
const total2 = new Array(bills1[0] + tips1[0], bills1[1] + tips1[1], bills1[2] + tips1[2]);
console.log(`Total from the bill ${bills1[0]} is ${total2[0]}`);
console.log(`Total from the bill ${bills1[1]} is ${total2[1]}`);
console.log(`Total from the bill ${bills1[2]} is ${total2[2]}`);


console.log('');
console.log('Part A2');
const john = {
        firstName: 'John',
        lastName: 'Willams',
        birthYear: 1998,
        // age: 2021 - this.birthYear,
        job: 'student',
        friends: ['Mike', 'Jack', 'Pitter'],
        hasDriveLicense: true,
        calAge: function() {
            this.age = 2021 - this.birthYear;
            return this.age;
        },
        getSummary: function() {
                return `${this.firstName} ${this.lastName} is ${this.calAge()} years old, his job is ${this.job}, and he ${this.hasDriveLicense ? `has`: `has not`} a driver's license.`
}
}
console.log(john.getSummary());

console.log('');
console.log('Part B');
const Lucas = {
    firstName: 'Lucas',
    lastName: 'Miller',
    mass: 78,
    height:1.69,
    calcBMI: function(){
        this.BMI = this.mass/(this.height * this.height);
        return this.BMI;
    }
}
const John = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height:1.95,
    calcBMI: function(){
        this.BMI = this.mass/(this.height * this.height);
        return this.BMI;
    }

}
Lucas.calcBMI() > John.calcBMI() ? 
console.log(`${Lucas.firstName} ${Lucas.lastName}'s BMI (${Lucas.calcBMI()}) is higher than ${John.firstName} ${John.lastName}'s BMI (${John.calcBMI()})`): console.log(`${John.firstName} ${John.lastName}'s BMI (${John.calcBMI()}) is higher than ${Lucas.firstName} ${Lucas.lastName}'s BMI (${Lucas.calcBMI()})`);


console.log('');
console.log('Part C');
const bills =[22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips =[];
const total = [];
for (let i = 0; i < bills.length; i++) {
    const tip = calTip(bills[i]);
    tips.push(tip);
    const total1 = tip + bills[i];
    total.push(total1);
}
console.log(tips);
console.log(total);