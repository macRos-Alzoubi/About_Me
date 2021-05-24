"use strict";

const printMessage = function (msg) {
  alert(msg);
};

const checkAnswer = function(answer){
  answer = answer.toLowerCase();
  if( answer === 'yes' || answer[0] === 'y'){
    return true;
  }
  return false;
}

const rightAnswer = "You guess it right";
const wrongAnswer = "You don't guess it right";
let userAnswer = '';

const userName = prompt("What is your name sir");
alert(`Hell ${userName} you are very welcome in our website!`);

userAnswer = prompt("Am i 27 years old? (yes / no)");
// if 'yes' console.log("You guess it right"), if 'no' console.log("You don't guess it right");
checkAnswer(userAnswer) ? printMessage(rightAnswer) : printMessage(wrongAnswer);

userAnswer = prompt("Am i a Civil Engineer? (yes / no)");
// if 'yes' console.log("You don't guess it right"), if 'no' console.log("You guess it right");
checkAnswer(userAnswer) ? printMessage(wrongAnswer) : printMessage(rightAnswer);

userAnswer = prompt("Do i like Mansaf? (yes / no)");
// if 'yes' console.log("You guess it right"), if 'no' console.log("You don't guess it right");
checkAnswer(userAnswer) ? printMessage(rightAnswer) : printMessage(wrongAnswer);

userAnswer = prompt("Do you think that i don't like TV-Shows? (yes / no)");
// if 'yes' console.log("You don't guess it right"), if 'no' console.log("You guess it right");
checkAnswer(userAnswer) ? printMessage(wrongAnswer) : printMessage(rightAnswer);

userAnswer = prompt("Do i like Molokhia? (yes / no)");
// if 'yes' console.log("You don't guess it right"), if 'no' console.log("You guess it right");
checkAnswer(userAnswer) ? printMessage(wrongAnswer) : printMessage(rightAnswer);

alert(`Thank you ${userName} for answering my questions!`);
