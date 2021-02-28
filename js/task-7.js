const controlFontSizeEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

controlFontSizeEl.addEventListener("input", resizesЕext);

function resizesЕext(event) {
  textEl.style.fontSize = `${event.currentTarget.value}px`;
}
