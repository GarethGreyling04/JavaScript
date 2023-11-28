//6.1

// 1. Set up a blank array to contain the final multiplication table.
// const multiplicationTable = [];

// // 2. Set a value variable to specify how many values you want to multiply with one another and show the results for.
// const tableSize = 10; // Change this value to set the size of the table

// // 3. Create an outer for loop to iterate through each row and a temp array to store the row values.
// for (let i = 1; i <= tableSize; i++) {
//   const row = [];

//   // 4. Add an inner for loop for the column values, which will push the multiplied row and column values to the temp array.
//   for (let j = 1; j <= tableSize; j++) {
//     const result = i * j;
//     row.push(result);
//   }

//   // 5. Add the temporary row data that contains the calculated solutions to the main array of the final table.
//   multiplicationTable.push(row);
// }

// // Output the multiplication table
// for (let i = 0; i < multiplicationTable.length; i++) {
//   console.log(multiplicationTable[i].join("\t"));
// }


//6.2

// // 1. Set up a blank array to contain the final multiplication table.
// const multiplicationTable = [];

// // 2. Set a value variable to specify how many values you want to multiply with one another and show the results for.
// const maxValue = 10; // Change this to the desired maximum value

// // 3. Create an outer for loop to iterate through each row.
// for (let i = 1; i <= maxValue; i++) {
//   // Create a temporary array to store the row values.
//   const row = [];

//   // 4. Add an inner for loop for the column values.
//   for (let j = 1; j <= maxValue; j++) {
//     // 5. Push the multiplied row and column values to the temp array.
//     row.push(i * j);
//   }

//   // 6. Add the temporary row data that contains the calculated solutions to the main array of the final table.
//   multiplicationTable.push(row);
// }

// // Print the multiplication table to the console
// for (let i = 0; i < multiplicationTable.length; i++) {
//   console.log(multiplicationTable[i].join('\t')); // Use '\t' to separate columns
// }


//6.3

// // 1. Set up a blank array to contain the final multiplication table.
// const multiplicationTable = [];

// // 2. Set a value variable to specify how many values you want to multiply with one another and show the results for.
// const maxValue = 10; // You can change this to the desired value.

// // 3. Create an outer for loop to iterate through each row and a temp array to store the row values.
// for (let i = 1; i <= maxValue; i++) {
//   const row = [];

//   // 4. Add an inner for loop for the column values, which will push the multiplied row and column values to the temp array.
//   for (let j = 1; j <= maxValue; j++) {
//     const product = i * j;
//     row.push(product);
//   }

//   // 5. Add the temporary row data that contains the calculated solutions to the main array of the final table.
//   multiplicationTable.push(row);
// }

// // Output the multiplication table to the console
// console.log(multiplicationTable);


//6.4

// // 1. Set up a blank array to contain the final multiplication table.
// const multiplicationTable = [];

// // 2. Set a value variable to specify how many values you want to multiply with one another and show the results for.
// const value = 10; // Change this to set the number of values you want in the table

// // 3. Create an outer for loop to iterate through each row and a temp array to store the row values.
// for (let i = 1; i <= value; i++) {
//   const row = []; // Temporary array to store the row values

//   // 4. Add an inner for loop for the column values, which will push the multiplied row and column values to the temp array.
//   for (let j = 1; j <= value; j++) {
//     row.push(i * j); // Calculate and push the product to the row array
//   }

//   // 5. Add the temporary row data that contains the calculated solutions to the main array of the final table.
//   multiplicationTable.push(row);
// }

// // Output the multiplication table to the console
// console.log(multiplicationTable);


//6.5

// 1. Create a variable 'value' with let and assign a string value of 1000 to it.
// let value = 1000;

// // 2. Create an IIFE function and assign a new value to a variable of the same name.
// (function () {
//   let value = 2000; // This 'value' variable is local to the IIFE's scope
//   console.log("Inside IIFE:", value); // Prints the local 'value' (2000) inside the IIFE
// })();

// // 'value' outside the IIFE remains unaffected
// console.log("Outside IIFE:", value); // Prints the outer 'value' (1000)

// // 3. Create an IIFE expression and assign it to a new 'result' variable.
// let result = (function () {
//   let value = 3000; // This 'value' variable is local to the IIFE's scope
//   return value; // Returns the local 'value' (3000) from the IIFE
// })();

// // 'result' now contains the value returned by the IIFE
// console.log("Result:", result); // Prints the 'result' variable (3000)

// // 4. Create an anonymous function with a parameter.
// (function (newValue) {
//   // Assign the passed-in value to the 'value' variable.
//   value = newValue;
//   console.log("Inside anonymous function:", value); // Prints the 'value' after assignment
// })(4000);

// // 'value' outside the IIFE has been modified by the anonymous function
// console.log("After anonymous function:", value); // Prints the modified 'value' (4000)


//6.6

// 1. Create a function to calculate the factorial
// function calculateFactorial(n) {
//     // 2. Check if the argument value is 0
//     if (n === 0) {
//       return 1;
//     } else {
//       // 3. Return the argument multiplied by the result of the function with n-1
//       return n * calculateFactorial(n - 1);
//     }
//   }
  
//   // 4. Invoke the function with a number to find its factorial
//   const number = 5; // Change this to calculate factorial for a different number
//   const result = calculateFactorial(number);
//   console.log(`Factorial of ${number} is ${result}`);


//6.7

// // 1. Create a function that checks if the argument value is 0.
// function calculateFactorial(number) {
//     // 2. If the parameter is equal to 0, return 1. Otherwise, recursively calculate the factorial.
//     if (number === 0) {
//       return 1;
//     } else {
//       // Multiply the current number by the factorial of (number - 1)
//       return number * calculateFactorial(number - 1);
//     }
//   }
  
//   // 3. Invoke the function, providing an argument for the number you want to find the factorial of.
//   const numberToCalculate = 5; // Change this number as desired
//   const result = calculateFactorial(numberToCalculate);
  
//   // Output the result to the console
//   console.log(`The factorial of ${numberToCalculate} is: ${result}`);


//6.8
