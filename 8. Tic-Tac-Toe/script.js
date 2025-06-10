//     let gameBoard = [[], [], []];
//     let moveSet = [0,1,2,3,4,5,6,7,8];
//     let humanScore=0;
//     let computerScore=0;
//     let boardMove=document.querySelectorAll('.column')
//     let hMove;
    
//      boardMove.forEach(move=>{
//          move.addEventListener('click',()=>{
//              hMove=move.id;
//              moveSet.splice(moveSet.indexOf(parseInt(hMove)), 1);
//             if (hMove < 3) gameBoard[0][hMove] = "1";
//             else if (hMove < 6) gameBoard[1][hMove - 3] = "1";
//             else gameBoard[2][hMove - 6] = "1";
//             boardMove[hMove].innerHTML="X";
//             roundWinCheck();
//             computerMove();
//             roundWinCheck();
//          })

//      })


// function resetBoard(){
//     let gameBoard = [[], [], []];
//     let moveSet = [0,1,2,3,4,5,6,7,8];
// }

// function computerMove(){
//     let cMove = moveSet[Math.floor(Math.random() * moveSet.length)];
//          moveSet.splice(moveSet.indexOf(cMove), 1);
//          if (cMove < 3) gameBoard[0][cMove] = "O";
//          else if (cMove < 6) gameBoard[1][cMove - 3] = "O";
//          else gameBoard[2][cMove - 6] = "O";
//          boardMove[cMove].innerHTML="O"
// }

// function checkWin(turn) {
//          for (let i = 0; i < 3; i++) {
//              if (gameBoard[i][0] === turn && gameBoard[i][1] === turn && gameBoard[i][2] === turn) return true;
//              }

//          for (let i = 0; i < 3; i++) {
//              if (gameBoard[0][i] === turn && gameBoard[1][i] === turn && gameBoard[2][i] === turn) return true;
//          }

//          if (
//              (gameBoard[0][0] === turn && gameBoard[1][1] === turn && gameBoard[2][2] === turn) ||
//              (gameBoard[0][2] === turn && gameBoard[1][1] === turn && gameBoard[2][0] === turn)
//          ) {
//              return true;
//          }

//          return false;
//      }
     
// function roundWinCheck() {
//          if (checkWin("1")) {
//              humanScore++;
//              alert("You win this round!");
//              return true;
//          } else if (checkWin("O")) {
//              computerScore++;
//              alert("Computer wins this round!");
//              return true;
//          }
//          return false;
//      }

// function playGame() {
//          for (let round = 1; round <= 5; round++) {
//              alert("🔄 Starting Round " + round);
//              resetBoard();

//              let isWin = false;

//              for (let i = 0; i < 9; i++) {
//                  if (i % 2 === 0){
//                     computerMove();
//                     computerMoved++;
//                  } ;

//                  if (roundWinCheck()) {
//                      isWin = true;
//                      HumanScore.textContent=humanScore;
//                      ComputerScore.textContent=computerScore;
//                      break;
//                  }
//              }

            
//              if (!isWin) {
//                  alert("🤝 It's a draw!");
//              }

//          }
//         }


let gameBoard=[[],[],[]];
let moveSet=[0,1,2,3,4,5,6,7,8];
let humanScore=0;
let computerScore=0;
let hMove;
let score=document.querySelectorAll('.score');
let boardInput=document.querySelectorAll('.column');
    boardInput.forEach(move => {
        move.addEventListener('click',()=>{
            hMove=move.id;
            moveSet.splice(moveSet.indexOf(parseInt(hMove)), 1);
            if (hMove < 3) gameBoard[0][hMove] = "1";
            else if (hMove < 6) gameBoard[1][hMove - 3] = "1";
            else gameBoard[2][hMove - 6] = "1";
            boardInput[hMove].innerHTML="X";
            roundWinCheck();
            computerMove();
            roundWinCheck();
            if(humanScore==5){
                alert("Game Ended, You Won!!")
                gameReset();
            }else if(computerScore==5){
                alert("Game Ended, You Lost!!")
                gameReset();
            }

        })
    
    });


function checkWin(turn){
    for (let i = 0; i < 3; i++) {
              if (gameBoard[i][0] === turn && gameBoard[i][1] === turn && gameBoard[i][2] === turn) return true;
              }

          for (let i = 0; i < 3; i++) {
              if (gameBoard[0][i] === turn && gameBoard[1][i] === turn && gameBoard[2][i] === turn) return true;
          }

          if (
              (gameBoard[0][0] === turn && gameBoard[1][1] === turn && gameBoard[2][2] === turn) ||
              (gameBoard[0][2] === turn && gameBoard[1][1] === turn && gameBoard[2][0] === turn)
          ) {
              return true;
          }

          return false;
}

function roundWinCheck(){
    if(checkWin('1')){
        humanScore++;
        alert("You Won");
        boardReset();
        scoreUpdate();
    }else if(checkWin('O')){
        computerScore++;
        alert("Computer Won");
        boardReset();
        scoreUpdate();
    }else if(moveSet.length==0){
        alert("Its a draw");
        boardReset();
    }
}

function boardReset(){
    gameBoard=[[],[],[]];
    moveSet=[0,1,2,3,4,5,6,7,8];
    boardInput.forEach(move=>{
        move.innerHTML="";
    });

}
function scoreUpdate(){
    score[0].innerHTML=humanScore;
    score[1].innerHTML=computerScore;

}
function computerMove(){
     let cMove = moveSet[Math.floor(Math.random() * moveSet.length)];
          moveSet.splice(moveSet.indexOf(cMove), 1);
          if (cMove < 3) gameBoard[0][cMove] = "O";
          else if (cMove < 6) gameBoard[1][cMove - 3] = "O";
          else gameBoard[2][cMove - 6] = "O";
          boardInput[cMove].innerHTML="O"
}

function gameReset(){
    gameBoard=[[],[],[]];
    moveSet=[0,1,2,3,4,5,6,7,8];
    boardInput.forEach(move=>{
        move.innerHTML="";
    });
    humanScore=0;
    computerScore=0;
    score[0].innerHTML=humanScore;
    score[1].innerHTML=computerScore;

}