const checkAnswersBtn = document.querySelector('.checkAnswersBtn');
const wrappers = document.querySelectorAll('.wrInner');
const corrAnsws = document.querySelectorAll('.correctAnswer');
const formAnswers = document.querySelectorAll('.formAnswers');
const formCheckInput = document.querySelectorAll('.form-check-input');

const score = document.querySelector('.score');

let localCountScore = 0;

checkAnswersBtn.addEventListener('click', (e) => {
  formCheckInput.forEach((inp) => {
    corrAnsws.forEach((answ) => {
      if (inp.checked) {
        if (inp.value == answ.textContent) {
          let currentScore = +localStorage.score;
          localCountScore += 20;
          currentScore += 20;
          localStorage.setItem('score', currentScore);

          console.log(currentScore);
        }
      }
      answ.classList.remove('d-none');
    });
  });
  document.querySelector('.popupTitleScore').innerHTML = `Заработано очков: ${localCountScore}`;
  document.querySelector('.popupOverlay').classList.add('active');
  console.log(e);
});
