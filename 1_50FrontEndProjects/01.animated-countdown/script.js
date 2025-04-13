const countDownText = document.querySelectorAll('.countdown span');
const container = document.querySelector('.container');
const final = document.querySelector('.final');
const replay = document.querySelector('.button');

function runAnimation() {
  countDownText.forEach((pic, idx) => {
    pic.addEventListener('animationend', (e) => {
      if (e.animationName === 'goIn' && idx !== countDownText.length - 1) {
        pic.classList.remove('in');
        pic.classList.add('out');
      } else if (e.animationName === 'goOut' && pic.nextElementSibling) {
        pic.nextElementSibling.classList.add('in');
      } else {
        container.classList.add('hide');
        final.classList.add('show');
      }
    });
  });
}

runAnimation();

function reset() {
  container.classList.remove('hide');
  final.classList.remove('show');
  countDownText.forEach((pic) => {
    pic.classList.value = '';
  });
  countDownText[0].classList.add('in');
}

replay.addEventListener('click', () => {
  reset();
  runAnimation();
});
