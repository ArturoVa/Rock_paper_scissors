function computerPlay(){
     // This function is the one that chooses what the computer is going to throw
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
function playerSelection(playerInput){
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
            console.log("Invalid input");
            return 4;
            break;
    } 
}
var options = ["Rock", "Paper", "Scissors"]
function playRound(computerPlay,playerSelection){
    // this function is used to check who won 
    let result = computerPlay - playerSelection;
    
    if(result === 0){
             return "It is a Tie, you both chose " + options[computerPlay-1];
    }
    if(result === -1 || result ===2){
            return "You win " +options[playerSelection-1]+ " beats " +options[computerPlay-1];
    }
    if (result === 1 || result ===-2){
            return "You lost " +options[playerSelection-1] + " looses to " + options[computerPlay-1];
    }
}

let playerInput = prompt("This is rock paper scissors, write your choice: ", options[Math.floor(Math.random()*3)] )
console.log(playRound(computerPlay,playerSelection(playerInput)))