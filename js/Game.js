/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
//Game class established
 class Game{
   constructor() {
     this.missed = 0;
     this.phrases = this.createPhrases();
     this.activePharse = null;
   }

/*Create phrases methods. creates 5 new Phrase elements using the phrase class and is
stored in this.phrases in the contructor method*/
   createPhrases() {
      let allPhrases =
        [
          new Phrase("be nice to nerds"),
          new Phrase("walk before running"),
          new Phrase("life is short"),
          new Phrase("i always eat my spinach"),
          new Phrase("be kind to strangers")
      ];
      return allPhrases;
    }

/*getRandomPhrase genreates a random number. The is used to select an a array by is
index number*/
   getRandomPhrase() {
      const randomPhrase = Math.floor(Math.random()* this.phrases.length);
      return this.phrases[randomPhrase];
    }


/*The startGame method hides the the 'overlay' <div> to reveal game.
  Calls a random phrase using getRandomPhrase.
  Displays text boxes on screen for the random phrase using the
  addPhraseToDisplay method from the Phrase Class
  */
   startGame() {
     const screenOverlay = document.getElementById('overlay');
    overlay.style.display = 'none'

     this.getRandomPhrase();

     this.activePhrase = new Phrase(this.getRandomPhrase().phrase);
     this.activePhrase.addPhraseToDisplay();
   }


  /*The checkForWin method.Checks to see if all the letters in the active phrase have
  beem guessed by a user. If so it returns true. If not it reveals false*/
   checkForWin() {
     const newArray = this.activePhrase.phrase.toString();
     const newNewArray = newArray.replace(" ", "").replace(" ", "").replace(" ", "").replace(" ", "");
     let testPhrase = [];
     let testPhraseMatch;

     // console.log(newNewArray);
     const phraseDiv = document.getElementById('phrase');
     const phraseClass = phraseDiv.querySelectorAll('li');
     for(let k = 0; k < phraseClass.length; k += 1){
          if(phraseClass[k].className === 'show letter' || phraseClass[k].className === "space") {
          testPhrase += phraseClass[k].textContent;
          testPhraseMatch = testPhrase.toString();
          }
       }
       // console.log(testPhraseMatch)
          if(newNewArray !== testPhraseMatch){
          return false;
          } else {
          return true;
          }
     }


/*The removeLife method is called each time a player incorreclty guesses a letter.
When a letter is incorreclty guessed the 1 is added to this.missed located in the game
class constuctor method and a life is removed from the players scoreboard.*/

     removeLife() {
       const scoreBoard = document.getElementById('scoreboard');
       const lives = scoreBoard.querySelectorAll('li img');
       this.missed +=1;
        if( this.missed === 1)
            for(let a = 0; a < 1; a++) {
            lives[a].src = 'images/lostHeart.png'
        } else if (this.missed === 2){
            for(let b = 0; b < 2; b++) {
            lives[b].src = 'images/lostHeart.png'
          }
      } else if ( this.missed === 3){
            for(let c = 0; c < 3; c++) {
            lives[c].src = 'images/lostHeart.png'
          }
      } else if (this.missed === 4){
            for(let d = 0; d < 4; d++) {
            lives[d].src = 'images/lostHeart.png'
          }
      } else if (this.missed === 5) {
            for(let e = 0; e < 5; e++) {
            lives[e].src = 'images/lostHeart.png'
            this.gameOver(false);
          }
        }
      }



/*The gameOver method checks to see  if a user has either correctlty guessed all
the letters in the active phrase. If so the overlay <div> is unhidden and the user is
shown a winning message. If user has incorreclty guesssed 5 times the overlay <div>
is unhidden and the user is shown a losing message. After each outcome the resetGame method is
called. */
      gameOver(gamewon) {
        const gameOverMessage = document.getElementById('game-over-message');
        const overlayDiv = document.getElementById('overlay');

        if( gamewon !== true) {
          overlayDiv.style.display = 'block';
          overlayDiv.className = 'lose';
          gameOverMessage.textContent = 'Sorry, better luck next time!'
          this.resetGame();
        } else {
          overlayDiv.style.display = 'block'
          overlayDiv.className = 'win'
          gameOverMessage.textContent = 'Winner!!! Winner!!! Chicken Dinner!!!'
          this.resetGame();
        }

      }
/*The handle interaction checks:
If the button clicked is in phrase-Checkletter()
reveals letter if so- showMatchedLetter.
The button class is changed depeding on user guess.
The clicked buttin is disabled.
checkForWin() is called to see if the game has been won.*/
      handleInteraction(button){
      if( this.activePhrase.checkLetter(button.textContent) === true){
        button.className = 'chosen';
        button.disabled = true;
        this.activePhrase.showMatchedLetter(button.textContent);
        if(this.checkForWin() === true){
          this.gameOver(true);
        }
      } else {
        button.className = 'wrong';
        this.removeLife();
      }

  }
/*The resetGame method  resets the game once the user has eiher won or los the game.
So when the 'Start Game' button is clicked again it is ready for the user*/
      resetGame(){
        const phraseDiv = document.getElementById('phrase');
        const phraseLi = phrase.querySelectorAll('li');
        const letterKeyDiv = document.getElementById('qwerty')
        const letterKey = letterKeyDiv.querySelectorAll('button');
        const scoreBoard = document.getElementById('scoreboard');
        const reUpLives = scoreBoard.querySelectorAll('li img');

        this.missed = 0;

        for( let f = 0; f < phraseLi.length; f++) {
            if(phraseLi.className !== 'tries')
            phraseLi[f].remove();
        }
        for( let g = 0; g < letterKey.length; g++){
          letterKey[g].disabled = false;
          letterKey[g].className= ('key')
        }

        for( let h = 0; h < reUpLives.length; h++){
          reUpLives[h].src = 'images/liveHeart.png'
        }

    }
}
