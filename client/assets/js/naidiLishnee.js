const checkAnswersBtn = document.querySelector('.checkAnswersBtn');
const wrappers = document.querySelectorAll('.wrInner');
const corrAnsws = document.querySelectorAll('.correctAnswer');
const formAnswers = document.querySelectorAll('.formAnswers');
const formCheckInput = document.querySelectorAll('.form-check-input');

const score = document.querySelector('.score');

let localCountScore = 0;

checkAnswersBtn.addEventListener('click', (e) => {
  // wrappers.forEach((wr) => {
  formCheckInput.forEach((inp) => {
    corrAnsws.forEach((answ) => {
      if (inp.checked) {
        if (inp.value == answ.textContent) {
          let currentScore = +localStorage.score;
          localCountScore += 10;
          currentScore += 10;
          localStorage.setItem('score', currentScore);
          // location.reload();
          console.log(currentScore);
        }
      }
      answ.classList.remove('d-none');
    });
    // });
  });
  document.querySelector('.popupTitleScore').innerHTML = `Заработано: ${localCountScore}`;
  document.querySelector('.popupOverlay').classList.add('active');
  e.target.setAttribute('disabled', '');
});
