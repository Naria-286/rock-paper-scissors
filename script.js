let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {
    let random = Math.floor(Math.random() * 3) + 1
    switch(random) {
        case 1:
            return "rock"
        break
        case 2:
            return "paper"
        break
        case 3:
            return "scissors"
        break
    }
}
function getHumanChoice () {
    // let humanChoice = prompt("Your Choice: ")
    let humanChoice = "RoCk"
    return humanChoice.toLowerCase()
}

function checkWinner (a,b) {

}

function playRound(humanChoice,computerChoice) {
    return humanChoice + " " + computerChoice
}

const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

console.log(playRound(humanSelection,computerSelection) )