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
    const humanChoice = prompt("Your Choice: ")
    return humanChoice
}