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
            console.log("Paper");
            return 3;
            break;        
    }
}

function playRound(){

}

computerPlay();