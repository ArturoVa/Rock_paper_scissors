var options = ["Rock", "Paper", "Scissors"]; //variables used to print the choice of player and computer
var imagesOptions = ['./images/rock paper scissors.webp', './images/lupin.webp','./images/pistol.webp', './images/gai-kakashi.gif', './images/gintama.gif'] //image options to display

// Checks if someone has already won
function checker(playerPoints,computerPoints){
    
    if(computerPoints>=5){
        buttons.forEach(x=>x.disabled=true);
        imagen.src="./images/chomp.gif"
        promptDiv.innerHTML = 'Bruh, you <span style="color:red; font-weight:900;">lost</span> to pc :(';
        counterDiv.remove();

    }
    else if(playerPoints>=5){
        buttons.forEach(x=>x.disabled=true);
        imagen.src="./images/win.gif"
        promptDiv.innerHTML = 'Congrats my man, you <span style="color:green; font-weight:900; font-family:Impact;">won</span>'
        + ' over that <span style="color:pink; font-weight:900; font-family:Impact;">little bastard</span> 😎';
        counterDiv.remove();
        
    }


}
//play one round 
function playRound(computerPlay,playerSelection){
    // this function is used to check who won 
    let result = computerPlay - playerSelection; 
    
    if(result === 0){ 
            return 0
    }
    if(result === -1 || result ===2){         // WIN 
            return 1
    }
    if (result === 1 || result ===-2){          //LOOSE
            return 2
    }
}

//Game function  
function initiateRound(playerSelection) {
    let computerChoice = Math.floor(Math.random()*3); 
    result = playRound(computerChoice, playerSelection);

    if(result === 0){
        promptDiv.textContent = "It is a Tie, you both chose " + options[playerSelection];
    }
    else if(result === 2){
        promptDiv.textContent = "You lost " + options[playerSelection] + " looses to " + options[computerChoice];
        computerPoints += 1;
    }
    else if(result === 1){
        promptDiv.textContent = "You win, " + options[playerSelection] + " wins over " +options[computerChoice];
        playerPoints +=1;
    }
    numberOfRound +=1;
    header1[0].textContent = `Round no.${numberOfRound}`
    counterDiv.textContent = `Player points:${playerPoints}     Computer points:${computerPoints}`;
    counterDiv.textContent = `Player points:${playerPoints}     Computer points:${computerPoints}`
    checker(playerPoints,computerPoints);

}


//points counter
let computerPoints= 0;
let playerPoints= 0;


//round counter 
let numberOfRound = 0;

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
const header1 = document.getElementsByClassName('head');

//random image displayer from ImageOptions
imagen.src=imagesOptions[Math.floor(Math.random()*imagesOptions.length)]


// buttons event listeners
btn_rock.addEventListener('click', () => {
    initiateRound(0)
});

/-------------------/

btn_paper.addEventListener('click', () => {
    initiateRound(1)
});

/-------------------/

btn_scissors.addEventListener('click', () => {
    initiateRound(2)
});