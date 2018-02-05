let Letter = require('./constructLetter.js');

function Word(randomWord) {

  this.letters = [];

  this.guessedLetters = [];

	this.lives = 10;

  this.solution = '';

  this.isSolved = false;

  this.init = function() {
    
    for (let i=0; i<randomWord.length; i++) {

      let char = randomWord.charAt(i).toUpperCase();
      let pattern = /[a-zA-Z]/g;
      let letter = new Letter(char, i);

      if (!pattern.test(char)) {
        letter.guessed = true;
      }
      
      this.letters.push(letter);
      this.solution += char;
    }
  }
  
  this.init();

  this.display = function() {
    let characters = [];

    for (let i=0; i<this.letters.length; i++) {
      characters.push(this.letters[i].display());
    }

    console.log('\x1Bc');
    console.log('- - -~~~ Pokemon Hangman ~~~ - - -\n')
    console.log('\nThe mystery Pokemon name is: ' + characters.join(' ') + '\n');
    console.log("You have " + this.lives + " lives left\n");
  }

  this.guess = function(input) {

    input = input
      .replace(/\W|\d/g, '')
      .substr(0, 1)
      .toUpperCase();

    this.guessedLetters.push(input);

    let isInWord = false;
    this.isSolved = true; //temporarily set to true

    for (let i=0; i<this.letters.length; i++) {
      
      if (this.letters[i].value === input) {
        isInWord = true;
        this.letters[i].guessed = true;
      }

      if (this.letters[i].guessed === false) {
        this.isSolved = false; //will be re-set to false if not solved
      }
    }

    if (!isInWord) {
      this.lives--;
    }

    return this.isSolved;
  }
}

module.exports = Word;