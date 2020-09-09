const btn = document.getElementsByClassName('openModal')
const modal = document.getElementsByClassName('modal')
const close = document.getElementsByClassName('close')

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function() {
    modal[i].style.display = 'block'
    })
}

for (let i = 0; i < close.length; i++) {
    close[i].addEventListener('click', function() {
    modal[i].style.display = 'none'
    })
}