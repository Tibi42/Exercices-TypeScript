// selectionner le nombres paires
function getEvenNumbers(numbers: number[]): number[] {
  const result: number[] = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
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
    if (!deduplicate.includes(numbers[i])) {
      deduplicate.push(numbers[i]);
    }
  }
  return deduplicate;
}

function deduplicatesArray2(numbers: number[]): number[] {
  return [...new Set(numbers)];
}

const numbersWithDuplicates = [1, 2, 3, 4, 4, 5, 6, 6, 7];
console.log("Test 3 Expected:", deduplicatesArray(numbersWithDuplicates));

// montrer les nombres dupliqués

function findDuplicatesExpected(numbers: number[]): number[] {
  const duplicate: number[] = [];
  for (let i = 0; i < numbers.length; i++) {
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
  if (n % 3 === 0) {
    result = "Fizz";
  }
  if (n % 5 === 0) {
    result = "Buzz";
  }
  if (n % 3 === 0 && n % 5 === 0) {
    result = "FizzBuzz";
  }
  return result;
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
    if (numbers[i] === target) {
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
console.log(multiply(5, 5));

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
  name: string;
  age: number;
  isStudent: boolean;
}

// Write a function `formatValue` that takes a string or number.
// If number: return currency string. If string: return uppercase.
function formatValue(value: string | number): string {
  if (typeof value === "number") {
    return value.toLocaleString("en-US", { style: "currency", currency: "USD" });
  } else if (typeof value === "string") {
    return value.toUpperCase();
  }
  return "";
}

// Write a function `greet` with a default greeting of "Hello".
function greet(name?: string, greeting: string = "Hello") {
  console.log(`${greeting} ${name}`);
}

greet("Guillaume");
greet("");

// Create an enum `Status` with "Pending", "InProgress", "Done".
// Write a function returning a message based on the status.

enum Status {
  Pending,
  InProgress,
  Done,
}
function showStatus(status: Status): string {
  switch (status) {
    case Status.Pending:
      return "The task is pending.";
    case Status.InProgress:
      return "The task is in progress.";
    case Status.Done:
      return "The task is done.";
    default:
      return "Unknown status.";
  }
}
// function showStatus(status: Status) {
//   if (status === Status.Pending) {
// }
//   if (status === Status.Inprogress) {

//   }
//   if (status === Status.Done) {

//   }
// }

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

// function printProduct(product: [string, number]): void {
//   console.log(`Product Name: ${product[0]}, Price: ${product[1]}`);
// }

// const product1: [string, number] = ["Laptop", 1200];
// printProduct(product1);

// Écrire une fonction printEvenNumbers(max: number): void qui affiche tous les nombres pairs de 0 jusqu'à max.

function printEvenNumbers(max: number): void {
  for (let i = 0; i <= max; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

function printEvenNumbers(max: number): number[] {
  let result: number[] = [];
  for (let i = 0; i < max + 1; i++) {
    if (i % 2 === 0) {
      result.push(i);
    }
  }
  return result;
}

console.log(printEvenNumbers(10));

// function printEvenNumbers(max: number): void {
// }

// function printEvenNumbers(max :number): number[] {
//   let result: number[] = [];
//   for (let num = 0, num )
// }

// Écrire une fonction average(numbers: number[]): number qui retourne la moyenne des nombres dans un tableau.

function average(numbers: number[]): number {
  let somme = 0;
  for (let i = 0; i < numbers.length; i++) {
    somme += numbers[i];
  }
  return somme / numbers.length;
}

console.log(average([1, 2, 3, 4, 5]));

// Exercice : Retourner une mention selon une note

// Spécifications :
// 	•	Si la note est >= 16 : "Très bien"
// 	•	Si la note est >= 14 : "Bien"
// 	•	Si la note est >= 12 : "Assez bien"
// 	•	Si la note est >= 10 : "Passable"
// 	•	Sinon : "Échec"

function noteMention(note: number): string {
  if (note >= 16) {
    return "tres bien";
  } else if (note >= 14) {
    return "bien";
  } else if (note >= 12) {
    return "assez bien";
  } else if (note >= 10) {
    return "passable";
  } else {
    return "Echec";
  }
}

console.log(noteMention(16));
console.log(noteMention(14));
console.log(noteMention(12));
console.log(noteMention(10));
console.log(noteMention(9));

// Écrire une fonction capitalize(str: string): string qui retourne la chaîne avec une majuscule en première lettre.

function capitalize1(str: string): string {
  if (str.length === 0) return str;
  const firstLetter = str.charAt(0).toUpperCase();
  return firstLetter + str.slice(1);
}

console.log(capitalize1("hello"));
console.log(capitalize1("world"));


function capitalize(str: string): string {
  
  let str2 = ""
  if (str.charCodeAt(0) >= 97 ) {
    // str.charCodeAt(0)-32
    // ELle prend le code ASCII du premier caracter de la chaine de caractere str, elle y retire 32 et la retransforme en caractere
    str2 = String.fromCharCode(str.charCodeAt(0)-32)
  }
  // 
  for (let i = 1; i < str.length; i++) {
    //   Si le code ASCII du i-eme caractere de str et inferieir a 97 (est une majuscule) alors j'execute : 
    if (str.charCodeAt(i) < 97) {
      str2 += String.fromCharCode(str.charCodeAt(i)+32)
  }
}



// inverser un mots sur deux de la phrase
function reverseAlternateWords(sentence: string): string {
  const words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (i % 2 !== 0) {
      words[i] = words[i].split("").reverse().join("");
    }
  }
  return words.join(" ");
}

const sentenceWithAlternateReversed = "The quick brown fox jumps over the lazy dog";
console.log("Test Alternate Reverse:", reverseAlternateWords(sentenceWithAlternateReversed));


function reverseWords1(sentence: string): string {
  return sentence.split(" ").reverse().join(" ");
}

const sentence = "The quick brown fox jumps over the lazy dog";
console.log("Test 2 Candidate:", reverseWords1(sentence));

// Écrire une fonction countOccurrences(array: string[], word: string): number.
function countOccurrences(array: string[], word: string): number {
  let compteur = 0;
  for (let  i = 0; i < array.length; i++) {
    if ( array[i] ==  word ) {
      compteur += 1 ; 
    }
  }
  return compteur;
}

const nbWord = ["un","deux", "trois"];
console.log(countOccurrences(nbWord));



function convertNumber(n: int): string {

}