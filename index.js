let element = document.createElement('div')
document.body.appendChild(element)
let ul = document.createElement('ul')

for (let i = 0; i < 3; i++) {
    let li = document.createElement('li')
    li.innerHTML = (i + 1).toString()
    ul.appendChild(li)
}

element.appendChild(ul)

element.style.backgroundColor = '#27647B';

document.querySelector('#main').remove();

let newHeader = document.createElement('h1')
// let newHeader = document.querySelector("h1#victory")
newHeader.id = 'victory'
newHeader.innerHTML = 'Ili is the champion'