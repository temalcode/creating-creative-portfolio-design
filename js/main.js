const cursor = document.querySelector('.cursor')
const innerCursor = document.querySelector('.inner-cursor')
const portfolioImages = document.querySelectorAll('.portfolio__item')
const services = document.querySelectorAll('.service')
const serviceLinks = document.querySelectorAll('.service a')
const changeCursor = document.querySelectorAll('.change-cursor')
const nextButton = document.querySelector('.next a')

window.addEventListener('mousemove', function (e) {
    cursor.style.top = e.pageY + 'px'
    cursor.style.left = e.pageX + 'px'
    innerCursor.style.top = e.pageY + 'px'
    innerCursor.style.left = e.pageX + 'px'
})

portfolioImages.forEach(image => {
    image.addEventListener('mouseenter', () => {
        innerCursor.style.height = '20px'
        innerCursor.style.width = '20px'
        innerCursor.style.backgroundColor = 'black'
        cursor.style.border = 'none'
        cursor.style.height = '80px'
        cursor.style.width = '80px'
        cursor.style.backgroundColor = 'rgba(0, 0, 0, 0.4)'

        image.innerText = image.getAttribute('project')
    })
    image.addEventListener('mouseleave', () => {
        innerCursor.style.height = '10px'
        innerCursor.style.width = '10px'
	innerCursor.style.backgroundColor = 'white'
        cursor.style.border = '2px solid white'
        cursor.style.height = '40px'
        cursor.style.width = '40px'
        cursor.style.backgroundColor = 'transparent'

        image.innerText = ''
    })
})

changeCursor.forEach(item => {
    item.addEventListener('mouseenter', () => {
        innerCursor.style.display = 'none'
        cursor.style.border = 'none'
        cursor.style.height = '80px'
        cursor.style.width = '80px'
        cursor.style.backgroundColor = 'rgb(255, 255, 255)'
        cursor.style.zIndex = '-1'
        item.style.color = 'black'
        item.style.fontWeight = '700'
    })
    item.addEventListener('mouseleave', () => {
        innerCursor.style.display = 'block'
        cursor.style.border = '2px solid white'
        cursor.style.height = '40px'
        cursor.style.width = '40px'
        cursor.style.backgroundColor = 'transparent'
        item.style.color = 'white'
        item.style.fontWeight = '400'
        cursor.style.zIndex = '0'
    })
})

services.forEach(service => {
    service.addEventListener('mouseenter', () => {
        innerCursor.style.backgroundColor = 'black'
        cursor.style.border = '2px solid black'
    })
    service.addEventListener('mouseleave', () => {
        innerCursor.style.backgroundColor = 'white'
        cursor.style.border = '2px solid white'
    })
})

serviceLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        innerCursor.style.display = 'none'
        cursor.style.border = 'none'
        cursor.style.height = '100px'
        cursor.style.width = '100px'
        cursor.style.backgroundColor = 'rgb(0, 0, 0)'
        link.style.color = 'white'
    })
    link.addEventListener('mouseleave', () => {
        innerCursor.style.display = 'block'
        cursor.style.border = '2px solid black'
        cursor.style.height = '40px'
        cursor.style.width = '40px'
        cursor.style.backgroundColor = 'transparent'
        link.style.color = 'black'
    })
})

nextButton.addEventListener('mouseenter', () => {
    innerCursor.style.display = 'none'
    cursor.style.border = 'none'
    cursor.style.height = '200px'
    cursor.style.width = '200px'
    cursor.style.backgroundColor = 'rgb(255, 255, 255)'
    cursor.style.zIndex = '-1'
    nextButton.style.color = 'black'
    nextButton.style.fontWeight = '800'
})
nextButton.addEventListener('mouseleave', () => {
    innerCursor.style.display = 'block'
    cursor.style.border = '2px solid white'
    cursor.style.height = '40px'
    cursor.style.width = '40px'
    cursor.style.backgroundColor = 'transparent'
    cursor.style.zIndex = '0'
    nextButton.style.fontWeight = '400'
    nextButton.style.color = 'white'
})


ScrollReveal().reveal('.heading');
