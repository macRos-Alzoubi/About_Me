const printMessage = function (msg) {
  alert(msg);
};

const rightAnswer = "You guess it right";
const wrongAnswer = "You don't guess it right";

const userName = prompt("What is your name sir");
alert(`Hell ${userName} you are very welcome in our website!`);

const age = confirm("Am i 27 years old");
age ? printMessage(rightAnswer) : printMessage(wrongAnswer);

const major = confirm("Am i a Civil Engineer?");
major ? printMessage(wrongAnswer) : printMessage(rightAnswer);

const favFood = confirm("Do i like Mansaf?");
favFood ? printMessage(rightAnswer) : printMessage(wrongAnswer);

const tvShows = confirm("Do you think that i don't like TV-Shows?");
tvShows ? printMessage(wrongAnswer) : printMessage(rightAnswer);

const molokhia = confirm("Do i like Molokhia?");
molokhia ? printMessage(wrongAnswer) : printMessage(rightAnswer);

alert(`Thank you ${userName} for answering my questions!`);
