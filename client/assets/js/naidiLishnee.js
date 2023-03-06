const checkAnswersBtn = document.querySelector('.checkAnswersBtn');
const transparentBtnAll = document.querySelectorAll('.transparentBtn');
const wrappers = document.querySelectorAll('.wrInner');
const corrAnsws = document.querySelectorAll('.correctAnswer');
const formAnswers = document.querySelectorAll('.formAnswers');
const formCheckInput = document.querySelectorAll('.formRadio');

const score = document.querySelector('.score');

let localCountScore = 0;
let currentScore = +localStorage.score;
checkAnswersBtn.addEventListener('click', (e) => {
  formCheckInput.forEach((inp) => {
    corrAnsws.forEach((answ) => {
      if (inp.checked) {
        if (inp.value == answ.textContent) {
          localCountScore += 10;
          currentScore += 10;
          localStorage.setItem('score', currentScore);
          inp.classList.add('correct');
        } else {
          inp.classList.add('notCorrect');
        }
      } else {
        if (inp.value == answ.textContent) {
          inp.classList.add('correct');
        }
      }
    });
  });
  document.querySelector('.popupTitleScore').innerHTML = `Заработано очков: ${localCountScore}`;
  document.querySelector('.popupOverlay').classList.add('active');
  e.target.disabled = true;
});

transparentBtnAll.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    btn.classList.add('found');
    localCountScore += 10;
    currentScore += 10;
    localStorage.setItem('score', currentScore);
  });
});
