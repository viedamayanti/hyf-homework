//A future age calculator
const yearOfBirth = 1986
const yearFuture = 2027
my = yearFuture - yearOfBirth
console.log("You will be " + my + " in 2027")

//A dog age calculator 
const dogAge = 1957
const humanAge = 2017
const futureAge = 2027
const resultInDogYear = true
const resultInHumanYear = false
sumDogAge = futureAge - dogAge
sumHumanAge = futureAge - humanAge

if(resultInDogYear){
    console.log("Your dog will be " + sumDogAge + " dog years old in 2027");
} else if(resultInHumanYear){
    console.log("Your dog will be " + sumHumanAge + " human years old in 2027");
}

//Housey pricey
const wide = 5
const deep = 11 
const high = 18
const priceRange = 2000000
gardenSizeInM2 = high * deep
volumeInMeters = wide * deep * high
housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

if(housePrice >= priceRange){
    console.log('You are paying too much')
} else if(housePrice <= priceRange){
    console.log('You are paying too little')  
}


//Ez namey 
const firstWords = ['Horizon', 'Viesim', 'BSV', 'The', 'Matrix', 'Blue Kite', 'Artic', 'Black Rose', 'Keanu', 'Code']
const secondWords = ['Group', 'Investment', 'Corporate', 'Inc', 'United', 'Company', 'Hack', 'Coder', 'Technology', 'Care']
const startUpName = firstWords[Math.floor(Math.random() * 10)] + ' ' + secondWords[Math.floor(Math.random() * 10)]
console.log(startUpName)
