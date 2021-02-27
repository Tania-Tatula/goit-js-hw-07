const btnBox = document.querySelector('#controls');
const btnDestroy = btnBox.lastElementChild;
const btnRender = btnDestroy.previousElementSibling;
const boxesEl = document.querySelector('#boxes');
const numberEl = btnBox.firstElementChild;
const boxStyles = boxesEl.children;

// function getRandomInt(min, max) {
//         return Math.floor(Math.random() * (max - min)) + min;
//       }
// const colorNumvber = 'rgb(' +`${getRandomInt(0, 1000)}` + ',' + `${getRandomInt(0, 1000)}` + ',' + `${getRandomInt(0, 1000)}` +')' ;
// const counter = 2;
// const blockSize = 30 + counter * 10;
// const b = `height: ${blockSize}px; width: ${blockSize}px; background-color: ${colorNumvber}`;
// console.log(b)
// boxesEl.insertAdjacentHTML('afterbegin', `<div style='height: '${blockSize}px'; width: '${blockSize}px'; background-color: '${colorNumvber}'></div>`);


const handleClearOutput = () => {
    
    boxesEl.innerHTML ='';
    
}

const handleIntroductionNumber = () => {

    // --- не виходить зробити, щоб додавало без циклу за один раз і додати стилі-----
  const numberOfInputs = numberEl.value
  let counter = 1;
    while(counter <= numberOfInputs){
     
        
    boxesEl.insertAdjacentHTML('afterbegin', '<div></div>');
  
    counter += 1;
    }

    while(counter <= numberOfInputs){
     
        
      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
      const colorNumvber = 'rgb(' +`${getRandomInt(0, 1000)}` + ',' + `${getRandomInt(0, 1000)}` + ',' + `${getRandomInt(0, 1000)}` +')' ;
      const blockSize = 30 + counter * 10;
      boxStyles.setAttribute("style", `height: ${blockSize}px; width: ${blockSize}px; background-color: ${colorNumvber}`);
      counter += 1;
      }
    
    
    
}



btnDestroy.addEventListener('click', handleClearOutput);
btnRender.addEventListener('click', handleIntroductionNumber);





