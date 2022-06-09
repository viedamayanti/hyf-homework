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

//When will we be there??
const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };

function getTime(travelInformation){
    var hours = (travelInformation.destinationDistance / travelInformation.speed);
    //The value will not use decimal, thats why I use roundedHours
    var roundedHours = Math.floor(hours);
    var minutes = (hours - roundedHours) * 60;
    var roundedMinutes = Math.round(minutes);
    return `${roundedHours} hours and ${roundedMinutes} minutes`;
}
const travelTime = getTime(travelInformation);
console.log(travelTime); // 8 hours and 38 minutes)


//Series duration of my life
const seriesDurations = [
    {
      title: "Money Heist",
      days: 1,
      hours: 23,
      minutes: 50,
    },
    {
      title: "Inventing Anna",
      days: 3,
      hours: 3,
      minutes: 53,
    },
    {
      title: "Sherlock",
      days: 20,
      hours: 17,
      minutes: 50,
    },
  ];

function getPercentage(seriesDurations){
    let total = 0;
    for (const series of seriesDurations){
      const day = (series.days * 24);
      const sum = day + (series.hours) + (series.minutes / 60)
      //Average lifespan is 80 years
      const lifeSpan = 80;
      //Get lifspan in hour
      const lifeSpanInHour = series.days * 24 * 365
      //Get percentage with 3 decimal
      let percentage = ((sum / lifeSpanInHour) * 100).toFixed(2);
      console.log(`${series.title} took ${percentage} % of my life`);
      //Total or sum of all film
      total = total + parseFloat(percentage); 
    }  
    console.log(`In total that is ${total} % of my life`);

}
console.log(seriesDurations);
getPercentage(seriesDurations);



//Save a note
const notes = [];

function saveNotes(id, content){
    const newNotes = {
        id: id,
        content: content
    }
    notes.push(newNotes);
}
saveNotes(1, "Buy the groceries");
saveNotes(2, "Pick up a package");
saveNotes(3, "Do homework week3");
saveNotes(4, "Do the laundry");

//Get a note
function getNote(id) {
    // your code here
    for (const theNotes of notes){
        if( theNotes.id == id){
            return theNotes;
        }
    }
    if(isNaN(id)){
        return `Please insert a number`
    } 
    
  }

const firstNote = getNote(4);
console.log(firstNote);

//Log out notes
function logOutNotesFormatted() {
    // your code here
    for(const theNotes of notes){
        console.log(`The note with id: ${theNotes.id}, has the following note text:${theNotes.content}`)
    }
  }
  
  logOutNotesFormatted(); 
  // The note with id: 1, has the following note text: Buy up groceries
  // The note with id: 2, has the following note text: DPick up a package


//CactusIO-interactive (Smart phone usage app) optional
//Adding an activity
const activities = []

function addActivity(date, activity, duration){
    const newActivity ={
        date: date,
        activity: activity,
        duration: duration
    }
    activities.push(newActivity);
}
addActivity("6/6/22", "YouTube", 40);
addActivity("5/6/22", "Pinterest", 20);
addActivity("4/6/22", "TikTok", 60);
addActivity("3/6/22", "Instagram", 10);

console.log();
//Show the status
function showStatus(){
    let sumDuration = 0;
    for (const status of activities){
        sumDuration = sumDuration + status.duration
    }
    if(activities.length == 0){
        console.log("Add some activities")
    } 
    if(sumDuration > 60){
        console.log("You have reached your limit, no more smartphoning for you!");

    } console.log(`You have added ${activities.length} activities. They amount to ${sumDuration} min. of usage`)

}
showStatus(activities);
