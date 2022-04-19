'use strict';

console.log('app.js file is connected');

// array of answers
const magicAnswers = ['Yes', 'no', 'maybe'];

let shakeButton = document.getElementById('shake');
// let ballAnswer = document.getElementById('answerSpace');

// assigns randanswer func to button click
shakeButton.addEventListener('click', randAnswer);

function randAnswer (){
  let ballAnswerIndexPos = Math.floor(Math.random() * magicAnswers.length);
  console.log(ballAnswerIndexPos, 'generated answer');
  let ul = document.getElementById('answerSpace');
  ul.innerHTML = '';
  let li = document.createElement('li');
  li.textcontent = ballAnswerIndexPos;


}
