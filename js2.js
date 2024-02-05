// Variable

var name = "Nikitaras";
console.log(name);

//Prompt

var age = prompt("Enter Your Age ?");
console.log("Entered Age: ",age);


// Excercise, swap variable

var a = 10;
var b = 11;

// Swap these variable without create a new variable
// Also you cant write like a = 11 or b = 10 like that..

// Ans

a = a + b;
b= a-b;
a= a-b;

console.log("Value of a:",a);
console.log("Value of b:",b);


// STRING

// string concatenation

console.log("My name is" + "Nikitaras.");
console.log("My name is" + " " + "Tourkofagos.")

var stringOne = "Nikitaras";
var stringTwo = "Tourkofagos";

// alert(stringOne+" "+stringTwo+ ": This is a string.");

//String length.

var myName = "fgdsafgrd gsvsgrf fsbgsfbg sgfrsgvbfbrf edgvsdfgvsd ";
console.log("Length of my name: " + myName.length);
console.log("Length of my name: ",myName.length); // after use " , " the length is in a int format not in string format.


// Excercise: Make little program that will count your input message and print your string length left from 140 characters.

var myMSG = "I am a github user."; //use alert for input
console.log("Your message: ",myMSG,"has ",myMSG.length," character. left character: ",140 - myMSG.length); // you can alert it also.

// Slice function

var name = "Tourkofagos";
// 1st index is 0 not 1.
// slice(start: int, end: int)
console.log(name.slice(0,10))
console.log(name.slice(0,2))
console.log(name.slice())

// Challenge

// cut down the rest characters of the paragraph if it has more than 140 characters.

var paragraph = "Etiam dignissim diam quis enim. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Arcu cursus vitae congue mauris rhoncus aenean. Dignissim cras tincidunt lobortis feugiat vivamus. Sed velit dignissim sodales ut eu. In pellentesque massa placerat duis ultricies. Malesuada proin libero nunc consequat interdum varius. Consectetur lorem donec massa sapien faucibus et molestie. Augue mauris augue neque gravida in fermentum et sollicitudin. Sit amet volutpat consequat mauris nunc congue. Morbi tincidunt augue interdum velit euismod in pellentesque massa placerat. Nulla facilisi nullam vehicula ipsum a. Fermentum iaculis eu non diam phasellus vestibulum. Volutpat odio facilisis mauris sit amet massa vitae tortor condimentum."; // use prompt for get input from user.

var final_paragraph = (paragraph.slice(0,140));

console.log("Final paragraph: ",final_paragraph);

// toUpperCase()

var word = "Nikitaras";
console.log(word.toUpperCase());
word = word.toUpperCase();

//toLowerCase()

console.log(word.toLowerCase());
word = word.toLowerCase();





// Basic arithmetic and modulo operators

var num_1 = 10;
var num_2 = 5;

console.log(num_1+num_2);
console.log(num_1*num_2);
console.log(num_1/num_2);
console.log(num_1**num_2); //10 to the power 5.
console.log(num_1%num_2); //remainder, modulo

// precidence. 

console.log(1+3*5); // result: 16
console.log((1+3)*5); // result: 20

// excercise: dog age to human age converter.

// formula: human age = (dog age - 2) x 4 + 21

var dog_age = 18;
console.log("Human age: ",(dog_age-2)*4+21);

// increment, decrement
// 1st assigns then increment. check quiz row: 35
num_1++;
console.log(num_1)
num_1--;
console.log(num_1)

// short hand method

// num_1 = num_1 + num_2; same as num_1 += num_2;

// Quiz

// What does y equal ?

var x = 3;
var y = x++;

y += 1;


//Ans

console.log(y)

// 5 insted of 4 because when we write y = x++ , y will assigned as y = x then x increment with +1;






// Random number generation

// Math.random() function will generate 16 decimal place number.
// The value always in between 0 and 1.
var randomNum = Math.random();
console.log(randomNum);

// Create a dice game

