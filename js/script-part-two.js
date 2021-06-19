/**
 * ООП Классы
 */

function myAlert(text, classCss, attr) {
    let add = `<p class="${classCss}">${text}</p>`
    document.querySelector(attr).innerHTML = add
}

myAlert('Hello', 'bgr-orange', '[data-text]')
myAlert('Warning', 'bgr-red', '[data-text-two]')

let meAlert = new Alert('My message', 'text', '[data-text-class]')
console.log(meAlert)
meAlert.showAlert();

let upgradeAlert = new UpgradeAlert('New message', 'bgr-orange', '[data-text]', 'pets')
upgradeAlert.showIconAlert();

/**
 * ООП Прототипы
 */
let user = {
    username: 'Ivan',
    surname: 'Ivanov',
    _password: '', // приватное свойство
    set password(pass) {
        this._password = pass.trim()
    },
    get password() {
        return this._password
    }
}

user.password = ' Hello '
console.log(user.password) // 'Hello' без пробелов, так как мы создали setter

let newUser = {}
newUser.__proto__ = user // newUser наследуется от user
console.log(newUser.password) // унаследует get password()

newUser.photo = 'ivan.jpg'

console.log(newUser.__proto__.username) // получим значение свойства username прототипа user

/**
 * Try Catch. Работаем с ошибками
 */
let text = 'text'
// try - пробуем что-то выполнить
try {
    document.querySelector('[data-try-catch]').innerHTML = text
} catch(error) { // catch - ловим ошибку
    console.log(error)
}
finally { // то, что будет выполнено в любом случае
    console.log('Программа работает')
}
console.log(text) // ошибка


/**
 * Рекурсия
 * Функция вызывает сама себя
 */

let rec = 1;

function recursion() {
    rec++
    console.log(rec)
    // Условие для выхода
    if (rec > 10) {
        return rec
    }
    recursion()
}

// Пример применения рекурсии для анимации
let offset = 0;
function move() {
    offset += 5
    document.querySelector('[data-animation]').style.left = offset + 'px'
    if (offset > 273) {
        return true
    }
    // Сделаем задержку 500 миллисекунд
    setTimeout(move, 500)
}

document.querySelector('[data-animation-btn]').onclick = move

/**
 * Замыкания
 * «Замыкания» - это замыкание области видимости на какой-то объем (scope) переменной
 */
// Глобальная переменная по отношению к функции
// Проблема 1 - переменная не защищена и ее возможно переопределить в любом месте кода, поэтому нам нежелательно вызывать ее в функции
let lock = 0
function lockingFalse() {
    // Локальная переменная, видна только внутри функции. Правильнее использовать локальную переменную из-за проблемы 1
    // Проблема 2 - как сделать счетчик, если каждый вызов переменная обнуляется до дефолтного значения
    lock = 2
    lock = lock + 1
    return lock
}
console.log(lockingFalse())

// Решение проблемы 2
function lockingTrue() {
    // Чтобы переменная была доступна только внутри, замыкаем ее в области видимости. Аналог private из ООП
    lock = 2
    return function() {
        lock = lock + 1
        return lock
    }
}
console.log(lockingTrue())

/**
 * «Чистая» функция
 * Если мы вводим одни и те же параметры, то чистая функция всегда возвращает один и тот же результат
 * side-эффекты - эффекты, которые производит функция во время своей работы. Если функция меняет состояние системы.
 * Если есть side-эффекты, то функция не является чистой
 */
// Пример
function pure(a) {
    // Если добавим, например, document.querySelector('[data-animation]').style.left = offset + 'px', то функция не будет «чистой»
    return a * 5;
}

// Плюсы «чистой» функции:
// 1. Меньше багов
// 2. Проще тестировать
// 3. Проще понимать
