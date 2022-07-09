import { movies } from './movies.js';
console.log(movies);

//Doubling and odd
const numbers = [1, 2, 3, 4];
const newNumbers = numbers
  .filter((item) => item % 2 !== 0)
  .map((item) => item * 2);
console.log('The doubled numbers are', newNumbers);

//Movies
//Create an array of movies containing the movies with a short title (you define what short means)
const shortTitle = movies.filter((movie) => movie.title.length <= 3);
console.log(shortTitle);

//Create an array of movie titles with long movie titles
const longTitle = movies.filter((movie) => movie.title.length > 3);
console.log(longTitle);

//Count the number of movies made between 1980-1989 (including both the years)
const eightTies = movies.filter(
  (movie) => movie.year >= 1980 && movie.year <= 1989
);
console.log(`The total movies are ${eightTies.length}`);

//Create a new array that has an extra key called tag. The tag is based on the rating: Good (>= 7), Average (>= 4 and < 7), Bad (< 4)
const movieTag = movies.map((movie) => {
  let tag;
  if (movie.rating > 7) {
    tag = 'Good';
  } else if (movie.rating >= 4 && movie.rating <= 7) {
    tag = 'Average';
  } else {
    tag = 'Bad';
  }

  return {
    ...movie,
    tag: tag,
  };
});
console.log(movieTag);

let goodMovie = 0;
let averageMovie = 0;
let badMovie = 0;

movieTag.forEach((movie) => {
  if (movie.tag === 'Good') {
    goodMovie++;
  } else if (movie.tag === 'Average') {
    averageMovie++;
  } else if (movie.tag === 'Bad') {
    badMovie++;
  }
});
console.log(
  `The good movies total are ${goodMovie}. The average movies total are ${averageMovie}, and the bad movies ${badMovie}`
);

//Using chaining, first filter the movies array to only contain the movies rated higher than 6. Now map the movies array to only the rating of the movies.
const goodMovies2 = movies
  .filter((movie) => movie.rating > 6)
  .map((movie) => movie.rating);
console.log(goodMovies2);

//Count the total number of movies containing any of following keywords: Surfer, Alien or Benjamin. So if there were 3 movies that contained Surfer, 1 with Alien and 2 with Benjamin, you would return 6. Can you make sure the search is case insensitive?
const keywordMovies = movies.filter((movie) => {
  const wordSurfer = movie.title.includes('Surfer');
  const wordAlien = movie.title.includes('Alien');
  const wordBenjamin = movie.title.includes('Benjamin');
  return wordSurfer || wordAlien || wordBenjamin;
});
console.log(keywordMovies);
console.log(`The total movies are ${keywordMovies.length}`);

//Create an array of movies where a word in the title is duplicated. Fx "Star Wars: The Clone Wars" the word Wars is duplicated. Here are some madeup examples of movies with duplicated words in the title: "The three men and the pistol", "Chase three - The final chase"

function duplicate(theTitle) {
  let newMovie = theTitle.toLowerCase().split(' ');
  newMovie = newMovie.map((title) => title.replace(':', ''));
  let sameWord = [...new Set(newMovie)];
  return newMovie.length !== sameWord.length;
}

const movieDuplicate = movies.filter((movie) => duplicate(movie.title));
console.log(movieDuplicate);

//Calculate the average rating of all the movies using reduce. Optional
const movieSum = movies.reduce((a, b) => a + b.rating, 0);
const average = Math.floor(movieSum / movies.length);
console.log(average);
