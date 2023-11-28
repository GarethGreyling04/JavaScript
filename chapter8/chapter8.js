// Step 1: Create a string
const originalWord = "example";

// Step 2-11: Create a function to scramble the word
function scrambleWord(word) {
  // Step 3: Set up loop maximum value
  let originalLength = word.length;

  // Step 4: Create an empty temporary string
  let scrambledWord = "";

  // Step 5: Create a for loop
  for (let i = 0; i < originalLength; i++) {
    // Step 6: Randomly select one letter
    const randomIndex = Math.floor(Math.random() * word.length);
    const randomLetter = word.charAt(randomIndex);

    // Step 7: Add the new letter to the new string and remove it from the original string
    scrambledWord += randomLetter;
    word = word.slice(0, randomIndex) + word.slice(randomIndex + 1);

    // Step 8: Output the results to the console
    console.log(`Original: ${word} | Scrambled: ${scrambledWord}`);

    // Step 9: Update the original string
    word = word.substring(0, randomIndex) + word.substring(randomIndex + 1);

    // Step 10: Output the updated original string
    console.log(`Remaining letters: ${word}`);
  }

  // Step 11: Return the final result
  return scrambledWord;
}

// Step 11: Invoke the function
const result = scrambleWord(originalWord);
console.log(`Final result: ${result}`);

// Step 1: Create an end date
const endDate = new Date("December 31, 2023 23:59:59").getTime();

// Step 2-4: Create a countdown function
function countdown() {
  const now = new Date().getTime();
  const totalMilliseconds = endDate - now;

  const days = Math.floor(totalMilliseconds / (1000 * 60 * 60 * 24));
  const hours = Math.floor((totalMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((totalMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((totalMilliseconds % (1000 * 60)) / 1000);

  // Step 4: Return values in an object
  return {
    days,
    hours,
    minutes,
    seconds,
  };
}

// Step 5-7: Create a function to update the countdown every second
function update() {
  const temp = countdown();
  let output = "Time until target date: ";

  // Step 6: Iterate through the object properties
  for (const unit in temp) {
    if (temp.hasOwnProperty(unit)) {
      output += `${temp[unit]} ${unit} `;
    }
  }

  // Step 7: Output result to console
  console.log(output);

  // Step 5: Use setTimeout to run the update function every second
  setTimeout(update, 1000);
}

// Step 5: Start the countdown
update();