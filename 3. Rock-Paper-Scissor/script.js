 // Initialising Play Variables
 var humanChoice=''
 var hS=document.querySelector("#humanScore")
 var cS=document.querySelector("#computerScore")
 var result=document.querySelector("#result")
 let humanScore = 0;
 let computerScore = 0;
 
 // Taking output from PC
 function getComputerChoice() {
    r = Math.floor(Math.random() * 3);
    if (r == 0) {
        return 'rock';
    } else if (r == 1) {
        return 'paper';
    } else {
        return 'scissor';
    }
}
//Showing Score 
function Score(){
    hS.textContent=humanScore
    cS.textContent=computerScore
    
}
// Logic for Playing
function playRound(humanChoice, computerChoice) {
    computerChoice = getComputerChoice();

    if (humanScore==5 || computerScore==5){
        if (humanScore==5){
            result.textContent="You Won"

        }else{
            result.textContent="You Lose"
        }
    }else{
            if (humanChoice == 'rock') {
        if (computerChoice == 'paper') {
            result.textContent="You Lose!! Computer chose Paper"
            computerScore += 1
            Score()
        } else if (computerChoice == 'scissor') {
            result.textContent="You Win!! Computer chose Scissor"
            humanScore += 1
            Score()
        } else if (computerChoice == 'rock') {
            result.textContent="Draw!! Computer chose Rock"
            Score()
        }

    } else if (humanChoice == 'paper') {
        if (computerChoice == 'scissor') {
            result.textContent="You Lose!! Computer chose Scissor"
            computerScore += 1
            Score()
        } else if (computerChoice == 'rock') {
            result.textContent="You Win!! Computer chose Rock"
            humanScore += 1
            Score()
        } else if (computerChoice == 'paper') {
            result.textContent="Draw!! Computer chose Paper"
            Score()
        }
    } else if (humanChoice == 'scissor') {
        if (computerChoice == 'rock') {
            result.textContent="You Lose!! Computer chose Rock"
            computerScore += 1
            Score()
        } else if (computerChoice == 'paper') {
            result.textContent="You Win!! Computer chose Paper"
            humanScore += 1
            Score()
        } else if (computerChoice == 'scissor') {
            result.textContent="Draw!! Computer chose Scissor"
            Score()
        }
    }
    }
    
}


// Adding DOM methods to Play

var Rock=document.querySelector('#Rock')
Rock.addEventListener("click",()=>{
    humanChoice= "rock"
    playRound(humanChoice);


})
var Paper=document.querySelector('#Paper')
Paper.addEventListener("click",()=>{
    humanChoice= "paper"
    playRound(humanChoice);
})
var Scissor=document.querySelector('#Scissor')
Scissor.addEventListener("click",()=> {
    humanChoice= "scissor" ;
    playRound(humanChoice);   
})



