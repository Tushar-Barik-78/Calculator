const display = document.getElementById("display");
let isResultDisplayed = false;

function appendValue(value) {
  const operators = ["+", "-", "*", "/"];
  const lastChar = display.value.slice(-1);

  // Clear display if new input comes after a result
  if (isResultDisplayed) {
    if (!operators.includes(value)) {
      display.value = "";
    }
    isResultDisplayed = false;
  }

  // Prevent double operators
  if (operators.includes(lastChar) && operators.includes(value)) {
    return;
  }

  display.value += value;
}

function clearDisplay() {
  display.value = "";
  isResultDisplayed = false;
}

function deleteLast() {
    if(display.value == "Error"){
        display.value = "";
        return;
    }
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    const result = eval(display.value);
    if (!isFinite(result)) {
      display.value = "Error";
    } else {
      display.value = result;
    }
    isResultDisplayed = true;
  } catch {
    display.value = "Error";
    isResultDisplayed = true;
  }
}
