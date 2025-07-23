/* ================= Task-1 ================= */

/* 5. Write a function applyOperation that takes two numbers and a function as parameters. 
applyOperation should call the passedin function with the two numbers and return the result. 
Test it by passing different operations like addition and multiplication. */

function add(num1, num2) {
    console.log("Adding");
    return num1 + num2;
}

function multiply(num1, num2) {
    console.log("Multiply");
    return num1 * num2;
}

var subtract = function (num1, num2) {
    console.log("Subtract");
    return (num1 - num2);
};

function applyOperations(num1, num2, myFun) {
    console.log("my Function");
    return myFun(num1, num2);
}

console.log(applyOperations(5, 3, add));

console.log(applyOperations(5, 3, multiply));

console.log(applyOperations(10, 3, subtract));

console.log(applyOperations(10, 2, function (num1, num2) {
    console.log("Division");
    if (num2 != 0) {
        return num1 / num2;
    } else if (num1 != 0) {
        return num2 / num1;
    } else {
        console.log("Error");
    }
}));