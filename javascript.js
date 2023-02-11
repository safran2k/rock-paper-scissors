let gameStatus = document.querySelector('#game-status');
const container = document.querySelector('#container');
const playAgain = document.querySelector('#play-again');
const overallWinner = document.querySelector('#overall-winner');
const maxRoundWins = 5;

function getComputerChoice(){
    const choice = (Math.floor(Math.random()*3));
    return choice;
}

function changeChoiceToText(choiceAsNumber){
    switch (choiceAsNumber) {
        case 0:
            return "Fire";
            break;
        case 1:
            return "Water";
            break;
        case 2:
            return "Grass";
            break;
        default:
            return "Computer was unable to make a choice :/";
    }
}

function changeChoiceToNumber(choiceAsWord) {
    switch (choiceAsWord) {
        case "fire":
            return 0;
            break;
        case "water":
            return 1;
            break;
        case "grass":
            return 2;
            break;
        default:
            return "Computer was unable to make a choice :/";
    }
}

function calculateWinner(playerSelection, computerSelection) {
    const matchResult = (computerSelection - playerSelection + 3)%3;
    // console.log("match result: " + matchResult);
    //The above formula efficiently calculates who won the round. If both numbers are equal we get 0,
    // if the computer is 1 step ahead in the Rock-Paper-Scissors chain then the computer wins, if 
    // it's 2 steps ahead (equivalent to 1 step behind), it loses.
    switch (matchResult) {
        case 0:
            gameStatus.textContent = (`It was a draw! You both selected ${changeChoiceToText(playerSelection)}`);
            break;
        case 1:
            gameStatus.textContent = (`The computer won! You selected ${changeChoiceToText(playerSelection)} and the computer selected ${changeChoiceToText(computerSelection)}!`);
            break;
        case 2:
            gameStatus.textContent = (`You won! You selected ${changeChoiceToText(playerSelection)} and the computer selected ${changeChoiceToText(computerSelection)}!`);
            break;
        default:
            break;
    }
    return matchResult;
}

function checkWinner(){
    if(+computerWins.textContent == maxRoundWins) {
        container.style.display = "none";
        playAgain.style.display = "block";
        overallWinner.style.display = "block";
        overallWinner.textContent = "OVERALL WINNER: CPU. You lose!";
    } else if (+userWins.textContent == maxRoundWins) {
        container.style.display = "none";
        playAgain.style.display = "block";
        overallWinner.style.display = "block";
        overallWinner.textContent = "OVERALL WINNER: You. Congratulations, you win!";
    }
}

// function showPlayAgain() {

// }


    
    let userWins = document.querySelector('#userWins');
    let computerWins = document.querySelector('#computerWins');
    const rpsSelectors = document.querySelectorAll('.rps-selector');
    rpsSelectors.forEach(rps => rps.addEventListener('click', () => {
        console.log(`click: ${changeChoiceToNumber(rps.id)}`);
        const playerSelection = changeChoiceToNumber(rps.id);
        const computerSelection = getComputerChoice();
        
        
        let roundResult = calculateWinner(playerSelection, computerSelection);
        switch (roundResult) {
            case 1:
                computerWins.textContent = (+computerWins.textContent+ 1);
            break;
            case 2:
                // userWins.textContent = +userWins.textContent++; //not sure why this doesnt work but the one below does
                userWins.textContent = +userWins.textContent+ 1;
            break;
            default:
            break;
        }
        checkWinner();
        
    }));
    
    playAgain.addEventListener('click', () => {
        playAgain.style.display = "none";
        overallWinner.style.display = "none";
        container.style.display = "flex";
        computerWins.textContent = 0;
        userWins.textContent = 0;
    });
