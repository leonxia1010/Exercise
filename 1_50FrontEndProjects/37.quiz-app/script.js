const quizData = [
  {
    question: 'Which language runs in a web browser?',
    a: 'Java',
    b: 'C',
    c: 'Python',
    d: 'JavaScript',
    correct: 'd',
  },
  {
    question: 'What does CSS stand for?',
    a: 'Central Style Sheets',
    b: 'Cascading Style Sheets',
    c: 'Cascading Simple Sheets',
    d: 'Cars SUVs Sailboats',
    correct: 'b',
  },
  {
    question: 'What does HTML stand for?',
    a: 'Hypertext Markup Language',
    b: 'Hypertext Markdown Language',
    c: 'Hyperloop Machine Language',
    d: 'Helicopters Terminals Motorboats Lamborginis',
    correct: 'a',
  },
  {
    question: 'What year was JavaScript launched?',
    a: '1996',
    b: '1995',
    c: '1994',
    d: 'none of the above',
    correct: 'b',
  },
];

const submitBtn = document.getElementById('button');
const textA = document.getElementById('a-text');
const textB = document.getElementById('b-text');
const textC = document.getElementById('c-text');
const textD = document.getElementById('d-text');
const questionText = document.getElementById('question');
const boxes = document.querySelectorAll('.answer');
const quiz = document.querySelector('.quiz-container');

let curr = 0;
let score = 0;

const renderQuiz = (curr) => {
  const { question, a, b, c, d } = quizData[curr];
  deleteSelected();
  questionText.textContent = question;
  textA.innerText = a;
  textB.innerText = b;
  textC.innerText = c;
  textD.innerText = d;
};

const getSelected = () => {
  let selectedId = null;
  boxes.forEach((box) => {
    if (box.checked) selectedId = box.id;
  });
  return selectedId;
};

const deleteSelected = () => {
  boxes.forEach((box) => {
    box.checked = false;
  });
};

submitBtn.addEventListener('click', () => {
  const selectedId = getSelected();
  if (!selectedId) return;

  if (selectedId === quizData[curr].correct) score++;
  console.log(score);

  if (curr < quizData.length - 1) {
    curr++;
    renderQuiz(curr);
  } else {
    quiz.innerHTML = `
    <h2 class='question'>You answered ${score}/${quizData.length} questions correctly</h2>
    <button class='button' onclick="location.reload()">Reload</button>
`;
  }
});

renderQuiz(curr);
