let elm = document.querySelectorAll('.elm')
let r1 = document.querySelector('.r1')
let l1 = document.querySelector('.l1')

let count = 0;
function right() {   
    elm[count].classList.remove('active')
    count = (count + 1) % elm.length
    elm[count].classList.add('active')
}

function left() {
    elm[count].classList.remove('active')
    count = (count - 1 + elm.length) % elm.length
    elm[count].classList.add('active')
 }

setInterval(right,15000)
 
l1.addEventListener('click', left)

r1.addEventListener('click', right)