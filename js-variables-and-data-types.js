// console
// console.log("Hello");

// ! variables

/*
 variables are container for data
name = "Muhammad Atif"; // string
age = "age"; // ineger
price = "100.50"; // dacimal
isFolow = false; // bolen
x = null; // that means there issn't any value "empty"
y = undefined; // that means not spacific yet
console.log(name, age, price);

but we have to used let var or const before variable names

let name = "Muhammad Atif";


after ES6 we don't used var now in javascript

var: variable can be re-declared & updated. a global scope variable.
let: variable cannot be re-declared but can be updated. a block scope variable.
const: variable can not be re-declared or updated. a block scope variable.


let and const are block element

*/

// ! Data types
// ? Primitive
/*
we have 7 primitive data types
Number, String, Boolean, Undefined, Null, BigInt, Symbol 
we can check the data types using typeof keyword
let age = 30;
console.log(typeof age);
*/

// ? Non-Primitive
/*
objects

its is a collections of values 

arrays,functions (object sub category)

const student = {
  name: "Muhammad Atif",
  age: 29,
  cgpa: 8.2,
  isPass: true,
};

the way to get value from object //
console.log(student["name"]);
console.log(student.isPass);

 assign a new value in object //
student["lastName"] = "Muhammad Ajmal";

update a value from object //
student["age"] = student["age"] + 1;

we can update object key value even if object variable is const //

*/
// ! Operators and condinoal statments

// ? Operators

/*

used to perform some operation on data 

*/

// ? Arithmetic operators

// let a = 5;
// let b = 2;
// console.log("a = ", a, "b = ", b);
// console.log("a + b = ", a + b);
// console.log("a - b = ", a - b);
// console.log("a * b = ", a * b);
// console.log("a / b = ", a / b);

// ? Modulus

// console.log("a % b = ", a % b);

// ?Exponentiation

// console.log("a ** b = ", a ** b);

//these operators works on 2 operands (means its required 2 values to give result)

// ? Unary operators

// ? Increment
// sign++ (means a + 1)

// let a = 5;
// let b = 2;

// a = a + 1; // 1st way

// a++; // short way

//console.log(a);

// ? Decrement

//sign-- (means a - 1)

// let a = 5;
// let b = 2;

// a = a - 1; // 1st way

// a--; // short way

// console.log(a);

// ? post Increment
// a++ (bad main)

// let a = 5;
// console.log("a++", a++);

// ? pre Increment
// ++a (Phlay)
// let a = 5;
// console.log("++a", ++a);

// ? assignment operators

// in javascript values gose from right side to left side.

// let a = 5;
// let b = 2;
// a += 4; // a = a + 4
// a -= 4; // a = a - 4
// a *= 4; // a = a * 4
// a /= 4; // a = a / 4
// a %= 4; // a = a % 4
// a **= 4; // a = a ** 4
// console.log("a =", a);

// ? comparison operators
// we used this to compare 2 values
// this will checked the value
// ! equal to
// sign ==
// let a = 5;
// let b = 2;
// console.log("a == b", a == b);
// ! Not equal to
// sign !=
// let c = 5;
// let d = 2;
// console.log("a is not equal to b", a != b);

// javascript automatically convert string to numbers and then compare with other variable.
// !  but in some times we don't want string to convert into number so we used strict version comparison operators
// this will checked the value and data type is well

// sign ===
// sign !==

// ! Greater than

// let a = 5;
// let b = 2;

// console.log("a > b", a > b);

// ! less than

// let a = 5;
// let b = 2;

// console.log("a < b", a < b);
// ! less than equal to

// let a = 5;
// let b = 5;

// console.log("a <= b", a <= b);
// ! Greater than equal to

// let a = 6;
// let b = 5;

// console.log("a >= b", a >= b);

// ? logical operators

// ! logical AND

// we used this if both conditions are true sign &&

// let a = 6;
// let b = 5;

// let cond1 = a > b;
// let cond2 = a === 6;

// console.log("cond1 && cond2 = ", cond1 && cond2);

// ! logical OR

// we used this if from both conditions one is gose true sign ||

// let a = 6;
// let b = 5;

// let cond1 = a < b;
// let cond2 = a === 6;

// console.log("cond1 || cond2 = ", cond1 || cond2);

// ! logical NOT

// we use this to reverse the condition sign !

// let a = 6;
// let b = 5;

// let cond1 = a < b;
// console.log("cond1 = ", !cond1);

// ? ternary Operators

// its works on 3 operands sign ? :
// its a short way to write if else or compact

let age = 25;
let result = age >= 18 ? "adult" : "not adult";
console.log(result);

// ? Conditional Statements

// ! IF

// example 1

// let age = 25;

// if (age > 18) {
//   console.log("You can vote");
// }

// example 2

// let mode = "dark";
// let color;

// if (mode === "dark") {
//   color = "black";
// }
// if (mode === "light") {
//   color = "white";
// }

// console.log(color);

// ! IF ELSE

// let mode = "dark";
// let color;

// if (mode === "dark") {
//   color = "black";
// } else {
//   color = "white";
// }

// console.log(color);

// ! ELSE IF

// 1st if condition is checked then we can use else if after that else

// let mode = "dark";
// let color;

// if (mode === "dark") {
//   color = "black";
// } else if (mode === "blue") {
//   color = "blue";
// } else if (mode === "green") {
//   color = "green";
// } else {
//   color = "white";
// }

// ! ODD or EVEN

// let num = 10;

// if (num % 2 === 0) {
//   console.log(num, "is even");
// } else {
//   console.log(num, "is odd");
// }

// Practice 1

// let number = prompt("enter a number");
// if (number % 5 === 0) {
//   console.log(number, "is a multiple of 5 ");
// } else {
//   console.log(number, "is not a multiple of 5 ");
// }

// Practice 2
// let score = prompt("Enter your score between (0 - 100):");
// let grade;

// if (score >= 90 && score <= 100) {
//   grade = "A";
// } else if (score >= 70 && score <= 89) {
//   grade = "B";
// } else if (score >= 60 && score <= 69) {
//   grade = "C";
// } else if (score >= 50 && score <= 59) {
//   grade = "D";
// } else if (score >= 0 && score <= 49) {
//   grade = "F";
// }

// console.log("according to your scores, your grade was", grade);
