let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let container = document.querySelector('.container')
let items = container.querySelectorAll('.list .item')
let indicador = document.querySelector('.indicadores')
let dots = indicador.querySelectorAll('ul li')
let list = container.querySelector('.list')

let active = 0;
let firstPosition = 0;
let lastPosition = items.length - 1

prevButton.onclick = () => {
    list.style.setProperty('--calculation', -1)
    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')

    active = active - 1 < firstPosition ? lastPosition : active - 1
    items[active].classList.add('active')

    let dotsOld = indicador.querySelector('ul li.active')
    dotsOld.classList.remove('active')
    dots[active].classList.add('active')

    indicador.querySelector('.numeros').innerText = '0' + (active + 1)

}

nextButton.onclick = () => {
    list.style.setProperty('--calculation', 1)
    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')

    active = active + 1 > lastPosition ? 0 : active + 1
    items[active].classList.add('active')

    let dotsOld = indicador.querySelector('ul li.active')
    dotsOld.classList.remove('active')
    dots[active].classList.add('active')

    indicador.querySelector('.numeros').innerText = '0' + (active + 1)
}