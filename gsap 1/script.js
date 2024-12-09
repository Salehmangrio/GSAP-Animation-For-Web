// //Initial to final
// gsap.to("#box1",{
//     x:1000,
//     duration:2,
//     delay:2,
//     rotate:360,
//     backgroundColor:'blue',
//     borderRadius:'50%',
//     scale:0.5
// })

// //Final to initial
// gsap.from("#box2",{
//     x:1000,
//     duration:2,
//     delay:2,
//     rotate:360,
//     backgroundColor:'blue',
//     borderRadius:'50%'
// })


// gsap.to("#box3",{
//     x:1200,
//     y:500,
//     delay:1,
//     duration:0.3,
//     repeat:-1,
//     yoyo:true,
// })

// // Color of h1 from  this style to original
// gsap.from("h1",{
//     opacity:0,
//     duration:2,
//     y:50,
//     stagger:2 //one by one if negative it will show oposite

// })

// //Used To run code Asyn
// var tl=gsap.timeline()

// tl.to("#box1",{
//     x:1000,
//     duration:2,
//     rotate:360,
//     backgroundColor:'blue',
//     borderRadius:'50%',
//     delay:2,
// })
// tl.to("#box2",{
//     x:1000,
//     duration:2,
//     rotate:360,
//     backgroundColor:'blue',
//     borderRadius:'50%',
// })
// tl.to("#box3",{
//     x:1000,
//     duration:2,
//     rotate:360,
//     backgroundColor:'blue',
//     borderRadius:'50%',
// })

//NaV BAR ANIMATION
 var tl =gsap.timeline()

 tl.from("#nav h1",{
     opacity:0,
     duration:1,
     y:-20,
     delay:1,
 })
 tl.from("li",{
     opacity:0,
     duration:1,
     y:-20,
     stagger:0.5

 })
 
 tl.from("#name",{
    opacity:0,
    duration:0.5,
    scale:0.2,
 })