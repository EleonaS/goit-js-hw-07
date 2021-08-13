//Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

//Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).



const categoriesEl = document.querySelectorAll('#categories li.item');
console.log(`В списке ${categoriesEl.length} категории.`);

categoriesEl.forEach(categoryEl => {
  console.log(`Категория: ${categoryEl.firstElementChild.textContent}`);
  console.log(
    `Количество элементов: ${categoryEl.querySelectorAll('li').length}`,
  );
});