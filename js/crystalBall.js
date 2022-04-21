'use strict';

//we need a constructor function for the category, then key value pairs for questions (array), responses (array), and a variable to store
//user input, might want to use class?

const loveQuestions = [
  'Will I meet my soulmate?',
  'Will I have children?',
  'How many children will I have?',
  'Will my children look like me?',
  'Will I get married?'
];

const loveResponses = [
  'There is great love in your future.',
  '“Sometimes the heart sees what is invisible to the eye.”',
  'Love yourself first and everything else falls into line.',
  'Look deep in your heart to find the answer.'
];

const careerQuestions = [];
const careerResponses = [];

const generalQuestions = [];
const generalResponses = [];

function loveDropdown(){

  let dropContainer = document.getElementById('love-container');
  let dropList = document.createElement('select');
  dropContainer.appendChild(dropList);
  //   console.log({loveQuestions});

  for (let i = 0; i < loveQuestions.length; i++) {
    let options = loveQuestions[i];
    let dropOptions = document.createElement('option');
    // console.log(dropOptions);
    dropOptions.innerHTML = options;
    dropList.appendChild(dropOptions);
    // console.log(dropOptions);
    // ! ADD THIS AFTER CSS IS FINISHED dropList.addEventListener('click', displayAnswer)
  }
}
function careerDropdown(){

  let dropContainer = document.getElementById('career-container');
  let dropList = document.createElement('select');
  dropContainer.appendChild(dropList);
  //   console.log({careerQuestions});

  for (let i = 0; i < careerQuestions.length; i++) {
    let options = careerQuestions[i];
    let dropOptions = document.createElement('option');
    // console.log(dropOptions);
    dropOptions.innerHTML = options;
    dropList.appendChild(dropOptions);
    // console.log(dropOptions);
    // dropList.addEventListener('click', displayAnswer)
  }
}

function generalDropdown(){

  let dropContainer = document.getElementById('general-container');
  let dropList = document.createElement('select');
  dropContainer.appendChild(dropList);
  //   console.log({generalQuestions});

  for (let i = 0; i < generalQuestions.length; i++) {
    let options = generalQuestions[i];
    let dropOptions = document.createElement('option');
    // console.log(dropOptions);
    dropOptions.innerHTML = options;
    dropList.appendChild(dropOptions);
    // console.log(dropOptions);
    // dropList.addEventListener('click', displayAnswer)
  }
}


function onClickLove(){
  let response = Math.floor(Math.random() * loveQuestions.length);
  console.log(response);
  loveDropdown();
}

function onClickCareer(){
  let response = Math.floor(Math.random() * careerQuestions.length);
  console.log(response);
  careerDropdown();
}

function onClickGeneral(){
  let response = Math.floor(Math.random() * generalQuestions.length);
  console.log(response);
  generalDropdown();
}



// *cat is shorthand for category
let catLove = document.getElementById('clickLove');
catLove.addEventListener('click', onClickLove);

let catCareer = document.getElementById('clickCareer');
catCareer.addEventListener('click', onClickCareer);

let catGeneral = document.getElementById('clickGeneral');
catGeneral.addEventListener('click', onClickGeneral);
