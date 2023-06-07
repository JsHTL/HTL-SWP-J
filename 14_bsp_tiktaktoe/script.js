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


let isTikTakToeRunning = true;

console.log("Please enter in this format: [0]-[2](row) und [0]-[2](colum). As an example in the top mid: [0][1]");

let field = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
];



printField();
control();

while(isTikTakToeRunning){
    let selectionOfUser = await readLineAsync();
    console.log("x" + selectionOfUser + " type:" + typeof(selectionOfUser));
    selctionOfUser
}

function printField(){
    for (let row = 0;row < field.length; row++) {
        let actualRow = field[row];
        let output = "";
        for (let col = 0; col < actualRow.length; col++) {
            let sign = "";
            if (actualRow[col]==1){
                sign = "X";
            } else if(actualRow[col]==2) {
                sign="O";
            } else if(actualRow[col]==0) {
                sign= " ";
            }

            output += sign + " | ";
        }
        console.log(output);
    }
}

function control(){
    
}

readline.close();