//function with rest parameter
function test() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    for (var _a = 0, a_1 = a; _a < a_1.length; _a++) {
        var i = a_1[_a];
        console.log(i);
    }
}
//let arr=["apple","kiwi","dragon"]
test("apple", "kiwi", "dragon");
function sumOFTenNumbers() {
    var n = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        n[_i] = arguments[_i];
    }
    var sum = 0;
    for (var _a = 0, n_1 = n; _a < n_1.length; _a++) {
        var i = n_1[_a];
        sum = sum + i;
    }
    console.log("sum of ten numbers : " + sum);
}
sumOFTenNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
