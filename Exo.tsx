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



function reverseWords(sentence: string): string {
  return sentence.split(" ").reverse().join(" ");
}

const sentence = "The quick brown fox jumps over the lazy dog";
console.log("Test 2 Candidate:", reverseWords(sentence));



function deduplicatesArray(numbers: number[]): number[] {
  // const result: number[] = [];

  //  for (let i = 0; i < numbers.length; i++) {
  //     const current = numbers[i]
  //     if (!result.includes(current)) {
  //         result.push(current);
  //     }
  // }
  // return result;
  return [...new Set(numbers)];
}

const numbersWithDuplicates = [1, 2, 3, 4, 4, 5, 6, 6, 7];
console.log("Test 3 Expected:", deduplicatesArray(numbersWithDuplicates));



function findDuplicatesExpected(numbers: number[]): number[] {
  const duplicates: number[] = [];
  const sortedNumbers = numbers.sort((a, b) => a - b);

  for (let i = 0; i < sortedNumbers.length - 1; i++) {
    if (
      sortedNumbers[i] === sortedNumbers[i + 1] &&
      !duplicates.includes(sortedNumbers[i])
    ) {
      duplicates.push(sortedNumbers[i]);
    }
  }

  return duplicates;
}

const numbersWithDuplicates1 = [1, 2, 3, 4, 4, 5, 6, 6, 7];
console.log("Test 4 Expected:", findDuplicatesExpected(numbersWithDuplicates1));


function sumOfMultiples(n: number): number {
    let total = 0;
    for (let i = 1; i < n; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        total += i;
      }
    }
    return total;
  }
