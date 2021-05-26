'use strict';


let guessed = false; // Used in the 7'th question
let userAnswer = '';
let listElements = ''; // Used in the 7'th question
let numberOfCorrectAnswers = 0;

const favList = ['house m.d.', 'hannibal', 'the mentalist', 'mansaf', 'pizza']; // Used in the 7'th question
const rightAnswer = 'You guess it right'; // Used in the first 5 question
const wrongAnswer = 'You don\'t guess it right'; // Used in the first 5 question

// random() Code from : https://www.joshwcomeau.com/snippets/javascript/random/
const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const checkNumber = function (number) {
  if (!isNaN(number) && typeof number === 'number') {
    return true;
  }
  return false;
};

const validateNumber = function (number) {
  if (checkNumber(number)) {
    return number;
  } else {
    number = parseInt(prompt('Please sir enter a number between 0 and 10 (0 - 10)!'));
    return validateNumber(number);
  }
};

const getUserNumber = function () {
  const number = parseInt(prompt('Please sir enter a number between 0 and 10'));
  return validateNumber(number);
};

const printMessage = function (msg) {
  alert(msg);
};

const guessNumber = function () {
  const rand = random(0, 10);
  alert(rand);
  console.log(rand);
  let guessed = false;
  let number = 0;
  for (let attempts = 1; attempts <= 4 && !guessed; attempts++) {
    number = getUserNumber();
    if (number < rand) {
      printMessage('your guess is to low');
    }
    else if (number > rand) {
      printMessage('your guess is to high');
    } else {
      printMessage('You guess it right! number is : ' + number);
      guessed = true;
      numberOfCorrectAnswers++;
    }
  }

  if (!guessed)
    printMessage('Sorry sir you don\'t guess it number is : ' + number);
};


const checkAnswer = function (answer) {
  answer = answer.toLowerCase();
  if (answer === 'yes' || answer[0] === 'y') {
    return true;
  } else if (answer === 'no' || answer[0] === 'n') {
    return false;
  } else
    return checkAnswer(prompt('Please sir enter either "yes/y" or "no/n" !!'));
};



function qustion1() {
  userAnswer = prompt('Am i 27 years old? (yes/y or no/n)');
  // if 'yes' console.log("You guess it right"), if 'no' console.log("You don't guess it right");
  //checkAnswer(userAnswer) ? printMessage(rightAnswer) : printMessage(wrongAnswer);
  if (checkAnswer(userAnswer)) {
    printMessage(rightAnswer);
    numberOfCorrectAnswers++;
  } else
    printMessage(wrongAnswer);

}
function qustion2() {
  userAnswer = prompt('Am i a Civil Engineer? (yes/y or no/n)');
  // if 'yes' console.log("You don't guess it right"), if 'no' console.log("You guess it right");
  //checkAnswer(userAnswer) ? printMessage(wrongAnswer) : printMessage(rightAnswer);
  if (checkAnswer(userAnswer)) {
    printMessage(wrongAnswer);
  } else {
    printMessage(rightAnswer);
    numberOfCorrectAnswers++;
  }}
function qustion3() {
  userAnswer = prompt('Do i like Mansaf? (yes/y or no/n)');
  // if 'yes' console.log("You guess it right"), if 'no' console.log("You don't guess it right");
  //checkAnswer(userAnswer) ? printMessage(rightAnswer) : printMessage(wrongAnswer);
  if (checkAnswer(userAnswer)) {
    printMessage(rightAnswer);
    numberOfCorrectAnswers++;
  } else {
    printMessage(wrongAnswer);
  }
}
const userName = prompt('What is your name sir');
alert(`Hello ${userName} you are very welcome in our website!`);

function qustion4() {

  userAnswer = prompt('Do you think that i don\'t like TV-Shows? (yes/y or no/n)');
  // if 'yes' console.log("You don't guess it right"), if 'no' console.log("You guess it right");
  //checkAnswer(userAnswer) ? printMessage(wrongAnswer) : printMessage(rightAnswer);
  if (checkAnswer(userAnswer)) {
    printMessage(wrongAnswer);
  } else {
    printMessage(rightAnswer);
    numberOfCorrectAnswers++;
  }
}
qustion1();
qustion2();
qustion3();
qustion4();









userAnswer = prompt('Do i like Molokhia? (yes/y or no/n)');
// if 'yes' console.log("You don't guess it right"), if 'no' console.log("You guess it right");
//checkAnswer(userAnswer) ? printMessage(wrongAnswer) : printMessage(rightAnswer);
if (checkAnswer(userAnswer)) {
  printMessage(wrongAnswer);
} else {
  printMessage(rightAnswer);
  numberOfCorrectAnswers++;
}


// 6'th question
guessNumber();


// 7'th question

for (let attempts = 0; attempts < 6 && !guessed; attempts++) {
  if (!guessed && attempts === 0)
    userAnswer = prompt('Guess one of my favorite Movies, TV-Shows, Food.').toLowerCase(); // First attempt
  else if (!guessed && attempts > 0) {
    printMessage(`Sorry ${userAnswer} is not in the list attempts left : ${6 - attempts}`);
    userAnswer = prompt('Guess agine!').toLowerCase();
  }
  for (let index = 0; index < favList.length; index++) {
    if (userAnswer === favList[index]) {
      guessed = true;
      numberOfCorrectAnswers++;
      printMessage(`You guess it right, it's ${userAnswer}`);
      break;
    }
  }
}


for (let index = 0; index < favList.length; index++) {
  if (index + 1 !== favList.length)
    listElements += favList[index] + ', ';
  else
    listElements += favList[index];
}

printMessage('The correct answers are : ' + listElements);
printMessage('Your score is : ' + numberOfCorrectAnswers);

alert(`Thank you ${userName} for answering my questions!`);
