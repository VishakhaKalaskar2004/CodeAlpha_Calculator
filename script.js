// let history = [];

// function appendToDisplay(value) {
//   document.getElementById('display').value += value;
// }

// function clearDisplay() {
//   document.getElementById('display').value = '';
// }

// function calculate() {
//   let display = document.getElementById('display');
//   let result = eval(display.value);
//   display.value = result;

//   // Save to history
//   history.push(display.value);
//   updateHistory();
// }

// function updateHistory() {
//   const historyList = document.getElementById('historyList');
//   historyList.innerHTML = '';
//   history.forEach(item => {
//     const li = document.createElement('li');
//     li.textContent = item;
//     historyList.appendChild(li);
//   });
// }

// function toggleUnitConverter() {
//   document.getElementById('calculatorSection').style.display = 'none';
//   document.getElementById('unitConverterSection').style.display = 'block';
// }

// function goBackToCalculator() {
//   document.getElementById('unitConverterSection').style.display = 'none';
//   document.getElementById('calculatorSection').style.display = 'block';
// }

// // Unit Conversion Functions
// function convertArea() {
//   let area = document.getElementById('areaInput').value;
//   let result = area * 0.092903; // Example: Convert square feet to square meters
//   document.getElementById('areaResult').textContent = `${area} sq. feet = ${result.toFixed(2)} sq. meters`;
// }

// function convertLength() {
//   let length = document.getElementById('lengthInput').value;
//   let result = length * 0.3048; // Example: Convert feet to meters
//   document.getElementById('lengthResult').textContent = `${length} feet = ${result.toFixed(2)} meters`;
// }

// function convertTemperature() {
//   let temp = document.getElementById('tempInput').value;
//   let result = (temp - 32) * 5/9; // Example: Convert Fahrenheit to Celsius
//   document.getElementById('tempResult').textContent = `${temp}°F = ${result.toFixed(2)}°C`;
// }



let history = [];

function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculate() {
  let display = document.getElementById('display');
  let result = eval(display.value);
  display.value = result;

  // Save to history
  history.push(display.value);
  updateHistory();
}

function updateHistory() {
  const historyList = document.getElementById('historyList');
  historyList.innerHTML = '';
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
  document.getElementById('calculatorSection').style.display = 'block';
}

// Unit Conversion Functions
function convertArea() {
  let area = document.getElementById('areaInput').value;
  let result = area * 0.092903; // Example: Convert square feet to square meters
  document.getElementById('areaResult').textContent = `${area} sq. feet = ${result.toFixed(2)} sq. meters`;
}

function convertLength() {
  let length = document.getElementById('lengthInput').value;
  let result = length * 0.3048; // Example: Convert feet to meters
  document.getElementById('lengthResult').textContent = `${length} feet = ${result.toFixed(2)} meters`;
}

function convertTemperature() {
  let temp = document.getElementById('tempInput').value;
  let result = (temp - 32) * 5/9; // Example: Convert Fahrenheit to Celsius
  document.getElementById('tempResult').textContent = `${temp}°F = ${result.toFixed(2)}°C`;
}
