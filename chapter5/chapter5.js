//5.1

// 1. Set the max value for the number guessing game
// const maxValue = 5;

// 2. Generate a random number between 1 and maxValue
// const solution = Math.floor(Math.random() * maxValue) + 1;

// Uncomment the following line for development to see the solution number
// console.log("Solution:", solution);

// 3. Create a variable for tracking whether the answer is correct
// let isCorrect = false;

// 4. Use a while loop to ask the user for input until they guess correctly
// while (!isCorrect) {
  // 5. Prompt the user to enter a number between 1 and maxValue
  // const userGuess = parseInt(prompt(`Guess a number between 1 and ${maxValue}:`));

  // Check if the user's guess is equal to the solution
//   if (userGuess === solution) {
//     isCorrect = true;
//     alert(`Congratulations! You guessed the correct number (${solution}).`);
//   } else if (userGuess < solution) {
//     alert("Too low. Try again.");
//   } else {
//     alert("Too high. Try again.");
//   }
// }

// Game over
// console.log("Game over");



//5.2

// 1. Set the starting counter to 0
// let counter = 0;

// 2. Create a variable, step, to increase your counter by
// const step = 5; // You can change the step value to any desired value

// 3. Add a do-while loop
// do {
  // Print the counter to the console
  // console.log(`Counter: ${counter}`);

  // Increment the counter by the step amount
  // counter += step;

// 4. Continue to loop until the counter is equal to 100 or more than 100
// } while (counter < 100);

// console.log("Counter reached 100 or more. Loop ended.");


//5.3


// 1. Setup a blank array, myWork.
// const myWork = [];

// 2. Using a for loop, create a list of 10 objects
// for (let i = 1; i <= 10; i++) {
  // 3. Determine the status using a ternary operator
  // const status = i % 2 === 0 ? true : false;

  // 4. Create a lesson object with a name and status
  // const lesson = {
  //   name: `Lesson ${i}`,
  //   status: status
  // };

  // 5. Push the lesson object into the myWork array
  // myWork.push(lesson);
// }

// 6. Output the array to the console
// console.log(myWork);


//5.4

// // 1. Setup a blank array, myWork.
// const myWork = [];

// // 2. Using a for loop, create a list of 10 objects.
// for (let i = 1; i <= 10; i++) {
//   // 3. Use a ternary operator to set the status (alternate true/false).
//   const status = i % 2 === 0 ? false : true;

//   // 4. Create a lesson using a temporary object variable.
//   const lesson = {
//     name: `Lesson ${i}`,
//     status: status,
//   };

//   // 5. Push the objects to the myWork array.
//   myWork.push(lesson);
// }

// // 6. Output the array to the console.
// console.log(myWork);


//5.5


// // 1. Create a grid array variable.
// const grid = [];

// // 2. Set a value of 64 for the number of cells.
// const numberOfCells = 64;

// // 3. Set a counter to 0.
// let counter = 0;

// // 4. Create a global variable to be used for the row array.
// let row = [];

// // 5. Create a loop that will iterate up to the number of cells you want in the array.
// for (let i = 0; i <= numberOfCells; i++) {
//   // 6. Add an outer if statement to check if the main counter is divisible by 8 or the number of columns you want.
//   if (counter % 8 === 0) {
//     // 7. Inside the preceding if statement, check if the row is undefined.
//     // If it is, create a new row array.
//     if (typeof row !== 'undefined') {
//       // Add the row to the main grid array.
//       grid.push(row);
//     }
    
//     // Clear the row array since it has been added to the grid.
//     row = [];
//   }

//   // 9. Increment the main counter by 1.
//   counter++;

//   // 10. Set up a temporary variable to hold the value of the counter and push it to the row array.
//   const cellValue = counter;
//   row.push(cellValue);

//   // 11. Check if the value of the counter is equal to the total number of columns you want.
//   if (counter === 8) {
//     // Add the current row to the grid.
//     grid.push(row);
//   }
// }

// // 13. Output the grid into the console.
// console.log(grid);


// //5.6


// // 1. Create a grid array variable.
// const grid = [];

// // 2. Set a value of 64 for the number of cells.
// const numCells = 64;

// // 3. Set a counter to 0.
// let counter = 0;

// // 4. Create a global variable to be used for the row array.
// let row = [];

// // 5. Create a loop that will iterate up to the number of cells you want in the array, plus one to include the zero value.
// for (let i = 0; i <= numCells; i++) {
//   // 6. Add an outer if statement to check if the main counter is divisible by 8 or the number of columns you want.
//   if (counter % 8 === 0) {
//     // 7. Inside the preceding if statement, add another if statement to check if the row is undefined.
//     if (row !== undefined) {
//       // Add the row to the main grid array.
//       grid.push(row);
//     }
    
//     // 8. Clear the row array since it has been added to the grid.
//     row = [];
//   }
  
//   // 9. Increment the main counter by 1.
//   counter++;

//   // 10. Set up a temporary variable to hold the value of the counter and push it to the row array.
//   const cellValue = counter;
//   row.push(cellValue);

//   // 11. Check if the value of the counter is equal to the total number of columns you want, then add the current row to the grid.
//   if (counter === 8) {
//     grid.push(row);
//   }
// }

// // 12. Output the grid into the console.
// console.log(grid);


// //prodj

// // 1. Set up a blank array to contain the final multiplication table.
// const multiplicationTable = [];

// // 2. Set a value variable to specify how many values you want to multiply with one another and show the results for.
// const tableSize = 10; // You can change this value to determine the size of the table.

// // 3. Create an outer for loop to iterate through each row and a temp array to store the row values.
// for (let i = 1; i <= tableSize; i++) {
//   const row = [];

//   // 4. Add an inner for loop for the column values, which will push the multiplied row and column values to the temp array.
//   for (let j = 1; j <= tableSize; j++) {
//     // Calculate the product of the row and column values
//     const product = i * j;

//     // Push the product to the current row
//     row.push(product);
//   }

//   // 5. Add the temporary row data that contains the calculated solutions to the main array of the final table.
//   multiplicationTable.push(row);
// }

// // Output the multiplication table to the console
// for (let i = 0; i < multiplicationTable.length; i++) {
//   console.log(multiplicationTable[i].join('\t'));
// }

