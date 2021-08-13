//Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.


const refs = {
  incrementBtn: document.querySelector('[data-action="increment"]'),
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  counter: document.querySelector('#value'),
};

//Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
//Добавляет слушателя события на элемент. 
//element.addEventListener(event, handler[, phase])

refs.incrementBtn.addEventListener('click', () => {
  increment();
  updateCounter();
});

refs.decrementBtn.addEventListener('click', () => {
  decrement();
  updateCounter();
});

//Создай переменную counterValue в которой будет хранится текущее значение счетчика.
let counterValue = 0;

//Создай функции increment и decrement для увеличения и уменьшения значения счетчика
function increment() {
  counterValue += 1;
}

function decrement() {
  counterValue -= 1;
}

function updateCounter() {
  refs.counter.textContent = counterValue;
}