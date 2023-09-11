//the line of code below generates a random number between 1 and 77. 
//77 and 8 are changable 
const randomNumber = Math.floor(Math.random() * 77) + 1;  

 //you can change the number below to change how many attempts the user gets
let remainingAttempts = 8;  

/*the below 3 line tell javascript to look through the HTML document that uses this script.
it will look for the elements which have the IDs in the bracket and store them in memeory
*/
const guessField = document.getElementById("guessField");
const guessSubmit = document.getElementById("guessSubmit");
const message = document.getElementById("message");
const imageContainer = document.getElementById("image-container")

/*
The remaining code below is the games logic. Once the user clicks the submit button this 
code checks to see if their attempt is correct and increases the number of attempts made by the user
*/

guessSubmit.addEventListener("click", function () {
  const userGuess = parseInt(guessField.value);
  if (userGuess === randomNumber) {
    
    message.textContent = "Congratulations! You guessed correctly!";
    imageContainer.style.display = "none";
      imageContainer.style.display = "block";
    guessSubmit.disabled = true;
  
  } else {
    remainingAttempts--;
    if (remainingAttempts === 0) {
      message.textContent = `Sorry, you've used all your attempts. The correct number was ${randomNumber}.`;
      guessSubmit.disabled = true;
      imageContainer.style.display = "none";
    } else {
      imageContainer.style.display = "none";
      const hint = userGuess < randomNumber ? "higher" : "lower";
      message.textContent = `Wrong guess. Try a ${hint} number. Remaining attempts: ${remainingAttempts}`;
    }
  }
});
