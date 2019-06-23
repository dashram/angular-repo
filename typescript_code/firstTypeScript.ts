//Follow command to run typescript code

//to compile: $tsc fileName.ts
//To compile multiple files: $tsc file1.ts, file2.ts, file3.ts

//to run(to get output): $node fileName.js

//Single-line comments //
/*Multi-line comments /* */


function logMessage(message) {
    console.log(message);
}

function doSomethhing() {
    console.log("Inside doSomethhing Method: ");
    for( var i =0; i<5; i++){
        console.log(i);
    }

    console.log("Finally --" + i);
}

var msg = "Hello World!";
console.log(msg);
logMessage("Hi, " + msg);

doSomethhing();

