//create variable
var rain = [];
var bgcolor = 200;
var x = 50;
var y = 500;

function setup() {
  createCanvas(600, 600);

  //rain are less than amount of 50
  for (i = 0; i < 50; i++) {
    //creating a new class for rain object
    //setting the distance between each object
    rain[i] = new Rain(random(this.x, this.y), random(0, -3000));
  }
}

function draw() {
  //recall background color
  background(170, 150, 146, 240);
  //recall ground function
  ground();

  //Check if it's raining
  for (i = 0; i < rain.length; i++) {
    rain[i].dropRain();
  }
}

function ground() {
  for (i = 0; i < rain.length; i++) {
    //draw rectangle
    rect(0, 530, 600, 530);

    if (frameCount >= 10) {
      fill(0, 128, 128 * 0.5 + frameCount / 10);
    }
  }
  push();
  pop();
}

function Rain(x, y) {
  //creating variables for Rain
  this.x = x;
  this.y = y;
  //hide the rain once it hits the gorund
  this.length = 15;

  this.dropRain = function () {
    noStroke();
    //rain color
    fill(255);
    //create the rain
    ellipse(this.x, this.y, 10, this.length);
    //speed of the rain
    this.y = this.y + 4;
    //the ground level
    if (this.y > 520) {
      this.length = this.length - 5;
    }
    //disappearing rain
    if (this.length < 0) {
      this.y = random(0, -100);
      this.length = 15;
    }
  };
}
