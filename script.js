const container = document.getElementById('container');
const colors = ['navy', 'green', '#3498db', 'rebeccapurple', 'red', 'orange', 'silver', '#bfd401'];
const SQUARES = 250;

for(let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover' || 'touchstart', () => setColor(square));
    square.addEventListener('mouseout' || 'touchend', () => removeColor(square));

    container.appendChild(square);
    // insert into the container, passes in square.
}

function setColor(element) {
    let color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
    console.log(color)
}

function removeColor(element) {
    element.style.background = '#1d1d1d'
    element.style.boxShadow = ` 0 0 2px #000`
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}
