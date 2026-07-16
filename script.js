let score = 0;

const button = document.querySelector("button");

const scoreText = document.getElementById("score");

button.addEventListener("click", () => {

  score++;

  scoreText.textContent = score;

});
