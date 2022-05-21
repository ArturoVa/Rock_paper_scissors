var options = ["Rock", "Paper", "Scissors"]; //variables used to print the choice of player and computer
var imagesOptions = ['./images/rock paper scissors.webp', './images/lupin.webp','./images/pistol.webp', './images/gai-kakashi.gif', './images/gintama.gif'] //image options to display





function checker(playerPoints,computerPoints){
    
    if(computerPoints>=5){
        buttons.forEach(x=>x.disabled=true);
        imagen.src="./images/chomp.gif"
        promptDiv.textContent = 'Bruh, you lost to pc :('
    }
    else if(playerPoints>=5){
        buttons.forEach(x=>x.disabled=true);
        imagen.src="./images/win.gif"
        promptDiv.textContent = 'Congrats my man, you won over that little bitch'
    }


}
//play one round 
function playRound(computerPlay,playerSelection){
    // this function is used to check who won 
    var options = ["Rock", "Paper", "Scissors"];
    let result = computerPlay - playerSelection; 
    
    if(result === 0){ 
            return 0
    }
    if(result === -1 || result ===2){         
            return true
    }
    if (result === 1 || result ===-2){
            return false
    }
}

//Game functions  
function gameRock() {
    let computerChoice = Math.floor(Math.random()*3); 
    let playerSelection = 0 // 0 == rock
    return playRound(computerChoice,playerSelection);
}
function gamePaper() {
    let computerChoice = Math.floor(Math.random()*3);
    let playerSelection = 1 // 1 == paper
    console.log(playRound(computerChoice,playerSelection));
}
function gameScissors(){
    let computerChoice = Math.floor(Math.random()*3);
    let playerSelection = 2 // 2 == scissors
    return playRound(computerChoice,playerSelection);
}


//points counter
let computerPoints= 0;
let playerPoints= 0;

//buttons 
const btn_rock = document.querySelector("#Rock");
const btn_paper = document.querySelector("#Paper");
const btn_scissors = document.querySelector("#Scissors");
const buttons = document.querySelectorAll('.btn');

//image container
const imagen = document.getElementById("image") //image

// Divs that will be changed
const counterDiv = document.getElementById("counter")
const promptDiv = document.getElementById("teller")

//random image displayer from ImageOptions
imagen.src=imagesOptions[Math.floor(Math.random()*imagesOptions.length)]

btn_rock.addEventListener('click',function(){
    
    let result = gameRock();
    if(result === true){
        promptDiv.textContent = "It is a Tie, you both chose " +options[0];
    }
    else if(result === false){
        promptDiv.textContent = "You lost " +options[0] + " looses to " + options[1];
        computerPoints += 1;
    }
    else if(result === 0){
        promptDiv.textContent = "You win, " + options[0] + " wins over " +options[2];
        playerPoints +=1;
    }
    counterDiv.textContent = `Player point:${playerPoints}     Computer points:${computerPoints}`
    checker(playerPoints,computerPoints);
});



btn_paper.addEventListener('click',function(){
    
    let result = gameRock();
    if(result === true){
        promptDiv.textContent = "It is a Tie, you both chose " +options[1];

    }
    else if(result === false){
        promptDiv.textContent = "You lost " +options[1] + " looses to " + options[2];
        computerPoints += 1;
    }
    else if(result === 0){
        promptDiv.textContent = "You win, " + options[1] + " wins over " +options[0];
        playerPoints +=1;
    }
    counterDiv.textContent = `Player point:${playerPoints}     Computer points:${computerPoints}`
    checker(playerPoints,computerPoints);
});


btn_scissors.addEventListener('click',function(){
    
    let result = gameRock();
    if(result === true){
        promptDiv.textContent = "It is a Tie, you both chose " +options[2];

    }
    else if(result === false){
        promptDiv.textContent = "You lost " +options[2] + " looses to " + options[0];
        computerPoints += 1;
    }
    else if(result === 0){
        promptDiv.textContent = "You win, " + options[2] + " wins over " +options[1];
        playerPoints +=1;
    }
    counterDiv.textContent = `Player point:${playerPoints}     Computer points:${computerPoints}`;
    checker(playerPoints,computerPoints);
});
