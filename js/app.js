'use strict';

console.log('app.js file is connected');

let questArray = [];
let userMagicAnswers = [];
const magicAnswers = ['Yes', 'No', 'Maybe'];
// links button to shakebutton variable
let stopButton = document.getElementById('stop');
let reshakeButton = document.getElementById('reshake');
let listButton = document.getElementById('showList');

function shakeAgain(){
  window.location.reload();
}

// retrieves data from local storage
let questRetrieve = localStorage.getItem('questions');

// prevents null from being in array
if(questRetrieve){
  console.log('not null local storage',questRetrieve);
  questArray = [];
  console.log('quest array empty',questArray);
  let questionArrayFromLS = JSON.parse(questRetrieve);
  console.log('what is this',questionArrayFromLS);
  for(let i = 0; i < questionArrayFromLS.length; i++){
    questArray.push(questionArrayFromLS[i]);
  }
}

// function to randomly generate an answer and display it
function randAnswer(){
  // stops the shaking
  let backBall = document.getElementById('backBall');
  backBall.removeAttribute('id');
  // calculates answer
  let actualAnswer = magicAnswers[Math.floor(Math.random() * magicAnswers.length)];
  userMagicAnswers.push(actualAnswer);
  // gives access to answer space in ball
  let ul = document.getElementById('answerSpace');
  ul.innerHTML = '';
  let li = document.createElement('li');
  // puts actual answer on li element
  li.textContent = actualAnswer;
  ul.appendChild(li);
  // puts text entered into variable questions
  let questions = document.getElementById('question').value;
  // adds questions to corresponding answer in new array
  let fullArray = questions.concat(' ', userMagicAnswers);
  console.log(fullArray, 'fullarray');
  // pushes question linked with answers in string to array for storage
  questArray.push(fullArray);

  setLocalStorage(questArray);
}

function setLocalStorage(){
  const questionString = JSON.stringify(questArray);
  localStorage.setItem('questions', questionString);
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
}

// assigns randAnswer func to button click through linked shakebutton
stopButton.addEventListener('click', randAnswer);
// assigns reshake to button
reshakeButton.addEventListener('click', shakeAgain);
listButton.addEventListener('click', getOldList);
