//Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

//Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

//Каждый созданный div:
//Имеет случайный rgb цвет фона
//Размеры самого первого div - 30px на 30px
//Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
//Создай функцию destroyBoxes(), которая очищает div#boxes.

const inputNumberEl = document.querySelector('[type="number"]');
const btnCreateEl = document.querySelector('[data-action="render"]');
const btnDeleteEl = document.querySelector('[data-action="destroy"]');
const divListEL = document.querySelector('#boxes');


//parentElem.appendChild(elem)

const createBoxes = () => {
   if (inputNumberEl.value > 0) {
      for (let i = 0; i < inputNumberEl.value ; i += 1) {
         const divItemEl = document.createElement("div");
         const red = Math.floor(Math.random() * 255);
         const green = Math.floor(Math.random() * 255);
         const blue = Math.floor(Math.random() * 255);
 
         divItemEl.style.cssText = `color: blue; background-color: rgb(${red} ${green} ${blue}); width:${30 + i * 10}px; height:${30 + i * 10}px;`;
         divListEL.append(divItemEl);
      }
   }
};

//elem.remove()

const destroyBoxes = () => {
   document.querySelectorAll('#boxes div').forEach(div => div.remove())
};

//Добавляет слушателя события на элемент. 
//element.addEventListener(event, handler[, phase])

btnCreateEl.addEventListener('click', createBoxes);
btnDeleteEl.addEventListener('click',  destroyBoxes )