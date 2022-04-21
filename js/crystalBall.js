'use strict';

//we need a constructor function for the category, then key value pairs for questions (array), responses (array), and a variable to store
//user input, might want to use class?

const loveQuestions = [
  'Will I meet my soulmate?',
  'Will I have children?',
  'How many children will I have?',
  'Will my children look like me?',
  'Will I get married?',
  'Will my soulmate be attractive?',
  'Will I marry rich?',
  'Will I marry my partner?',
  'Will I have a big wedding?',
  'Will I marry my boss?',
  'Will I marry someone famous?',
  'Will I be a good parent?',
  'Will I be a good partner?',
  'Will I marry royalty?',
  'Will I meet someone one on vacation?',
  'Will a past relationship be rekindled?',
  'How can I attract love into my life?',
  'Will my ex come back into my life?',
  'Will my broken heart mend?'
];

const loveResponses = [
  'There is great love in your future.',
  '“Sometimes the heart sees what is invisible to the eye.”',
  'Love yourself first and everything else falls into line.',
  'Look deep in your heart to find the answer.',
];

const careerQuestions = [
  'Will I have to work after I get married?',
  'Will I get a promotion?',
  'Will I be famous?',
  'Will I be rich?',
  'Where will I be in 5, 10 years?',
  'Will I retire early?',
  'Will I get my dream job?',
  'Will I be a pop star?',
  'Will I open my own business?',
  'Will my business be successful?',
  'Will I get a raise?',
  'What will my current job be like if I stay?',
  'Where will I be relocated, transferred, etc. / Will I work abroad?',
  'Should I go to college?',
  'Should I go to a trade school?',
  'Should I go to a coding bootcamp?',
  'Should I get a Masters?',
  'What new beginnings are waiting for me ahead?',
  'Am I in the right field/career path?',
  'How can I communicate more effectively with my colleagues?'
];
const careerResponses = [
  'I see great opportunities.',
  'You are your greatest asset.',
  'Cannot predict now.',
  'Without a doubt.',
  'You may rely on it.',
  'Signs point to yes.',
  'Believe in yourself and it will happen.',
  'Open yourself to the possibility and it will become your reality.',
  'If you can envision it, then it will be.',
  'I believe it 100% ',
  'Do what you love. The rest will fall into place.',
  'Unleash your inner potential and you will be unstoppable.',
];

const generalQuestions = [
  'What are my lucky numbers?',
  'What color is my aura?',
  'What is my destiny? ',
  'What can I do to live a healthy life?',
  'How can I attain inner peace?',
  'Who are my spirit guides?',
  'How can I connect with my spirit guides?',
  'How can I get more in tune with my intuition?',
  'What is my purpose in life?',
  'What does the universe want me to know right now?',
  'What opportunities should I be open to right now?',
  'What are my talents?',
  'How can I utilize my talents?'
];

const generalResponses = [
  'Yes, definitely.',
  'It is certain.',
  'It is decidedly so.',
  'Without a doubt.',
  'As I see it, yes.',
  'Most likely.',
  'Outlook is good.',
  'Signs point to yes.',
  'Reply hazy, try again.',
  'Ask again later.',
  'Better not tell you now.',
  'Cannot predict now.',
  'Concentrate and ask again.',
  'I see great opportunities.',
  'Good fortune is yours!',
  'Someone is thinking of you.',
  'Welcome change.',
  'You will have good luck today!',
  'Good news will come to you by text.',
  'New ideas could be profitable.',
  'Others can help you now.',
  'Soon life will become more interesting.',
  'A fresh start will put you on your way.',
  'A friend asks only for your time, not your money.',
  'There can only be one worst day ever, chances are it is not today.',
  'The early bird gets the worm, but the second mouse gets the cheese.',
  'A foolish man listens to his heart. A wise man listens to cookies.',
  'Don’t pursue happiness – create it.'

];

function randomResponse(){
  let randomLove = Math.floor(Math.random() * loveResponses.length);
  console.log(randomLove);
  let randomCareer = Math.floor(Math.random() * careerResponses.length);
  console.log(randomCareer);
  let randomGeneral = Math.floor(Math.random() * generalResponses.length);
  console.log(randomGeneral);
  
  if (targe){

  }



};


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
    dropOptions.addEventListener('click', randomResponse);
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
    dropOptions.addEventListener('click', randomResponse);
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
    dropOptions.addEventListener('click', randomResponse);
  }

  function renderResponse(){
    EventTarget.
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
