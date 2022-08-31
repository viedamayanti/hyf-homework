const spiritAnimal = [
    "The strength of hippotamus",
    "The freedom of horse",
    "The sensitiv jellyfish",
    "The sweet koala",
    "The powerful jaguar",
    "The bravery goose",
    "The intelligence of girrafe",
    "The wealthy grasshopper",
    "The royalty of elephant",
    "The harmony of dolphin"
  ]
  
  document.getElementById("generator").onclick = function(){
    const userNameInput = document.getElementById("inputText").value;
    const randomName = spiritAnimal[Math.floor(Math.random() * spiritAnimal.length)];
    const resultName = (`${userNameInput} - ${randomName}`)
    if(userNameInput === ""){
      document.getElementById("text").innerHTML = "Please write your name";
    } else{
      document.getElementById("text").innerHTML = resultName;
    }
  }
  
  document.getElementById("addBtn").onclick = function(){
    if(animalNameInput = document.getElementById("inputText").value){
      spiritAnimal.push();
      alert(`${animalNameInput} added`)
    } else if(animalNameInput === ""){
      alert(`Please insert animal name`)
    } 
  }