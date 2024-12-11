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

function checkWinner (humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "Draw!"
    } else if (humanChoice === "scissors"){
        if (computerChoice === "rock"){
            return "YOU LOSE: your scissors gets crushed by rock"
        } else {
            return "YOU WIN: your scissors cut paper"
        }
    } else if (humanChoice === "paper"){
        if (computerChoice === "scissors"){
            return "YOU LOSE: your paper gets cut"
        } else {
            return "YOU WIN: your paper wraps the rock"
        }
    } else if (humanChoice === "rock"){
        if (computerChoice === "paper"){
            return "YOU LOSE: your rock gets lose"
        } else {
            return "YOU WIN: your rock break scissors"
        }
    }
}

function playRound(humanChoice,computerChoice) {
    console.log(checkWinner(humanChoice,computerChoice))
    console.log(`HUMAN:${humanChoice} COMPUTER:${computerChoice}`)
}

const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

console.log(playRound(humanSelection,computerSelection) )