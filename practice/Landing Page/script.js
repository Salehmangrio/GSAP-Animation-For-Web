 var tl = gsap.timeline({
     repeat:-1
 });

 tl.to(".imagecontainer",{
    width:"100%",
    stagger:2,
    ease:"expo.easeInOut",
    duration:2

 })