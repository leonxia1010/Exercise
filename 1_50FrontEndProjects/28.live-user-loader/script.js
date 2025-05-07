const API_URL = 'https://randomuser.me/api?results=50';

const result = document.getElementById('result');
const filter = document.getElementById('filter');
const listItems = [];
getData(API_URL);

async function getData(url) {
  const res = await fetch(url);
  const { results } = await res.json();

  result.innerHTML = '';

  results.forEach((user) => {
    const list = document.createElement('li');

    list.innerHTML = `
    <img src="${user.picture.large}" alt="${user.name.first}">
    <div class="user-info">
        <h4>${user.name.first} ${user.name.last}</h4>
        <p>${user.location.city}, ${user.location.country}</p>
    </div>
    `;
    listItems.push(list);
    result.appendChild(list);
  });
}

filter.addEventListener('input', (e) => {
  filterUsers(e.target.value);
});

function filterUsers(inputValue) {
  listItems.forEach((item) => {
    if (item.innerText.toLowerCase().includes(inputValue.toLowerCase())) {
      item.classList.remove('hide');
    } else {
      item.classList.add('hide');
    }
  });
}
