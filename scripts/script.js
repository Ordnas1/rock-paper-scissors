function computerPlay() {
    // Computes computer play
    // rock, paper, scissors is 0,1 and 2 respectively

    chosenPlay = Math.floor(Math.random() * 3); 

    switch(chosenPlay) {
        case 0:
        return "rock";
        case 1:
        return "paper";
        case 2: 
        return "scissor";
        default: 
        return "INVALID CASE";
        break;
    }
}

function appendRoundResult(roundNum, roundResult, victory = false) {
    
    const display = document.querySelector('#info-container');
    
    let roundResultDiv = document.createElement('div');
    let currentRound = document.createElement('p');

    roundResultDiv.style.cssText = 'border: black 1px solid;'
    
    currentRound.textContent = `Round ${roundNum}`

    if (!victory) {
        roundResultDiv.appendChild(currentRound).appendChild(roundResult);
        display.appendChild(roundResultDiv);
    } else {
        roundResultDiv.appendChild(roundResult);
        display.appendChild(roundResultDiv);
    }
  


}


function playRound(playerSelection, computerSelection, roundNum) {
      
    let roundResult = document.createElement('p');


    if (playerSelection == computerSelection) {
        roundResult.textContent = `Stalemate! ${playerSelection} cannot defeat ${computerSelection}`
        console.log("Stalemate"); 
    } else {
        switch (playerSelection) {
            case "rock":
                if (computerSelection == "scissor") {
                    roundResult.textContent = `You won! ${playerSelection} beats ${computerSelection}`
                    playerScore++
                    console.log("You won"); // Won state
                } else {
                    roundResult.textContent = `You lost! ${computerSelection} beats ${playerSelection}`
                    computerScore++
                    console.log ("You lose"); // loss State
                }
                break;
            case "paper":
                if (computerSelection == "scissor") {
                    roundResult.textContent = `You won! ${playerSelection} beats ${computerSelection}`
                    playerScore++
                    console.log("You won"); // Won state
                } else {
                    roundResult.textContent = `You lost! ${computerSelection} beats ${playerSelection}`
                    computerScore++
                    console.log ("You lose"); // loss State
                }
                break;
            case "scissor":
                if (computerSelection == "scissor") {
                    roundResult.textContent = `You won! ${playerSelection} beats ${computerSelection}`
                    playerScore++
                    console.log("You won"); // Won state
                } else {
                    roundResult.textContent = `You lost! ${computerSelection} beats ${playerSelection}`
                    computerScore++
                    console.log ("You lose"); // loss State
                }
                break;
            default:
                return -1;
                break;
                

        }
    }

    appendRoundResult(roundNum, roundResult)

}







var playerScore = 0, computerScore = 0;
let currentRound = 1;

let playerScoreDisplay = document.querySelector('#player-score')
let computerScoreDisplay = document.querySelector('#comp-score')

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (playerScore == 5 || computerScore == 5) return;

        playRound(button.id, computerPlay(), currentRound++);
        playerScoreDisplay.textContent = `Your score: ${playerScore}`;
        computerScoreDisplay.textContent = `Your rival's score: ${computerScore}`;

        if (playerScore == 5 || computerScore == 5) {
            let victoryText = document.createElement('p')
            if (playerScore == 5) {
                victoryText.textContent = `Congratulations, you win!`;
            } else {
                victoryText.textContent = 'You lose!';
            }

            appendRoundResult(currentRound, victoryText, true)
        }
    })
});




