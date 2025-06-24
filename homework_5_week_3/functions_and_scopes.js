// ==============================
// JavaScript Homework: Functions and Scope
// ==============================

// =========================================
// Task 1: Create a function called greet that logs:
// "Hello, student!" to the console
// Then call the function
// =========================================

function greet() {
    console.log("Hello, student!");
}

greet();



// =========================================
// Task 2: Create a function that takes a name as a parameter
// and logs "Hello, <name>!" to the console
// Call the function with different names
// =========================================

const greetByName = (name) => {
    console.log(`Hello, ${name}!`);
};

greetByName("Anton");
greetByName("Ygor");



// =========================================
// Task 3: Create a function that returns the square of a number
// Call the function and store the result in a variable
// Then log the result
// =========================================

const calculate = function (num) {
    return num * num;
};

const square1 = calculate(2);
const square2 = calculate(4);

console.log(square1);
console.log(square2);



// =========================================
// Task 4: Demonstrate local vs global scope
// Create a global variable and a function that has a local variable
// Log both and explain the difference in a comment
// Display both values in the console
// =========================================

const globalMessage = "I am a global variable";

function showScope() {
    const localMessage = "I am a local variable";

    console.log(globalMessage);
    console.log(localMessage);
}

showScope();

console.log(globalMessage);
// console.log(localMessage); // won't be accessible outside the function where it was initialized



// =========================================
// Task 5: Create a function that accepts another function as a parameter
// The callback should log "Callback function was called"
// Call the outer function and pass the inner function as an argument
// =========================================

const mainFunction = callback => callback();
const callbackFunction = () => console.log("Callback function was called");

mainFunction(callbackFunction);



// =========================================
// Task 6: Create a function that accepts two numbers and a function
// The function should perform an operation using the passed-in function
// Example: pass in add, subtract, multiply as callback functions
// Call the main function with different callbacks
// Display results in the console
// =========================================

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;

const operate = (a, b, operation) => operation(a, b);

console.log(operate(5, 3, add));
console.log(operate(5, 3, subtract));
console.log(operate(5, 3, multiply));



// =========================================
// Task 7: Create and use an anonymous function
// Assign it to a variable and call it
// It should log "Anonymous function executed"
// =========================================

const anonymous = function () {
    console.log("Anonymous function executed");
};

anonymous();



// =========================================
// Task 8: Rewrite Task 7 using an arrow function instead
// Call it and display the result in the console
// =========================================

const anonymousArrow = () => console.log("Anonymous function executed");

anonymousArrow();
