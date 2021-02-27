const btnBox = document.querySelector('#controls');
const btnDestroy = btnBox.lastElementChild;
const btnRender = btnDestroy.previousElementSibling;
const boxesEl = document.querySelector('#boxes');
const numberEl = btnBox.firstElementChild;
const boxStyles = boxesEl.children;


const handleClearOutput = () => {
    
    boxesEl.innerHTML ='';
    
}

const handleIntroductionNumber = () => {

    // ---зробити, щоб додавало без циклу за один прихід-----
  const numberOfInputs = numberEl.value
  let counter = 1;
    while(counter <= numberOfInputs){
    boxesEl.insertAdjacentHTML('afterbegin', '<div class="list-styles"></div>');
    counter += 1;
    }
    
}


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const colorNumvber = 'rgb(' +`${getRandomInt(0, 1000)}` + ',' + `${getRandomInt(0, 1000)}` + ',' + `${getRandomInt(0, 1000)}` +')' ;
console.log(colorNumvber);


boxStyles.style.backgroundColor = `${colorNumvber}`;
boxStyles.style.backgroundColor = `${colorNumvber}`;
boxStyles.style.width = '30px';
boxStyles.style.heigt = '30px';

btnDestroy.addEventListener('click', handleClearOutput);
btnRender.addEventListener('click', handleIntroductionNumber);





  
 