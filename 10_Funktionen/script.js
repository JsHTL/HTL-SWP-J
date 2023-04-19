let a = 4;
let b = 7;


function add () {
    let c = a + b;
    console.log(c);
}

function subtract() {
    let d = a - b;
    console.log(d);
}

function multiply() {
    let e = a * b;
    console.log(e);
}

function supercalculation() {
    let f = ((a+b)/2) * a;
    console.log(f);
}

function printEasterDateOfTheYear(year) {
    let N = year - 1900;
    let A = N%19;
    let B = ((7*A+1)/19);
    let M = (11*A+4-B)%29;
    let Q = Math.floor (N/4);
    let W = (N+Q+31-M)%7;
    let P = Math.floor(25-M-W);
    if (P>0){
        console.log("Ostersonntag ist am " + P + ". April");
    } else {
        console.log("Ostersonntag ist am " + P + 31+ ". März");
    }
}

add();
subtract();
multiply();
supercalculation();
printEasterDateOfTheYear(2026);