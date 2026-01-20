const display = document.querySelector('#display');
const buttons = document.querySelector('.buttons');

let currentInput = '0';

buttons.addEventListener('click', (e) => {
  if (!e.target.matches('button')) return;

  const btn = e.target;
  const btnValue = btn.textContent;
  const action = btn.dataset.action;

  if (!action) {
    // It's a number
    handleNumber(btnValue);
  } else {
    // It's an operator or function
    handleAction(action, btnValue);
  }
  
  updateDisplay();
});

function handleNumber(num) {
  if (currentInput === '0') {
    currentInput = num;
  } else {
    currentInput += num;
  }
}

function handleAction(action, value) {
  switch (action) {
    case 'clear':
      currentInput = '0';
      break;
    case 'calculate':
      try {
        // Basic eval for simplicity; in production, use a math parser
        currentInput = eval(currentInput.replace('×', '*').replace('÷', '/')).toString();
      } catch {
        currentInput = "Error";
      }
      break;
    default:
      currentInput += value;
  }
}

function updateDisplay() {
  display.textContent = currentInput;
}