'use strict';

console.log('app.js file is connected');

// Things I did
// 1. reorganize with globals on top and then functions then event listeners
// 2. Add if logic for null state of local storage
// 3. took local storage array into for loop to repopulate our questions array.
//4. Added an array for the user fortunes so you can code the question with the response, we can do this together in the morning.
//5. moved the local storage functionality to its own array. that we call from the randAnswer

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





let questRetrieve = localStorage.getItem('questions');

if(questRetrieve){
  console.log('not null local storage',questRetrieve);
  questArray = [];
  console.log('quest array empty',questArray);
  let questionArrayFromLS = JSON.parse(questRetrieve);
  console.log('what is this',questionArrayFromLS);
  for(let i = 0; i < questionArrayFromLS.length; i++){
    questArray.push(questionArrayFromLS[i]);
  }

  // console.log('From local storage into our for loop: ',questArray);
}








// function to randomly generate an answer and display it
function randAnswer(){
  // stops the shaking
  let backBall = document.getElementById('backBall');
  backBall.removeAttribute('id');
  // calculates answer
  let actualAnswer = magicAnswers[Math.floor(Math.random() * magicAnswers.length)];
  // console.log('actual answer: ', actualAnswer );
  userMagicAnswers.push(actualAnswer);
  // console.log('match the fortune to the questions' ,userMagicAnswers);
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

  let fullArray = questions.concat(' ', userMagicAnswers);
  console.log(fullArray, 'fullarray');

  // fullArray.join();

  questArray.push(fullArray);


  setLocalStorage(questArray);


}


function setLocalStorage(questionArray){
  console.log('array of asked questions',questionArray);

  const questionString = JSON.stringify(questArray);
  console.log('question stringify', questionString);
  localStorage.setItem('questions', questionString);
}





function getOldList(){
  let oldList = JSON.parse(localStorage.getItem('questions'));
  // gives access to answer space in ball


  console.log(oldList, 'old list');

  // for (let i = 0; i < oldList.length; i++) {
  //   let oldList[i]
  // }
  // console.log(userMagicAnswers, 'userMagicAnswers');
  // let fullList = userMagicAnswers.concat(oldList);
  // console.log(fullList, 'full list');



  let ul = document.getElementById('questSpace');
  ul.innerHTML = '';
  let li = document.createElement('li');
  // puts actual answer on li element
  li.textContent = oldList;
  ul.appendChild(li);
  // puts text entered into variable questions
  // let questions = document.getElementById('question').value;
}









// assigns randAnswer func to button click through linked shakebutton
stopButton.addEventListener('click', randAnswer);
// assigns reshake to button
reshakeButton.addEventListener('click', shakeAgain);
listButton.addEventListener('click', getOldList);
