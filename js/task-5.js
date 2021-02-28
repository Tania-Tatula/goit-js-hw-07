const nameUserEl = document.querySelector("#name-input");
const nameEl = document.querySelector("#name-output");

function handleSubmit(event) {
  event.preventDefault();

  if (event.currentTarget.value === "") {
    return (nameEl.textContent = "незнакомец");
  }
  return (nameEl.textContent = event.currentTarget.value);
}

nameUserEl.addEventListener("input", handleSubmit);

//  ---вирішення 2-----
//     function handleSubmit(event){
//     nameEl.textContent = event.currentTarget.value;
//    }
