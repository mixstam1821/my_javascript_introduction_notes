var number = 10;
var string = "Hello, world!";
var boolean = true;
var array = [1, 2, 3];
var object = { key: "value" };

var a = 10; // Can be reassigned and redeclared
let b = 20; // Can be reassigned but not redeclared
const c = 30; // Cannot be reassigned or redeclared


var number = 10; // Number
var string = "Hello"; // String
var boolean = true; // Boolean
var nullValue = null; // Null
var undefinedValue; // Undefined

var array = [1, 2, 3]; // Array
var object = { key: "value" }; // Object
var functionObject = function() {}; // Function


var x = 10; // x is a number
x = "Hello"; // Now x is a string


var x = "10";
var y = "5";

var sum = x + y; // Concatenates strings: "105"
var difference = x - y; // Converts strings to numbers: 5


var x = 10;
var y = "Hello";

console.log(typeof x); // "number"
console.log(typeof y); // "string"



var name = "Mike";
var age = 29;

var message = `My name is ${name} and I am ${age} years old.`;
console.log(message); // "My name is Mike and I am 29 years old."


var text = "Hello, world!";

console.log(text.length); // 13
console.log(text.toUpperCase()); // "HELLO, WORLD!"
console.log(text.indexOf("world")); // 7
console.log(text.substring(0, 5)); // "Hello"



var fruits = ["Lemon", "Apricot", "Peach"];

console.log(fruits.length); // 3
console.log(fruits[0]); // "Lemon"
console.log(fruits.indexOf("Apricot")); // 1
fruits.push("Kiwi"); // Adds "Kiwi" to the end



var person = {
    name: "Mike",
    age: 29,
    isStudent: false
};

console.log(person.name); // "Mike"
console.log(person.age); // 29
console.log(person.isStudent); // false





var sum = 10 + 5;
var isGreaterThan = 10 > 5;
var result = (10 * 5) / 2;





var x = 10;
if (x > 5) {
    console.log("x is greater than 5");
} else {
    console.log("x is less than or equal to 5");
}



function greet(name) {
    console.log("Hello, " + name + "!");
}
greet("Mike");


// Arrow function
const add = (a, b) => a + b;
console.log(add(2, 3));







function alert() {
    console.log(this.age + ' years');
}
const myObj = {
    age: 24, 
    alert: alert
}
myObj.alert() // 24 years




function alert() {
    console.log(this.age + ' years');
}
const myObj = {
    age: 24, 
    alert: alert, 
    nestedObj: {
        age: 26, 
        alert: alert
    }
}
myObj.alert(); // 24 years
myObj.nestedObj.alert(); // 26 years



function alert() {
    console.log(this.age + ' years');
}
const myObj = {
    age: 24
}
alert.call(myObj); // 24 years



function giveAge(age) {
    this.age = age;
}
const bar = new giveAge(24);
console.log(bar.age); // 24



// It has Block Scope
{
    let name = 'MIchael Stamatis';
}


// It has Global Scope
const skyColor = 'blue';

{
    console.log(skyColor); // blue
}

function printSkyColor() {
    console.log(skyColor); // blue
}
printSkyColor();




for (let i = 0; i < 5; i++) {
    console.log(i);
}



let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}



let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);


const colors = ['red', 'green', 'blue'];
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}


const person = { name: 'Mike', age: 29 };
for (let key in person) {
    console.log(key + ': ' + person[key]);
}


const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
    console.log(number);
});




for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i); // Outputs: 0, 1, 2, 3, 4
}


for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue;
    }
    console.log(i); // Outputs: 0, 1, 3, 4
}


function calculateMean(numbers) {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum / numbers.length;
}

const numbers = [1, 2, 3, 4, 5];
console.log("Mean:", calculateMean(numbers)); // Output: 3




function calculateMedian(numbers) {
    const sortedNumbers = numbers.sort((a, b) => a - b);
    const middleIndex = Math.floor(sortedNumbers.length / 2);
    if (sortedNumbers.length % 2 === 0) {
        return (sortedNumbers[middleIndex - 1] + sortedNumbers[middleIndex]) / 2;
    } else {
        return sortedNumbers[middleIndex];
    }
}

const numbers = [1, 2, 3, 4, 5];
console.log("Median:", calculateMedian(numbers)); // Output: 3



function calculateMode(numbers) {
    const frequencyMap = {};
    numbers.forEach(num => {
        frequencyMap[num] = frequencyMap[num] ? frequencyMap[num] + 1 : 1;
    });
    let maxFrequency = 0;
    let modes = [];
    for (const num in frequencyMap) {
        if (frequencyMap[num] > maxFrequency) {
            maxFrequency = frequencyMap[num];
            modes = [parseInt(num)];
        } else if (frequencyMap[num] === maxFrequency) {
            modes.push(parseInt(num));
        }
    }
    return modes;
}

const numbers = [1, 2, 3, 3, 4, 4, 5];
console.log("Mode:", calculateMode(numbers)); // Output: [3, 4]




function calculateVariance(numbers) {
    const mean = calculateMean(numbers);
    const squaredDifferences = numbers.map(num => Math.pow(num - mean, 2));
    return calculateMean(squaredDifferences);
}

const numbers = [1, 2, 3, 4, 5];
console.log("Variance:", calculateVariance(numbers)); // Output: 2



function calculateStandardDeviation(numbers) {
    return Math.sqrt(calculateVariance(numbers));
}

const numbers = [1, 2, 3, 4, 5];
console.log("Standard Deviation:", calculateStandardDeviation(numbers)); // Output: 1.4142135623730951





