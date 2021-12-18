var timerEl = document.getElementById('countdown');
var questionEl = document.getElementById('questions');
var answersEl = document.getElementById('answers');
var startQuizBtn = document.getElementById('start-button');
var answerAlert = document.getElementById('response-text');

// question objects
var questionOne = {
    question: 'What does the term HTML stand for?',
    answerOne: 'Hyper Text Pre-processor.',
    correctAnswer: 'Hyper Text Markup Language.',
    answerThree: 'Hyper Text Multiverse.',
    answerFour: 'Hyper Text Multiple Language.'
};
var questionTwo = {
    question: 'A _____ is a binary varial that has two possible values called True or False',
    answerOne: 'Var.',
    answerTwo: 'Object.',
    answerThree: 'Array.',
    correctAnswer: 'Boolean.'
};
var questionThree = {
    question: 'What is the method of writing our Javascript code in plain english?',
    answerOne: 'A novel.',
    answerTwo: 'Markup Text.',
    correctAnswer: 'Pseudocode.',
    answerFour: 'Comments.'
}
var questionFour = {
    question: 'What is used to target HTML elements by ID in Javascript?',
    answerOne: 'appendChild.',
    answerTwo: 'getElementById',
    answerThree: 'querySelector',
    correctAnswer: 'Media Queries'
}
var questionFive = {
    question: 'Which of the following is NOT a Javascript eventListener property?',
    answerOne: 'click',
    answerTwo: 'mouseover',
    answerThree: 'mouseout',
    answerFour: ':hover'
}

//answer button handler
function answerBtnHandler(event)    {
    if (event.target.matches(".correct-btn")) {
        answerAlert.textContent = "Correct!"
    } else  {
        answerAlert.textContent = "Wrong!";
    }
}

// function to control countdown
function countDown()  {
    //set time left variable
    var timeLeft = 60;
    // set interval method 
    var timeInterval = setInterval(function()   {
        if (timeLeft > 1)   {
            timerEl.textContent = 'Time: ' + timeLeft;
            timeLeft--;
        } else  {
            timerEl.textContent = ' ';
            //exit the interval
            clearInterval(timeInterval);
        }
    }, 1000);
}


//function to reduce timer and display wrong answer

//function for first question
function firstQuestion()    {
    //display question
    questionEl.textContent = questionOne.question;

    //generate answer buttons
    var answerOneEl = document.createElement("button");
    answerOneEl.textContent = questionOne.answerOne;
    answerOneEl.className = "btn";
    answersEl.appendChild(answerOneEl);

    var correctAnswer = document.createElement("button");
    correctAnswer.textContent = questionOne.correctAnswer;
    correctAnswer.className = "btn correct-btn";
    answersEl.appendChild(correctAnswer);

    var answerThreeEl = document.createElement("button");
    answerThreeEl.textContent = questionOne.answerThree;
    answerThreeEl.className = "btn";
    answersEl.appendChild(answerThreeEl);

    var answerFourEl = document.createElement("button");
    answerFourEl.textContent = questionOne.answerFour;
    answerFourEl.className = "btn";
    answersEl.appendChild(answerFourEl);

    //function for selecting result from answerBtnHandler
    if ()  {
        console.log("This will load the next question");
    }
}
//function for second question

//function for third question

//function for fourth question

//function for fifth question

//function to remove "start quiz" button
function removeStartBtn()  {
    var taskSelected = document.querySelector('#start-button');
    taskSelected.remove();
}

// quiz function
function runQuiz()  {
    removeStartBtn();
    countDown();
    firstQuestion();
}
answersEl.addEventListener("click", answerBtnHandler);
startQuizBtn.addEventListener("click", runQuiz);