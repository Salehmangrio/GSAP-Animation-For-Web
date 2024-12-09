let main = document.querySelector("#main");
let cursor = document.querySelector("#cursor");
let image = document.querySelector("#image");


main.addEventListener("mousemove", function(event){
    gsap.to(cursor,{
        x: event.x,
        y: event.y,
        ease:'back.out'
    })
});

image.addEventListener("mouseenter", function(event){
    cursor.innerHTML="View More";
    gsap.to(cursor,{
        scale:4,
    })
});

image.addEventListener("mouseleave", function(event){
    cursor.innerHTML="";
    gsap.to(cursor,{
        scale:0,
    })
});