document.addEventListener("click", function (e) {
  if (!e.target.classList.contains("quiz-btn")) return;

  const quiz = e.target.closest(".quiz");
  const result = quiz.querySelector(".quiz-result");
  const checked = quiz.querySelector("input[type='radio']:checked");

  if (!checked) {
    result.textContent = "Choose an option first.";
    return;
  }

  if (checked.value === "correct") {
    result.textContent = "Correct. This follows from balance-sheet mechanics.";
  } else {
    result.textContent = "No. Trace the balance sheets carefully.";
  }
});

// === App core state (v1.7) ===
const AppState = {
  mode: null // learn | debate | data
};
function enterLearnMode() {
  AppState.mode = "learn";
  window.location.href= "diagram.html";
}

function enterDebateMode() {
  AppState.mode = "debate";
  alert("Debate mode coming next. You will argue with the model.");
}

function enterDataMode() {
  AppState.mode = "data";
  alert("Data mode coming next. Balance sheets first.");
}
