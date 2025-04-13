const button = document.getElementById('button');
const jokeEl = document.getElementById('joke');
const url = 'https://icanhazdadjoke.com';

generateJoke();
button.addEventListener('click', generateJoke);

async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };
  fetch(url, config)
    .then((res) => res.json())
    .then((data) => (jokeEl.innerText = data.joke));
}
