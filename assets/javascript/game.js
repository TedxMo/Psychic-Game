// function myFunction() {
   // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
    var computerChoices = 	['a','b','c','d','e'
						    ,'f','g','h','i','j'
						    ,'k','l','m','n','o'
						    ,'p','q','r','s','t'
						    ,'u','v','w','x','y','z'];
	var countLeft, userWin, userLose, usedLetter;
	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	console.log(computerGuess);
    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

      // Determines which key was pressed.
      var userGuess = event.key;

      // Randomly chooses a choice from the options array. This is the Computer's guess.

      

      countLeft = document.getElementById("count_left");
      userWin = document.getElementById("user-win");
      userLose = document.getElementById("user-lose");
      usedLetter = document.getElementById("used_letter");
      // computerGuess = document.getElementById("guess");
      
		
      
      if(computerChoices.indexOf(userGuess)!= -1){
      	countLeft.textContent = parseInt(countLeft.textContent) - 1 ;
      	usedLetter.textContent = usedLetter.textContent + userGuess;
      	if(userGuess === computerGuess){
      		countLeft.textContent = 10;
      		usedLetter.textContent = '';
      		userWin.textContent = parseInt(userWin.textContent) +1;
      		computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
      		console.log(computerGuess);
      	}
      	if(countLeft.textContent==0){
      		countLeft.textContent = 10;
      		usedLetter.textContent = '';
      		userLose.textContent = parseInt(userLose.textContent) +1;
      		computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
      		console.log(computerGuess);
      	}
      }

    }
// }
