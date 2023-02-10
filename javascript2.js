let gameStatus = document.querySelector('#game-status');

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
    choiceAsWord = choiceAsWord.toString().toUpperCase();
    switch (choiceAsWord) {
        case "FIRE":
            return 0;
            break;
        case "WATER":
            return 1;
            break;
        case "GRASS":
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

function getPlayerChoice(){
    let userInputChoice = prompt("Please enter your choice, you may select either Fire, Water or Grass");
    let choice = changeChoiceToNumber(userInputChoice.toUpperCase());
    // console.log(choice);
    return choice;
}

function playRound() {
    const playerSelection = getPlayerChoice(),
        computerSelection = getComputerChoice();
    
    console.log(`player choice: ${changeChoiceToText(playerSelection)}, \t computer choice: ${changeChoiceToText(computerSelection)}`);
    return calculateWinner(playerSelection, computerSelection);
    
}

function game(){
    // alert("You will now be playing 5 rounds of Fire Water Grass against the computer!");
    console.log("You will now be playing 5 rounds of Fire Water Grass against the computer!");
    let wins = 0, draws = 0, losses = 0;
    // for (let i=0; i<5; i++) {
        let roundResult = playRound();
        switch (roundResult) {
            case 0:
                draws++;
                break;
            case 1:
                losses++;
                break;
            case 2:
                wins++;
                break;
            default:
                break;
            }
    // }
    let matchOutcome;
    if(wins != losses) {
        matchOutcome = wins > losses ? "won" : "lost";
    } else {
        matchOutcome = "drew";
    }
    // alert(`You had ${wins} win${(wins==1 ? "" : "s")}, ${losses} loss${(losses==1 ? "" : "es")} and ${draws} draw${(draws==1 ? "" : "s")} with the computer! Overall you ${matchOutcome}!`);
    console.log(`You had ${wins} win${(wins==1 ? "" : "s")}, ${losses} loss${(losses==1 ? "" : "es")} and ${draws} draw${(draws==1 ? "" : "s")} with the computer! Overall you ${matchOutcome}!`);
    return `Game complete, user ${matchOutcome}`;
}

function game2(playerSelection, computerSelection){
    // alert("You will now be playing 5 rounds of Fire Water Grass against the computer!");
    console.log("You will now be playing 5 rounds of Fire Water Grass against the computer!");
    let wins = 0, draws = 0, losses = 0;
    // for (let i=0; i<5; i++) {
        let roundResult = calculateWinner(playerSelection, computerSelection);
        switch (roundResult) {
            case 0:
                draws++;
                break;
            case 1:
                losses++;
                break;
            case 2:
                wins++;
                break;
            default:
                break;
            }
    // }
    let matchOutcome;
    if(wins != losses) {
        matchOutcome = wins > losses ? "won" : "lost";
    } else {
        matchOutcome = "drew";
    }
    // alert(`You had ${wins} win${(wins==1 ? "" : "s")}, ${losses} loss${(losses==1 ? "" : "es")} and ${draws} draw${(draws==1 ? "" : "s")} with the computer! Overall you ${matchOutcome}!`);
    console.log(`You had ${wins} win${(wins==1 ? "" : "s")}, ${losses} loss${(losses==1 ? "" : "es")} and ${draws} draw${(draws==1 ? "" : "s")} with the computer! Overall you ${matchOutcome}!`);
    return `Game complete, user ${matchOutcome}`;
}







const rpsSelectors = document.querySelectorAll('.rps-selector');
rpsSelectors.forEach(rps => rps.addEventListener('click', () => {
    console.log(`click: ${changeChoiceToNumber(rps.id)}`);
    const playerSelection = changeChoiceToNumber(rps.id);
    const computerSelection = getComputerChoice();
    let userWins = document.querySelector('#userWins');
    let computerWins = document.querySelector('#computerWins');

    let roundResult = calculateWinner(playerSelection, computerSelection);
    switch (roundResult) {
        // case 0:
        //     draws++;
        //     break;
        case 1:
            computerWins.textContent = (+computerWins.textContent+ 1);
            break;
        case 2:
            // userWins.textContent = +userWins.textContent++; //not sure why this doesnt work but the one below does
            userWins.textContent = (+userWins.textContent+ 1);
            break;
        default:
            break;
        }
}));

