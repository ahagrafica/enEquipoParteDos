console.log('Hola mundo');

const countButton = document.querySelector('.contador');
const count = document.querySelector('.cuenta');

let number = 0;
function addCount() {
	count.innerHTML = number ++;
}

countButton.addEventListener('click', addCount);