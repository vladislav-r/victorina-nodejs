const checkAnswersbtn = document.querySelector('.checkAnswersBtn');
const answerPrepodInput = document.querySelectorAll('.answerPrepod');
const correctAnswer = document.querySelectorAll('.correctAnswer');
const score = document.querySelector('.score');
const plusScore = document.querySelector('.plusScore');

//ПРОВЕРКА ОТВЕТОВ И ОБНОЛЕНИЕ ОЧКОВ В localStorage
let localCountScore = 0;

checkAnswersbtn.addEventListener('click', () => {
  answerPrepodInput.forEach((answ) => {
    correctAnswer.forEach((corr) => {
      if (answ.value.trim() == corr.textContent && !answ.classList.contains('bg-success')) {
        answ.readOnly = true;
        answ.classList.add('success');
        let currentScore = +localStorage.score;
        localCountScore += 10;
        currentScore += 10;
        localStorage.setItem('score', currentScore);
        console.log(currentScore);
      }
    });
  });
  document.querySelector('.popupTitleScore').innerHTML = `Заработано: ${localCountScore}`;
  document.querySelector('.popupOverlay').classList.add('active');
  e.target.setAttribute('disabled', '');
});
