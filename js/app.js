'use strict';

console.log('app.js file is connected');

// array of answers
const magicAnswers = ['Yes', 'No', 'Maybe'];

// links button to shakebutton variable
let shakeButton = document.getElementById('shake');

// assigns randAnswer func to button click through linked shakebutton
shakeButton.addEventListener('click', randAnswer);

// function to randomly generate an answer and display it
function randAnswer (){
  // console.log('button was clicked');
  let ballAnswerIndexPos = Math.floor(Math.random() * magicAnswers.length);
  let actualAnswer = magicAnswers[ballAnswerIndexPos];
  console.log(actualAnswer, 'actual answer');

  let ul = document.getElementById('answerSpace');
  ul.innerHTML = '';
  let li = document.createElement('li');
  li.textContent = actualAnswer;
  ul.appendChild(li);
}
