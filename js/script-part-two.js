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
