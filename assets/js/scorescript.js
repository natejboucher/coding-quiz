var scoreParentEl = document.querySelector("#high-scores");

//pull player data from local storage
function createScoreEl()    {
//     var playerData = localStorage.getItem("highScores");

//     playerData = JSON.parse(playerData);
//     console.log(playerData);
    var playerData = JSON.parse(localStorage.getItem("highScores")) || [];
    for (var i = 0; i < playerData.length; i++)  {

        var scoreEl = document.createElement("li");
        scoreEl.textContent = playerData.initials + playerData.score;
        scoreParentEl.appendChild(scoreEl);
    }
}

//create score list elements
// function scoreListEl(playerData)    {
//     var scoreEl = document.createElement("li");
//     scoreEl.textContent = playerData.initials + playerData.score;
//     scoreParentEl.appendChild(scoreEl);
// }

createScoreEl();