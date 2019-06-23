//=> Arrow/Lambda/goes to operator
//Syntax: ( [param1, parma2,…param n] )=>statement;

//Lambda function
var res = (x:number)=>10 + x 
console.log(res(100))      //outputs 110 

let fn = function(message){
    console.log(message);
};

//arrow function with arguments
let fn2 = (message) => {  console.log(message); }
fn2('Hello World via Arrow');

//arrow function without arguments
let fn3 = (message) => { console.log(message); }
fn3("message-3")

//Optional parentheses for a single parameter
var display = x=> { 
    console.log("The function got "+x) 
 } 
 display(12)

//Optional braces for a single statement, Empty parentheses for no parameter
var disp =()=> { 
    console.log("Function invoked"); 
 } 
 disp();
