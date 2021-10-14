//Instrunment class
class Instrument {
  //properties for loudness, for family, and for play verb
  constructor(family, verb, loudness) {
    this.family = family;
    this.verb = verb;
    this.loudness = loudness;
  }
  //invoking a class
  play() {
    console.log(this.family, this.verb, this.loudness);
  }
}

//extending the class to Instrument
class Woodwind extends Instrument {
  constructor(loudness) {
    super("woodwind", "blows", loudness);
  }
}

//extending the class to Instrument
class Percussion extends Instrument {
  constructor(loudness) {
    super("percussion", "slaps", loudness);
  }
}
//extending the class to Instrument
class String extends Instrument {
  constructor(loudness) {
    super("string", "strums", loudness);
  }
}

//instantiating classes
var flute = new Woodwind(4);
var bongo = new Percussion(10);
var violin = new String(7);

//creating an array for instruments
var instruments = [flute, bongo, violin];

for (var i = 0; i < instruments.length; i++) {
  instruments[i].play();
}
