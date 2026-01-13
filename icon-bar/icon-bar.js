const icons = document.querySelectorAll('.icon-bar a');

icons.forEach(icon => {
  icon.addEventListener('click', function() {
    icons.forEach(i => i.classList.remove('active'));
    this.classList.add('active');
  });
});
