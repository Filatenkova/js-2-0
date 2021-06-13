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

// Работаем с формами
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
