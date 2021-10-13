//Second Part
// class Animal {
//   constructor(name, weight, color) {
//     this.name = name;
//     this.weight = weight;
//     this.color = color;
//   }
// }
// class Dog extends Animal {
//   constructor(name, weight, color) {
//     super(name, weight, color);
//     this.kind = "dog";
//   }
//   bark() {
//     console.log(this.name + " barks!");
//   }
// }
// let aDog = new Dog("Rex", 45, "black");
// console.log(aDog);
// aDog.bark();

class Dog {
  constructor(name) {
    this.name = name;
  }
  play(ball) {
    ball.catch(this);
  }
}

class Ball {
  catch(dog) {
    console.log(dog.name + " caught a ball!");
  }
}
let dog = new Dog("Difo");
let ball = new Ball();
dog.play(ball);
