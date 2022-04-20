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

// function Category(userInput, questions, responses){
//   this.userInput = userInput;
//   this.questions = [];
//   this.responses = [];



// }
function loveDropdown(){
    
}



function onClickLove(){
  let response = Math.floor(Math.random() * loveQuestions.length);
  console.log(response);

}

// *cat is shorthand for category
let catLove = document.getElementById('clickLove');
catLove.addEventListener('click', onClickLove);

// let catCareer = document.getElementById('clickCareer');
// catCareer.addEventListener('click', onClickCareer);

// let catGeneral = document.getElementById('clickGeneral');
// catGeneral.addEventListener('click', onClickGeneral);
