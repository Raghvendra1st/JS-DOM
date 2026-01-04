const themeBtn = document.getElementById('btn');
const body = document.body;


themeBtn.addEventListener('click', () => {

  body.classList.toggle('dark-mode');

  
  if (body.classList.contains('dark-mode')) {
    themeBtn.textContent = "Go Light";
  } else {
    themeBtn.textContent = "Go Dark";
  }
});