import { createLoading, wait } from './loading.js';

const form = document.getElementById('form');
const main = document.getElementById('main');
const search = document.getElementById('search');
const APIURL = 'https://api.github.com/users';

async function getUser(user) {
  try {
    const { data } = await axios.get(`${APIURL}/${user}`);
    createUserCard(data);
    getUserRepos(user);
  } catch (err) {
    console.log(err);
    console.log(err.response.status);
    if (err.response.status === 404) {
      createErrorCard('No profile with this user name.');
    }
  }
}

async function getUserRepos(user) {
  try {
    const response = await axios.get(
      `${APIURL}/${user}/repos?sort="created"&type="owner"`
    );
    const repos = response.data;
    addRepos(repos);
  } catch (err) {
    console.log(err);
    createErrorCard('Problem fetching repos');
  }
}

function createUserCard(user) {
  const name = user.name || user.id;
  const userBio = user.bio ? `<p>${user.bio}</p>` : '';
  const cardHTML = `
    <div class="card">
    <div>
      <img src="${user.avatar_url}" alt="${name}" class="avatar">
    </div>
    <div class="user-info">
      <h2>${name}</h2>
      ${userBio}
      <ul>
        <li>${user.followers} <strong>Followers</strong></li>
        <li>${user.following} <strong>Following</strong></li>
        <li>${user.public_repos} <strong>Repos</strong></li>
      </ul>

      <div id="repos"></div>
    </div>
  </div>
    `;

  main.innerHTML = cardHTML;
}

function addRepos(repos) {
  const reposEl = document.getElementById('repos');
  repos.slice(0, 5).forEach((repo) => {
    const { name, html_url } = repo;
    const repoEl = document.createElement('a');
    repoEl.className = 'repo';
    repoEl.setAttribute = ('target', '_blank');
    repoEl.href = html_url;
    repoEl.textContent = `${name}`;
    reposEl.appendChild(repoEl);
  });
}

function createErrorCard(msg) {
  const cardHTML = `
    <div class="card">
        <h1>${msg}</h1>
    </div>
    `;
  main.innerHTML = cardHTML;
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const user = search.value;
  if (user) {
    await createLoading();
    await wait(2300);
    getUser(user);
    search.value = '';
  }
});
