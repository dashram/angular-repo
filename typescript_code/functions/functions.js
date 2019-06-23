function func() {
    console.log("Simple funciton");
}
//funciton with ReturnType
function funcWithReturn() {
    var num = 20;
    return num;
}
//funciton with argument
function funcWithParam(num1, num2) {
    console.log(num1 + num2);
}
//funciton with optional argument(optinal param should be last in params)
function funcWithOptionalParam(num1, num2, str) {
    console.log("str: " + str);
    console.log(num1 + num2);
}
//Rest Parameters or variable-arguments
function addNumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var i;
    var sum = 0;
    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    console.log("sum of the numbers", sum);
}
funcWithParam(15, 20);
funcWithOptionalParam(10, 20);
funcWithOptionalParam(10, 20, 'Jack');
addNumbers(1, 2, 3);
addNumbers(10, 10, 10, 10, 10);
