// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score

// array of objects with quiz questions, choices and answers
var quizQuestions = [
    {
        question: "What does HTML stand for?",
        choices: ["Hyper Text Modul Language", "Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language"],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "What does CSS stand for?",
        choices: ["Computer Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"],
        answer: "Cascading Style Sheets"
    },
    {
        question: "Which of the following HTML elements is used for creating an unordered list?",
        choices: ["<ui>", "<i>", "<li>", "<ul>"],
        answer: "<ul>"
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choices: ["<script>", "<javascript>", "<js>", "<section>"],
        answer: "<script>"
    },
    {
        question: "Arrays in JavaScript can be used to store ________",
        choices: ["multiple values in multiple variables", "multiple values in a single variable"],
        answer: "multiple values in a single variable"
    }
]


var secondsLeft = 60;
var score = 0;
var currentQuestionIndex = 0;
// var timerInterval;

// select elements by id
var highScoreEl=document.getElementById("high-scores");
var timerEl=document.getElementById("timer");
var scoreEl=document.getElementById("score");
var countdownEl=document.getElementById("countdown");
var timeEl=document.getElementById("time");
var finalScoreEl=document.getElementById("final-score");

// select elements by class
var quizContainer = document.querySelector(".quiz-container");
var questionEl = document.querySelector(".question");
var choicesEl = document.querySelector(".choices");

// add event listener for start button
var startBtn = document.querySelector(".start-button");
startBtn.addEventListener("click", startQuiz);


// set a function to hide the quiz info and start the timer once the 'start quiz' button is selected
function startQuiz ()   {
    // hide quiz info once quiz is started
    var quizInfo = document.querySelector(".quiz-info");
    quizInfo.style.display = "none";

    //start timer
    var timerInterval = setInterval (function () {
        secondsLeft--;
        timerEl.textContent = "Time: " + secondsLeft;

        // end the quiz when the time runs out
        if(secondsLeft === 0) {
            endQuiz();
            // stops execution of action set at interval
            // clearInterval(timerInterval);
            // sendMessage();
        }
    }, 1000);

    // display first question
    displayQuestion();
}

// function to display questions
function displayQuestion (){
    var currentQuestion = quizQuestions[currentQuestionIndex];
    quizContainer.textContent = currentQuestion.question;
    choicesEl.innerHTML = "";
    for (var i=0; i < currentQuestion.choices.length; i++) {
        var choiceBtn = document.createElement("button");
        choiceBtn.addEventListener("click", () => {
            if (choiceBtn.textContent === currentQuestion.answer) {
                score += 10;
                scoreEl.textContent = "Score: " + score;
            } else {
                time -= 10;
                timerEl.textContent = time;
            }
            currentQuestionIndex++;
            if (currentQuestionIndex < quizContainer.length) {
                displayQuestion();
            } else {
                endQuiz ()
            }
        });
        choicesEl.appendChild(choiceBtn);
    }
}
// function to end the quiz
function endQuiz () {
    // stop displaying the questions and answer choices
    quizContainer.style.display = "none";
    choicesEl.style.display = "none";

    // show final score and save to local storage
    finalScoreEl.textContent = "Your final score is " + score;
    var initials = initialsInput.value;
    localStorage.setItem(initials, score);
    
}





// function setTime (event) {
//     // prevent default action
//     event.preventDefault();
//     // sets interval in variable
//     var timerInterval = setInterval (function () {
//         secondsLeft--;
//         timeEl.textContent = "Time: " + secondsLeft;

//         if(secondsLeft === 0) {
//             // stops execution of action set at interval
//             clearInterval(timerInterval);
//             sendMessage();
//         };
//     }, 1000);
// }

// setTime();


