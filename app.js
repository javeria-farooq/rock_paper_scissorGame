let userScore = 0;
let compScore = 0;
const msg = document.querySelector(".msg")
const userScoreEle = document.querySelector("#userScore")
const compScoreEle = document.querySelector("#compScore")
let resetBtn = document.querySelector("#resetBtn")

const choices = document.querySelectorAll(".choice")

const drawGame = () => {
    // console.log("game was draw")
    msg.innerText = "Game was draw. Play again!"
    msg.classList.add("drawGameMsg")
    msg.classList.remove("loseGameMsg")
    msg.classList.remove("winGameMsg")
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++
        userScoreEle.innerText = userScore
        // console.log(`You won! Your ${userChoice} beats ${compChoice}`)
        msg.innerText = `You won! Your ${userChoice} beats ${compChoice}`
        msg.classList.remove("drawGameMsg")
        msg.classList.remove("loseGameMsg")
        msg.classList.add("winGameMsg")
    }

    else{
        compScore++
        compScoreEle.innerText = compScore
        // console.log(`You lost. ${compChoice} beats your ${userChoice}`)
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`
        msg.classList.remove("drawGameMsg")
        msg.classList.add("loseGameMsg")
        msg.classList.remove("winGameMsg")
    }
}

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"]
    const randomIdx = Math.floor(Math.random() * 3)
    return options[randomIdx]
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice()
    if(userChoice === compChoice) {
    //draw game
    //    let msg = document.querySelector(".msg")
    //    msg.classList.add("")
    //    msg.classList.remove("")
    drawGame()
    }

    else{
        let userWin = true
        if(userChoice === "rock") {
            //paper, scissor
            userWin = compChoice === "paper" ? false : true
        }

        else if(userChoice === "paper") {
            //comp choice = rock, scissor
            userWin = compChoice === "rock" ? true : false;
        }

        else{
            //comp choice = rock, paper
            userWin = compChoice === "rock" ? false: true
        }

        showWinner(userWin, userChoice, compChoice)
    }
}



choices.forEach((choice) => {
   choice.addEventListener("click", ()=> {
    const userChoice = choice.getAttribute("id")
    // console.log(`${userChoice} choice was clicked`)
    playGame(userChoice)
   })
})

resetBtn.addEventListener("click", () => {
    userScore = 0
    userScoreEle.innerText = userScore
    compScore = 0
    compScoreEle.innerText = compScore
    msg.classList.remove("drawGameMsg")
    msg.classList.remove("winGameMsg")
    msg.classList.remove("loseGameMsg")
    msg.innerText = "Play Your move"
})
