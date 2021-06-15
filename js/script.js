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

/**
 * Двумерные массивы
 */
let array = [4,5,6]
let newArray = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
]

let arResult = ''
let arTest = document.querySelector('[data-array]')
for (let i = 0; i < newArray.length; i++) {
    for (let k = 0; k < newArray[i].length; k++) {
        arResult += newArray[i][k] + ' '
    }
    arResult += '<br>'
}

arTest.innerHTML = arResult

// Задача - нажимая кнопку, передвигать единицу
let arTask = [1,0,0,0,0]
document.querySelector('[data-array-test]').innerHTML = arTask

let key = 0
document.querySelector('[data-btn-test]').onclick = () => {
    if (key + 1 < 5) {
        arTask[key] = 0
        arTask[key + 1] = 1
        key++
        document.querySelector('[data-array-test]').innerHTML = arTask
    }
}

/**
 * Ассоциативные массивы
 */
let associative = {
    'a': 5,
    'b': 'Hello',
    'z2': 'Hi',
    y45: 1999
}
// Поиск по ключу
console.log(associative.z2)

let keySearch = 'y45'
console.log(associative[keySearch])

// Присвоение
associative.yyyy = 555
console.log(associative)

// Перезаписать значение
associative.a = 777
console.log(associative)

// Вывод
// Неверно
// document.querySelector('[data-associative]').innerHTML = associative // undefined
// Верно
let show = ''
for (let key in associative) {
    // show += key
    show += associative[key]
}
document.querySelector('[data-associative]').innerHTML = show

/**
 * Прогноз погоды по API
 * Зарегистрироваться на сайте https://home.openweathermap.org/
 * Получить API-key https://home.openweathermap.org/api_keys
 */
let url = 'https://api.openweathermap.org/data/2.5/weather?q=Moscow,ru&appid=fedec6ef99816d6ddafb970805bbd953'

fetch(url)
    .then(
        function (resp) {
            return resp.json()
        }
    )
    .then(
        function (data) {
            document.querySelector('[data-weather-name]').textContent = data.name
            document.querySelector('[data-weather-degree]').innerHTML = Math.round(data.main.temp - 273) + ' &deg;С'
            document.querySelector('[data-weather-detail]').textContent = data.weather[0]['description']
        }
    )
    .catch (function () {

    });

/**
 * Set
 */
let newSet = new Set()
console.log(newSet)

// !Отличие - по аналогии с массивами так не прокатит
//console.log(newSet[0])
//console.log(newSet.length)

// Получим количество элементов
console.log(newSet.size)

// !Отличие - при добавлении нового элемента происходит проверка на его существование по значению и типу
newSet.add(1)
newSet.add(2)
newSet.add('Hello')
newSet.add(1) // не будет добавлен, так как в объекте уже есть такой элемент
newSet.add('1') // будет добавлен, так как тип - строка

// Проверим наличие значений в объекте
console.log(newSet.has(1)) // true
console.log(newSet.has('2')) // false

// Циклы
// for - не подходит, но:
for (let i of newSet) {
    console.log(i)
}

// Применение
// Найти уникальные значения массива
let arExample = [1, 2, 3, 4, 'Hello', '5', 1, 2, 3, 4]
let newArSet = new Set(arExample)
console.log(newArSet)

// Преобразуем Set в Array
let modNewArSet = Array.from(newArSet)
console.log(modNewArSet)

/**
 * Цикл for of и сравнение с for, for in
 */
for (let key in modNewArSet) {
    console.log(key)
    console.log(modNewArSet[key])
}

// ! Отличие - в качестве ключей отображаются значения
for (let item of modNewArSet) {
    console.log(item)
}

// Соберем коллекуию элементов с тегом small
let cycle =document.getElementsByTagName('small')

// Такой массив не совсем подходит для перебора
for (let key in cycle) {
    console.log(key)
    console.log(cycle[key])
}

// То, что надо
for (let item of cycle) {
    console.log(item)
}

/**
 * Map, Filter
 */
// Map - перебрать массив и произвести какие-то действия над каждым элементом
let map = [4, 5, 6, 7, 2, 4, 11, -192]
let newMap = map.map(function(item, index) {
    console.log(index)
    // return вернет в массив то, что мы произвели в данной функции
    return item * 5
})

// Пример применения со стрелочной функцией
let arrowMap = map.map((item, index) => {
    // return вернет в массив то, что мы произвели в данной функции
    return item * 5
})

// Короткая запись
let superMap = map.map(item => item * 5 )

// Filter - cоздает новый массив со всеми проверками
var arFilter = [1, -1, 2, -2, 3];

var positiveArr = arFilter.filter(function(number) {
    return number > 0;
});

