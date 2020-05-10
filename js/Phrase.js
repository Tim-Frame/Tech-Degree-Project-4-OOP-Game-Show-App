/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
//Phrase class is declared
 class Phrase{
   constructor(phrase){

     this.phrase = phrase.toLowerCase();

   }
/* addPhraseToDisplay retrives phrase div from DOM
  The phrase to to be displayed on sreen is split into letters.
  A for loop create a series of <li> elements. Each letter from the phrases
  is passed into an <li> element. All <li> elements containg a chracter are assigned
  the class 'hide Letter with the corresponding letter and the text content of
  the <li> is assigned a letter. All <li> elements containing a space are assigned
  a class of 'space'. All newly created ,li elemnts are appended the 'phrase' <div>
  in the DOM.
*/
   addPhraseToDisplay(){
     const phraseDiv = document.getElementById('phrase').firstElementChild;
     let letterPhrases = this.phrase.split('');

     for(let i = 0; i < letterPhrases.length; i += 1){
       let li = document.createElement('li');
       if( letterPhrases[i] !== ' '){
         li.setAttribute(`class`, `hide letter ${letterPhrases[i]}`)
         li.innerHTML = letterPhrases[i];
         phraseDiv.appendChild(li)
       } else {
         li.setAttribute('class', 'space')
         li.innerHTML = '';
         phraseDiv.appendChild(li);
      }
    }
  }


/* checkLetter checks to see if the letter clicked on by a user is in the
  active Phrase. If so it returns true. If not it returns false*/
  checkLetter(letter){
    return this.phrase.includes(letter)
  }


/* showMatchedLetter method reveals the letter clicked on by a user if the said
letter is contained om the active phrase.  */
  showMatchedLetter(letter){
    const phraseDiv = document.getElementById('phrase')
    const liClass = phraseDiv.querySelectorAll('li')
    for(let i = 0; i < liClass.length; i++){
      if (liClass[i].className ===  `hide letter ${letter}`){
      liClass[i].className = `show letter`;
      }
    }



  }


}
