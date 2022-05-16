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
var options = ["Rock", "Paper", "Scissors"];
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

//Game start 
let userWins=0;
let computerWins =0;
for(let i=0; i<5;i++){
    console.log("round "+ (i+1)) 

    playerInput= prompt("write in your choice: ")
    let loopVerifier = playerSelection(playerInput)     //ask for input and verify that it is not a invalid input
    while(loopVerifier===4){
        playerInput = prompt("Write a valid input")
        loopVerifier=playerSelection(playerInput)
    }


    winner = playRound(computerPlay(),playerSelection(playerInput)) //after every playRound , add the points to the computer or user depending on who won
    if(winner===true){ userWins++;}
    else if(winner===false){computerWins++}
    else{console.log("Tie")}


    console.log("")

}

// print the results
if(computerWins>userWins){ console.log("Computer wins the game")}
else if(userWins>computerWins){console.log("You win the game")}
else{console.log("The game is a tie\n")}

console.log("Your score: "+userWins+ "\n")
console.log("Computer score: "+computerWins)