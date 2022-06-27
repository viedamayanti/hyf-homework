//Find the shortest word
const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
function shortestWords(words) {
  let shortWord = words[0];
  for (const word of words) {
    if (word.length < shortWord.length) {
      shortWord = word;
    }
  }
  return shortWord;
}

shortestWords(danishWords)

console.log(shortestWords(danishWords));


//Count danish word
function getWord(words){
  if(typeof words !== "string") {
    return  "Please write something"
  }
  let specialLetter = ["å", "ø", "æ"]
  let splitWord = words.toLowerCase().split(" ");
  let letterOne = 0;
  let letterTwo = 0;
  let letterThree = 0;
  for(const word of splitWord){
    for(const singleLetter of word){
      if(singleLetter === specialLetter[0]){
        letterOne++;
      } else if(singleLetter === specialLetter[1]){
        letterTwo++;
      } else if(singleLetter === specialLetter[2]){
        letterThree++;
      }
  }
  
  return {
    å: letterOne,
    ø: letterTwo,
    æ: letterThree
  }
}
}

const danishString = getWord("Jeg har en blå bil");
console.log(danishString)
const danishString2 = getWord("Blå grød med røde bær");
console.log(danishString2)

