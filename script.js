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

}

function playRound(computerPlay,playerSelection){
    // this function is used to check who won 
    let result = computerPlay - playerSelection;
    const options = ["Rock", "Paper", "Scissors"] 
    if(result === 0){
            console.log("It is a Tie, you both chose " + options[computerPlay-1]);
    }
    if(result === -1 || result ===2){
            console.log("You win " +options[playerSelection-1]+ " beats " +options[computerPlay-1])
    }
    if (result === 1 || result ===-2){
            console.log("You lost " +options[playerSelection-1] + " looses to " + options[computerPlay-1])
    }
}

playRound(computerPlay() ,computerPlay());