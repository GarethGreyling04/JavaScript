// Step 1: Create an array of allowed passwords
const allowedPasswords = ['password123', 'securePass', 'letMeIn'];

// Step 2: Create a login function
function login(password) {
  return allowedPasswords.includes(password);
}

// Step 3: Add a function that returns a Promise
function checkPassword(password) {
  return new Promise((resolve, reject) => {
    const isValid = login(password);
    if (isValid) {
      resolve({ status: true, message: 'Password is valid.' });
    } else {
      reject({ status: false, message: 'Invalid password.' });
    }
  });
}

// Step 4: Create a function that checks the password using Promises
function passwordChecker(password) {
  checkPassword(password)
    .then((result) => {
      console.log(result.message);
    })
    .catch((error) => {
      console.error(error.message);
    });
}

// Step 5: Send several passwords to the checker function
passwordChecker('password123'); // Should resolve
passwordChecker('wrongPassword'); // Should reject
passwordChecker('letMeIn'); // Should resolve
passwordChecker('anotherPassword'); // Should reject