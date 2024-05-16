let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg =  document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genComputerChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText = "Game was a draw";
    msg.style.backgroundColor = "#7B4B94";
    msg.style.color = "#D6F7A3";
}
const showWinner= (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win ! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "#7D82B8";
        msg.style.color = "#D6F7A3";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose ! ${compChoice} beats your choice ${userChoice}`;
        msg.style.backgroundColor = "#B7E3CC";
        msg.style.color = "#7B4B94";
    }
}
const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    //generate cmp choice
    const compChoice = genComputerChoice();
    if(userChoice == compChoice){
        //draw
        drawGame();
    }else{
        let userWin = true;
        if(userChoice=== 'rock'){
            userWin = compChoice === 'paper' ? false: true;
        }else if(userChoice === 'paper'){
            userWin = compChoice ==='scissors' ? false: true;
        }else{
            userWin = compChoice === 'rock'? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

}
choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener('click', () => {
        //console.log('choice was clickes')
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})