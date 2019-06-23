//Follow command to run typescript code
//to compile: $tsc fileName.ts
//to run(to get output): $node fileName.js
function logMessage(message) {
    console.log(message);
}
function doSomethhing() {
    console.log("Inside doSomethhing Method: ");
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log("Finally --" + i);
}
var msg = "Hello World!";
console.log(msg);
logMessage("Hi, " + msg);
doSomethhing();
