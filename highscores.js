const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScoresList.innerHTML = highScores
  .map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
  })
  .join("");

// Add event listener for reset button
document.getElementById("resetHighScores").addEventListener("click", () => {
  localStorage.removeItem("highScores"); // Clear high scores from local storage
  highScoresList.innerHTML = ""; // Clear high scores list from UI
});
