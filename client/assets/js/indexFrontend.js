//Если очки существуют - взять их, иначе установить со значением 0
localStorage.getItem('score') ?? localStorage.setItem('score', 0);

document.querySelector('.scoreCount').innerHTML = `${localStorage.score ?? 0}`;

if (localStorage.name) {
  const name = localStorage.name;
  document.querySelector('.headerLeftName').innerHTML = name;
} else {
  window.location.replace('/login');
}

// Сброс очков

const resetScoreBtn = document.querySelector('.resetScoreBtn');
const popupTitleResetScore = document.querySelector('.popupTitleResetScore');
const popupResetScoreOverlay = document.querySelector('.popupResetScoreOverlay');

resetScoreBtn.addEventListener('click', () => {
  if (localStorage.score != '0') {
    localStorage.score = '0';
    popupTitleResetScore.textContent = 'Очки сброшены';
    popupResetScoreOverlay.classList.add('active');
  }
});
