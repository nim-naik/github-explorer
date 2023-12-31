const API_URL = "https://api.github.com/users/";
const form = document.getElementById("form");
const main = document.getElementById("main");
const search = document.getElementById("search");

const createUserCard = (user) => {
  const cardHTML = `<div class="card">
        <div>
            <img src="${user.avatar_url}" alt="#" class="avatar">
        </div>
        <div class="user-info">
            <h2>${user.name || 'NA'}</h2>
            <p>${user.bio || 'NA'}</p>
            <ul>
                <li>Followers: <strong>${user.followers || 'NA'}</strong></li>
                <li>&nbsp;Following: <strong>${user.following || 'NA'}</strong></li>&#160
                <li>&nbsp;Public Repos: <strong>${user.public_repos || 'NA'}</strong></li>
            </ul>
            <div id="repos">xyz</div>
        </div>
    </div>
  `;


  const cardElement = document.createElement("div");

  
  cardElement.innerHTML = cardHTML;

  main.innerHTML = "";
  main.appendChild(cardElement);
};

const createErrorCard = (message) => {
  const cardHTML = `<div class="card"><h1>${message}</h1></div>`;

  
  const cardElement = document.createElement("div");

  
  cardElement.innerHTML = cardHTML;

  
  main.innerHTML = "";
  main.appendChild(cardElement);
};

const addReposToCard = (repos) => {
  const reposElement = document.getElementById("repos");
  reposElement.innerHTML = ""; 

  repos.slice(0, 5).forEach((repo) => {
    const repoElement = document.createElement("a");
    repoElement.classList.add("repo");
    repoElement.href = repo.html_url;
    repoElement.target = "_blank";
    repoElement.innerText = repo.name;
    reposElement.appendChild(repoElement);
  });
};

const getRepos = async (username) => {
  try {
    const { data } = await axios(API_URL + username + "/repos");
    addReposToCard(data);
  } catch (error) {
    createErrorCard("Problem Fetching Repos");
  }
};

const getUser = async (username) => {
  try {
    const { data } = await axios(API_URL + username);
    createUserCard(data);
    getRepos(username);
  } catch (error) {
    if (error.response && error.response.status === 404) {
      createErrorCard("No Profile With This Username");
    } else {
      createErrorCard("An error occurred");
    }
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = search.value;
  if (user) {
    getUser(user);
    search.value = "";
  }
});
