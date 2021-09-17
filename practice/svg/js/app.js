let mainRect= document.getElementById("mainRect");
console.log(mainRect);
let t=0;

//start animation
drawFrame();
function drawFrame(){
    t++;
    let rectY=Number(mainRect.getAttribute("y"));
    // console.log(rectY);
    rectY += Math.sin(t/10);
    mainRect.setAttribute("y",rectY);
    requestAnimationFrame(drawFrame);
}