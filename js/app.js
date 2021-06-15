let inc = 0
document.querySelector('[data-button]').onclick = (e) => {
    inc++
    localStorage.setItem('test', inc)
}
