let banana = "Banane";
let apple = "Apple";

let bananaPricePerKilo = 2.14;
let applePricePerKilo = 3.43;

let appleWeight = 0.34;
let bananaWeight = 0.22;

let oneKilo = 1;

console.log("Bananen pro Kilo" + oneKilo/bananaWeight);
console.log("Äpfel pro Kilo "+ oneKilo/appleWeight);
console.log("Preis pro Banane "+ bananaPricePerKilo/(oneKilo/bananaWeight));
console.log("Preis pro Apfel "+ applePricePerKilo/(oneKilo/appleWeight));
console.log("Preis von 8 Äpfel "+ (applePricePerKilo/(oneKilo/appleWeight))*8);
console.log("Preis von 17 Bananen "+ (bananaPricePerKilo/(oneKilo/bananaWeight))*17);
console.log("Preis von 1 Tonne Äpfel "+ applePricePerKilo * oneKilo * 1000);
console.log("Preis von 1 Tonne Bananen "+ bananaPricePerKilo * oneKilo * 1000);