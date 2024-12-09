var h1=document.querySelector('h1');
var h1Text= h1.textContent;
var splitH1=h1Text.split('');

var mid=splitH1.length/2;

var clutter="";

splitH1.forEach(function(el,idx){
    if(idx<mid){
        clutter+= `<span class="a">${el}</span>`;
    }else{
        clutter+= `<span class="b">${el}</span>`;
    }
})

h1.innerHTML=clutter;

gsap.from(".a",{
    
    opacity:0,
    y:100,
    duration:1,
    stagger:0.5,
})

gsap.from(".b",{
    opacity:0,
    y:100,
    duration:1,
    stagger:-0.5,
})

