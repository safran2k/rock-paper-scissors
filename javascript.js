function getComputerChoice(){
    const choice = (Math.floor(Math.random()*3));
    return choice;
}

function choiceToText(choiceAsNumber){
    switch (choiceAsNumber) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
        default:
            return "Computer was unable to make a choice :/";
    }
}

function choiceToNumber(choiceAsWord) {
    choiceAsWord = choiceAsWord.toString().toUpperCase();
    switch (choiceAsWord) {
        case "ROCK":
            return 0;
            break;
        case "PAPER":
            return 1;
            break;
        case "SCISSORS":
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
            alert(`It was a draw! You both selected ${choiceToText(playerSelection)}`);
            break;
        case 1:
            alert(`The computer won! You selected ${choiceToText(playerSelection)} and the computer selected ${choiceToText(computerSelection)}!`);
            break;
        case 2:
            alert(`You won! You selected ${choiceToText(playerSelection)} and the computer selected ${choiceToText(computerSelection)}!`);
            break;
        default:
            break;
        }
        return matchResult;
    }

function getPlayerChoice(){
    let userInputChoice = prompt("Please enter your choice, you may select either Rock, Paper or Scissors");
    let choice = choiceToNumber(userInputChoice.toUpperCase());
    // console.log(choice);
    return choice;
}

function playRound() {
    const playerSelection = getPlayerChoice(),
        computerSelection = getComputerChoice();
    
    console.log(`player choice: ${choiceToText(playerSelection)}, \t computer choice: ${choiceToText(computerSelection)}`);
    return calculateWinner(playerSelection, computerSelection);
    
}

function game(){
    alert("You will now be playing 5 rounds of Rock Paper Scissors against the computer!");
    let wins = 0, draws = 0, losses = 0;
    for (let i=0; i<5; i++) {
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
    }
    let matchOutcome;
    if(wins != losses) {
        matchOutcome = wins > losses ? "won" : "lost";
    } else {
        matchOutcome = "drew";
    }
    alert(`You had ${wins} win${(wins==1 ? "" : "s")}, ${losses} loss${(losses==1 ? "" : "es")} and ${draws} draw${(draws==1 ? "" : "s")} with the computer! Overall you ${matchOutcome}!`);
    return `Game complete, user ${matchOutcome}`;
}