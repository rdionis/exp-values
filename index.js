// PRINT EXPONENTIAL VALUES - FIRST SOLUTION
// Write a function that accepts two numbers and validate that they are numbers.
// After that, the function should print y exponential values starting from x.
// For example if we have function(3, 5) The function should print 3 9 27 81 243.
//Prints 5 exponential values of 3.
// function(2, 8) The function prints 2 4 8 16 32 64 128 256. Prints 8 exponential values of 2.

function expValues(num1, num2) {
  let valArr = []; // creates an empty array
  let exp = 1; // creates a variable to store my exponential values
  let result = 0; // creates an empty string for what is going to be printed
  for (let i = 0; i < num2; i++) {
    //creates a loop to add an exponential value of the first number until the index is equal to the second number
    if (!isNaN(num1) && !isNaN(num2)) {
      //creates the condition for the function
      exp *= num1; // multiplies the value of exp with num1 until the condition in the for loop stops being true
      valArr.push(exp); // pushes the values to a new array
      result = valArr; // stores the new array in an empty variable
    }
  }
  if (isNaN(num1) && isNaN(num2)) {
    // checks if the data inserted by the user corresponds to numbers
    result = `These are NOT numbers`;
  }
  return result;
}

console.log(expValues(2, 5));
console.log(expValues("2", "5"));
console.log(expValues("i", "t"));
