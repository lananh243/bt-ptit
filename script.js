let memory = 0;

function inputDigit(digit) {
  const display = document.getElementById("display");
  display.value += digit;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function clearEntry() {
  const display = document.getElementById("display");
  display.value = "";
}

function deleteLast() {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function calculate(operator) {
  const display = document.getElementById("display");
  if (operator === "1/") {
    display.value = 1 / parseFloat(display.value);
  } else if (operator === "**2") {
    display.value = Math.pow(parseFloat(display.value), 2);
  } else if (operator === "+/-") {
    display.value = parseFloat(display.value) * -1;
  } else {
    display.value += operator;
  }
}

function calculateResult() {
  const display = document.getElementById("display");
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

function memoryClear() {
  memory = 0;
}

function memoryRecall() {
  const display = document.getElementById("display");
  display.value += memory;
}

function memoryStore() {
  const display = document.getElementById("display");
  memory = parseFloat(display.value) || 0;
}

function memoryAdd() {
  const display = document.getElementById("display");
  memory += parseFloat(display.value) || 0;
}
