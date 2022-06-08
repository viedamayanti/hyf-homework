// Flight booking fullname function
// Create a function called getFullname that returns a fullname. It should have two parameters: firstname and surname.
function getFullName(firstname, lastname){
    console.log(firstname + ' ' + lastname);
}
const fullName1 = getFullName('Benjamin', 'Hughes'); //Benjamin Hughes
const fullName2 = getFullName('Vie', 'Damayanti'); //Vie Damayanti

//Function with an empty string as firstname and lastname.
function getFullName(firstname, lastname){
    if(firstname == "" && lastname == ""){
        console.log('Please fill up your name');
    }else{
        console.log(firstname + ' ' + lastname)
    }
}    
const fullName3 = getFullName('Brian', 'Jensen'); //Brian Jensen
const fullName4 = getFullName("",""); //Please fill up your name

//Event application
function getEventWeekday(day){
    const date = new Date();
    const dayIndex = date.getDay();
    const daysName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const eventIndex = (dayIndex + day) % 6;
    console.log(daysName[eventIndex]);
}
getEventWeekday(5); //Wednesday

//Weather wear
const temperature = 20;
function youCreateThisFunctionName(studentName){
    if(temperature < 0 && temperature > 5){
        console.log('You need to wear extra jacket')
    } else if(temperature > 5 && temperature < 16){
        console.log('Spring jacket is enough')
    } else if( temperature > 16 && temperature < 23){
        console.log('Tank top and jeans are the best')
    } else {
        console.log('Its bikini time')
    }     
}
youCreateThisFunctionName(18); //Tank top and jeans are the best

//Student manager
const class07Students = [];
function addStudentToClass(studentName) {
    if(studentName == ""){
        console.log('You cannot add an empty string to a class');
    }else if(class07Students.includes(studentName)){
        console.log('Student ' + studentName + 'is already in the class');
    }else if(class07Students.length === 6){
        if(studentName == 'The queen'){
            class07Students.push(studentName);
        } else {
            console.log("Cannot add more students to class 07");
        }
    } else{
        return class07Students.push(studentName);
    }
}
function getNumberOfStudents() {
    // You write code here
    return class07Students.length;
  };
  
const student = addStudentToClass("");
class07Students.push("Zona");
class07Students.push("Nana");
console.log(class07Students); //['Zona', 'Nana']

//Candy helper optional
let boughtCandy = [];
let boughtCandyPrice = 0;
const amountToSpend = Math.random() * 100;

function addCandy(candyType, weight){
    let price
    if(candyType == 'sweet'){
        price = weight * 0.5;
    } else if(candyType == 'chocolate'){
        price = weight * 0.7;
    } else if(candyType == 'toffee'){
        price = weight * 1.1;
    } else if(candyType == 'chewing-gum'){
        price = weight * 0.03;
    }

boughtCandy.push("Chocolate", 20);
boughtCandyPrice = boughtCandyPrice + price;
}

function canBuyMoreCandy() {
if(boughtCandyPrice > 100) {
    console.log('Enough candy for you!');
    } else {
    console.log('You can buy more, so please do!');
    }
}

  addCandy('sweet', 1000); //Enough candy for you!!
  console.log(boughtCandy);
  console.log(boughtCandyPrice);
  canBuyMoreCandy();

 


