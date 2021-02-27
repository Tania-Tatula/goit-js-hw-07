const controlFontSizeEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

const resizesЕext = (event) => {

    textEl.style.fontSize = `${event.currentTarget.value}px`;
}
   
controlFontSizeEl.addEventListener('click', resizesЕext);
