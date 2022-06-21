let personName;
let toDoList = [];
function getReply(command){
    let splitText = command.split(" ")
    if(command.includes("Hello my name is")){
        personName = splitText[4]
        return `Nice to meet you ${personName}`
    } else if(command.includes("What is my name")){
        return `My name is ${personName}`
    } else if(command.includes("Add")){
        toDoList.push(splitText[1])
        return `${splitText[1]} added to your todo`
    } else if(command.includes("Remove")){
        let indexNum = toDoList.indexOf([1])
        let remove = toDoList.splice(indexNum, 1);
        return `Removed ${remove} from your todo`
    } else if(command.includes("What is on my todo")){
        return `You have ${toDoList.length} todos - ${toDoList.join(" and ")} in the shower`
    }else if(command.includes("What day is it today")){
        const options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day:"numeric"
        }
        const day = new Date();
        return day.toLocaleDateString("en-US", options);
    } else if(command.includes("What is")){
        let firstNum = splitText[2];
        let secondNum = splitText[4];
        let operator = splitText[3];
        if(operator === "+"){
            return Math.floor(firstNum) + Math.floor(secondNum);
        }
        if(operator === "-"){
            return Math.floor(firstNum) - Math.floor(secondNum);
        }
        if(operator === "*"){
            return Math.floor(firstNum) * Math.floor(secondNum);
        }
        if(operator === "/"){
            return Math.floor(firstNum) * Math.floor(secondNum);
        }
    } else if(command.includes("Set a timer for")){
        let time = parseInt(splitText[4]) * 60 * 1000;
        console.log(`Timer set for ${splitText[4]} minutes`);

        setTimeout(function(){
            console.log(`Timer done`)
        }, time)
    }
}

console.log(getReply("Hello my name is Vie"));
console.log(getReply("What is my name"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing to my todo"));
console.log(getReply("Add gaming to my todo"));
console.log(getReply("Remove cooking from my todo"));
console.log(getReply("What is on my todo"));
console.log(getReply("What day is it today"));
console.log(getReply("What is 3 + 3"));
console.log(getReply("What is 10 - 3"));
console.log(getReply("What is 4 * 12"));
console.log(getReply("What is 10 / 2"));
console.log(getReply("Set a timer for 1"));
console.log(toDoList);