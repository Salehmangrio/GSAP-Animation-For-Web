const sidePanel = document.querySelector('#sidePanel');
const closed = document.querySelector('.close');
const opened = document.querySelector('.open');


closed.style.visibility = 'hidden';

closed.addEventListener('click', () => {
    sidePanel.style.right = '-25%'; 
    closed.style.visibility = 'hidden'; 
    opened.style.visibility = 'visible';
});

opened.addEventListener('click', () => {
    sidePanel.style.right = '0'; 
    closed.style.visibility = 'visible'; 
    opened.style.visibility = 'hidden'; 
});

const ball = document.querySelector('body');

ball.addEventListener('mousemove', (e) => {
    gsap.to('#ani img',{
        opacity:1,
        x:e.pageX-20,
        y:e.pageY-20,
        ease:'back.out',
        scale:1.1,
        transformOrigin:"center center",
        zIndex:10,
    })
   });

