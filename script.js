var arr = [[], [], [], [], [], [], [], [], []];

for (var i = 0; i < 9; i++) {
  for (var j = 0; j < 9; j++) {
    arr[i][j] = document.getElementById(i * 9 + j);
  }
}

var board = [[], [], [], [], [], [], [], [], []];

function FillBoard(board) {
  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
      if (board[i][j] != 0) {
        arr[i][j].innerText = board[i][j];
      } else arr[i][j].innerText = "";
    }
  }
}

let GetPuzzle = document.getElementById("GetPuzzle");
let SolvePuzzle = document.getElementById("SolvePuzzle");

GetPuzzle.onclick = function () {
  var xhrRequest = new XMLHttpRequest();
  xhrRequest.onload = function () {
    var response = JSON.parse(xhrRequest.response);
    console.log(response);
    board = response.board;
    FillBoard(board);
  };
  //API from where we have fetched the board.
  xhrRequest.open("get", "https://sugoku.herokuapp.com/board?difficulty=easy");
  //We can change the difficulty of the puzzle. The allowed values of difficulty are easy, medium, hard and random.
  xhrRequest.send();
};

SolvePuzzle.onclick = () => {
  SudokuSolver(board, 0, 0, 9);
};

function isValid(board, i, j, num, n) {
  //Check for row.
  for (let col = 0; col < n; col++) {
    if (board[i][col] == num) return false;
  }

  //Check for column.
  for (let row = 0; row < n; row++) {
    if (board[row][j] == num) return false;
  }

  //Check for 3*3 board (sub-matrix)
  let rootN = Math.sqrt(n);
  let startI = i - (i % rootN);
  let startJ = j - (j % rootN);
  for (let a = startI; a < startI + rootN; a++) {
    for (let b = startJ; b < startJ + rootN; b++) {
      if (board[a][b] == num) return false;
    }
  }

  return true;
}

function SudokuSolver(board, i, j, n) {
  //Base Case
  if (i == n) {
    FillBoard(board);
    return true;
  }

  /* If we have crossed the last column of the board
	   then redirect to the next row. */
  if (j == n) return SudokuSolver(board, i + 1, 0, n);

  //If cell is already filled.
  if (board[i][j] != 0) return SudokuSolver(board, i, j + 1, n);

  //Let's try to fill the cell with an appropriate number.
  for (let num = 1; num <= 9; num++) {
    //Check whether the number we are trying to fill is valid or not.
    if (isValid(board, i, j, num, n)) {
      board[i][j] = num;
      let subAnswer = SudokuSolver(board, i, j + 1, n);

      if (subAnswer == true) return true;
      //Backtracking step : Undo the changes made
      else board[i][j] = 0;
    }
  }
  //When I checked all numbers and wasn't able to fill them.
  return false;
}
