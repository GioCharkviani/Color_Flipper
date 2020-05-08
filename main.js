let body = document.querySelector("body");
let resetBackground = document.querySelector('.reset');
let btn = document.querySelector('.btn');
let toHex = document.querySelector('.to-hex');
let spanColor = document.querySelector('span');

let isHex = false;

resetBackground.addEventListener('click', function() {
    body.style.backgroundColor = "#FFFFFF";
    spanColor.textContent = '#FFFFFF';
});

btn.addEventListener('click', () => {
    let chosenColor = choosColorMethod(isHex);
    body.style.backgroundColor = chosenColor;
    spanColor.textContent = chosenColor;

});

toHex.addEventListener('click', function() {
    if(isHex) isHex=false;
    else isHex=true;
    toHex.classList.toggle('checker');
});

function choosColorMethod(isHex) {
    let chosenRandomHex = randomHex();
    let chosenRandomDec = randomDec();
    let chosenRandomName = randomName();
    let colorMethodList = [chosenRandomHex, chosenRandomDec, chosenRandomName];

    let choseColor = colorMethodList[Math.floor(Math.random() * colorMethodList.length)];


    if(isHex) return chosenRandomHex;
    else return choseColor;
}


function randomHex() {
    let colorsList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexColorStr = '#';
    for(let i=0; i<6; i++) {
        let randomChar = colorsList[Math.floor(Math.random() * colorsList.length)];
        hexColorStr+=randomChar;
    }
    return hexColorStr;
}

function randomDec() {
    let randomNumbers = [];
    for(let i=0; i<3; i++) {
        randomNumbers.push(Math.floor(Math.random() * 255));
    }
    let decColorStr = 'rgb('+randomNumbers[0]+', '+randomNumbers[1]+', '+randomNumbers[2]+')';
    return decColorStr;
}

function randomName() {
    let colorsList = ['green', 'red', 'yellow', 'blue', 'orange', 'purple', 'aqua', 'brown', 'gold', 'gray', 'chocolate'];
    let choseRandom = colorsList[Math.floor(Math.random() * colorsList.length)];
    return choseRandom;
}