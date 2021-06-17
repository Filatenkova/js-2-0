/**
 * Класс для работы с выводом сообщений
* @bxjs_lang_path
*/
class Alert {
    constructor(text, classCss, attr) {
        this.text = text
        this.classCss = classCss
        this.attr = attr
    }

    showAlert() {
        document.querySelector(this.attr).innerHTML = `<p class="${this.classCss}">${this.text}</p>`
    }
}
