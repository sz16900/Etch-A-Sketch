gridLength = start();
container = document.getElementById('grid');
document.documentElement.style.setProperty('--gridLength', gridLength);

for (let i = 0; i < gridLength * gridLength; i++) {
    let newDiv = document.createElement('div');
    newDiv.classList.add("item");
    newDiv.addEventListener("mouseover", () => newDiv.style.background = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6));
    container.appendChild(newDiv);
}

var btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    window.location.reload();
});

function start() {
    return prompt("type number of cells");
}


