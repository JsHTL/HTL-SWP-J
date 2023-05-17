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

let selection = true;
let balance = 1;


console.log("Mit den folgenden Zahlen wählen Sie Ihre Aktionen aus.");
console.log("   1    Einzahlen");
console.log("   2    Abheben");
console.log("   3    Kontostand");
console.log("   4    Logout");


while(selection){
    let selction = await readLineAsync();
    if (selction == 1){
        console.log("Bitte geben Sie den einzuzahlenden Betrag ein.");
        let payment = await readLineAsync();
        balance = balance + payment;
        console.log("Ihr neuer Kontostand beträgt " + balance + " Euro.")
    }

    if (selction == 2){
        console.log("Bitte geben Sie den abzuhebenden Betrag ein.");
        let payout = await readLineAsync();
        balance = balance - payout;
        console.log("Ihr neuer Kontostand beträgt " + balance + " Euro.")
    }

    if (selction == 3){
        console.log("Ihr aktueller Kontostand beträgt " + balance + " Euro.");
    }

    if (selction == 4){
        console.log("Cashmaschine logged out.");
        selection=false;
    }

/*if (selction != 1 && selection != 2 && selection != 3 && selection != 4){
    console.log("Bitte geben Sie eine gültige Aktion ein(1, 2, 3, 4)!");
}*/
}

readline.close();