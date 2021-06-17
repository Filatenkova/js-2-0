// Наследование получает возможность со всем, что есть в Alert + новые плюшки
class UpgradeAlert extends Alert {
    // Повторяем constructor родителя с помощью super + добавляем свои свойства
    constructor(text, classCss, attr, icon) {
        super(text, classCss, attr)
        this.icon = icon
    }

    // Первый вариант. Перезаатираем showAlert родителя
    // showAlert() {
    //     document.querySelector(this.attr).innerHTML = `<p class="${this.classCss}">${this.text}</p>`
    // }
    // Второй вариант. С помощью super передаем свои данные в showAlert + добавляем свои
    // showAlert() {
    //
    // }
    // Третий вариант. Создаем новый метод
    showIconAlert() {
        document.querySelector(this.attr).innerHTML = `<p class="${this.classCss}"><span class="material-icons">${this.icon}</span>${this.text}</p>`
    }
}
