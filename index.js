const outPutSpan = document.querySelector(".numbers");
const inputValue = document.querySelector(".volume");
const gameForm = document.querySelector(".game");
const gameInput = gameForm.querySelector("input");
const div = document.querySelector(".text");
const result = document.querySelector(".result");

function randomGame(event){
  event.preventDefault();
  const randomNum = Math.random();
  const rangeRandom = Math.floor(randomNum * inputValue.value);
  const parsedNum = parseInt(gameInput.value);
  if(parsedNum !== rangeRandom){
    div.innerText = `You chose: ${gameInput.value}, the machine chose: ${rangeRandom}`;
    result.innerText = "You lose 😭";
  }else{
    div.innerText = `You chose: ${gameInput.value}, the machine chose: ${rangeRandom}`;
    result.innerText = "You Won! 👸🤴" ;
  }
  

}

function handleMaxNumber(e){
  e.preventDefault();
  //const maxNumber = inputValue.value;
  outPutSpan.innerHTML = inputValue.value;
  gameForm.addEventListener('submit', randomGame);
}

function init(){
  inputValue.addEventListener('input', handleMaxNumber);
}
  
init();