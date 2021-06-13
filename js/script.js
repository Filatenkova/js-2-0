/**
 * Основы
 */
// Выберет элемент с id = out
document.getElementById('out').innerHTML = 2021

// Выберет первый попавшийся h2
document.querySelector('h2').innerHTML = '<b>2022</b>'

// Выберет h2 c классом .header
document.querySelector('h2.header').innerHTML = '<b>2023</b>'

// Выберет первый элемент c классом .header
document.querySelector('.header').innerHTML = '<b>2024</b>'

// Выберет элемент c id = one
document.querySelector('#one').innerHTML = '<b>2025</b>'

// Присваивание
let element = document.querySelector('#one').innerHTML

// Основы ввода данных, работа с input
let inputIn = document.querySelector('.input-in')
let button = document.querySelector('button')

button.onclick = function() {
    // ! следим за типами данных
    let NaN = inputIn.value / 2 // Деление строки на число возвращает NaN
    let Infinity = inputIn.value / 0 // Деление на 0 возвращает Infinity
    let value = +inputIn.value // знак «+» приводит inputIn.value к числу
    inputIn.value = '' // очищаем значение input
}

/**
 * Работаем с формами
 */
// onclick срабатывает при клике на элемент
document.querySelector('[data-btn-color]').onclick = function () {
    let color = document.querySelector('[data-input-color]').value
    document.querySelector('[data-btn-color]').style.backgroundColor = color
}

// oninput срабатывает при каждом изменении элемента
document.querySelector('[data-input-range]').oninput = function () {
    let rangeValue = document.querySelector('[data-input-range]').value
    document.querySelector('[data-input-range-value]').innerHTML = rangeValue
}

document.querySelector('[data-btn-checkbox]').onclick = function () {
    let myCheckbox = document.querySelector('[data-checkbox]')

    if (myCheckbox.checked) {
        document.querySelector('[data-input-message]').innerHTML = 'Вы согласились'
    } else {
        document.querySelector('[data-input-message]').innerHTML = 'Вы не согласились'
    }
}

document.querySelector('[data-btn-textarea]').onclick = function (event) {
    // Останавливаем действия формы
    event.preventDefault()
    let form = document.querySelector('form')
    let text = document.querySelector('[data-textarea]')
    // Найдем элемент формы с id = formText
    console.log(form.elements.formText.value)
}

/**
 * Интерполяция/Конкатенация
 */
let out = document.querySelector('[data-out]')
for (let i = 0; i < 10; i++) {
    out.innerHTML += '3* ' + i + ' = ' + (i * 3) + '<br>'; // Конкатенация
}
out.innerHTML += '<hr>'

for (let i = 0; i < 10; i++) {
    out.innerHTML += `3 * ${i} = ${3 * i}` + '<br>'; // Интерполяция
}
out.innerHTML += '<hr>'

/**
 * textContent/innerHTML
 */
let paragraph = document.querySelector('[data-paragraph]')
console.log(paragraph.innerHTML) // получим текст с html-тегами
console.log(paragraph.innerText) // отформатированный текст, но без html-тегов. Введен для Internet Explorer
console.log(paragraph.textContent) // получим текст без html-тегов. Работает быстрее. Защищает от XSS атак

let wrapper = document.querySelector('[data-wrapper]')
wrapper.textContent = paragraph.textContent

/**
 * Циклы While и Do while
 */
// Пока k < 5, цикл будет выполняться
let k = 0;
while (k < 5) {
    k++;
    console.log(k);
}

// Необходимо, что тело цикла выполнилось хотя бы один раз
do {
    console.log(k);
    k++;
} while (k < 3) {
    console.log(k);
}

/**
 * Работа с DOM, создание элементов, работа с CSS
 */
wrapper.style.width = '600px'
//console.log(wrapper.style); // посмотреть все стили

let btnArea = document.querySelector('[data-btn-textarea]')
btnArea.onclick = function(e) {
    e.preventDefault()
    //this.classList.add('bgr')
    //this.classList.remove('bgr')
    this.classList.toggle('bgr')
}

// Атрибуты data
let newParagraph = document.querySelector('[data-new-paragraph]')
console.log(newParagraph.getAttribute('data'))

let link = document.querySelector('[data-link]')
console.log(link.getAttribute('href'))

// Если на странице несколько элементов с атрибутом data-link, используем querySelectorAll
let links = document.querySelectorAll('[data-link]')[1]
console.log(links.getAttribute('href'))

// Установим атрибут
newParagraph.setAttribute('data-num', 6)

// Работа с массивом
let gas = document.querySelectorAll('[data-gas]')
for (let i = 0; i < gas.length; i++) {
    gas[i].onclick = function() {
        let gallons = document.querySelector('[data-gallons]').value
        let amount = this.getAttribute('data-value')
        console.log(gallons * amount)
    }
}

// Создать элемент
let a = document.createElement('div')
a.innerHTML = 'Hello!'
a.classList.add('bgr')
newParagraph.appendChild(a) // добавим элемент внутрь newParagraph
