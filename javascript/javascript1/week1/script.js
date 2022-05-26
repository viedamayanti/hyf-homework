//A future age calculator
const yearOfBirth = 1986;
const yearFuture = 2027;
const myAge = yearFuture - yearOfBirth;
console.log("You will be " + myAge + " in 2027")

//A dog age calculator 
const dogYearOfBirth = 2035;
const dogYearFuture = 2045;
const dogYear = (dogYearFuture - dogYearOfBirth) * 7;
const humanYear = dogYearFuture - dogYearOfBirth;
const shouldShowResultInDogYears = true;
const shouldShowResultInHumanYears = false;

if(shouldShowResultInDogYears){
    console.log("Your dog will be " + dogYear + " dog years old in 2045");
} else if(shouldShowResultInHumanYears){
    console.log("Your dog will be " + humanYear + " human years old in 2027");
}

//Housey pricey (Julia)
const wide = 5;
const deep = 11; 
const high = 18;
const priceRange = 2000000;
housePrice = (wide * deep * high) * 2.5 * 1000 + (deep * high) * 300;

if(housePrice >= priceRange){
    console.log('You are paying too much')
} else if(housePrice <= priceRange){
    console.log('You are paying too little')  
};

//Housey pricey (Peter)
const wide1 = 5;
const deep1 = 11; 
const high1 = 18;
const priceRange2 = 9000000;
housePrice = (wide1 * deep1 * high1) * 2.5 * 1000 + (deep1 * high1) * 300;

if(housePrice >= priceRange2){
    console.log('You are paying too much')
} else if(housePrice <= priceRange2){
    console.log('You are paying too little')  
}

//Ez namey 
const firstWords = ['Horizon', 'Viesim', 'BSV', 'The', 'Matrix', 'Blue Kite', 'Artic', 'Black Rose', 'Keanu', 'Code'];
const secondWords = ['Group', 'Investment', 'Corporate', 'Inc', 'United', 'Company', 'Hack', 'Coder', 'Technology', 'Care'];
const randomNumber = firstWords[Math.floor(Math.random() * 10)] + ' ' + secondWords[Math.floor(Math.random() * 10)];
console.log(randomNumber);
