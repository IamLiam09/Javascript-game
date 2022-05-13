var playerscore = 0;
var computerscore = 0;
function computerplay(){
    const plays = ["Rock", "Paper", "Scissor"];
    return comp_outcome = plays[Math.floor(Math.random() * plays.length)];
}
// User input
var rock = document.getElementById("rock")
var paper = document.getElementById("paper")
var Scissor = document.getElementById("scissor")
rock.addeventlistener('click', print)
function print(e){
    console.log("man")
}
// User input function here
function playersselection(){
    const player_select = prompt("Rock, Paper, Scissor  ");
    return player_select;
}
// At random the computer plays
function playround(){
    const computer = computerplay();
    const player = playersselection();
    var compwin = "You Lose!"
    var playerwin = "You Win!"
    var same = "Draw"
    if(computer === "Rock" && player === "Scissor"){
        console.log( compwin + " Rock beats Scissors")
        computerscore++
    } else if (computer === "Paper" && player === "Rock"){
        console.log( compwin + " Paper beats Rock")
        computerscore++
    } else if(computer === "Scissor" && player === "Paper"){
        console.log( compwin + " Scissor beats Paper")
        computerscore++
    } else if(player === "Scissor" && computer === "Paper"){
        console.log(playerwin + " Scissor beats Paper")
        playerscore++
    } else if (player === "Paper" && computer === "Rock"){
        console.log(playerwin + " Paper beats Rock")
        playerscore++
    } else if(player === "Rock" && computer === "Scissor"){
        console.log(playerwin + " Rock beats Scissors")
        playerscore++
    } else if (computer === "Paper" && player === "Paper"){
        console.log(same)
    } else if (computer === "Rock" && player === "Rock"){
        console.log(same)
    } else if (computer === "Scissor" && player === "Scissor"){
        console.log(same)
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
// game()