var scoreParentEl = document.querySelector("#high-scores");

//pull player data from local storage and display on page.
function createScoreEl()    {
    var playerData = JSON.parse(localStorage.getItem("highScores")) || [];
    console.log(playerData);
    for (var i = 0; i < playerData.length; i++)  {

        var scoreEl = document.createElement("li");
        scoreEl.textContent = playerData[i].initials + " : " + playerData[i].score;
        scoreParentEl.appendChild(scoreEl);
    }
}
createScoreEl();