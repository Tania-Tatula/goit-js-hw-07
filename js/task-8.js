// ------вирішення 1------------
// const btnBox = document.querySelector("#controls");
// const btnDestroy = btnBox.lastElementChild;
// const btnRender = btnDestroy.previousElementSibling;
// const boxesEl = document.querySelector("#boxes");
// const numberEl = btnBox.firstElementChild;



// const handleClearOutput = () => {
//   boxesEl.innerHTML = "";
// };

// const handleIntroductionNumber = () => {
//   // --- не виходить зробити, щоб додавало без циклу за один раз-----
//   const numberOfInputs = numberEl.value;
//   let counter = 0;
//   const result = [];
//   while (counter < numberOfInputs) {
//     function getRandomInt(min, max) {
//       return Math.floor(Math.random() * (max - min)) + min;
//     }
//     const colorNumvber =
//       "rgb(" +
//       `${getRandomInt(0, 1000)}` +
//       "," +
//       `${getRandomInt(0, 1000)}` +
//       "," +
//       `${getRandomInt(0, 1000)}` +
//       ")";
//     const blockSize = 30 + counter * 10;

//     result = (
//       `<div style= 'height: ${blockSize}px; width: ${blockSize}px; background-color: ${colorNumvber}'></div>`
//     );

//     counter += 1;
//   }

//   result.forEach(value => {boxesEl.insertAdjacentHTML('beforeend', value)});
  
// };

// btnDestroy.addEventListener("click", handleClearOutput);
// btnRender.addEventListener("click", handleIntroductionNumber);


// ------вирішення 2------------

// const btnBox = document.querySelector("#controls");
// const btnDestroy = btnBox.lastElementChild;
// const btnRender = btnDestroy.previousElementSibling;
// const boxesEl = document.querySelector("#boxes");
// const numberEl = btnBox.firstElementChild;

// const handleClearOutput = () => {
//   boxesEl.innerHTML = "";
// };

// const handleIntroductionNumber = () => {
//   // --- не виходить зробити, щоб додавало без циклу за один раз-----
//   const numberOfInputs = numberEl.value;
//   let counter = 1;
//   while (counter <= numberOfInputs) {
//     function getRandomInt(min, max) {
//       return Math.floor(Math.random() * (max - min)) + min;
//     }
//     const colorNumvber =
//       "rgb(" +
//       `${getRandomInt(0, 1000)}` +
//       "," +
//       `${getRandomInt(0, 1000)}` +
//       "," +
//       `${getRandomInt(0, 1000)}` +
//       ")";
//     const blockSize = 30 + counter * 10;

//     const boxingElementCreator = boxesEl.insertAdjacentHTML(
//       "afterbegin",
//       `<div style='height: ${blockSize}px; width: ${blockSize}px; background-color: ${colorNumvber}'></div>`
//     );

//     counter += 1;
//   }
// };

// btnDestroy.addEventListener("click", handleClearOutput);
// btnRender.addEventListener("click", handleIntroductionNumber);



const btnBox = document.querySelector("#controls");
const btnDestroy = btnBox.lastElementChild;
const btnRender = btnDestroy.previousElementSibling;
const boxesEl = document.querySelector("#boxes");
const numberEl = btnBox.firstElementChild;

function handleClearOutput(){
  boxesEl.innerHTML = "";
};

function handleIntroductionNumber(){
  
    if(boxesEl.childNodes.length != 0){
      handleClearOutput();
      handleIntroductionNumber();
    return
  }

  const numberOfInputs = numberEl.value;
  const result = [];

  for (let i = 0; i < numberOfInputs; i += 1) {
    const divs = document.createElement("div");
    
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
    const colorNumvber =
      "rgb(" +
      `${getRandomInt(0, 1000)}` +
      "," +
      `${getRandomInt(0, 1000)}` +
      "," +
      `${getRandomInt(0, 1000)}` +
      ")";
    const blockSize = 30 + i * 10;
    divs.style.cssText = `height: ${blockSize}px; width: ${blockSize}px; background-color: ${colorNumvber}`;

    result.push(divs);
  }
  boxesEl.append(...result);

};


btnDestroy.addEventListener("click", handleClearOutput);
btnRender.addEventListener("click", handleIntroductionNumber);