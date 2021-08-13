//Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const itemEl = ingredients.map(ingridient => {
// элементы  <li>
  const itemOfIngridientsEl = document.createElement('li');
//  контекст между тегов <li>
    itemOfIngridientsEl.textContent = ingridient; 
    return itemOfIngridientsEl;
  });
console.log(itemEl);
  
const listEl = document.querySelector('ul#ingredients');
listEl.append(...itemEl)


