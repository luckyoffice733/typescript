//functions
//default argument funtion
function msg() {
    console.log("hello");
}
//function with arguments of type and return type
function addition(a, b) {
    var c = a + b;
    return c;
}
//function with default value for th arguements
function add(x, y) {
    if (y === void 0) { y = 10; }
    console.log(x + y);
}
msg();
var res = addition(10, 40);
console.log("sum is : " + res);
add(10);
//arrow functions
var sum = function (n1, n2) { return n1 + n2; };
console.log("arrow function : " + sum(30, 30));
