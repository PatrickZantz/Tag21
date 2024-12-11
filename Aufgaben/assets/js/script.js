document.addEventListener("DOMContentLoaded", function () {
  form = document.getElementById("verdoppelForm");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    verdoppleMich();
  });

  form = document.getElementById("alterForm");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    alter();
  });

  form = document.getElementById("diffForm");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    diff();
  });
});

function verdoppleMich() {
  const number = document.getElementById("doppel").value;
  const result = number * 2;
  document.querySelector(".result").textContent = "Ergebnis: " + result;
}

function alter() {
  const number2 = document.getElementById("alter").value;
  const result2 = 2024 - number2;
  document.querySelector(".alterAusgabe").textContent =
    "Dein Alter is:" + result2;
}

function diff() {
  const alt1 = document.getElementById("alter1").value;
  const alt2 = document.getElementById("alter2").value;

  document.querySelector(".alterDiff").textContent =
    "Die Differenz ist: " + Math.abs(alt1 - alt2);
}
