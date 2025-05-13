// Dice Roller Programm

const h1 = document.querySelector("h1");
const up = document.querySelector(".up");
const down = document.querySelector(".down");
const numOfDice = document.querySelector("h2");

h1.addEventListener("click", rollDice);
up.addEventListener("click", oneUp);
down.addEventListener("click", oneDown);


function rollDice(){

  const diceResult = document.querySelector(".diceResults");
  const diceImages = document.querySelector(".diceImages");
  const values = [];
  const images = [];

  for(let i = 0; i < numOfDice.textContent; i++){
    const value = Math.ceil(Math.random()*6); 
    values.push(value);
    images.push(`<img src="dices/${value}.png">`)
  }

  diceResult.textContent = `Dice: ${values.join(", ")}`;
  diceImages.innerHTML = images.join("");
}

function oneUp(){
  numOfDice.textContent = Number(numOfDice.textContent)+1;
}

function oneDown(){
  if(Number(numOfDice.textContent) > 1){
    numOfDice.textContent = Number(numOfDice.textContent)-1;
  }
}