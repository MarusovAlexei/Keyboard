// 13 special characters
const specialСharacters = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+",];

// text btn
const textBtn = ["Backspace", "Tab", "Caps lock", "Enter", "Shift", "▲", "Shift", "Ctrl", "Win",
  "Alt", "Alt", "Ctrl", "◀", "▼", "▶",];

// 65 main characters
const mainСharacters = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace",
  "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\",
  "Caps lock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter",
  "Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "▲", "Shift",
  "Ctrl", "Win", "Alt", "", "Alt", "Ctrl", "◀", "▼", "▶",];

// Добавляем заголовок на страницу
document.body.append(addElemnt('Virtual keyboard', 'title', 'div'));

// Добавляем окно ввода текста
document.body.append(addElemnt('', 'keyboard__display', 'textarea'));

// Добавляем контейнер клавиатуры
document.body.append(addElemnt('', 'keyboard__container', 'div'));

// Добавляем клавиатуру
const keyboardContainer = document.querySelector('.keyboard__container');
addKeyboard(63);

function addKeyboard(value) {
  for (let i = 0; i < value; i++) {
    if (textBtn.includes(mainСharacters[i])) {
      keyboardContainer.appendChild(addElemnt(`${mainСharacters[i]}`, 'btn-dark', 'div'));
    } else if (mainСharacters[i] === '') {
      keyboardContainer.appendChild(addElemnt(`${mainСharacters[i]}`, 'space', 'div'));
    } else {
      keyboardContainer.appendChild(addElemnt(`${mainСharacters[i]}`, 'btn', 'div'));
    }
  }
}

// Добавляем описание
document.body.append(addElemnt('Клавиатура создана в операционной системе Windows', 'description', 'div'));
document.body.append(addElemnt('Для переключения языка комбинация: левыe shift + alt', 'description', 'div'));

// Функция добавления элемента на страницу ('текст', 'класс, 'тип элемента')
function addElemnt(valueElement, classElement, elementType) {
  let element = document.createElement(`${elementType}`);
  element.classList.add(`${classElement}`);
  element.innerHTML = `${valueElement}`;

  if (`${valueElement}` === '') {
    element.id = `space`;
  } else {
    element.id = `${valueElement}`;
  }

  return element;
}

// Функция выделения кнопки при нажатии
function addActivestyle(element) {

}