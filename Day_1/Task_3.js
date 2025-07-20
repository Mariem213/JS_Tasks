/* ================= Task-3 ================= */
/* 1.3. Write a script that take a number ad check if the given number is divided by 3 only, 5 only or both */

var num = Number(prompt("Enter Number between 0, 100 : "));
if (num % 3 == 0 && num % 5 == 0) {
    console.log("fizzBuzz");
    document.writeln("<h1>fizzBuzz</h1>")
} else if (num % 3 == 0) {
    console.log("fizz");
    document.writeln("<h1>fizz</h1>")
} else if (num % 5 == 0) {
    console.log("buzz");
    document.writeln("<h1>buzz</h1>")
} else {
    console.log("none");
    document.writeln("<h1>none</h1>")
}
