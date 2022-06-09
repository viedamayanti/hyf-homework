//Item array removal
const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "katrine",
    "Tala",
  ];
  const nameToRemove = "Ahmad";
  
  // Write some code here
 let indexNum = names.indexOf("Ahmad");
 console.log(indexNum);
 let remove = names.splice(indexNum, 1);
 console.log(remove);
 console.log(names);
  // Code done
  console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']

//When will we be there??
const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };

function getTime(travelInformation){
    var hours = (travelInformation.destinationDistance / travelInformation.speed);
    //The value will be rounded (without decimal)
    var rHours = Math.floor(hours);
    var minutes = (hours - rHours) * 60;
    var rMinutes = Math.round(minutes);
    return `${rHours} hours and ${rMinutes} minutes`;
}
  
  const travelTime = getTime(travelInformation);
  console.log(travelTime); // 8 hours and 38 minutes