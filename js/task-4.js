const removeListenerBtn = counter.firstElementChild;
const addListenerBtn = counter.lastElementChild;
const  counterValue = document.querySelector("#value");


function increment(){
    
    return counterValue.textContent = Number(counterValue.textContent) + 1;
};
const decrement = () => {
    return counterValue.textContent = Number(counterValue.textContent) - 1;
};

addListenerBtn.addEventListener('click', increment);
removeListenerBtn.addEventListener('click', decrement)
