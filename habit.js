const heatmap = document.getElementById('heatmap');
const checkInBtn = document.getElementById('checkInBtn');

// 1. Get data from LocalStorage (Array of dates like "2023-10-25")
let completedDates = JSON.parse(localStorage.getItem('habitData')) || [];

function renderHeatmap() {
  heatmap.innerHTML = '';
  const now = new Date();
  
  // We'll generate a grid for the last 365 days
  for (let i = 364; i >= 0; i--) {
    const dayElement = document.createElement('div');
    dayElement.classList.add('day');
    
    // Calculate the date for this specific square
    const date = new Date();
    date.setDate(now.getDate() - i);
    const dateString = date.toISOString().split('T')[0];

    // Check if this date is in our "completed" list
    if (completedDates.includes(dateString)) {
      dayElement.classList.add('completed');
    }

    // Highlight today
    if (i === 0) dayElement.classList.add('today');

    heatmap.appendChild(dayElement);
  }
}

// 2. Handle the Check-In
checkInBtn.addEventListener('click', () => {
  const today = new Date().toISOString().split('T')[0];
  
  if (!completedDates.includes(today)) {
    completedDates.push(today);
    localStorage.setItem('habitData', JSON.stringify(completedDates));
    renderHeatmap();
    updateStats();
  } else {
    alert("Already checked in for today!");
  }
});

function updateStats() {
    document.getElementById('statsText').innerText = `Total Days: ${completedDates.length}`;
}

// Initial Run
renderHeatmap();
updateStats();