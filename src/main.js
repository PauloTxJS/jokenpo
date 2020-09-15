let name;
let gamerName;

let choiceGamer1 = document.querySelector('#choiceGamer1');
let choiceGamer2 = document.querySelector('#choiceGamer2');
let choiceGamer3 = document.querySelector('#choiceGamer3');
let message = document.querySelector('#message');
let pointsGamer = document.querySelector('#pointsGamer');
let pointsComputer = document.querySelector('#pointsComputer');

let pointsG = 0;
let pointsC = 0;

function msn(text) {
    document.querySelector('#message').innerHTML = text;
}

window.onload = function() {
    name = prompt("What's your name?");
    gamerName = document.querySelector('#gamerName');
    gamerName.innerHTML = name;
    message.innerHTML = `Welcome ${name}! Are you ready? Choose an option above.`; 
}

choiceGamer1.addEventListener('click', () => {
    toPlay(1);
})
choiceGamer2.addEventListener('click', () => {
    toPlay(2);
})
choiceGamer3.addEventListener('click', () => {
    toPlay(3);
})


let choiceGamer;
let choiceComputer;
let winner = result(choiceGamer, choiceComputer);

const sortear = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function result(gamer, computer) {

    if (gamer === computer && gamer !== undefined) return 0;


    if (gamer === 1 && computer === 2) {
        return 2;
    } else if (gamer === 1 && computer === 3) {
        return 1;          
    } 
    
    
    if (gamer === 2 && computer === 1) {
        return 1;           
    } else if (gamer === 2 && computer === 3) {
        return 2;          
    } 


    if (gamer === 3 && computer === 1) {
        return 2;           
    } else if (gamer === 3 && computer === 2) {
        return 1;          
    } 

}

function toPlay(choice) {
    choiceGamer = choice;
    choiceComputer = sortear(1, 3);
    let r = result(choiceGamer, choiceComputer);
    if (r === 0) {
        msn(`Empate`);
    } else if (r === 1) {
        msn(`${name} WIN!`);
        pointsG++;
        pointsGamer.innerHTML = pointsG;
    } else {
        msn(`${name} LOSE!`)
        pointsC++;
        pointsComputer.innerHTML = pointsC;
    }
}