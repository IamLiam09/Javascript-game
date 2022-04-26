function computerplay(){
    const plays = ["Rock", "Paper", "Scissor"];
    return comp_outcome = plays[Math.floor(Math.random() * plays.length)];
}
function playersselection(){
    const player_select = prompt("Rock, Paper, Scissor  ");
    return player_select;
}
function playround(){
    const computer = computerplay();
    const player = playersselection();
    if(computer === "Rock" && player === "Scissor"){
        console.log("You Lose! Rock beats Scissors")
    } else if (computer === "Paper" && player === "Rock"){
        console.log("You Lose! Paper beats Rock")
    } else if(computer === "Scissor" && player === "Paper"){
        console.log("You Lose! Scissor beats Paper")
    } else if(player === "Scissor" && computer === "Paper"){
        console.log("You Win! Scissor beats Paper")
    } else if (player === "Paper" && computer === "Rock"){
        console.log("You Win! Paper beats Rock")
    } else if(player === "Rock" && computer === "Scissor"){
        console.log("You Win! Rock beats Scissors")
    }
}
function record(){
    if(playround === )
}
function computer_score{

}
function player_score{

}
for (i = 0, i < 5, i++){
    playround()
}
