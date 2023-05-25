let userScore = 0;
let compSCore =0;


function getComputerChoice() {
   const wordGame = [ 'rock','paper', 'scissors'];
   const randomNum = Math.floor(Math.random() * wordGame.length)
   return wordGame[randomNum]
}  


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
     return `You tied!. You both chose ${playerSelection}.` 
    } else if(playerSelection == 'scissors' & computerSelection == 'rock'){
        compSCore ++
        return 'You lost!!!. Rock beast scissors. '
    } else if(playerSelection == 'scissors' && computerSelection == 'paper'){
        userScore ++
        return 'You Won!!!. Scissors cut paper. '
    } else if(playerSelection == 'rock' && computerSelection == 'paper'){
        compSCore ++
        return 'You lose!!!. Paper rocks rock. '
    } else if(playerSelection == 'rock' && computerSelection == 'scissors'){
        userScore ++
        return 'You Won!!!. Rock breaks scissors. '
    } else if(playerSelection == 'paper' && computerSelection == 'scissors'){
        compSCore ++
        return 'You lose!!!. Scissors cuts paper. '
    } else if(playerSelection == 'paper' && computerSelection == 'rock'){
        userScore ++
        return 'You Won!!!. Paper owns rock. '
    }
}


function game() {
    for(let i =0; i < 5; i++) {
        const playerSelection = prompt("Pick your guess",'rock, paper, scissors' ).toLowerCase()
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection))
    }
    if (userScore > compSCore) {
        return "Human still run this shit !!!"  
    } else if (userScore < compSCore) {
        return "Computers are taking over mankind. "
    } else {
        return "It won't be long until AI takes over. "
    }
}
console.log(game())

