var timerEl = document.getElementById('countdown');
var questionEl = document.getElementById('questions');
var answersEl = document.getElementById('answers');
var startQuizBtn = document.getElementById('start-button');
var answerAlert = document.getElementById('response-text');
var timeLeft = 60;
let i = 0;
var timeInterval;

// question objects array
const questions = [
{
    question: 'What does the term HTML stand for?',
    answerOne: 'Hyper Text Pre-processor.',
    answerTwo: 'Hyper Text Markup Language.',
    answerThree: 'Hyper Text Multiverse.',
    answerFour: 'Hyper Text Multiple Language.',
    correct: 'Hyper Text Markup Language.'
},
{
    question: 'A _____ is a binary varial that has two possible values called True or False',
    answerOne: 'Var.',
    answerTwo: 'Object.',
    answerThree: 'Array.',
    answerFour: 'Boolean.',
    correct: 'Boolean.'
},
{
    question: 'What is the method of writing our Javascript code in plain english?',
    answerOne: 'A novel.',
    answerTwo: 'Markup Text.',
    answerThree: 'Pseudocode.',
    answerFour: 'Comments.',
    correct: 'Pseudocode.'
},
{
    question: 'What is used to target HTML elements by ID in Javascript?',
    answerOne: 'appendChild.',
    answerTwo: 'getElementById',
    answerThree: 'querySelector',
    answerFour: 'Media Queries',
    correct: 'getElementById'
},
{
    question: 'Which of the following is NOT a Javascript eventListener property?',
    answerOne: 'click',
    answerTwo: 'mouseover',
    answerThree: 'mouseout',
    answerFour: ':hover',
    correct: ':hover'
}
];

//answer button handler
function answerBtnHandler(event)    {
    if (event.target.textContent === questions[i].correct) {
        answerAlert.textContent = "Correct!";
        i++;
        if (i === 5 || timeLeft === 0)  {
            clearInterval(timeInterval);
            endGame();
        } else {
            loadQuestion();
        }
    } else  {
        answerAlert.textContent = "Wrong!";
        reduceTimer();
    }
}

//end game function
function endGame()  {
    answersEl.innerHTML = "";
    questionEl.innerHTML = "";
    var nameForm = document.getElementById("test");
    nameForm.removeAttribute("class");
    

    var submitHighScore = document.createElement("button");
    submitHighScore.textContent = "Submit your score!";
    submitHighScore.className = "btn";
    submitHighScore.addEventListener("click", saveScore);
    answersEl.appendChild(submitHighScore);
}


// function to control countdown
function countDown()  {
    // set interval method 
    timeInterval = setInterval(function()   {
        if (timeLeft > 1)   {
            timerEl.textContent = '/time: ' + timeLeft;
            timeLeft--;
        } else  {
            timerEl.textContent = '0';
            //exit the interval
            clearInterval(timeInterval);
            endGame();
        }
    }, 1000);
}

//function to reduce timer
function reduceTimer()  {
    if (timeLeft > 10)  {
        timeLeft = (timeLeft - 10);
    }
}

//function for questions
function loadQuestion()    {
    answersEl.innerHTML = "";
    //display question
    questionEl.textContent = questions[i].question;
    //generate answer buttons
    var answerOneEl = document.createElement("button");
    answerOneEl.textContent = questions[i].answerOne;
    answerOneEl.className = "btn";
    answersEl.appendChild(answerOneEl);

    var correctAnswer = document.createElement("button");
    correctAnswer.textContent = questions[i].answerTwo;
    correctAnswer.className = "btn correct-btn";
    answersEl.appendChild(correctAnswer);

    var answerThreeEl = document.createElement("button");
    answerThreeEl.textContent = questions[i].answerThree;
    answerThreeEl.className = "btn";
    answersEl.appendChild(answerThreeEl);

    var answerFourEl = document.createElement("button");
    answerFourEl.textContent = questions[i].answerFour;
    answerFourEl.className = "btn";
    answersEl.appendChild(answerFourEl);
}

//function to remove "start quiz" button
function removeStartBtn()  {
    var taskSelected = document.querySelector('#start-button');
    taskSelected.remove();
}

//record high score function
function saveScore()  {
    var playerData = JSON.parse(localStorage.getItem("highScores")) || [];
    var initialsEl = document.getElementById("initials");
    var initials = initialsEl.value;
    var score = {
        initials: initials,
        score: timeLeft
    };
    playerData.push(score);
    localStorage.setItem("highScores", JSON.stringify(playerData));
    location.href = "highscores.html";
}

// quiz function
function runQuiz()  {
    removeStartBtn();
    countDown();
    loadQuestion();
}
answersEl.addEventListener("click", answerBtnHandler);
startQuizBtn.addEventListener("click", runQuiz);