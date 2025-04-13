const header = document.getElementById('header');
const title = document.getElementById('title');
const description = document.getElementById('description');
const avatar = document.getElementById('avatar');
const name = document.getElementById('name');
const date = document.getElementById('date');
const bgs = document.querySelectorAll('.placeholder-animation');
const bgTexts = document.querySelectorAll('.placeholder-text');

setTimeout(getData, 3000);

function getData() {
  header.innerHTML =
    '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />';
  title.innerHTML = 'Lorem ipsum dolor sit amet';
  description.innerText =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis';
  avatar.innerHTML =
    '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />';
  name.innerText = 'don John';
  date.innerText = '10th Oet 2024';

  bgs.forEach((bg) => {
    bg.classList.remove('placeholder-animation');
  });
  bgs.forEach((bgTexts) => {
    bg.classList.remove('placeholder-text');
  });
}
