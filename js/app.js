'use strict';

console.log('app.js file is connected');
const questArray = [];
let questRetrieve = JSON.parse(localStorage.getItem('questions'));
// questArray.push(questRetrieve);
questRetrieve.push(questArray);
const magicAnswers = ['Yes', 'No', 'Maybe'];


// links button to shakebutton variable
let stopButton = document.getElementById('stop');
// assigns randAnswer func to button click through linked shakebutton
stopButton.addEventListener('click', randAnswer);
// assigns reshake to button
let reshakeButton = document.getElementById('reshake');
reshakeButton.addEventListener('click', shakeAgain);

let listButton = document.getElementById('showList');
listButton.addEventListener('click', getOldList);

// function to randomly generate an answer and display it
function randAnswer (){
  // stops the shaking
  let backBall = document.getElementById('backBall');
  backBall.removeAttribute('id');
  // calculates answer
  let actualAnswer = magicAnswers[Math.floor(Math.random() * magicAnswers.length)];
  console.log(actualAnswer, 'actual answer');
  // gives access to answer space in ball
  let ul = document.getElementById('answerSpace');
  ul.innerHTML = '';
  let li = document.createElement('li');
  // puts actual answer on li element
  li.textContent = actualAnswer;
  ul.appendChild(li);
  // puts text entered into variable questions
  let questions = document.getElementById('question').value;
  // pushes text string to array
  questArray.push(questions);

  const questionString =JSON.stringify(questRetrieve);
  localStorage.setItem('questions', questionString);
}

function shakeAgain(){
  // reloads page for game restart
  // let newBall = document.getElementsByClassName('newB');
  // newBall.setAttribute('id','backBall');
  // let questRetrieve = JSON.parse(localStorage.getItem('questions'));
  // questArray.push(questRetrieve);
  window.location.reload();
}
function getOldList(){
  let oldList = JSON.parse(localStorage.getItem('questions'));
    // gives access to answer space in ball
    let ul = document.getElementById('questSpace');
    ul.innerHTML = '';
    let li = document.createElement('li');
    // puts actual answer on li element
    li.textContent = oldList;
    ul.appendChild(li);
    // puts text entered into variable questions
    let questions = document.getElementById('question').value;
  }