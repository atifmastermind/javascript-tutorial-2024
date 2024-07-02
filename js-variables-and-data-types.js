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

// let age = 25;
// let result = age >= 18 ? "adult" : "not adult";
// console.log(result);

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

// ? Practice 1

// let number = prompt("enter a number");
// if (number % 5 === 0) {
//   console.log(number, "is a multiple of 5 ");
// } else {
//   console.log(number, "is not a multiple of 5 ");
// }

// ? Practice  2
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

// ! Loops
// loops are used to execute a piece of code again & again

// ? FOR
// print 1 to 5
// for (let i = 1; i <= 5; i++) {
//   console.log("values", i);
// }
// console.log("loop is ended");

// calculate sum of 1 to 5

// let sum = 0;
// let n = 6;
// for (let i = 1; i <= n; i++) {
//   sum = sum + i;
// }
// console.log("sum =", sum);

// ? Infinite loop
// a loop that never ends

// ? WHILE

// we use a keyword while then we set our stopping condition.
// initialization we do before while loop and updation in loop

// let i = 1;
// while (i <= 5) {
//   console.log("values");
//   i++;
// }

// ? DO - While;

// do while loop work as while loop but in a little difference, in do while condition checked in last but in while its checked from start

// do while will run at least one time

// let i = 1;
// do {
//   console.log("run", i);
//   i++;
// } while (i <= 10);

// ! FOR-OF // spacial Loop
// these loops help us to iterate "means to add loops on some spacial data types"
// this will help us to add loops on strings and arrays

// let = str = "Atif";

// for (let i of str) {
//   // iterater => character
//   console.log("i = ", i);
// }

// we can also know the size of strings

// let str = "Atif";
// let size = 0;

// for (let i of str) {
//   // iterater => character
//   console.log("i = ", i);
//   size++;
// }

// console.log("string size = ", size);

// ! FOR-IN // spacial Loop
// this will used for objects and arrays

// let student = {
//   name: "Atif",
//   age: 30,
//   cgpa: 7.5,
//   isPass: true,
// };

// for (let key in student) {
//   console.log("key =", key, "value =", student[key]);
// }

// ? Practice 1

// let num = 100;
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log("i =", i);
//   }
// }

// ? Practice 2

// let gameNum = 25;
// let userNumber = prompt("Guess the Game Number:");
// while (userNumber != gameNum) {
//   userNumber = prompt("you entered a wrong number, guess again");
// }

// console.log("congrats you enter a right number");

// ! Strings
// string is a sequence of characters used to represent text we can used dubble quotes or single qoutes
// let str = "Muhammad Atif";
// to know the length
// let strLength = str.length;
// console.log(strLength);
// to get the string index
// console.log(str[0]);

// ! Template Literals
// a way to have embedded expressions in strings
// let specialString = `This is a template literal`;
// console.log(specialString);

// why we used backtick quotes because its easy to used and we don't have to type stings again and again

// let obj = {
//   item: "pen",
//   price: 10,
// };

// without template literals
// console.log("the cost of", obj.item, "is", obj.price, "rupess");
// with template literals
// let output = `the cost of ${obj.item} is ${obj.price} rupess`;
// console.log(output);

// ! escape characters

// \n is a escape charactor we used this to brakeline
// console.log("login\nnow");
// \t its a escape charactor we used this to tab space
// console.log("login\tnow");

// ! String Methods
// these are build-in functions to manipulate a string
// its not change the orignal variable it's creating a new value
// strings are immutable (means cahnge nahi hoti)
// its creating the ogirnal variable
// let str = "Muhammad Atif";
// str.toLowerCase();
// console.log(str);
// thats why we save new value in variable and then console that variable.
// let str = "Muhammad Atif";
// let newStr = str.toLowerCase();
// console.log(newStr);

// ! toUpperCase()
// let str = "Muhammad Atif";
// console.log(str.toUpperCase());

// ! toLowerCase()
// let str = "Muhammad Atif";
// let newStr = str.toLowerCase();
// console.log(newStr);

// ! trim()

// its used for removed whitespaces from starting and ending.
// let str = "        Muhammad Atif       ";
// console.log(str.trim());

// ! slice()
// returns part of string
// 3 index in non inclusive
// let str = "01234567";
// console.log(str.slice(1, 3));

// ! concat()

// joins 2 strins together

// let str = "Muhammad ";
// let str2 = "Atif";
// way one
// let res = str.concat(str2);
// way two
// let res = str + str2;

// console.log(res);

// ! replace()
// to replace a new value its only replace once

// let str = "Hello";
// console.log(str.replace("H", "y"));

// ! replaceAll()
// to replace all the matching values
// let str = "Hellololo";
// console.log(str.replaceAll("lo", "o"));

// ! charAt()
// string k indar index par koi charector retun karwana ho too we use this

// let str = "iloveJS";
// console.log(str.charAt(1));

// Q. Prectice 1

// let userName = prompt("Enter your full name");
// let removeWhite = userName.replace(/\s/g, "");
// let res = "@" + removeWhite + removeWhite.length;

// console.log(res);

// ? Arrays
// arrays is a collection of items
// ! arrays are mutable and strings are unmutable
// let marks = [10, 20, 30, 40, 50];
// console.log(marks);

// ? Array indices

