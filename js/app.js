/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
//Creating random game global variable to store new instance of new Game class
let game ='';

//Getting dom elements be to be used in event listenrs below
const resetButton = document.getElementById('btn__reset');
const qwertyDiv = document.getElementById('qwerty');
const onScreenKeyBoard = qwertyDiv.querySelectorAll('button')

//Calls a new game when start game button is clicked
resetButton.addEventListener('click', function( ){
  game = new Game();
  game.startGame();
});

/*listens for any user activity when onscreem keyboard is clicked by user. If user
clicks click board the handleInteraction method in the Game class is called*/
qwertyDiv.addEventListener('click', (e) => {
let button = e.target;
if(button.className === 'key')
game.handleInteraction(button)
});

addEventListener('keydown', function (e) {
  let keyCode = e.keyCode;
  let keyToString = String.fromCharCode(keyCode)
  let lowerCaseKey = keyToString.toLowerCase();
  let button;
  for(let i = 0; i < onScreenKeyBoard.length; i++){
    if(onScreenKeyBoard[i].textContent === lowerCaseKey){
      button = onScreenKeyBoard[i]
    }
  }
  game.handleInteraction(button);
});

// addEventListener('keyup', function (e) {
//
// });
