//Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'

const refs = {
    input: document.querySelector('input'),
    currentSpanName: document.querySelector('#name-output'),
    currentInputName: document.querySelector('#name-input'),
    
};

//Добавляет слушателя события на элемент. 
//element.addEventListener(event, handler[, phase])

refs.input.addEventListener('input', onInputChange);

function onInputChange(event){
    refs.currentSpanName.textContent = event.currentTarget.value;
    if(refs.currentSpanName.textContent === ''){
        refs.currentSpanName.textContent = 'незнакомец'
    }
}