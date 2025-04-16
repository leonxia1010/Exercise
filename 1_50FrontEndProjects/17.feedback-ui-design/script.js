const ratings = document.querySelectorAll('.rating');
const panelContainer = document.getElementById('panel');
const sendBtn = document.getElementById('send');

ratings.forEach((rating) => {
  rating.addEventListener('click', () => {
    clearActiveClass();
    addActiveClass(rating);
  });
});

sendBtn.addEventListener('click', () => {
  let selectedFeedbackText = 'satisfied';

  ratings.forEach((rating) => {
    if (rating.classList.contains('active')) {
      const selectedFeedbackEl = rating.lastElementChild;
      selectedFeedbackText = selectedFeedbackEl.textContent;
    }
  });

  panelContainer.innerHTML = `<i class='fas fa-heart'></i>
        <strong>Thank You!</strong><br>
        <strong>Feedback: ${selectedFeedbackText}</strong><br>
        <p>We'll use your feedback to improve our customer support</p>`;
});

function clearActiveClass() {
  ratings.forEach((rating) => {
    rating.classList = 'rating';
  });
}

function addActiveClass(rating) {
  rating.classList.add('active');
}
