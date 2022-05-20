var options = ["Rock", "Paper", "Scissors"];
function computerPlay(){
     // This function is the one that chooses what the computer is going to throw
     console.log("The computer chose: ")
    switch(Math.floor(Math.random()*3)+1){
        case 1:
            console.log("Rock");
            return 1;
            break;
            
        case 2:
            console.log("Paper");   
            return 2;
            break;
        case 3:
            console.log("Scissors");
            return 3;
            break;        
    }
}
function playerSelection(playerInput){// function to convert the input to numbers (used to check the result of the winner)
    playerInput= playerInput.trim();
    playerInput= playerInput.toLowerCase();
    switch(playerInput){
        case "rock":
            return 1
            break;
        case "paper":
            return 2;
            break;
        case "scissors":
            return 3;
            break;
        default:
            return 4;
            break;
    } 
}

function playRound(computerPlay,playerSelection){
    // this function is used to check who won 
    let result = computerPlay - playerSelection; 
    
    if(result === 0){ 
            console.log("It is a Tie, you both chose " + options[computerPlay-1]);
            return 0
    }
    if(result === -1 || result ===2){
            console.log("You win " +options[playerSelection-1]+ " beats " +options[computerPlay-1]);
            return true
    }
    if (result === 1 || result ===-2){
            console.log("You lost " +options[playerSelection-1] + " looses to " + options[computerPlay-1]);
            return false
    }
}

const btn_rock = document.querySelector("#Rock")
const btn_paper = document.querySelector("#Paper")
const btn_scissors = document.querySelector("#Scissors")

//Game start 
btn_paper.addEventListener('click',)



// print the results
