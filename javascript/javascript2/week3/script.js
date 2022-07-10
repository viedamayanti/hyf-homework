// 1. Logout text
let logOut = () => {
  console.log('Script loaded');
};
setTimeout(logOut, 2500);

// 2. Delay function

function setTime(n, callback, time = 0) {
  setTimeout(() => {
    console.log(`loading after ${(n + time) / 1000} second `);
    if (callback) {
      callback();
    }
  }, n);
}
setTime(2000, () => {
  setTime(3000, null, 2000);
});

// 3. Button task
let button = document.getElementById('clickBtn');
button.addEventListener('click', () => {
  setTimeout(() => {
    console.log('Called after 5 second');
  }, 5000);
});

// 4. Planet log function (TEST)
function earthLogger() {
  console.log('Earth');
}
function saturnLogger() {
  console.log('Saturn');
}
function planetLogFunction(callback) {
  callback();
}
planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);

// 5. Log Location
let button2 = document.getElementById('clickBtn2');
button2.addEventListener('click', () => {
  navigator.geolocation.getCurrentPosition((position) => {
    console.log(
      `Latitude :${position.coords.latitude} Longitude:${position.coords.longitude}`
    );
  });
});

// 6. Function run after delay
function runAfterDelay(n, callback) {
  setTimeout(() => {
    console.log(`Should be logged after ${n} second `);
    if (callback) {
      callback();
    }
  }, n * 1000);
}
runAfterDelay(3, null);

// 7. Double click
let myBtn = document.getElementById('clickBtn');
myBtn.addEventListener('dblclick', () => {
  setTimeout(() => {
    console.log('Its double click');
  }, 500);
});

// 8. Joke creator
function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
  if (shouldTellFunnyJoke) {
    logFunnyJoke();
  } else {
    logBadJoke();
  }
}
const funnyJoke = () => {
  console.log('Funny');
};
const badJoke = () => {
  console.log('Not Funny');
};

jokeCreator(true, funnyJoke, badJoke);

//Function as variable
//Create an array with 3 items. All items should be functions. Iterate through the array and call all the functions.
let myFavFood = [
  () => {
    console.log('Pasta');
  },
  () => {
    console.log('Cake');
  },
  () => {
    console.log('Strawberry');
  },
];

myFavFood.forEach((food) => food());

//Create a function as a const and try creating a function normally. Call both functions
//Normal function
function getMyName(myName, myJob) {
  return `I am ${myName}, and my job is ${myJob}`;
}
const myName = getMyName('Vie', ' front end developer');
console.log(myName);

//Conts function
const myName2 = (myName, myJob) => {
  return `I am ${myName}, and my job is ${myJob}`;
};
console.log(myName2('Vie', 'a full stack developer'));

//Create an object that has a key whose value is a function. Try calling this function
const obj = {
  name: 'Billie Eilish',
  song: 'Bad guy',
  age: '19',
  message: () => {
    return `I am sexy and I know it`;
  },
};
const calling = obj.message();
console.log(calling);
