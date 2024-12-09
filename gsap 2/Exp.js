gsap.to ("#page2 h1",{
    transform:"translateX(-280%)",
    duration:5,
    scrollTrigger:{
        trigger:"#page2",
        start:"top 0%",
        end:"top -200%",
        markers:true,
        scrub:2,
        pin:true,
    }

})