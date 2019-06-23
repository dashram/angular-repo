//anonymous function
var msg = function() { 
    return "hello world";  
 } 
 console.log(msg())

 //anonymous function with param
 var res = function(a:number,b:number) { 
    return a*b;  
 }; 
 console.log(res(12,2)) 

 //Function Constructor
 var myFunction = new Function("a", "b", "return a * b"); 
var x = myFunction(4, 3); 
console.log(x);

//recursion
function factorial(number) {
    if (number <= 0) {         // termination case
       return 1; 
    } else {     
       return (number * factorial(number - 1));     // function invokes itself
    } 
 }; 
 console.log(factorial(6));      // outputs 720 

 //Anonymous Recursive Function
(function () { 
   var x = "Hello!!";   
   console.log(x)     
})()      // the function invokes itself using a pair of parentheses ()



