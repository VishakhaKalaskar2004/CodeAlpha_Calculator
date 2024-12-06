let history = [];

function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculate() {
  let display = document.getElementById('display');
  let expression = display.value;
  let result = eval(expression); // Evaluate the expression

  display.value = result;

  // Save to history with details (expression and result)
  history.push(`${expression} = ${result}`);
  updateHistory();
}

function updateHistory() {
  const historyList = document.getElementById('historyList');
  historyList.innerHTML = ''; // Clear the history list first

  history.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    historyList.appendChild(li);
  });
}

function toggleUnitConverter() {
  document.getElementById('calculatorSection').style.display = 'none';
  document.getElementById('unitConverterSection').style.display = 'block';
}

function goBackToCalculator() {
  document.getElementById('unitConverterSection').style.display = 'none';
  document.getElementById('calculatorSection').style.display = 'flex'; // Use 'flex' to prevent collapse
}

// Unit Conversion Functions
function convertArea() {
  let area = document.getElementById('areaInput').value;
  let result = area * 0.092903; // Example: Convert square feet to square meters
  document.getElementById('areaResult').textContent = `${area} sq. feet = ${result.toFixed(2)} sq. meters`;

  // Save conversion to history
  history.push(`Converted ${area} sq. feet to ${result.toFixed(2)} sq. meters`);
  updateHistory();
}

function convertLength() {
  let length = document.getElementById('lengthInput').value;
  let result = length * 0.3048; // Example: Convert feet to meters
  document.getElementById('lengthResult').textContent = `${length} feet = ${result.toFixed(2)} meters`;

  // Save conversion to history
  history.push(`Converted ${length} feet to ${result.toFixed(2)} meters`);
  updateHistory();
}

function convertTemperature() {
  let temp = document.getElementById('tempInput').value;
  let result = (temp - 32) * 5/9; // Example: Convert Fahrenheit to Celsius
  document.getElementById('tempResult').textContent = `${temp}°F = ${result.toFixed(2)}°C`;

  // Save conversion to history
  history.push(`Converted ${temp}°F to ${result.toFixed(2)}°C`);
  updateHistory();
}

function scrollHistory(direction) {
  const historyContainer = document.querySelector('.history-container');
  if (direction === 'up') {
    historyContainer.scrollBy(0, -50); // Scroll up by 50px
  } else if (direction === 'down') {
    historyContainer.scrollBy(0, 50); // Scroll down by 50px
  }
}
