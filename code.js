var playerscore = 0;
var computerscore = 0;
var compwin = "You Lose!"
var playerwin = "You Win!"
var same = "Draw"
// computer play
function computerplay(){
    const plays = ["Rock", "Paper", "Scissor"];
    comp_outcome = plays[Math.floor(Math.random() * plays.length)];
    return comp_outcome
}
// The overlay effect for when the player wins or loses
function playerwinoverlay(){ 
    document.getElementById("you_win").style.display = "block";
    setTimeout(Turnoffwin, 400)
} 
function compwinoverlay(){
    document.getElementById("you_lose").style.display = "block";
    setTimeout(Turnofflose, 400)
}
function draw(){
    document.getElementById("draw").style.display = "block";
    setTimeout(drawoff, 400)
}
// The turnoff for the overlay effect
function Turnoffwin(){
    document.getElementById("you_win").style.display = "none";
}
function Turnofflose(){
    document.getElementById("you_lose").style.display = "none";
}
function drawoff(){
    document.getElementById("draw").style.display = "none";
}
// Update the score board
function scoreboard(){
    const pscore = document.getElementById("pscore")
    const cscore = document.getElementById("cscore")
    pscore.textContent = playerscore
    cscore.textContent = computerscore
}
// User input
var rock = document.getElementById("rock")
var paper = document.getElementById("paper")
var scissor = document.getElementById("scissor")
var userrock = rock.addEventListener('click', buttonrock)
var userpaper = paper.addEventListener('click', buttonpaper)
var userscissor = scissor.addEventListener('click', buttonscissor)
// function for every click 
function buttonrock(){
    playerSelect = "Rock"
    var complay = computerplay()
    var ans = playround(playerSelect, complay)
    console.log(ans)
}
function buttonpaper(){
    playerSelect = "Paper"
    var complay = computerplay()
    var ans = playround(playerSelect, complay)
    console.log(ans)
}
function buttonscissor(){
    playerSelect = "Scissor"
    var complay = computerplay()
    var ans = playround(playerSelect, complay)
    console.log(ans)
}
// the game logic
function playround(playerselection, computerselection){
    var computerselection
    var playerselection 
    if(computerselection === "Rock" && playerselection === "Scissor"){
        computerscore++
        compwinoverlay()
        scoreboard()
       return(compwin + " Rock beats Scissors")
    } else if (computerselection === "Paper" && playerselection === "Rock"){
        computerscore++
        compwinoverlay()
        scoreboard()
       return(compwin + " Paper beats Rock")
    } else if(computerselection === "Scissor" && playerselection === "Paper"){
        computerscore++
        compwinoverlay()
        scoreboard()
       return(compwin + " Scissor beats Paper")
    } else if(playerselection === "Scissor" && computerselection === "Paper"){
        playerscore++
        playerwinoverlay()
        scoreboard()
       return(playerwin + " Scissor beats Paper")
    } else if (playerselection === "Paper" && computerselection === "Rock"){
        playerscore++
        playerwinoverlay()
       return(playerwin + " Paper beats Rock")
    } else if(playerselection === "Rock" && computerselection === "Scissor"){
        playerscore++
        playerwinoverlay()
        scoreboard()
       return(playerwin + " Rock beats Scissors")
    } else if (computerselection === "Paper" && playerselection === "Paper"){
        draw()
       return(same)
    } else if (computerselection === "Rock" && playerselection === "Rock"){
        draw()
       return(same)
    } else if (computerselection === "Scissor" && playerselection === "Scissor"){
        draw()
       return(same)
    }
}
// Break the game if the condition is met
function Winner(){
    var Total_score = 5
    if(playerscore === Total_score){
        console.log("Congrats, you deafeated a bot");
    } else if(computerscore === Total_score){
        console.log("You suck, You lost to a bot");
    }
}
// Run the game
// function game(){
//     for (i = 0; i < 20; i++){
//         playround()
//         Winner()
//         if(computerscore === 5 || playerscore === 5)break;
//     }
// }
// // playround()
// console.log(complay)

