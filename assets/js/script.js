var timerEl = document.getElementById('countdown');
var questionEl = document.getElementById('questions');
var answersEl = document.getElementById('quiz-area');
var startQuizBtn = document.getElementById('start-button');

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

function runQuiz()  {
    countDown();
}

startQuizBtn.addEventListener("click", runQuiz);