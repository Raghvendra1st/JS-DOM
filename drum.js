// Listen for the key press on the entire window
window.addEventListener('keydown', (e) => {
  const key = e.key.toLowerCase(); // Get the letter pressed
  
  // Select the specific audio and div based on that letter
  const audio = document.querySelector(`audio[data-key="${key}"]`);
  const drumElement = document.querySelector(`.drum[data-key="${key}"]`);

  // If the key pressed doesn't have an audio element, exit
  if (!audio) return;

  // Play the sound
  audio.currentTime = 0; // Rewind to start for rapid hitting
  audio.play();

  // Trigger the visual animation
  drumElement.classList.add('playing');
});

// Remove the animation after it finishes
window.addEventListener('transitionend', (e) => {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
});