// we can access values using index
// let marks = [10, 20, 30, 40, 50];
// console.log(marks[0]);
// we can change the value using this
// let marks = [10, 20, 30, 40, 50];
// console.log((marks[0] = 5));

// ? looping over an arroy
// strings, objects, arrays are iterable
// printing array using for
// let names = ["Atif", "Pyarii", "Chuzii", "Evil", "angel", "Chunoo", "sunnahra"];
// for (let i = 0; i < names.length; i++) {
//   const result = names[i];
//   console.log(result);
// }

// we used for off to print arrays
// let names = ["Atif", "Pyarii", "Chuzii", "Evil", "angel", "Chunoo", "sunnahra"];
// for (const name of names) {
//   console.log(name);
// }

// ! Prectice Qus

// let marks = [10, 20, 30, 40, 50, 70, 80];
// let sum = 0;
// for (const val of marks) {
//   result = sum += val;
// }
// let avg = result / marks.length;
// console.log(`avg marks of class ${avg}`);

// ! Prectice Qus 2
// ? using for of
// let prices = [250, 645, 300, 900, 50];
// let i = 0;
// for (let val of prices) {
//   let offer = val / 10;
//   finalPrice = prices[i] - offer;
//   console.log(`values after offer = ${finalPrice}`);
//   i++;
// }

// ? using for
// let prices = [250, 645, 300, 900, 50];
// for (let i = 0; i < prices.length; i++) {
//   let offer = prices[i] / 10;
//   prices[i] -= offer;
// }
// console.log(prices);

// ? array Methods
// there are 2 types of array methods one that change that array and 2nd which give us an new array

// ? Push()
// to add new value at the end of array
// let names = ["Atif", "Pyarii", "Chuzii", "Evil", "angel", "sunnahra"];
// names.push("Chuno");
// console.log(names);

// ? Pop()
// to delete value from end & return
// let names = ["Atif", "Pyarii", "Chuzii", "Evil", "angel", "sunnahra"];
// names.pop();
// console.log(names);

// ? toString()
// let names = ["Atif", "Pyarii", "Chuzii", "Evil", "angel", "sunnahra"];
// res = names.toString();
// console.log(res);

// ? concat
// join multiple arrays & retrun result
// let names = ["Atif", "Pyarii", "Chuzii", "Evil", "angel", "sunnahra"];
// let moreNames = ["ghudda", "shahzada"];
// let allNames = names.concat(moreNames);
// console.log(allNames);

// ? unshift
// work like push but its going to add values at start of
// let names = ["Atif", "Pyarii", "Chuzii", "Evil", "angel", "sunnahra"];
// let res = names.unshift("shahzada");
// console.log(names);

// ? shift
// work like pop but its deleted from start
// let names = ["Atif", "Pyarii", "Chuzii", "Evil", "angel", "sunnahra"];
// let res = names.shift();
// console.log(names);

// ? slice()

// let names = ["Atif", "Pyarii", "Chuzii", "Evil", "angel", "sunnahra"];
// let res = names.slice(0, 1);
// console.log(res);

// ? splice()
// its takes 3 perameters
// splice(startidx, delcount, newel1);
// ! delete and update new value
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arr.splice(2, 2, 100, 200);
// console.log(arr);
// ! only add new value
// let arr = [1, 4, 5, 6, 7, 8, 9, 10];
// arr.splice(1, 0, 2, 3);
// console.log(arr);
// ! delete value

// let arr = [1, 4, 5, 6, 7, 8, 9, 10];
// arr.splice(7, 1);
// console.log(arr);

// ? prectice qus 1

// let companies = ["bloomburg", "microsoft", "uber", "google", "IBM", "netflix"];
// companies.splice(2, 1, "Ola");
// companies.push("Amazon");
// console.log(companies);

// ? functions
// block of code that performs a specific task. can be invoked whenever needed.
// functions can help us to Redundancy of code.

// two parts to create a function
// ! Function definition
// function nameOfFunction() {
//whatever we want to do we wrote here
// }

// function myFunction() {
//   console.log("welcome to my function");
// }

// myFunction();

// To define input in functions inside functions parentheses we placed our input variable. that variable called parameter
// when we revoke this function we have to pass parameter this will called argument
// function abc(msg) {
//   console.log(msg);
// }
// abc("i love it");

// function -> 2 numbers , sum
// function sum(x, y) {
//   console.log(x + y);
// }
// sum(5, 5);
// ! return

// is used to return value, its only return one variable.

// function sum(x, y) {
//   s = x + y;
//   return s;
// }

// let val = sum(3, 4);
// console.log(val);

// after return a value we can't do anything because its useless that code won't work so return is out last line of function

// function parameter worked as local variable of function so its a block scope

// ? Arrow functions
// compact way of writing a function its a modern way

// sum function
// const arrowSum = (a, b) => {
//   console.log(a + b);
// };

// arrowSum(10, 10);

// multiplay function

// const arrowmulti = (a, b) => {
//   console.log(a * b);
// };

// arrowmulti(10, 10);

// ! prectice example 1

// function countsVowels(str) {
//   let count = 0;
//   for (const char of str) {
//     if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//       count++;
//     }
//   }

//   return count;
// }

// ! prectice example 2

const countVow = (str) => {
  let count = 0;
  for (const char of str) {
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
      count++;
    }
  }

  return count;
};
