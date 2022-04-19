'use strict';

console.log('app.js file is connected');

// array of answers
const magicAnswers = ['Yes', 'no', 'maybe'];

let shakeButton = document.getElementById('shake');
// let ballAnswer = document.getElementById('answerSpace');

// assigns randanswer func to button click
shakeButton.addEventListener('click', randAnswer);

function randAnswer (){

  console.log('button was clicked');

  let ballAnswerIndexPos = Math.floor(Math.random() * magicAnswers.length);

  console.log(ballAnswerIndexPos, 'generated answer index num');

  let actualAnswer = magicAnswers[ballAnswerIndexPos];

  console.log(actualAnswer, 'actual answer');

  let ul = document.getElementById('answerSpace');
  ul.innerHTML = '';
  let li = document.createElement('li');
  li.textContent = actualAnswer;
  ul.appendChild(li);


}
