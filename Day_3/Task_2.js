/* ================= Task-2 ================= */

/*
Write a script that ask the user to
    • Enter the value of a circle’s radius in order to calculate its area as shown in fig.
    • Enter another value to calculate its square root and alert the result as shown in fig.
    • Enter an angle to calculate its cos value then display the output as shown in Fig.
*/

var rad = Number(prompt("Enter Radius :"));
var circleArea = (Math.PI) * (Math.pow(rad, 2));
var circleAreaFloor = Math.floor(circleArea);
document.writeln(`<h2> The circle area of ${rad} radius = ${circleArea} ~= ${circleAreaFloor} </h2>`)

var num = Number(prompt("Enter Number :"));
var seqNum = Math.sqrt(num);
document.writeln(`<h2> The square root of ${num} = ${seqNum}  </h2>`)

var angle = Number(prompt("Enter Angle :"));
var cosValue = Math.cos((angle * Math.PI) / 180);
var cosValueCeil = Math.ceil(cosValue);
document.writeln(`<h2> The cos value of ${angle} ْ = ${cosValue} ~= ${cosValueCeil} </h2>`)