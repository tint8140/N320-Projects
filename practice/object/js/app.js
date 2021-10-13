//everything inside of this object is called a scope
var myDog = {
  name: "Krog",
  height: 10,
  color: "brown",

  // a function inside of an object is called method
  bark: function () {
    //this. allows you to access the other methods and porperties in the object
    console.log(this.name + " barks!");
  },
};
//object and function

//classes are an idea considered to be blueprints
class Dog {
  constructor(name, height, color) {
    this.name = name;
    this.height = height;
    this.color = color;
  }
  bark() {
    console.log(this.name + " barks!");
  }
}
//use the "new" keyword to run constructor
var myDog = new Dog("Giselle", 10, "yellow");

myDog.bark();
