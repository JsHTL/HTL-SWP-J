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


let player;
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

function winner(){
    for (let row = 0; row < 3; row++) {
        if (field[row][0] !== 0 && field[row][0] === field[row][1] && field[row][1] === field[row][2]) {
            return field[row][0];
        }
      }
  
    for (let col = 0; col < 3; col++) {  
        if (field[0][col] !== 0 && field[0][col] === field[1][col] && field[1][col] === field[2][col]) {
            return field[0][col];
        }
    }
    
    if (board[0][0] !== 0 && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
        return board[0][0];
    }

    if (board[0][2] !== 0 && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
        return board[0][2];
    }
    return null;
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

var winCombinations = [field[0][0]&&field[0][1]&&field[0][2], field[1][0]&&field[1][1]&&field[1][2], field[2][0]&&field[2][1]&&field[2][2], field[0][0]&&field[1][1]&&field[2][2], field[2][2]&&field[1][1]&&field[2][0], field[0][0]&&field[1][0]&&field[2][0], field[0][1]&&field[1][1]&&field[2][1], field[0][2]&&field[1][2]&&field[2][2]];


function control(){
    if(selectionOfUser != [0][0] || selectionOfUser != [1][0]  || selectionOfUser != [2][0] || selectionOfUser != [0][1] || selectionOfUser != [1][1] || selectionOfUser != [2][1] || selectionOfUser != [0][2] || selectionOfUser != [1][2] || selectionOfUser != [2][2]);
}

readline.close();