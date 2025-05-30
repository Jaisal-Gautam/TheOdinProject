function createTicTacToeGame() {
    let gameBoard = [[], [], []];
    let moveSet = [0,1,2,3,4,5,6,7,8];
    let humanScore = 0;
    let computerScore = 0;

    function resetBoard() {
        gameBoard = [[], [], []];
        moveSet = [0,1,2,3,4,5,6,7,8];
    }

    function printBoard() {
        console.log(
            gameBoard.map(row => row.map(cell => cell || "-").join(" ")).join("\n")
        );
    }

    function checkWin(turn) {
        // Row check
        for (let i = 0; i < 3; i++) {
            if (gameBoard[i][0] === turn && gameBoard[i][1] === turn && gameBoard[i][2] === turn) return true;
        }

        // Column check
        for (let i = 0; i < 3; i++) {
            if (gameBoard[0][i] === turn && gameBoard[1][i] === turn && gameBoard[2][i] === turn) return true;
        }

        // Diagonal check
        if (
            (gameBoard[0][0] === turn && gameBoard[1][1] === turn && gameBoard[2][2] === turn) ||
            (gameBoard[0][2] === turn && gameBoard[1][1] === turn && gameBoard[2][0] === turn)
        ) {
            return true;
        }

        return false;
    }

    function humanMove() {
        let hMove = parseInt(prompt("Enter your move [0–8]:"));
        while (!moveSet.includes(hMove)) {
            hMove = parseInt(prompt("Invalid move! Enter a valid move [0–8]:"));
        }

        moveSet.splice(moveSet.indexOf(hMove), 1);
        if (hMove < 3) gameBoard[0][hMove] = "X";
        else if (hMove < 6) gameBoard[1][hMove - 3] = "X";
        else gameBoard[2][hMove - 6] = "X";
    }

    function computerMove() {
        let cMove = moveSet[Math.floor(Math.random() * moveSet.length)];
        moveSet.splice(moveSet.indexOf(cMove), 1);
        if (cMove < 3) gameBoard[0][cMove] = "O";
        else if (cMove < 6) gameBoard[1][cMove - 3] = "O";
        else gameBoard[2][cMove - 6] = "O";
        alert("Computer chose position: " + cMove);
    }

    function roundWinCheck() {
        if (checkWin("X")) {
            humanScore++;
            alert("You win this round!");
            return true;
        } else if (checkWin("O")) {
            computerScore++;
            alert("Computer wins this round!");
            return true;
        }
        return false;
    }

    function playGame() {
        for (let round = 1; round <= 5; round++) {
            alert("🔄 Starting Round " + round);
            resetBoard();

            let isWin = false;

            for (let i = 0; i < 9; i++) {
                printBoard();
                if (i % 2 === 0) humanMove();
                else computerMove();

                if (roundWinCheck()) {
                    isWin = true;
                    break;
                }
            }

            printBoard();

            if (!isWin) {
                alert("🤝 It's a draw!");
            }

            alert(`✅ Round ${round} complete.\n📊 Score: You ${humanScore} - ${computerScore} Computer`);
        }


        alert("🏁 Game Over!\nFinal Score:\nYou: " + humanScore + "\nComputer: " + computerScore);
        if (humanScore > computerScore) {
            alert("🎉 You win the game!");
        } else if (computerScore > humanScore) {
            alert("💻 Computer wins the game!");
        } else {
            alert("🤝 It's a draw overall!");
        }
    }

    return {
        playGame
    };
}


const game = createTicTacToeGame();
game.playGame();