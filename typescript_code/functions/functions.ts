function func() {
    console.log("Simple funciton");
}

//funciton with ReturnType
function funcWithReturn(): number{    
    var num: number = 20
    return num;
}

//funciton with argument
function funcWithParam(num1: number, num2: number){
    console.log(num1+num2);
}

//funciton with optional argument(optinal param should be last in params)
function funcWithOptionalParam(num1: number, num2: number, str?: string){
    console.log("str: "+ str)
    console.log(num1+num2);
}

//Rest Parameters or variable-arguments. function can have at the most one rest parameter.
function addNumbers(...nums:number[]) {  
    var i;   
    var sum:number = 0; 
    
    for(i = 0;i<nums.length;i++) { 
       sum = sum + nums[i]; 
    } 
    console.log("sum of the numbers",sum) 
 } 


 //Default param with default value
 function calculate_discount(price:number,rate:number = 0.50) { 
    var discount = price * rate; 
    console.log("Discount Amount: ",discount); 
 }  

funcWithParam(15, 20);

funcWithOptionalParam(10, 20);
funcWithOptionalParam(10, 20, 'Jack');

addNumbers(1,2,3) 
addNumbers(10,10,10,10,10)

calculate_discount(1000) 
calculate_discount(1000,0.30)

//function overloading
function show(s1:string):void; 
function show(n1:number,s1:string):void; 

function show(x:any,y?:any):void { 
   console.log(x); 
   console.log(y); 
} 
show("abc") 
show(1,"xyz");

