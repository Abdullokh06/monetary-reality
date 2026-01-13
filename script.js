function checkAnswer() {
  const result = document.getElementById("result");
  const choice = document.querySelector('input[name="answer"]:checked');

  if (!choice) {
    result.textContent = "Choose an assumption first.";
    return;
  }

  if (choice.value === "creation") {
    result.innerHTML =
      "<strong>Accounting-consistent.</strong> The loan and deposit appear simultaneously as balance-sheet entries.";
  } else {
    result.innerHTML =
      "<strong>This assumption removes banks from the balance sheet.</strong> No accounting mechanism exists here that creates the deposit shown above.";
  }
}
