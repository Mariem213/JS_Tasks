/* ================= Task-2 ================= */

/* 6. Create a function named processArray that takes an array and a callback function. The function should apply the callback to each
element in the array and log the results. Test it by passing an array of numbers and a callback that squares each number
    var numbers = [1, 2, 3, 4, 5];
    Function Call : processArray(numbers, square);
    Expected output: 1, 4, 9, 16, 25
*/

function processArray(array, myFun) {
    console.log("My Function");
    return myFun(array);
}

var arr = [1, 2, 3, 4, 5];

console.log(processArray(arr, function (arr) {
    for (var index = 0; index < arr.length; index++) {
        var res = arr[index] * arr[index];
        console.log("Result = ", res);
    }
    return "Result = " + res;
}));