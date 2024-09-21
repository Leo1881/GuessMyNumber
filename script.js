'use strict';

//created the secret the number
let secretNumber = Math.floor(Math.random() * 20) + 1;

//created a score variable that gets updated depending on the user action
let score = 20;
let highScore = 0;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

//adding an event listener to a button, using the click parameter and a function
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //checking the variations of the number block and ajusting the error message
  //decreasing the score vlaue on each incorrect click and updating the dom
  if (!guess) {
    //document.querySelector('.message').textContent = '⛔️ No number!';
    displayMessage('⛔️ No number!');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '⬆️ Too high!' : '⬇️ Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('👎🏻 You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});

// //reading the content of the dome
// console.log(document.querySelector('.message').textContent);

// //changing the content of the text in the dom
// document.querySelector('.message').textContent = 'Correct number!';
// document.querySelector('.number').textContent = '8';
// document.querySelector('.score').textContent = '8';

// //changing the content of an ipout selector in the dom
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
