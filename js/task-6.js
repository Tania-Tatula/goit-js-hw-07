const inputEl = document.querySelector('#validation-input');


const handleInputFocus = (event) => {
    event.preventDefault();

    if(`${event.currentTarget.value.length}` === `${inputEl.getAttribute('data-length')}`){
        return inputEl.setAttribute('class', 'valid'); 
    }
        return inputEl.setAttribute('class', 'invalid');

}


inputEl.addEventListener('blur', handleInputFocus);