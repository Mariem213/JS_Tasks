/* ================= Task-2 ================= */
/*1.2. Write a script that takes from the user n values and returns their sum,
stop receiving values from user when he enters 0 or sum exceeds 100,
check that the entered data is numeric and inform the user with the total sum of the entered values. */

var num = Number(prompt("Enter Number between 0, 100 : "));
var sum = 0;

for (var index = num; sum <= 99 && num != 0; index++) {
    sum = sum + num;
    console.log("Sum = " + sum);
    num = Number(prompt("Enter Number between 0, 100 : "));
}

document.writeln("Total Sum = " + sum)

// ==========================================================================

// var num = Number(prompt("Enter Number between 0, 100 : "));
// var sum = 0;

// while (sum <= 99 && num != 0) {
//     sum = sum + num;
//     console.log("Sum = " + sum);
//     num = Number(prompt("Enter Number between 0, 100 : "));
// }

// document.writeln("Total Sum = " + sum)