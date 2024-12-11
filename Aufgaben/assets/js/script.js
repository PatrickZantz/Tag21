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

  checkAirQuality();
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

/*
  ##########  Zweiter Teil  #############
*/

function checkAlter() {
  const num = document.getElementById("checkAlterID").value;
  const ausgabe = document.querySelector(".checkAlter");

  // console.log(num + " ");
  if (num != null) {
    if (num < 18) ausgabe.textContent = "is drunna";
    else if (num > 18) ausgabe.textContent = "is drüwwa";
    else ausgabe.textContent = "is genau achtzäh";
  }
}

/**
 * Bei einer Qualität zwischen 8 und 10 soll das Ergebnis 'super' sein.  Bei einer Qualität zwischen 6 und 7 soll das Ergebnis 'gut' sein.  Bei einer Qualität zwischen 3 und 5 soll das Ergebnis 'okay' sein.  Bei einer Qualität zwischen 0 und 2 soll das Ergebnis 'schlecht'.
 */

function weather() {
  const num = document.getElementById("checkWetterID").value;
  const ausgabe = document.querySelector(".checkWetter");

  if (num < 3) ausgabe.textContent = "schlecht";
  else if (num < 6) ausgabe.textContent = "schon ok";
  else if (num < 8) ausgabe.textContent = "kamma lassn";
  else if (num < 0 || num > 10) ausgabe.textContent = "0-10 du idiot!";
}

function pruefeAlter(event) {
  event.preventDefault();
  const alter = document.getElementById("alter").value;
  const ergebnis = document.getElementById("ergebnis");

  if (alter >= 18) {
    ergebnis.textContent = "Sie dürfen Shisha rauchen.";
  } else {
    ergebnis.textContent = "Sie dürfen keine Shisha rauchen.";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // form = document.getElementById("verdoppelForm");
  // form.addEventListener("submit", function (event) {
  //   event.preventDefault();
  //   verdoppleMich();
  // });
  // form = document.getElementById("alterForm");
  // form.addEventListener("submit", function (event) {
  //   event.preventDefault();
  //   alter();
  // });
  // form = document.getElementById("diffForm");
  // form.addEventListener("submit", function (event) {
  //   event.preventDefault();
  //   diff();
  // });
});

function checkAirQuality() {
  const aqiValue = document.getElementById("aqi").value;
  document.getElementById("aqiValue").textContent = aqiValue;
  const result = document.getElementById("result");

  if (aqiValue == 0) {
    document.body.style.backgroundColor = "#FFFFFF";
    result.textContent = "Schieb mal den regler";
  } else if (aqiValue <= 50) {
    document.body.style.backgroundColor = "#90EE90";
    result.textContent = "Gut: Keine Gesundheitsgefährdung";
  } else if (aqiValue <= 100) {
    document.body.style.backgroundColor = "#FFFF00";
    result.textContent = "Mäßig: Geringe Gesundheitsgefährdung";
  } else {
    document.body.style.backgroundColor = "#FF6B6B";
    result.textContent = "Ungesund: Erhöhte Gesundheitsgefährdung";
  }
}

// Initial call to set default state

function test() {
  differenzZu27(35);
  differenzZu27(74);
  differenzZu27(123);
}

function differenzZu27(zahl) {
  let differenz = Math.abs(zahl - 27);

  if (zahl > 27) {
    differenz *= 2;
  }

  console.log(`Für die Zahl ${zahl} ist das Ergebnis: ${differenz}`);
}

// Testen der Funktion mit den gegebenen Zahlen
