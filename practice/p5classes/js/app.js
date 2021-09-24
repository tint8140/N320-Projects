class Circle {
    constructor(cx,cy,radius,color) {
        this.x =cx;
        this.y=cy,
        this.radius= radius;
        this.color=color;
        this.speed= 1+ Math.random() *2;
    }
    update() {
        this.y= this.y+ this.speed;
        // this.speed= this.speed +1;
        fill(this.color);
        circle(this.x,this.y,this.radius);
    }

}

var myCircles= [];
myCircles[0]=new Circle(100,10, 100, [166,213,200]);
myCircles[1]=new Circle(200,10, 100, [166,213,200]);
// console.log(myCircle);


function setup() {
    createCanvas(400,300);
    // console.log("Setup")
}
function draw() {
    // console.log("Draw")
    background(34,32,79);
    myCircles[0].update();
    myCircles[1].update();

}

