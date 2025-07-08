// script.js

function watchVideo(url) {
  window.open(url, "_blank");
}

// Sample question
const question = {
  text: "What is -2 + 5?",
  options: ["-3", "3", "2"],
  correct: "3"
};

function startQuiz() {
  document.getElementById("quiz").classList.remove("hidden");
  document.getElementById("questionText").textContent = question.text;

  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  question.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => checkAnswer(option);
    answersDiv.appendChild(btn);
  });
}

function checkAnswer(selected) {
  if (selected === question.correct) {
    alert("✅ Correct! Well done.");
  } else {
    alert("❌ Not quite. Try watching the video again.");
  }
}
