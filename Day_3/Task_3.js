/* ================= Task-3 ================= */
/* 
1. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers.
    Ex: input : [1,2,3,4,5,1,5]
    Expected Output : 2,4
*/

function myFun(arr) {
    var uniqueArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (uniqueArr.indexOf(arr[i]) === -1) {
            uniqueArr.push(arr[i]);
        }
    }

    uniqueArr.sort(function (a, b) {
        return a - b;
    });

    var secondLow = uniqueArr[1];
    var secondLarge = uniqueArr[uniqueArr.length - 2];

    return [secondLow, secondLarge];
}

var arrNums = [1, 2, 3, 5, 5, 1, 5];
var res = myFun(arrNums)
console.log(res);