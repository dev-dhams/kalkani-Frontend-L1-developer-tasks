/*
Task (2) : Write a program to print the Fibonacci series upto the number 
           which is lesser than the given input.

        User input: 120
        Program output:
        0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89
*/
// Function to print Fibonacci series
const printFibonacci = (number) => {
  let n1 = 0,
    n2 = 1,
    nextTerm;
  console.log(n1);
  console.log(n2);
  nextTerm = n1 + n2;
  while (nextTerm <= number) {
    console.log(nextTerm);
    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1 + n2;
  }
};
// Readline is node js package used to read input from terminal or command line
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
// Print print the Fibonacci series
readline.question(`Please enter number : `, (number) => {
  printFibonacci(number);
  readline.close();
});
