let washingMachine= document.getElementById('washingMachine');
class Washer {
    machine= {x:10, y:10};
    door={x:40, 4:10};
    size=200;
    color= [200,200,50];
    
    constructor() {
       // make a simple rectangle
        let newRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        newRect.setAttribute("fill", `rgb(${this.color[0]}, ${this.color[1]}, ${this.color[2]})`);
        newRect.setAttribute("x", this.machine.x);
        newRect.setAttribute("y", this.machine.y);
        newRect.setAttribute("height", this.size);
        newRect.setAttribute("width", this.size);

        console.log(`rgb(${this.color[0]}, ${this.color[1]},${this.color[2]}`);
        washingMachine.appendChild(newRect); 
        
        let door=document.createElementNS("http://www.w3.org/2000/svg", "circle");
        door.setAttribute("fill", 'rgb($(this.color[0]');
        door.setAttribute("height", this.size);
        console.log('rgb(${this.color[0]}, ${this.color[1]},${this.color[1]}');
        washingMachine.appendChild(door); 

        // let clothes=document.createElementNS("http://www.w3.org/2000/svg", "circle");
      
        // newRect.setAttribute("height", this.size);
        // console.log('rgb(${this.color[0]}, ${this.color[1]},${this.color[1]}');
        // base.appendChild(newRect); 

    }
}

let m=new Washer();