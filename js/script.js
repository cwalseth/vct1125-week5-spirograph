$(document).ready(function(){
let ellipse = $("#svg1>ellipse");
let colorText = $("#svg2>path");
console.log(ellipse);
gsap.registerPlugin(GSDevTools, DrawSVGPlugin);

let tl1 = new gsap.timeline({
    id:"TL1"
});
tl1.from(ellipse, {opacity: 0, stagger: 0.05, ease: "slow(0.7, 0.7, false"})
let tl2 = new gsap.timeline({
    id:"TL2"
});
tl2.from(colorText, 2, {y: -20, opacity: 0, stagger: 0.1, ease:"bounce.out"}, "+=1")
GSDevTools.create();


});