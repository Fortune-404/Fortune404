'use strict';

console.log('app.js file is connected');

// array of answers
const magicAnswers = ['Yes', 'No', 'Maybe'];

// links button to shakebutton variable
let stopButton = document.getElementById('stop');
// let answerButton = document.getElementById('backBall');

// assigns randAnswer func to button click through linked shakebutton
stopButton.addEventListener('click', randAnswer);

let reshakeButton = document.getElementById('reshake');
reshakeButton.addEventListener('click', shakeAgain);

// function to randomly generate an answer and display it
function randAnswer (){
  // console.log('button was clicked');

  let backBall = document.getElementById('backBall');
  backBall.removeAttribute('id');

  let ballAnswerIndexPos = Math.floor(Math.random() * magicAnswers.length);
  let actualAnswer = magicAnswers[ballAnswerIndexPos];
  console.log(actualAnswer, 'actual answer');

  let ul = document.getElementById('answerSpace');
  ul.innerHTML = '';
  let li = document.createElement('li');
  li.textContent = actualAnswer;
  ul.appendChild(li);
}
function shakeAgain(){
  // let secondBall = document.getElementsByClassName('backBall');
  // backBall.classList.remove('stop');
  window.location.reload();
}
