localStorage.getItem('score') ?? localStorage.setItem('score', 0);

document.querySelector('.scoreCount').innerHTML = `Очки: ${localStorage.score ?? 0}`;

// Сброс очков
document.querySelector('.resetScore').addEventListener('click', () => {
  if (localStorage.score != '0') {
    localStorage.score = '0';
    alert('Очки сброшены');
    location.reload();
  }
});
