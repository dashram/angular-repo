//modifiers: 
//private = only in same class
//public = everywhere
//protected = child classes

//making class available outside the file using export
export class Point{
    //private x: number;
    //private y: number;

    //constructor overloading not available in ts
    //if 1st arg is optional others should be optional
    constructor(private x?: number, private y?: number){
        //specifing modifiers in constructor will initialize members automatically        
    }

    draw(): void{
        console.log('Drawing Circle with x and y: '+ this.x +", "+ this.y);
    }

    getX(){
        return this.x
    }
    setX(value: any){
        this.x = value;
    }
}

let p = new Point(1, 2);
p.draw();
p.setX(21);
console.log(p.getX());
