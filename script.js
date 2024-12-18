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

    function getHumanChoice (e) {
        let selectionID = e.target.id
        switch(selectionID) {
            case("rockBtn"):
            console.log("rock")
                return "rock"
            case("paperBtn"):
            console.log("paper")
                return "paper"

            case("scissorBtn"):
                console.log("scissor")
                return "scissor"
        }
    }

    function checkWinner (humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            return "DRAW!"
        // Human scissors
        } else if (humanChoice === "scissors"){
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

    function playRound(humanChoice,computerChoice) {
        humanChoice = humanChoice.toLowerCase()
        console.l
        //Temp "rock" placeholderog(checkWinner(humanChoice,computerChoice))
        // console.log(`HUMAN:${humanChoice} COMPUTER:${computerChoice} SCORE:${humanScore}-${computerScore}`)
    }

    const selectionList = document.querySelectorAll("button")
    selectionList.forEach((button) => {
        button.addEventListener("click", getHumanChoice)
    })
// structure of playing a round 
    let humanScore = 0;
    let computerScore = 0;

    let humanSelection, computerSelection

    
    // getHumanChoice()
    // getComputerChoice()
    // playRound(humanSelection,computerSelection)
 
}

playGame();