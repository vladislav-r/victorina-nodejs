const checkAnswersbtn = document.querySelector('.checkAnswersBtn');
const answerPrepodInput = document.querySelectorAll('.answerPrepod');
const correctAnswer = document.querySelectorAll('.correctAnswer');
const score = document.querySelector('.score');

//ПРОВЕРКА ОТВЕТОВ И ОБНОЛЕНИЕ ОЧКОВ В localStorage
let localCountScore = 0;

checkAnswersbtn.addEventListener('click', (e) => {
  answerPrepodInput.forEach((answ) => {
    correctAnswer.forEach((corr) => {
      if (answ.value.trim() == corr.textContent && !answ.classList.contains('bg-success')) {
        answ.classList.add('success');
        let currentScore = +localStorage.score;
        localCountScore += 10;
        currentScore += 10;
        localStorage.setItem('score', currentScore);
        console.log(currentScore);
      }
      corr.classList.remove('d-none');
      answ.readOnly = true;
    });
  });
  document.querySelector('.popupTitleScore').innerHTML = `Заработано очков: ${localCountScore}`;
  document.querySelector('.popupOverlay').classList.add('active');
  e.target.disabled = true;
});
