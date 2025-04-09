// selectionner le nombres paires
function getEvenNumbers(numbers: number[]): number[] {
  const result: number[] = [];
  for ( let i = 0 ; i < numbers.length; i++) {
    if ( numbers[i] % 2 === 0) {
      result.push(numbers[i]);
    }
  }
  return result;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Test 1 Candidate:", getEvenNumbers(numbers));

// inverser les mots de la phrase
function reverseWords(sentence: string): string {
  return sentence.split(" ").reverse().join(" ");
}
  
const sentence = "The quick brown fox jumps over the lazy dog";
console.log("Test 2 Candidate:", reverseWords(sentence));

// retirer dédupliqués
function deduplicatesArray(numbers: number[]): number[] {
  const deduplicate: number[] = [];
  for (let i = 0; i < numbers.length; i++) {
    if (!deduplicate.includes(numbers[i])){
      deduplicate.push(numbers[i]);
    }
  }
  return deduplicate;
}

function deduplicatesArray2(numbers: number[]): number[] {
  return [...new Set(numbers)]
}

const numbersWithDuplicates = [1, 2, 3, 4, 4, 5, 6, 6, 7];
console.log("Test 3 Expected:", deduplicatesArray(numbersWithDuplicates));


// montrer les nombres dupliqués

function findDuplicatesExpected(numbers: number[]): number[] {
  const duplicate: number[] = [];
  for (let i = 0; i <numbers.length; i++) {
    if (duplicate.includes(numbers[i])) {
      duplicate.push(numbers[i]);
    }
  }
  return duplicate;
}


const numbersWithDuplicates1 = [1, 2, 3, 4, 4, 5, 6, 6, 6, 7];

console.log("Test 4 Expected:", findDuplicatesExpected(numbersWithDuplicates1));

// function sumOfMultiples(n: number): number {
//   let result: number = 0;
//   for (let i = 0; i <= n; i++) {
//     result += i;
//   }
//   return result;
// }

// console.log(sumOfMultiples(6));

// function sumOfMultiples(n: number): number {
//   let result: number = 0;
//   for (let i = 0; i <= n; i++) {
//     if ( i % 2 === 0 || i % 5 === 0) {
//       return += i;
//     }
//   }
//   return result;
// }

// console.log(sumOfMultiples(6));

function fizzBuzz(n: number): string {
  let result = "";
  if ( n %  3 === 0) {
    result = "Fizz";
  }
  if ( n % 5 === 0 ) {
    result = "Buzz";
  }
  if ( n % 3 === 0 && n % 5 === 0 ) {
    result = "FizzBuzz"
  }
  return result
}

console.log(fizzBuzz(3)); //  Fizz
console.log(fizzBuzz(5)); //  Buzz
console.log(fizzBuzz(15)); // FizzBuzz


function fizzBuzzOneLine(n: number): string {
  return n % 3 === 0 && n % 5 === 0
    ? "FizzBuzz"
    : n % 3 === 0
    ? "Fizz"
    : n % 5 === 0
    ? "Buzz"
    : "";
}

console.log(fizzBuzzOneLine(3)); //  Fizz
console.log(fizzBuzzOneLine(5)); //  Buzz
console.log(fizzBuzzOneLine(15)); // FizzBuzz

function toto() {
  const i = 5;

  if (i == 5) {
    console.log("OK");
  }

  i == 5 ? console.log("OK") : console.log("NOK");
}


function containsNumberCandidate(numbers: number[], target: number): boolean {
  for (let i = 0; i < numbers.length; i++) {
    if ( numbers[i] === target) {
      return true;
    }
  }
    return false;
}

const sortedNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("MISC Candidate:", containsNumberCandidate(sortedNumbers, 7));

// Declare three variables: your name (string), your age (number), and if you're a developer (boolean).
// Print them in a sentence using template literals.

// const name = Guillaume;
// const age = 37;
// const developer = true;

// console.log(
//   `
//   "Je m'appelle" 
//   +${name} 
//   + " et j'ai " +
//   ${age} 
//   +" et je suis developpeur " +
//   ${developer}
//   `
// )

// Write a function called `multiply` that takes two numbers and returns their product.

function multiply(num1: number, num2: number): number {
  const result = num1 * num2;
  return result;
}
console.log(multiply(5,5));

// Create a function `getMax` that takes an array of numbers and returns the largest number.

// function getMax(numbers: number[]): number {
//   let result = 0;
//   for ( let i = 0; i < numbers.length; i++) {
//     if ( ) {

//     }
//   }

// }

// Create an interface `Person` with `name`, `age`, and `isStudent`.
// Write a function `introduce` that returns a greeting.
interface Person {
  name: string,
  age: number,
  isStudent: boolean,
}

// Write a function `formatValue` that takes a string or number.
// If number: return currency string. If string: return uppercase.
function formatValue()


// Write a function `greet` with a default greeting of "Hello".
function greet(name?: string, greeting: string = "Hello" ) {
  console.log(`${greeting} ${name}`)
}

greet("Guillaume")
greet("")

// Create an enum `Status` with "Pending", "InProgress", "Done".
// Write a function returning a message based on the status.

enum Status {
  Pending,
  InProgress,
  Done,
}

function showStatus(status: Status) {
  if (status === Status.pending)
}

// Create a tuple [string, number] for product name and price.
// Write a function to print them.

let product: [string, number];
let product1: [string, number];
product = ["produit1", 30];
product1 = ["produit2", 40];

function print(product: [string, number]) {
  `"produit" ${product[0]} ${product[1]}`;
}

function print2(product1: [string, number]) {
  `"produit" ${product1[0]} ${product1[1]}`;
}

console.log(print(product));
console.log(print(product1));
