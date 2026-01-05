// 1. SELECT ELEMENTS
const clockElement = document.getElementById('clock');
const countdownElement = document.getElementById('countdown');
const dateInput = document.getElementById('dateInput');
const startBtn = document.getElementById('startBtn');

let countdownInterval;

// 2. DIGITAL CLOCK LOGIC
function updateClock() {
    const now = new Date();
    
    // Format hours, minutes, seconds to always have 2 digits
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');
    
    clockElement.textContent = `${h}:${m}:${s}`;
}

// 3. COUNTDOWN TIMER LOGIC
function startCountdown() {
    const target = new Date(dateInput.value).getTime();

    if (isNaN(target)) {
        alert("Please select a valid future date.");
        return;
    }

    // Clear existing timer if any
    clearInterval(countdownInterval);

    countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const diff = target - now;

        if (diff <= 0) {
            clearInterval(countdownInterval);
            countdownElement.textContent = "00:00:00";
            alert("Goal Reached!");
            return;
        }

        // Calculations
        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);

        // Update Display
        countdownElement.textContent = `${d}d ${String(h).padStart(2, '0')}h ${String(m).padStart(2, '0')}m ${String(s).padStart(2, '0')}s`;
    }, 1000);
}

// 4. EVENT LISTENERS & INITIALIZATION
startBtn.addEventListener('click', startCountdown);

// Initialize clock immediately
setInterval(updateClock, 1000);
updateClock();