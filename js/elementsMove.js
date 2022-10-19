const elementToMove = document.querySelector(".banner-visuals");

const width = window.screen.width;
const height = window.screen.height;

const x0 = width/2;
const y0 = height/2;

window.addEventListener('mousemove', event => {
    const {screenX, screenY} = event;

    const rotationX = (screenX - x0)/x0*(-12);
    const rotationY = (screenY - y0)/y0*(-12);

    elementToMove.style.transform = `rotateX(${rotationY}deg) rotateY(${rotationX}deg)`;
})

