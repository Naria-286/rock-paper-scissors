function playGame () {

    function getComputerChoice () {
        let random = Math.floor(Math.random() * 3) + 1
        switch(random) {
            case 1:
                computerSelection = "rock"
            case 2:
                computerSelection = "paper"
            case 3:
                computerSelection = "scissors"
        }
    }

    //Temp "rock" placeholder
    function getHumanChoice () {
        let humanChoice = prompt("Your Choice: ")
        // let humanChoice = "RoCk"
        humanSelection = humanChoice
    }

    function checkWinner (humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            return "DRAW!"
        } else if (humanChoice === "scissors"){
            if (computerChoice === "rock"){
                computerScore++
                return "YOU LOSE: your scissors gets crushed by rock"
            } else {
                humanScore++
                return "YOU WIN: your scissors cut paper"
            }
        } else if (humanChoice === "paper"){
            if (computerChoice === "scissors"){
                computerScore++
                return "YOU LOSE: your paper gets cut"
            } else {
                humanScore++
                return "YOU WIN: your paper wraps the rock"
            }
        } else if (humanChoice === "rock"){
            if (computerChoice === "paper"){
                computerScore++
                return "YOU LOSE: your rock gets lose"
            } else {
                humanScore++
                return "YOU WIN: your rock break scissors"
            }
        }
    }

    function playRound(humanChoice,computerChoice) {
        humanChoice = humanChoice.toLowerCase()
        console.log(checkWinner(humanChoice,computerChoice))
        // console.log(`HUMAN:${humanChoice} COMPUTER:${computerChoice} SCORE:${humanScore}-${computerScore}`)
    }


    let humanScore = 0;
    let computerScore = 0;

    let humanSelection, computerSelection

    getHumanChoice()
    getComputerChoice()
    playRound(humanSelection,computerSelection)
    //2
    getHumanChoice()
    getComputerChoice()
    playRound(humanSelection,computerSelection)
    //3
    getHumanChoice()
    getComputerChoice()
    playRound(humanSelection,computerSelection)
    //4
    getHumanChoice()
    getComputerChoice()
    playRound(humanSelection,computerSelection)
    //5
    getHumanChoice()
    getComputerChoice()
    playRound(humanSelection,computerSelection)
}

playGame();