function checkAnswer(correctValue, resultId) {
  const inputs = document.querySelectorAll('input[type="radio"]');
  let selected = null;

  inputs.forEach(input => {
    if (input.checked) {
      selected = input.value;
    }
  });

  const result = document.getElementById(resultId);

  if (!selected) {
    result.textContent = "Choose an option before proceeding.";
    return;
  }

  if (selected === correctValue) {
    result.textContent =
      "Correct. This follows directly from balance sheet mechanics.";
  } else {
    result.textContent =
      "Think again. What must happen on balance sheets?";
  }
}
