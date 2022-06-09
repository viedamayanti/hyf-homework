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