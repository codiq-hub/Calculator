const display = document.getElementById("display");

function appendToDisplay(value) {
  display.value += value;
}
function clearDisplay() {
  display.value = "";
}

function toggleSign() {
  if (display.value !== "") {
    display.value = String(parseFloat(display.value) * -1);
  }
}

// Evaluate the expression
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const delBtn = document.getElementById('del-btn');
    if (delBtn && display) {
        delBtn.addEventListener('click', function() {
            display.textContent = display.textContent.slice(0, -1);
        });
    }
});
