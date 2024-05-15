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

