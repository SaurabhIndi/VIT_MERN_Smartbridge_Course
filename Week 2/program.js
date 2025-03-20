// Task 1: Declare a variable age and check if the person is an adult
let age = 25;
let isAdult = age >= 18;
console.log("Is adult:", isAdult);

// Task 2: Perform arithmetic operations
let x = 10, y = 5;
let addition = x + y;
let multiplication = x * y;
let modulus = x % y;

console.log("Addition:", addition);
console.log("Multiplication:", multiplication);
console.log("Modulus:", modulus);

// Task 3: Check if a number is even or odd
let n = 7; // You can change this number to test
temp = (n % 2 === 0) ? "Even" : "Odd";
console.log("The number is:", temp);

// Task 4: Store numbers from 1 to 5 in an array
let numbersArray = [];
for (let i = 1; i <= 5; i++) {
    numbersArray.push(i);
}
console.log("Array:", numbersArray);

// Task 5: Function to return the square of a number
function square(num) {
    return num * num;
}
console.log("Square of 4:", square(4));
