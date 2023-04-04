// Your code here
const dodger = document.getElementById("dodger");

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        moveDodgerLeft();
    }
    if (event.key === 'ArrowRight') {
        moveDodgerRight();
    }
});

function moveDodgerLeft() {
    const nums = parseInt(dodger.style.left.replace('px', ''), 10);
    if (nums >= 2) {
        dodger.style.left = `${nums - 2}px`;
    }
}

function moveDodgerRight() {
    const nums = parseInt(dodger.style.left.replace('px', ''), 10);
    if (nums <= 358) {
        dodger.style.left = `${nums + 2}px`;
    }
}
