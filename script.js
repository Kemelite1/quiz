'use strict';

const questions = [
  {
    question: "Which country did Corona Virus start from?",
    options: [
      { text: "USA", correct: false },
      { text: "Ghana", correct: false },
      { text: "China", correct: true },
      { text: "Nigeria", correct: false },
    ],
  },

  {
    question: "What is a group of lions called?",
    options: [
      { text: "Group", correct: false },
      { text: "Company", correct: false },
      { text: "Pride", correct: true },
      { text: "Gang", correct: false },
    ],
  },

  {
    question: "Who was the first disney princess?",
    options: [
      { text: "Cinderella", correct: false },
      { text: "Ariel", correct: false },
      { text: "Snow White", correct: true },
      { text: "Barbie", correct: false },
    ],
  },

  {
    question: "Who is the the first avenger?",
    options: [
      { text: "Iron man", correct: false },
      { text: "Hulk", correct: false },
      { text: "Captain America", correct: true },
      { text: "Ant man", correct: false },
    ],
  },

  {
    question: "Who won the 2016 Ballon d'Or?",
    options: [
      { text: "Lionel Messi", correct: false },
      { text: "Neymar Jnr", correct: false },
      { text: "Cristiano Ronaldo", correct: true },
      { text: "Zlatan Ibrahimovic", correct: false },
    ],
  },
];


const scoreElement = document.querySelector('.score')
const questionElement = document.querySelector('.questions');
const optionsElement = document.querySelector(".options");
const listItems = document.querySelector(".list_items")
const optionsItems = document.querySelectorAll(".options_items")
const nextButton = document.querySelector(".btn");
const restartButton = document.querySelector('.restart');


let currentQuestionIndex = 0;  //tracking the questions
let score = 0; //tracking the scores
let checkOption = false; // to track whether an option has been selected or not

// updates the question and option elements with the content of the current question.
const loadQuestions = function(){
  questionElement.textContent = `${currentQuestionIndex + 1} .${questions[currentQuestionIndex]["question"]}`;
  for (let i = 0; i < 4; i++) {
    optionsItems[i].textContent = questions[currentQuestionIndex]["options"][i]["text"];
    optionsItems[i].style.backgroundColor = "#535455";
  }


}
//to control the display of elements
const display = function(Display){
   questionElement.style.display = Display;
   nextButton.style.display = Display;

   for (let i = 0; i < 4; i++) {
     optionsItems[i].style.display = Display;
   }
}

//updates the score element with the current score.
const scoreCard = function(currentScore){
  scoreElement.textContent = `${currentScore}/5`;

}

//change the background color of the option element at the specified index to the provided color.
const bgChange = function(bgColor, colorIndex){
  optionsItems[colorIndex].style.backgroundColor = bgColor;

}

/*
resets the currentQuestionIndex and score variables to 0
display the question and next button, update the score element
sets checkOption to false and calls the loadQuestions function
 */
restartButton.addEventListener("click", function(){
  currentQuestionIndex = 0;
  score = 0;
  display('block')
  scoreCard(score);
  checkOption = false;
  loadQuestions();
  
})

loadQuestions(); // to initially load the first question and its options onto the page.


for (let i = 0; i < 4; i++){
  optionsItems[i].addEventListener("click", function (){
    // Remove selection from all options
    for (let j = 0; j < 4; j++) {
      optionsItems[j].style.backgroundColor = "#535455";
    }

    if (questions[currentQuestionIndex]["options"][i]["correct"] === true) {
      checkOption = true;

      bgChange("green", i);
    } else {
      bgChange("red", i);
    }
  })
}
//adding eventlistener to the next button
nextButton.addEventListener('click', function(){
  // if the current question is the last question, hide the question and next button.
  if (currentQuestionIndex === questions.length - 1) {
    display("none");
  } else {
    if (checkOption === true) { //check if a correct answer was selected and do everything below
      score++;
    }
    currentQuestionIndex++;
    scoreCard(score);
    checkOption = false;
    loadQuestions(); //load the next question
  }
})




// console.log(questions[questions.length -1]);