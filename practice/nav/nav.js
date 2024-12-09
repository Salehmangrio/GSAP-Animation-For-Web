var tl= gsap.timeline();

tl.from("#nav h1",{
    y:-30,
    opacity:0,
    duration:1,
    delay:1,
});

tl.from("li",{
    y:-30,
    opacity:0,
    duration:0.3,
    stagger:2,
});
tl.from("#uni",{
   scale:0,
    duration:1,

});