console.log(positiveArr); // 1,2,3

/**
 * Split, Join, forEach
 */
// Split - разделит строку на массив через указанную подстроку
let split = 'Hello,hi,mahai'
console.log(split.split(',')); // ['Hello'],['hi'],['mahai']

// Join - объединяет все элементы массива (или массивоподобного объекта) в строку.
let join = ['Hello', 'hi', 'mahai']
console.log(join.join(','));

// forEach - применяет функцию один раз к указанному элементу
// !Отличие от map и filter - не возвращает новый массив
arFilter.forEach( function (elem, index) {
    console.log(elem)
})

/**
 * События мыши
 */
// Одинарный клик
document.querySelector('[data-click-one]').onclick = (e) => {
    console.log('one' + e);
}

// Двойной клик
document.querySelector('[data-click-two]').ondblclick = (e) => {
    console.log('two' + e);
}

// Событие на вывод контекстного меню по клику правой клавишей мышки
document.querySelector('[data-click-two]').oncontextmenu = (e) => {
    console.log('right button');
    // Если необходимо заблокировать событие, то используем return false
    return false
}

// Водим мышкой поверх элемента
let widthBlock = 100
document.querySelector('[data-click-three]').onmousemove = () => {
    document.querySelector('[data-click-three]').style.width = widthBlock + 'px'
    widthBlock++
}

// Если курсор оказывается над таблицей в целом или же уходит с него.
document.querySelector('[data-click-three]').onmouseenter = () => {
    document.querySelector('[data-click-three]').style.background = 'red'
}

// Если курсор оказывается над элементом в целом или же уходит с него.
document.querySelector('[data-click-three]').onmouseleave = () => {
    document.querySelector('[data-click-three]').style.background = 'blue'
}

// Cрабатывает в момент нажатия на кнопку мыши.
document.querySelector('[data-click-three]').onmousedown = () => {
    document.querySelector('[data-click-three]').style.background = 'orange'
}

// Cрабатывает в момент отжатия на кнопку мыши.
document.querySelector('[data-click-three]').onmouseup = () => {
    document.querySelector('[data-click-three]').style.background = 'green'
}

let progress = 10
document.querySelector('[data-click-four]').onclick = (e) => {
    progress++
    document.querySelector('[data-click-progress]').value = progress
}

/**
 * События клавиатуры
 */
// Событие по нажатию клавиши
document.querySelector('[data-input-keyboard]').onkeypress = (e) => {
    console.log('charCode: ' + e.charCode);
    console.log('code: ' + e.code);
    console.log('key: ' + e.key);
    console.log('keyCode: ' + e.keyCode);
}

// Клавиша нажата, но не отпущена
document.querySelector('[data-input-keyboard]').onkeydown = (e) => {
    console.log('charCode: ' + e.charCode);
    console.log('code: ' + e.code);
    console.log('key: ' + e.key);
    console.log('keyCode: ' + e.keyCode);
}

// Клавиша отпущена
document.querySelector('[data-input-keyboard-up]').onkeyup = (e) => {
    console.log('charCode: ' + e.charCode);
    console.log('code: ' + e.code);
    console.log('key: ' + e.key);
    console.log('keyCode: ' + e.keyCode);

    const el = {
        q: 'w',
        w: 'e'
    }

    // Нажимаем на клавиши q или w и меняем значение input
    document.querySelector('[data-input-keyboard-up]').value += el[e.key]
    return false
}

/**
 * События JavaScript на iPhone и Android телефонах
 * Потестить, не все события работают
 */

/**
 *  Local Storage
 *  Смотрим консоль Application / Storage / Local Storage
 */
// Установим данные
let arStorage = [1, 3, 5, 6]
localStorage.setItem('data', arStorage)

// Извлечем данные
let getData = localStorage.getItem('data')
console.log(getData)
console.log(getData[1]) // ! Получим «,»
console.log(typeof getData) // ! String

// По-другому запишем данные
localStorage.setItem('data', JSON.stringify(arStorage))
let jsonData = localStorage.getItem('data')
let jsonDataParse = JSON.parse(jsonData)
console.log(typeof jsonDataParse)

let inc = 0
document.querySelector('[data-block-button]').onclick = (e) => {
    inc++
    localStorage.setItem('test', inc)
}

// очистим Local Storage
localStorage.clear()

// Когда в Local Storage что-то меняется, мы можем слушать это событие
// Срабатывает только, если Local Storage был изменен на других страницах на данном хосте
// Имитируем добавление товаров в корзину - см. app.js
window.addEventListener('storage', function(e) {
    console.log('change')
    document.querySelector('[data-block-div-1]').textContent = localStorage.getItem('test')
})
