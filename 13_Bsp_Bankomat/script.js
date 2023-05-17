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

let isGameRunning = true;
let balance = 0;


console.log("Mit den folgenden Zahlen wählen Sie Ihre Aktionen aus.");
console.log("   1    Einzahlen");
console.log("   2    Abheben");
console.log("   3    Kontostand");
console.log("   4    Logout");

while(isGameRunning){
    let selectionOfUser = await readLineAsync();
    console.log("x" + selectionOfUser + " type:" + typeof(selectionOfUser));
    if (selectionOfUser == 1){
        console.log("Bitte geben Sie den einzuzahlenden Betrag ein.");
        let payment = await readLineAsync();
        balance = balance + parseFloat(payment);
        console.log("Ihr neuer Kontostand beträgt " + balance + " Euro.")
    }

    if (selectionOfUser == 2){
        console.log("Bitte geben Sie den abzuhebenden Betrag ein.");
        let payout = await readLineAsync();
        balance = balance - parseFloat(payout);
        console.log("Ihr neuer Kontostand beträgt " + balance + " Euro.")
    }

    if (selectionOfUser == 3){
        console.log("Ihr aktueller Kontostand beträgt " + balance + " Euro.");
    }

    if (selectionOfUser == 4){
        console.log("Cashmaschine logged out.");
        isGameRunning=false;
    }
}

readline.close();