var myDog = {
    name: "krog",
    height: 10,
    color: "brown",

    bark: function() {
        console.log(this.name + " barks!");
    }

    }
    
class Dog {
    constructor(name,height,color) {
    this.name = name;
    this.height = height;
    this.color = color;
    }
    
    bark() {
        console.log(this.name + "barks!");
    }
    }
    
    var myDog = new Dog("Giselle",10,"yellow");
    myDog.bark();
    