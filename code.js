var playerscore = 0;
var computerscore = 0;
function computerplay(){
    const plays = ["Rock", "Paper", "Scissor"];
    return comp_outcome = plays[Math.floor(Math.random() * plays.length)];
}
// User input
var rock = document.getElementById("rock")
var paper = document.getElementById("paper")
var scissor = document.getElementById("scissor")
var userrock = rock.addEventListener('click', playround())
var userpaper = paper.addEventListener('click', playround())
var userscissor = scissor.addEventListener('click', playround())

// User input function here
// function playersselection(){
   
//     return player_select;
// }
// At random the computer plays
function playround(playerselection, computerselection){
    var computerselection
    var playerselection 
    var compwin = "You Lose!"
    var playerwin = "You Win!"
    var same = "Draw"
    if(computerselection === "Rock" && playerselection === "Scissor"){
        computerscore++
       return( compwin + " Rock beats Scissors")
    } else if (computerselection === "Paper" && playerselection === "Rock"){
        computerscore++
       return( compwin + " Paper beats Rock")
    } else if(computerselection === "Scissor" && playerselection === "Paper"){
        computerscore++
       return( compwin + " Scissor beats Paper")
    } else if(playerselection === "Scissor" && computerselection === "Paper"){
        playerscore++
       return(playerwin + " Scissor beats Paper")
    } else if (playerselection === "Paper" && computerselection === "Rock"){
        playerscore++
       return(playerwin + " Paper beats Rock")
    } else if(playerselection === "Rock" && computerselection === "Scissor"){
        playerscore++
       return(playerwin + " Rock beats Scissors")
    } else if (computerselection === "Paper" && playerselection === "Paper"){
       return(same)
    } else if (computerselection === "Rock" && playerselection === "Rock"){
       return(same)
    } else if (computerselection === "Scissor" && playerselection === "Scissor"){
       return(same)
    }
}
// Break the game if the condition is met
// function Winner(){
//     var Total_score = 5
//     if(playerscore === Total_score){
//         console.log("Congrats, you deafeated a bot");
//     } else if(computerscore === Total_score){
//         console.log("You suck, You lost to a bot");
//     }
// }
// Run the game
// function game(){
//     for (i = 0; i < 20; i++){
//         playround()
//         Winner()
//         if(computerscore === 5 || playerscore === 5)break;
//     }
// }
// playround()
// console.log(playersselection())
const playerSelect = "Rock";
const computerSelect = computerplay();
console.log(computerplay())
console.log(playerscore)
console.log(computerscore)
console.log(playround(playerSelect, computerSelect))
console.log(playerscore)
console.log(computerscore)
