// все клавиши английской раскладки
const mainСharactersEn = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace",
  "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\",
  "Caps lock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter",
  "Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "▲", "Shift",
  "Ctrl", "Win", "Alt", "", "Alt", "Ctrl", "◀", "▼", "▶",];

// все клавиши русской раскладки
const mainСharactersRu = ["ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace",
  "Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "\\",
  "Caps lock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "Enter",
  "Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "▲", "Shift",
  "Ctrl", "Win", "Alt", "", "Alt", "Ctrl", "◀", "▼", "▶",];

// Коды клавиш (all 63)
const keyCodes = ["Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7",
  "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace", "Tab", "KeyQ", "KeyW", "KeyE", "KeyR",
  "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash", "CapsLock",
  "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Enter",
  "ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ArrowUp",
  "ShiftRight", "ControlLeft", "MetaLeft", "AltLeft", "Space", "AltRight", "ControlRight", "ArrowLeft", "ArrowDown", "ArrowRight",];

// 13 special characters
const specialСharacters = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+",];

// text btn
const textBtn = ["Backspace", "Tab", "Caps lock", "Enter", "Shift", "▲", "Shift", "Ctrl", "Win",
  "Alt", "Alt", "Ctrl", "◀", "▼", "▶",];



// Коды спецклавиш
const keySpecialCodes = ["Backquote", "Backspace", "Tab", "CapsLock", "Enter", "ShiftLeft", "ArrowUp", "ShiftRight",
  "ControlLeft", "MetaLeft", "AltLeft", "AltRight", "ControlRight", "ArrowLeft", "ArrowDown", "ArrowRight",];

// Язык страницы
let language = "en";

// Добавляем заголовок на страницу
document.body.append(addElemnt('Virtual keyboard', 'title', 'div'));

// Создаем контейнер клавиатуры
document.body.append(addElemnt('', 'keyboard', 'div'));
const keyboard = document.querySelector('.keyboard');

// Добавляем окно ввода текста
keyboard.append(addElemnt('', 'keyboard__display', 'textarea'));

// Добавляем контейнер клавиатуры
keyboard.append(addElemnt('', 'keyboard__container', 'div'));

// Добавляем клавиатуру
const keyboardContainer = document.querySelector('.keyboard__container');
addKeyboard(63, mainСharactersEn, keyboardContainer);

// Функция добавления клавиатуры
function addKeyboard(value, mainСharacters, keyboardContainer) {
  for (let i = 0; i < value; i++) {
    if (textBtn.includes(mainСharacters[i])) {
      keyboardContainer.appendChild(addElemnt(`${mainСharacters[i]}`, 'btn-dark', 'div', `${keyCodes[i]}`));
    } else if (mainСharacters[i] === '') {
      keyboardContainer.appendChild(addElemnt(`${mainСharacters[i]}`, 'space', 'div', `${keyCodes[i]}`));
    } else {
      keyboardContainer.appendChild(addElemnt(`${mainСharacters[i]}`, 'btn', 'div', `${keyCodes[i]}`));
    }
  }
}

// Функция удаления клавиатуры
function deleteKeyboard() {
  document.querySelector('.keyboard__container').remove();
}

// Добавляем описание
document.body.append(addElemnt('Клавиатура создана в операционной системе Windows', 'description', 'div'));
document.body.append(addElemnt('Для переключения языка комбинация: левыe shift + alt', 'description', 'div'));
document.body.append(addElemnt('Для ввода текста поставьте курсор в поле ввода!', 'description', 'div'));

// Функция добавления элемента на страницу ('текст', 'класс, 'тип элемента')
function addElemnt(valueElement, classElement, elementType, elementId = 'elem') {
  let element = document.createElement(`${elementType}`);
  element.classList.add(`${classElement}`);
  element.innerHTML = `${valueElement}`;
  element.id = elementId;

  return element;
}

// Функция выделения кнопки при нажатии
document.onkeydown = document.onkeyup = document.onkeypress = changeBtnClass;

function changeBtnClass(event) {

  // Проверяем, что кнопка нажата и добавляем класс active
  if (event.type == 'keydown') {
    document.querySelector(`#${event.code}`).classList.add('btn-active');

    // Если кнопка цифра, символ или буква, то выводим ее
    if (!keySpecialCodes.includes(event.code) && document.querySelector('.keyboard__display').onfocus) {
      addText(event.key);
    }
  }

  // когда кнопка отпущена, мы убираем класс active 
  if (event.type == 'keyup' && document.querySelector(`#${event.code}`) !== null) {
    document.querySelector(`#${event.code}`).classList.remove('btn-active');
  }

  // Переключение языка
  if (event.shiftKey && event.altKey) {
    deleteKeyboard();
    keyboard.append(addElemnt('', 'keyboard__container', 'div'));
    const keyboardContainer = document.querySelector('.keyboard__container');
    if (language === "en") {
      language = "ru";
      addKeyboard(63, mainСharactersRu, keyboardContainer);
    } else {
      language = "en"
      addKeyboard(63, mainСharactersEn, keyboardContainer);
    }
  }
}

// Ввод текста в textarea
function addText(value) {
  const textArea = document.querySelector('.keyboard__display');
  textArea.innerHTML = textArea.value + `${value}`;
}




// event

// isTrusted: true
// altKey: false
// bubbles: true
// cancelBubble: false
// cancelable: true
// charCode: 0
// code: "KeyZ"
// composed: true
// ctrlKey: false
// currentTarget: null
// defaultPrevented: false
// detail: 0
// eventPhase: 0
// isComposing: false
// key: "Z"
// keyCode: 90
// location: 0
// metaKey: false
// path: (4) [body, html, document, Window]
// repeat: false
// returnValue: true
// shiftKey: true
// sourceCapabilities: InputDeviceCapabilities {firesTouchEvents: false}
// srcElement: body
// target: body
// timeStamp: 12733.899999856949
// type: "keydown"
// view: Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// which: 90