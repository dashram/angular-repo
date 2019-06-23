var alphas:string[]; 
alphas = ["1","2","3","4"] 
console.log(alphas[0]); 
console.log(alphas[1]);

//Single statement declaration and initialization
var nums:number[] = [1,2,3,3] ;
var names:string[] = new Array("Mary","Tom","Jack","Jill")

//Array Object
var arr_names:number[] = new Array(4)  
for(var i = 0;i<arr_names.length;i++) { 
   arr_names[i] = i * 2 
   console.log(arr_names[i]) 
}

//Array Methods
//concat
var alphaArr = ["a", "b", "c"]; 
var numArr = ["d", "e", "f"];
var alphaNumeric = alphaArr.concat(numArr); 
console.log("alphaNumeric : " + alphaNumeric );

//every
function isBigEnough(element, index, array) { 
    return (element >= 10); 
 }            
 var passed = [12, 5, 8, 130, 44].every(isBigEnough); 
 console.log("Test Value : " + passed );