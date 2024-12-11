document.addEventListener("DOMContentLoaded", function () {
  let n1 = null;
  let operator = null;
  let n2 = null;
  let isNewCalculation = true;

  function verdoppleMich() {
    const keys = document.querySelector(".number").valueAsNumber;
    test = document.querySelector("#login-feedback");
    test.textContent = keys * keys;

    console.log(keys);
  }

  const calculator = document.querySelector(".calculator");
  if (calculator) {
    const keys = calculator.querySelector(".calculator__keys");
    const display = calculator.querySelector(".calculator__display");
    const result = calculator.querySelector(".result");

    if (keys && display) {
      keys.addEventListener("click", (e) => {
        if (e.target.matches("button")) {
          const key = e.target;

          const action = key.dataset.action;
          const keyContent = key.textContent;
          const displayedNum = display.textContent;

          if (!action) {
            if (isNewCalculation) {
              display.textContent = keyContent;
              result.textContent = keyContent;

              isNewCalculation = false;
            } else {
              display.textContent = displayedNum + keyContent;
              result.textContent = displayedNum + keyContent;
            }
          }

          if (action === "decimal") {
            if (!displayedNum.includes(".")) {
              display.textContent = displayedNum + ".";
            }
          }

          if (
            action === "add" ||
            action === "subtract" ||
            action === "multiply" ||
            action === "divide"
          ) {
            if (n1 === null) {
              n1 = parseFloat(displayedNum);
            } else if (operator !== null) {
              n2 = parseFloat(displayedNum);
              n1 = calculate(n1, operator, n2);
            }
            isNewCalculation = true;
            operator = action;
          }

          if (action === "clear") {
            display.textContent = "0";
            result.textContent = "0";
            n1 = null;
            operator = null;
            n2 = null;
            isNewCalculation = true;
          }

          if (action === "calculate") {
            if (n1 !== null && operator !== null) {
              n2 = parseFloat(displayedNum);

              display.textContent = calculate(n1, operator, n2);
              n1 = parseFloat(display.textContent);

              operator = null;
              n2 = null;
              isNewCalculation = true;
            }
          }
        }
      });

      function calculate(num1, op, num2) {
        let res = 0;
        let opStr = "";

        switch (op) {
          case "add":
            res = num1 + num2;
            opStr = "+";
            break;
          case "subtract":
            res = num1 - num2;
            opStr = "-";
            break;
          case "multiply":
            res = num1 * num2;
            opStr = "*";
            break;
          case "divide":
            res = num1 / num2;
            opStr = "/";

            break;
        }

        result.textContent = num1 + " " + opStr + " " + num2 + " = " + res;
        console.log(result.textContent);

        return parseFloat(res.toFixed(8));
      }
    } else {
      console.error("Tasten oder Display des Taschenrechners nicht gefunden");
    }
  } else {
    console.error("Taschenrechner-Element nicht gefunden");
  }
});
