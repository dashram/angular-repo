let a: number = 1;
let b: string = 'Hello World';
let c: boolean = false;

let d: any = 0; //any type is allowed
let e: number[] = [1, 2, 3];

enum Color {
    Red,
    Green,
    Blue
}
let bgColor = Color.Red;



var nameValue:string = "John"; 
var score1:number = 50;
var score2:number = 42.50
var sum = score1 + score2 
console.log("name"+nameValue) 
console.log("first score: "+score1) 
console.log("second score: "+score2) 
console.log("sum of the scores: "+sum)


//variable scopes
var global_num = 12          //global variable 
class Numbers { 
   num_val = 13;             //class variable 
   static sval = 10;         //static field 
   
   storeNum():void { 
      var local_num = 14;    //local variable 
   } 
} 
console.log("Global num: "+global_num)  
console.log(Numbers.sval)   //static variable  
var obj = new Numbers(); 
console.log("Global num: "+obj.num_val) 