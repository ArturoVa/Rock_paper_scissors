function playRound(computerPlay,playerSelection){
    // this function is used to check who won 
    var options = ["Rock", "Paper", "Scissors"];
    let result = computerPlay - playerSelection; 
    
    if(result === 0){ 
            console.log("It is a Tie, you both chose " + options[computerPlay]);
            return 0
    }
    if(result === -1 || result ===2){
            console.log("You win " +options[playerSelection]+ " beats " +options[computerPlay]);
            return true
    }
    if (result === 1 || result ===-2){
            console.log("You lost " +options[playerSelection] + " looses to " + options[computerPlay]);
            return false
    }
}
function gameRock() {
    let computerChoice = Math.floor(Math.random()*3);
    let playerSelection = 0
    console.log(playRound(computerChoice,playerSelection));
}
function gamePaper() {
    let computerChoice = Math.floor(Math.random()*3);
    let playerSelection = 1
    console.log(playRound(computerChoice,playerSelection));
}
function gameScissors(){
    let computerChoice = Math.floor(Math.random()*3);
    let playerSelection = 2
    console.log(playRound(computerChoice,playerSelection));
}

const btn_rock = document.querySelector("#Rock");
const btn_paper = document.querySelector("#Paper");
const btn_scissors = document.querySelector("#Scissors");
btn_rock.addEventListener('click',gameRock);
btn_paper.addEventListener('click',gamePaper);
btn_scissors.addEventListener('click',gameScissors);

//Game start 




// print the results
