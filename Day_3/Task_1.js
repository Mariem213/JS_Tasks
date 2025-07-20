/* ================= Task-1 ================= */

/* 1.6. Write a function that take an array of persons’ names and return two random names of them. */

var namingArr = ["ahmed", "mariem", "ziad", "rewan", "mohamed"];

var index1 = Math.floor(Math.random() * namingArr.length);
var randomName1 = namingArr[index1];
var index2 = Math.floor(Math.random() * namingArr.length);
var randomName2 = namingArr[index2];

if (index1 === index2) {
    index2 = Math.floor(Math.random() * namingArr.length);
    randomName2 = namingArr[index2];
    document.writeln(`<h2> ${randomName1},  ${randomName2} </h2>`)
} else {
    document.writeln(`<h2> ${randomName1},  ${randomName2} </h2>`)
}

// ======================================================

// var namingArr = [];
// for (var index = 0; index < 5; index++) {
//     var names = prompt(`Enter Name ${index + 1} :`);
//     namingArr.push(names);
//     console.log(array);
// }