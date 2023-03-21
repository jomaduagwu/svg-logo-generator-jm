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
        question: "Which of these is not an example of a primitive data type in JavaScript?",
        choices: ["String", "Array", "Boolean", "Number"],
        answer: "Array"
    },
    {
        question: "How do you create a function in JavaScript?",
        choices: ["function myFunction()", "function = myFunction()", "function:myFunction()"],
        answer: "function myFunction()"
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        choices: ["=", "x", "-", "*"],
        answer: "="
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
var timerInterval;

// select elements by id
var highScoreEl=document.getElementById("high-scores");
var timerEl=document.getElementById("timer");
var scoreEl=document.getElementById("score");
var timeEl=document.getElementById("time");
var finalScoreEl=document.getElementById("final-score");
var choiceBtns = document.querySelectorAll(".choices button");

// select elements by class
var quizContainer = document.querySelector(".quiz-container");
var questionEl = document.querySelector(".question");
var choicesEl = document.querySelector(".choices");
var resultsEl = document.querySelector(".results-container");

// user should be able to view high scores
// renderHighScores()

// add event listener for start button
var startBtn = document.querySelector(".start-button");
startBtn.addEventListener("click", startQuiz);

// on page load, want to hide the final score and form to input initials


// set a function to hide the quiz info and start the timer once the 'start quiz' button is selected
function startQuiz ()   {
    // hide quiz info once quiz is started
    var quizInfo = document.querySelector(".quiz-info");
    quizInfo.style.display = "none";
    // resultsEl.style.display="none"; //hide results container until the end of the quiz

    //start timer
    timerInterval = setInterval (function () {
        secondsLeft--;
        timerEl.textContent = "Time: " + secondsLeft;

        // end the quiz when the time runs out
        if(secondsLeft === 0) {
            timerEl.textContent = "Time: 0";
            //  stop the timer
            clearInterval(timerInterval);
            // call the endQuiz() function
            endQuiz();
            // stops execution of action set at interval
            // clearInterval(timerInterval);
            // sendMessage();
        }
    }, 1000);

    // display first question
    displayQuestion();
}

// function to display questions one at a time
function displayQuestion() {
    if (currentQuestionIndex < quizQuestions.length) {
        // get current question from the quizQuestions array
        var currentQuestion = quizQuestions[currentQuestionIndex];
        // display the question on the screen
        questionEl.textContent = currentQuestion.question;
        // display the answer choices on the screen
        choicesEl.innerHTML =  "";
        for (var i=0; i < currentQuestion.choices.length; i++) {
            var buttonEl   = document.createElement("button");
            buttonEl.textContent= currentQuestion.choices[i];
            choicesEl.appendChild(buttonEl);

        // add event listener to answer chocies
        buttonEl.addEventListener("click", function(event) {
            var selection = event.target.textContent;
            if (selection === currentQuestion.answer) {
                score += 10;
                scoreEl.textContent = "Score: " + score;
                alert ("Correct!");
            } else {
                secondsLeft -= 10;
                timerEl.textContent = "Time: " + secondsLeft;
                alert("Wrong!");
            }
            currentQuestionIndex++;
            displayQuestion();
        });
    };

} else {
    endQuiz();
    clearInterval(timerInterval);
    // resultsEl.style.display="display";
}
}


// function to end the quiz
function endQuiz () {
    // clearInterval(timerInterval);
    // stop displaying the questions and answer choices
    quizContainer.style.display = "none";
    choicesEl.style.display = "none";
    questionEl.style.display = "none";

    // show final score and save to local storage
    finalScoreEl.textContent = " " + score;
    
}

var submitBtn = document.querySelector("#submit");
var initials = document.querySelector("#initial");
var submit = localStorage.getItem("submit");
// initials.textContent = initials;
// score.textContent = score;
console.log(initials);

submitBtn.addEventListener("click", function (event){ 
    event.preventDefault();

    var initials = document.querySelector("#initial").value;
    var score = document.querySelector("#final-score").value;

    if (initials === "") {
        displayMessage("Error", "Initials cannot be blanj");
      } else {
        displayMessage("Success", "High Score saved successfully");

    localStorage.setItem("initials", initials);
    localStorage.setItem("score", score);
      }
}); 
// function renderHighScores () {
//     var initials = localStorage.getItem("initials");
//     var score = localStorage.getItem("score");

// }

// var submitBtn.addEventListener('click', function () {

// })
// time left shouldn't be displayed
// all done, final score and initials should only be displayed at the end of the quiz
// need to

// var initialsInput = document.querySelector("#initials");