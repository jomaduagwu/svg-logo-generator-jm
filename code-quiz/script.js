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

// selects element by id
var timeEl=document.getElementById("timer");

var secondsLeft = 60;

function setTime (event) {
    // prevent default action
    event.preventDefault();
    // sets interval in variable
    var timerInterval = setInterval (function () {
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft;

        if(secondsLeft === 0) {
            // stops execution of action set at interval
            clearInterval(timerInterval);
            sendMessage();
        };
    }, 1000);
}

// setTime();

var startQuiz = document.querySelector(".start-button");

// start timer on 'start quiz' click
startQuiz.addEventListener("click", setTime);

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