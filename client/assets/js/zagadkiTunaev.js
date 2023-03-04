setTimeout(() => {
  // подсказки
  const hintBlock = document.querySelectorAll('.hintBlock');
  hintBlock.forEach((hint) => {
    //hintBlock родитель для заголовка и самой подсказки. Проверка, дочерних элементов на равенство. Костыль костылем и полная шляпа но работает
    hint.children[0].addEventListener('click', (e) => {
      e.preventDefault();
      hintBlock.forEach((text) => {
        if (hint.children[1].textContent == text.children[1].textContent) {
          text.children[1].classList.toggle('active');
          localStorage.score -= 30;
          hint.children[0].classList.add('d-none');
        }
      });
    });
  });
}, 1000);

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
        answ.classList.remove('d-none');
      }
    });
  });
  document.querySelector('.popupTitleScore').innerHTML = `Заработано: ${localCountScore}`;
  document.querySelector('.popupOverlay').classList.add('active');
  e.target.setAttribute('disabled', '');
});
