import { createInterface } from "readline";

const readline = createInterface({
    input: process.stdin,
    output: process.stdout,
});

const readLineAsync = () => {
    return new Promise ((resolve) => {
        readline.question("", (userRes) => {
            resolve(userRes);
            
        });
    });
};

let balance = 0;
let selction = "";


console.log("Mit den folgenden Zahlen wählen Sie Ihre Aktionen aus.");
console.log("   1    Einzahlen");
console.log("   2    Abheben");
console.log("   3    Kontostand");
console.log("   4    Logout");

let selection = await readLineAsync();

if (selection == 1){
    console.log("Bitte geben Sie den einzuzahlenden Betrag ein.");

    console.log("Sie haben " +  + " Euro eingezahlt, Ihr neuer Kontostand beträgt " + balance + " Euro.")
}

if (selection == 2){
    console.log("Bitte geben Sie den abzuhebenden Betrag ein.");
    
    console.log("Sie haben " +  + " Euro abgehoben, Ihr neuer Kontostand beträgt " + balance + " Euro.")
}

if (selection == 3){
    console.log("Ihr aktueller Kontostand beträgt " + balance + " Euro.");
}

if (selection == 4){
    console.log("Cashmaschine logged out.");
    
}

if (selection =! 1 && selection =! 2 && selection =! 3 && selection =! 4){
    console.log("Bitte geben Sie eine gültige Aktion ein(1, 2, 3, 4)!");
}