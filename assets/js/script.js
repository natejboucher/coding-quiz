var timerEl = document.getElementById('countdown');
var questionEl = document.getElementById('questions');
var answersEl = document.getElementById('quiz-area');
var startQuizBtn = document.getElementById('start-button');

// question objects
var questionOne = {
    question: 'What does the term HTML stand for?',
    answerOne: 'Hyper Text Pre-processor.',
    answerTwo: 'Hyper Text Markup Language.',
    answerThree: 'Hyper Text Multiverse.',
    answerFour: 'Hyper Text Multiple Language.'
};
var questionTwo = {
    question: 'A _____ is a binary varial that has two possible values called True or False',
    answerOne: 'Var.',
    answerTwo: 'Object.',
    answerThree: 'Array.',
    answerFour: 'Boolean.'
};
var questionThree = {
    question: 'What is the method of writing our Javascript code in plain english?',
    answerOne: 'A novel.',
    answerTwo: 'Markup Text.',
    answerThree: 'Pseudocode.',
    answerFour: 'Comments.'
}
var questionFour = {
    question: 'What is used to target HTML elements by ID in Javascript?',
    answerOne: 'appendChild.',
    answerTwo: 'getElementById',
    answerThree: 'querySelector',
    answerFour: 'Media Queries'
}
var questionFive = {
    question: 'Which of the following is NOT a Javascript eventListener property?',
    answerOne: 'click',
    answerTwo: 'mouseover',
    answerThree: 'mouseout',
    answerFour: ':hover'
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



//function to remove "start quiz" button
function removeStartBtn()  {
    var taskSelected = document.querySelector('#start-button');
    taskSelected.remove();
}

function runQuiz()  {
    removeStartBtn();
    countDown();
}

startQuizBtn.addEventListener("click", runQuiz);