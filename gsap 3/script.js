let path = `M 10 100 Q 500 100 990 100`;
let finalPath = `M 10 100 Q 500 100 990 100`;


let str = document.getElementById('string');

str.addEventListener('mousemove', (e) => {
    let path=`M 10 100 Q ${e.x} ${e.y} 990 100`
    gsap.to("svg path",{
        attr :{d:path},
        duration:0.3,
        ease: "power3.out"
    })
});


str.addEventListener('mouseleave', (e) => {

    gsap.to("svg path",{
        attr :{d:path},
        duration:1.5,
        ease: "elastic.out(1,0.2)",
    })
});

