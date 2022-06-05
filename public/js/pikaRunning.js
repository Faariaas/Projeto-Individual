const pika = document.querySelector('.pika')
const bola = document.querySelector('.bola')




const jump = () => {
    pika.classList.add('jump')

    setTimeout(() => {
        pika.classList.remove('jump')
    },500);
}

const loop = setInterval(() => {

    console.log('loop')

    const bolaposition = bola.offsetLeft;
    const pikaposition = +window.getComputedStyle(pika).bottom.replace('px','')

    if (bolaposition <= 130 && bolaposition > 0 && pikaposition < 110) {
        bola.style.animation = 'none';
        bola.style.left = `${bolaposition}px`

        pika.style.animation = 'nonw';
        pika.style.bottom = `${pikaposition}px`

        clearInterval(loop)
    } 


}, 10);

document.addEventListener('keydown', jump)