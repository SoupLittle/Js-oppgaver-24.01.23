// Oppgave 1
var num = prompt("Enter a number")

if (num > 0) {
console.log("The number is a positive.")
alert("The number is a positive.")
} else if (num < 0) {
console.log("The number is a negative.")
} else {
console.log("The number is a zero")}

// Oppgave 2
let number = 89

let remainder = (number % 2)

if ( remainder == 0){
    console.log(`${number} is even`)
} else{
    console.log(`${number} is odd`)
}

// Oppgave 3
let grade1 = 75;

if (grade1 >= 50) {
  console.log("The student passed the grade.");
} else {
  console.log("The student failed the grade.");
}


// Oppgave 4
let grade2 = 175;

if (grade2 < 0 || grade2 > 100) {
  console.log("Invalid grade, it should be between 0 and 100.");
} else if (grade2 < 50) {
  console.log("The student fails the grade.");
} else {
  console.log("The student passes the grade.");
}


// Oppgave 5
let dayNumber = 3;

if (dayNumber === 1) {
  console.log("Monday");
} else if (dayNumber === 2) {
  console.log("Tuesday");
} else if (dayNumber === 3) {
  console.log("Wednesday");
} else if (dayNumber === 4) {
  console.log("Thursday");
} else if (dayNumber === 5) {
  console.log("Friday");
} else if (dayNumber === 6) {
  console.log("Saturday");
} else if (dayNumber === 7) {
  console.log("Sunday");
} else {
  console.log("Invalid day number, it should be between 1 and 7.");
}

// Oppgave 6
let dayNumber2 = 6;

switch (dayNumber2) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day number, it should be between 1 and 7.");
    break;
}


// Oppgave 7
let num1 = 8;
let num2 = 4;
let operation;
let result;

let operations = ["+", "-", "*", "/"];
for (let i = 0; i < operations.length; i++) {
  operation = operations[i];
  switch (operation) {
    case "+":
      result = num1 + num2;
      console.log(`${num1} ${operation} ${num2} = ${result}`);
      break;
    case "-":
      result = num1 - num2;
      console.log(`${num1} ${operation} ${num2} = ${result}`);
      break;
    case "*":
      result = num1 * num2;
      console.log(`${num1} ${operation} ${num2} = ${result}`);
      break;
    case "/":
      result = num1 / num2;
      console.log(`${num1} ${operation} ${num2} = ${result}`);
      break;
    default:
      console.log("Invalid operator");
  }
}


// Oppgave 8
let a = 4;
let b = 6;

let message = a > b ? `${a} is greater than ${b}` : a < b ? `${a} is less than ${b}` : `${a} is equal to ${b}`;
console.log(message);


// Oppgave 9
let grade3 = 80;
let grade4 = 40;
let average = (grade3 + grade4) / 2;

if (average > 50) {
  console.log("Your grade: Passed");
} else {
  console.log("Your grade: Failed");
}


// Oppgave 10
let number2 = 9;

if (number % 3 === 0) {
  console.log(`${number2} can be divided by 3`);
} else {
  console.log(`${number2} cannot be divided by 3`);
}


// Oppgave 11
const c = window.prompt('Write a number')
if (c%5 == 0) { 
 console.log('The number can be divided by 5');
} else { console.log('The nnumber can not be divided by 5');}


// Oppgave 12
let number4 = 15;

if (number % 3 === 0 && number % 5 === 0) {
  console.log(`${number4} can be divided by both 3 and 5`);
} else {
  console.log(`${number4} cannot be divided by both 3 and 5`);
}


// Oppgave 13
let number5 = 15;

if (number % 3 === 0 || number5 % 5 === 0) {
  console.log(`${number5} can be divided by either 3 or 5`);
} else {
  console.log(`${number5} cannot be divided by either 3 or 5`);
}


// Oppgave 14
let num4 = 10;
let num5 = 5;
let num6 = 15;
let smallest;

if (num4 <= num5 && num4 <= num6) {
  smallest = num1;
} else if (num5 <= num4 && num5 <= num6) {
  smallest = num4;
} else {
  smallest = num6;
}
console.log(`The smallest number is: ${smallest}`);


// Oppgave 15
let letter = "a";

if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u" || letter === "A" || letter === "E" || letter === "I" || letter === "O" || letter === "U") {
  console.log(`${letter} is a vowel`);
} else {
  console.log(`${letter} is not a vowel`);
}

//Oppgave 16
let color = "red";
let text = "This text is red";

switch (color) {
  case "red":
    console.log(`%c${text}`, "color: red;");
    break;
  case "green":
    console.log(`%c${text}`, "color: green;");
    break;
  case "blue":
    console.log(`%c${text}`, "color: blue;");
    break;
  default:
    console.log(text);
}
