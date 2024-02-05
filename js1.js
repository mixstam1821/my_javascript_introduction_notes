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




