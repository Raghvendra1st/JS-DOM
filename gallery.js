const buttons = document.querySelectorAll('.btn');
const items = document.querySelectorAll('.item');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-target');

    items.forEach(item => {
      const category = item.getAttribute('data-category');

      if (filter === 'all' || filter === category) {
        item.style.display = 'block'; // Show item
      } else {
        item.style.display = 'none';  // Hide item
      }
    });
  });
});