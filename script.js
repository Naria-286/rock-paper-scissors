function playGame () {

    function getComputerChoice () {
        let random = Math.floor(Math.random() * 3) + 1
        switch(random) {
            case 1:
                return "rock"
            case 2:
                return "paper"
            case 3:
                return "scissors"
        }
    }

    function getHumanChoice (e) {
        let id = e.target.id
        switch(id) {
            case("rockBtn"):
                return "rock"
            case("paperBtn"):
                return "paper"
            case("scissorBtn"):
                return "scissor"
        }
    }

    function checkWinner (humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            return "--- DRAW! ---"
        // Human scissors
        } else if (humanChoice === "scissor"){
            if (computerChoice === "rock"){
                computerScore++
                return "YOU LOSE: your scissors gets crushed by rock"
            } else {
                humanScore++
                return "YOU WIN: your scissors cut paper"
            }
        // Human Paper
        } else if (humanChoice === "paper"){
            if (computerChoice === "scissors"){
                computerScore++
                return "YOU LOSE: your paper gets cut"
            } else {
                humanScore++
                return "YOU WIN: your paper wraps the rock"
            }
        // Human Rock
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

    const messageDisplay = document.querySelector("#message")
    let humanScore = 0;
    let computerScore = 0;

    function playRound(e) {
        let humanSelection = getHumanChoice(e)
        let computerSelection = getComputerChoice()
        
        let message = checkWinner(humanSelection,computerSelection)
        if (humanScore >= 5){ 
            message = "HUMAN WINS GAME"
        } 
        if (computerScore >= 5){
            message = "COMPUTER WINS GAME"
        }
        
        messageDisplay.textContent = `Score: ${humanScore}-${computerScore} ${message}`
        // console.log(`H:${humanSelection} C:${computerSelection}`)
    }


    // BUTTONS
    const selectionList = document.querySelectorAll("button")
    selectionList.forEach((button) => {
        button.addEventListener("click", playRound)
    })
    
}

playGame();