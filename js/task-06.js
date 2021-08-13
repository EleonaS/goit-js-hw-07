//Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
//Для добавления стилей, используй CSS-классы valid и invalid.

//Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
//Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.


const input = document.querySelector("#validation-input");

const inputValueLength = Number(input.getAttribute("data-length"));

input.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  
  if (event.currentTarget.value.length === inputValueLength) {
    event.currentTarget.classList.add("valid");
    event.currentTarget.classList.remove("invalid");
    return;
  }
  event.currentTarget.classList.remove("valid");
  event.currentTarget.classList.add("invalid");
}