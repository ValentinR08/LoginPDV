// Ejemplo: Iniciar o detener la animación al hacer clic en la escena
const scene = document.querySelector('.scene');

scene.addEventListener('click', () => {
    const leftArm = document.querySelector('.left-arm');
    const rightArm = document.querySelector('.right-arm');

    if (leftArm.style.animationPlayState === 'paused') {
        leftArm.style.animationPlayState = 'running';
        rightArm.style.animationPlayState = 'running';
    } else {
        leftArm.style.animationPlayState = 'paused';
        rightArm.style.animationPlayState = 'paused';
    }
});