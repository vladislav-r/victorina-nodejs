const checkAnswersBtn = document.querySelector('.checkAnswersBtn');
const wrappers = document.querySelectorAll('.wrInner');
const corrAnsws = document.querySelectorAll('.correctAnswer');
const formAnswers = document.querySelectorAll('.formAnswers');
const formCheckInput = document.querySelectorAll('.form-check-input');

const score = document.querySelector('.score');

let localCountScore = 0;

checkAnswersBtn.addEventListener('click', () => {
  console.log('1');
  formCheckInput.forEach((inp) => {
    console.log('2');
    corrAnsws.forEach((answ) => {
      console.log('3');
      if (inp.checked) {
        if (inp.value == answ.textContent) {
          let currentScore = +localStorage.score;
          localCountScore += 20;
          currentScore += 20;
          localStorage.setItem('score', currentScore);
          // location.reload();
          console.log(currentScore);
        }
      }
    });
  });
  alert(`Вы заработали ${localCountScore} очков`);
  setTimeout(() => {
    location.replace('/');
  }, 500);
});
