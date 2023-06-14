import { createInterface } from "readline";

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const readLineAsync = () => {
  return new Promise((resolve) => {
    readline.question("", (userRes) => {
      resolve(userRes);
    });
  });
};

let player;
let isTikTakToeRunning = true;
let activePlayer = 0;

console.log(
  "Please enter in this format: [0]-[2](row) und [0]-[2](colum). As an example in the top mid: [0][1]"
);

let field = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

while (isTikTakToeRunning) {
  let selectionOfUser = await readLineAsync();
  let data = selectionOfUser.split("-");
  let row = parseInt(data[0]);
  let col = parseInt(data[1]);

  // chanbge Player
  changePlayer(row, col);
  printField();
  console.log(isThereAWinner());
}

function changePlayer(row, col) {
  if (activePlayer == 0) {
    console.log("in 0");
    field[row][col] = 1;
  } else {
    console.log("in 1");
    field[row][col] = 2;
  }
  activePlayer = activePlayer == 1 ? 0 : 1;
}

function isThereAWinner() {
  for (let row = 0; row < 3; row++) {
    if (
      field[row][0] !== 0 &&
      field[row][0] === field[row][1] &&
      field[row][1] === field[row][2]
    ) {
      console.log("Gewinner");
      return true;
    }
  }

    for (let col = 0; col < 3; col++) {
        if (
            field[0][col] !== 0 &&
            field[0][col] === field[1][col] &&
            field[1][col] === field[2][col]
        ) {
        console.log("Gewinner");
            return true;
       }
     }

     if (
       field[0][0] !== 0 &&
       field[0][0] === field[1][1] &&
       field[1][1] === field[2][2]
     ) {
      console.log("Gewinner");
      return true;
     }

     if (
       field[0][2] !== 0 &&
       field[0][2] === field[1][1] &&
       field[1][1] === field[2][0]
     ) {
      console.log("Gewinner");
      return true;
     }
     return null;
  return false;
}

// ok
function printField() {
  for (let row = 0; row < 3; row++) {
    let output = "";
    for (let col = 0; col < 3; col++) {
      let sign = "";
      if (field[row][col] == 1) {
        sign = "X";
      } else if (field[row][col] == 2) {
        sign = "O";
      } else if (field[row][col] == 0) {
        sign = " ";
      }

      output += sign + " | ";
    }
    console.log(output);
  }
}

var winCombinations = [
  field[0][0] && field[0][1] && field[0][2], field[1][0] && field[1][1] && field[1][2], field[2][0] && field[2][1] && field[2][2], field[0][0] && field[1][1] && field[2][2], field[2][2] && field[1][1] && field[2][0], field[0][0] && field[1][0] && field[2][0], field[0][1] && field[1][1] && field[2][1], field[0][2] && field[1][2] && field[2][2],
];

function control() {
  if (
    selectionOfUser != 0-0 || selectionOfUser != 1-0 || selectionOfUser != 2-0 || selectionOfUser != 0-1 || selectionOfUser != 1-1 || selectionOfUser != 2-1 || selectionOfUser != 0-2 || selectionOfUser != 1-2 || selectionOfUser != 2-2
  );
}

readline.close();
