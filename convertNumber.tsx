//  consigne : varialbe boucle et if qui prend un nombre et qui renvoie ce nombre en string
let nb = 6225;

//  si

// console.log(nb % 10)
// console.log(nb % 5)

// if (nb / 10 == 0 )
//    alors nb === 1 nombre
// else plusieurs nombre alors
// if / 100  === 0 alors 2 nombres, etc...

// decouper nombre par nombre en remontannt / 1000 puis 100 puis etc... avec modulo % 1000

// console.log(nb % 1);
// console.log(nb % 2);
// console.log(nb % 3);
// console.log(nb % 4);
// console.log(nb % 5);
// console.log(nb % 6);
// console.log(nb % 7);
// console.log(nb % 8);
// console.log(nb % 9);
// console.log(nb % 10);
// console.log(nb % 100);
// console.log(nb % 1000);
// console.log(nb % 10000);

let mult = 10;
nb % mult == nb;
mult / 10;

let unite = nb % 10;
let dizaine = nb % 100;
let centaine = nb % 1000;
let millier = nb % 10000;
let unit = nb / 10;
let diz = nb / 100;
let cent = nb / 1000;
let mill = nb / 10000;

let result: string = "";

nb / mult;
result += 6 + 48;
nb = nb % mult;
mult / 10;

function findmult(n: number): number {
  for (let i = 0; i < 100; i++) {
    //  la puissance de 10 inferieru a n puis on divise par dix puis return mult
    if (n % mult === n) {
      mult = mult / 10;
      return mult;
    }
    mult = mult * 10;
  }
  return 1;
}

//
function convertNumber(n: number): string {
  let result: string = "";
  let mult = findmult(n);

  for (let i = 0; i < 100; i++) {
    // prend le premier caractere du nombre puis le transforme en caractere puis le stocke dans result et le transforme en caractere numerique
    result += String.fromCharCode(intDivide(n, mult) + 48);
    // retire le premier chiffre
    n = n % mult;
    // si mult est egal à 1 alors return result
    if (mult === 1) {
      return result;
    }
    // divise mult par dix
    mult = mult / 10;
  }
  return result;
}


function findmult1(n: string): number {
  let mult = 1;
  for (let i = 0; i < n.length; i++) {
    mult = mult * 10;
  }
  return mult;
}

function convertString(s: string): number {
  let result: number = 0;
  let mult = findmult1(s);
  for (let i = 0; i < s.length; i++) {
    result += (s.charCodeAt(i) - 48) * mult;
    mult = mult / 10;
  }
  return result / 10;
}

console.log(convertString("255"));
console.log(findmult1("223"));


// envoyer une string en number

// console.log(convertString(2556));

//   let mult = 10000;
//   if (n % mult == n) {
//   }
// }

// fonction intDivide permet de troncquer le nobmre sans virgule

function intDivide(a: number, b: number): number {
  const result = a / b;
  return result < 0 ? Math.ceil(result) : Math.floor(result);
}

// console.log(convertNumber(2556));

// afficher 6 en string
