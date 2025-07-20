/* ================= Task-5 ================= */

/* 1.3. Fill an array of 3 elements from the user, and apply each of the following mathematical operations on it (+, *, /).
Format the output as shown in Fig. */

var myFun = function (arr, sign) {
    var res = 0;
    var expression = "";
    if (sign == '+') {
        for (var index = 0; index < arr.length; index++) {
            res += arr[index];
            expression += arr[index];

            if (index < arr.length - 1) {
                expression += " + ";
            }
        }
        document.writeln(`<h3>The Addition of ${expression} = ${res}</h3>`);
    } else if (sign == '-') {
        res = arr[0];
        expression += arr[0];
        for (var index = 1; index < arr.length; index++) {
            res -= arr[index];
            expression += " - " + arr[index];
        }
        document.writeln(`<h3>The subtract of ${expression} = ${res}</h3>`);
    } else if (sign == '/') {
        res = arr[0];
        expression += arr[0];
        for (var index = 1; index < arr.length; index++) {
            res /= arr[index];
            expression += " / " + arr[index];
        }
        document.writeln(`<h3>The division of ${expression} = ${res}</h3>`);
    } else if (sign == '*') {
        res = arr[0];
        expression += arr[0];
        for (var index = 1; index < arr.length; index++) {
            res *= arr[index];
            expression += " * " + arr[index];
        }
        document.writeln(`<h3>The Multiply of ${expression} = ${res}</h3>`);
    }
}

// console.log(myFun([4, 2, 3], "+"));
// console.log(myFun([9, 2, 3], "-"));
// console.log(myFun([4, 8, 1], "*"));
// console.log(myFun([4, 8, 1], "/"));

// var num1 = prompt("Enter 1st Num :")
// var num2 = prompt("Enter 2nd Num :")
// var num3 = prompt("Enter 3rd Num :")

// console.log(myFun([num1, num2, num3], "+"));
// console.log(myFun([num1, num2, num3], "-"));
// console.log(myFun([num1, num2, num3], "*"));
// console.log(myFun([num1, num2, num3], "/"));


var array = [];
for (var index = 0; index < 3; index++) {
    var num = prompt(`Enter Num ${index + 1} :`);
    array.push(Number(num));
    console.log(array);
}

console.log(myFun(array, "+"));
console.log(myFun(array, "-"));
console.log(myFun(array, "*"));
console.log(myFun(array, "/"));