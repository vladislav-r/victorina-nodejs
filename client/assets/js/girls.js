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

const checkBtns = document.querySelectorAll('.checkAnswersBtn');
const nameInput = document.querySelectorAll('.answerName');
const correctAnswers = document.querySelectorAll('.correctAnswers');
const inputCorrectVar = document.querySelectorAll('.inputCorrectVar');

const score = document.querySelector('.score');

//ПРОВЕРКА ОТВЕТОВ И ОБНОЛЕНИЕ ОЧКОВ В localStorage
let localCountScore = 0;

checkBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    nameInput.forEach((input) => {
      if (input.value == '') return;
      correctAnswers.forEach((corrects) => {
        if (String(btn.id) === String(input.id) && String(btn.id) === String(corrects.id)) {
          if (corrects.innerHTML.trim().toLowerCase().includes(input.value.trim().toLowerCase())) {
            input.classList.add('correct');
            let currentScore = +localStorage.score;
            localCountScore += 10;
            currentScore += 10;
            localStorage.setItem('score', currentScore);
          } else {
            input.classList.add('notCorrect');
            inputCorrectVar.classList.remove('d-none');
          }
          input.readOnly = true;
          e.target.disabled = true;
        }
      });
    });
  });
});

document.querySelector('.btnSuccessForms').addEventListener('click', () => {
  document.querySelector('.popupTitleScore').innerHTML = `Заработано очков: ${localCountScore}`;
  document.querySelector('.popupOverlay').classList.add('active');
});
