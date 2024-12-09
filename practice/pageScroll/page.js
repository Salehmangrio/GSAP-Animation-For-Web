gsap.from("#page1 #box",{
    x:-700,
    duration:.3,
    rotate:720,
    delay:2
})

gsap.from("#page2 #box",{
    x:-700,
    duration:.3,
    rotate:720,

    scrollTrigger:{
        trigger:"#page2",
        start:"top 0",
        end:"top -100%",
        markers:true,
        scrub:1,
        pin:true,
    },
})