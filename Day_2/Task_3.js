/* ================= Task-3 ================= */
/* 1.1. Write a Function that accepts a string from user through prompt and count the number of ‘e’ characters in it. */

function stringFun(userStr) {
    var count = 0;

    for (var i = 0; i < userStr.length; i++) {
        console.log(userStr[i]);
        if (userStr[i] == 'e') {
            var indexNum = i;
            console.log(indexNum);
            count++;
        }
    }
    return "Number of 'e' Character is " + count;
}

var strText = prompt("Write Message...")
console.log(stringFun(strText));