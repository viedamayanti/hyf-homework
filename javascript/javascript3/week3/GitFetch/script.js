//Promise All
const gitUser1 = fetch(
    'https://api.github.com/search/repositories?q=user:Yuliia-Balandiuk'
  ).then((response) => response.json());
  const gitUser2 = fetch(
    'https://api.github.com/search/repositories?q=user:Hailegebriel22'
  ).then((response) => response.json());
  const gitUser3 = fetch(
    'https://api.github.com/search/repositories?q=user:patel-prakashkumar'
  ).then((response) => response.json());
  
  const getAllRepos = async function () {
    let data = await Promise.all([gitUser1, gitUser2, gitUser3]);
    for (let item of data) {
      const getName = item.items[0].full_name;
      const getOwner = item.items[0].owner.login;
      const getRepo = item.items[0].commits_url;
      console.log(getName);
      console.log(getOwner);
      console.log(getRepo);
  
      const headerStr = `These are github collection for`;
      const h1 = document.createElement('h1');
      h1.innerHTML = headerStr;
      document.body.appendChild(h1);
  
      const ul = document.createElement('ul');
      ul.innerHTML = `These are the full names:`;
      const li = document.createElement('li');
      li.innerHTML = `${getName}, ${getOwner}, ${getRepo}`;
      ul.appendChild(li);
      document.body.appendChild(ul);
    }
  
    console.log(data);
  };
  
  getAllRepos();