function rollDice(){
	return Math.floor((Math.random()*6)+1) ;
	// as we multiply it with 6, it will generate a number between 0 & 5. Then we will add 1 to generate number b/w 1 & 6.

}

console.log(rollDice())


// Create love calculator


function loveCalc(){

	var p1 = prompt("Enter your name.");
	var p2 = prompt("Enter your partner name.");

	return ("Love between " + p1 + " and "+ p2 +" is " + Math.floor((Math.random()*100)+1) + "%");

}

// var love = loveCalc();
console.log(love)







// If-Else Conditionals and Logic

/*

if (condition){
	//code
}else{
	//code
}

*/
var num = 27;
// var num = prompt("Enter number: ");

if (num%2==0) {
	console.log(`${num} is even`)
} else {
	console.log(`${num} is odd`)
}


// Excercise, Authenticate system

// var userPass = parseInt(prompt("Enter Password"));
var userPass = 23445;
const correctPass = 244688;


if (userPass==correctPass) {
	console.log("Woo! Correct Password.");
}else {
	console.log("Wrong Password, Fake user!")
}




// Comparators and equality


var a = 2;
var b = 2;
var c = "chintu";
var d = "2";

console.log(a==b); //true
console.log(a==c); //false

console.log(a===b); //true
console.log(a===c); //false

console.log(a===d); //false
console.log(a==d); //true


// Comparators

if (a&&b==2) {
	console.log("A and B equals to 2");
}

if (a||c==2) {
	console.log("One of the variable has the value 2");
}

if (a&&b!=1) {
	console.log("None of these variable equal to 1");
}

if (a||b!=1) {
	console.log("Any of the variable is not equal to 1");
}


function isLeap(year) {

	if (year%4==0) {
		if (year%100==0) {
			if (year%400==0) {
				console.log("Leap Year.")
			}else {
				console.log("Not Leap Year.")
			}

		}else {
			console.log("Leap Year.")
		}

	}else {
		console.log("Not Leap Year.");
	}
	
}

isLeap(2100);










// print name 10 times.

for(let i=0;i<10;i++){
	// console.log('Subhranshu');
}


// Fibonacci challenge

function fibonacci(n) {
	var op_array = [];
	if (n===0) {
		op_array = [];
	}
	else if (n===1) {
		op_array = [0];
	}
	else if (n===2) {
		op_array = [0,1];
	}
	else if (n>2) {
		op_array = [0,1];
		for(let i=2;i<n;i++){
			op_array.push(op_array[op_array.length-2]+op_array[op_array.length-1]);
		}
	}
	return op_array;
}

// console.log(fibonacci(6))









// Passing function as argument

function calculator(num1,num2,func){
	return func(num1,num2);
}

function add(num1,num2) {
	return num1+num2;
}

console.log(calculator(1,2,add)) // add

function divide(num1,num2) {
	return num1/num2;
}

console.log(calculator(2,3,divide)); // divide

function multiply(num1,num2) {
	return num1*num2;
}

console.log(calculator(2,6,multiply)); // multiply

function subtract(num1,num2) {
	return num1-num2;
}

console.log(calculator(3,5,subtract)); // subtract










// How a event listner works??

function ownAddEventListner(typeofEvent,callbackFunction){

	var eventThatOccur = {
		eventType: "keypress",
		key: "S",
		durationPress: 3
	}

	if (eventThatOccur.eventType === typeofEvent) {
		callbackFunction(eventThatOccur);
	}
}

ownAddEventListner("keypress",function(e){
	console.log(e)
});









// promise

const ingredients = ["vegetables","salt","rice"];

const myPromise = new Promise(function(resolve,reject){
    if(ingredients.includes("vegitables")&& ingredients.includes("salt")){
        resolve({value:"fried rice ready."})
    }else{
        reject(new Error("ingredients not available in kitchen."));
    }
});


myPromise.then((status)=>{
    console.log("Status: "+status.value);
},(error)=>{
    console.log(error);
})








