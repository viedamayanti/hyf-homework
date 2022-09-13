//Create array of bad movie and movies under 2000
function fetchMovie() {
  fetch(
    'https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json'
  )
    .then((response) => response.json())
    .then((data) => {
      const badMovies2000 = [];
      const badMovies = data.filter((movie) => {
        if (movie.year > 2000 && movie.rating < 5) badMovies2000.push(movie);
        return;
      });
      console.log(badMovies2000);
      return badMovies.rating < 5;
    });
}

fetchMovie();

// Resolve timer
function resolveTime(resolveAfter) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, resolveAfter * 1000);
  });
}
resolveTime(3).then(() => {
  console.log('I am called asynchronously');
});

async function resolveAfterSeconds() {
  await resolveTime(8);
  console.log('I am called asynchronously');
}
resolveAfterSeconds();

//Rewrite time
function getPosition() {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        resolve(position);
      });
    } else {
      reject('error');
    }
  });
}
getPosition();
function getCurrentLocation() {
  getPosition().then((response) => {
    const { coords } = response;
    console.log(coords);
  });
}
getCurrentLocation();
setTimeout(getCurrentLocation, 3000);

//Fetching using promise
function promiseMovie() {
  fetch(
    'https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json'
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}
setTimeout(promiseMovie, 3000);

//Fetching using async and await
async function fetchMoviesAsync() {
  const response = await fetch(
    'https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json'
  );
  const dataMovies = await response.json();
  console.log(dataMovies);
}
setTimeout(fetchMoviesAsync, 3000);
