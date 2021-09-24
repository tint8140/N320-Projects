flownum = 1000;

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < flownum; i++) {}
}

function draw() {
  background(220);
  //For (var BEGIN; END; INTERVAL){
  //DO SOMETHING }
  for (var x = 0; x < width; x += width / 10) {
    for (var y = 0; y < height; y += height / 5) {
      stroke(0);
      strokeWeight(1);
      line(x, 0, x, height);
      line(0, y, width, y);
    }
  }
}
