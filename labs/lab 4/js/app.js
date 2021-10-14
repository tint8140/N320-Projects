//references to html
let header = document.getElementById("blueBox");
let blocks = document.getElementById("blocks");
let block = document.getElementsByClassName("block");

//make the blocks to appear in the web page
init();
function init() {
  for (let i = 0; i < block.length; i++) {
    //TweenMax help them to transition
    TweenMax.from(block[i], { duration: 0.5, alpha: 0, y: 30, delay: i * 0.3 });
  }

  TweenMax.from(blueBox, { duration: 0.5, alpha: 0, y: 30 });
  TweenMax.from(title, { duration: 0.5, alpha: 0, y: 30 });
}
//make the header dissapear in .4 seconds (super fast)
header.addEventListener("click", function () {
  TweenMax.to(header, { duration: 0.4, alpha: 0 });
  console.log("clicked");
});

//make the blocks to dissapear in .4 seconds (super fast)
for (let i = 0; i < block.length; i++) {
  block[i].addEventListener("click", function () {
    TweenMax.to(event.target, { duration: 0.4, alpha: 0 });
    console.log("clicked");
    event.target.style.backgroundColor = "white";
  });
}

for (let i = 0; i < block.length; i++) {
  block[i].addEventListener("mouseover", function () {
    TweenMax.to(event.target, { duration: 0.2, alpha: 0.5 });
  });
  block[i].addEventListener("mouseout", function () {
    TweenMax.to(event.target, { duration: 0.2, alpha: 1 });
  });
}
