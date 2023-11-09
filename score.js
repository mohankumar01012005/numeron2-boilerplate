// Iteration 8: Making scoreboard functional


let params = new URLSearchParams(window.location.search);

let score = params.get("score")


let scoreBoard = document.getElementById("score-board")
scoreBoard.textContent=score;


var playAgain = document.getElementById("play-again-button");
playAgain.addEventListener('click', ()=>{
  window.location.href = 'game.html'
})