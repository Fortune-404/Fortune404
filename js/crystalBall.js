'use strict';

//we need a constructor function for the category, then key value pairs for questions (array), responses (array), and a variable to store
//user input, might want to use class?

const loveQuestions = [
  null,
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
  '404: Not Found :('
];

const careerQuestions = [
  null,
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
  '404: Not Found :('
];

const generalQuestions = [
  null,
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
  'Don’t pursue happiness – create it.',
  '404: Not Found :('

];

let responseType = '';

const cballList = document.getElementById('cballList');

function renderResponse(){
  let randomLove = Math.floor(Math.random() * loveResponses.length);
  // console.log(randomLove);
  let randomCareer = Math.floor(Math.random() * careerResponses.length);
  // console.log(randomCareer);
  let randomGeneral = Math.floor(Math.random() * generalResponses.length);
  // console.log(randomGeneral);
  if (responseType === 'love'){
    // console.log('the response is:', loveResponses[randomLove]);
    cballList.innerHTML = loveResponses[randomLove];
  }
  if (responseType === 'career'){
    cballList.innerHTML = careerResponses[randomCareer];

  }
  if (responseType === 'general'){
    cballList.innerHTML = generalResponses[randomGeneral];
  }
}

// const onClickOption = new CustomEvent('clicky', {
//   bubbles: true,
// });

// function loveDropdown(){
//   responseType = 'love';
//   let dropContainer = document.getElementById('love-container');
//   // dropContainer.innerHTML = '';
//   let dropList = document.createElement('select');
//   // dropList.addEventListener('click', renderResponse);

//   for (let i = 0; i < loveQuestions.length; i++) {
//     let options = loveQuestions[i];
//     let dropOptions = document.createElement('option');
//     dropOptions.innerHTML = options;
//     dropList.appendChild(dropOptions);
//     // dropOptions.addEventListener('onclick');
//   }
//   dropContainer.appendChild(dropList);
// }

function loveDropdown(){
  responseType = 'love';
  let dropContainer = document.getElementById('love-container');
  //clear list each time
  dropContainer.innerHTML = '';
  let dropList = document.createElement('select');
  dropList.setAttribute('onChange', 'getValue(this);');
  //add id to select tag in html
  dropList.setAttribute('id', 'giveMeOptionsValue');
  for (let i = 0; i < loveQuestions.length; i++) {
    let dropOptions = document.createElement('option');
    //add value to options so that we can get the question from the select.
    dropOptions.setAttribute('value', loveQuestions[i]);

    let options = loveQuestions[i];
    dropOptions.innerHTML = options;
    dropList.appendChild(dropOptions);
  }
  dropContainer.appendChild(dropList);
  document.getElementById('loveButton').addEventListener('click', renderResponse);
}

function careerDropdown(){
  responseType = 'career';
  let dropContainer = document.getElementById('career-container');
  //clear list each time
  dropContainer.innerHTML = '';
  let dropList = document.createElement('select');
  dropList.setAttribute('onChange', 'getValue(this);');
  //add id to select tag in html
  dropList.setAttribute('id', 'giveMeOptionsValue');
  for (let i = 0; i < careerQuestions.length; i++) {
    let dropOptions = document.createElement('option');
    //add value to options so that we can get the question from the select.
    dropOptions.setAttribute('value', careerQuestions[i]);

    let options = careerQuestions[i];
    dropOptions.innerHTML = options;
    dropList.appendChild(dropOptions);
  }
  dropContainer.appendChild(dropList);
  document.getElementById('careerButton').addEventListener('click', renderResponse);
}

function generalDropdown(){
  responseType = 'general';
  let dropContainer = document.getElementById('general-container');
  //clear list each time
  dropContainer.innerHTML = '';
  let dropList = document.createElement('select');
  dropList.setAttribute('onChange', 'getValue(this);');
  //add id to select tag in html
  dropList.setAttribute('id', 'giveMeOptionsValue');
  for (let i = 0; i < generalQuestions.length; i++) {
    let dropOptions = document.createElement('option');
    //add value to options so that we can get the question from the select.
    dropOptions.setAttribute('value', generalQuestions[i]);

    let options = generalQuestions[i];
    dropOptions.innerHTML = options;
    dropList.appendChild(dropOptions);
  }
  dropContainer.appendChild(dropList);
  document.getElementById('generalButton').addEventListener('click', renderResponse);
}


function getValue(option) {
  console.log('option: ', option.value);
  document.getElementById('loveButton').style.display = 'block';
  document.getElementById('careerButton').style.display = 'block';
  document.getElementById('generalButton').style.display = 'block';
}



function onClickLove(){
  loveDropdown();
}

function onClickCareer(){
  careerDropdown();
}

function onClickGeneral(){
  generalDropdown();
}



// *cat is shorthand for category
let catLove = document.getElementById('clickLove');
catLove.addEventListener('click', onClickLove);

let catCareer = document.getElementById('clickCareer');
catCareer.addEventListener('click', onClickCareer);

let catGeneral = document.getElementById('clickGeneral');
catGeneral.addEventListener('click', onClickGeneral);
