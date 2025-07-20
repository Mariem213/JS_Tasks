/* ================= Task-4 ================= */

/* 2. Write a JavaScript function that accepts a string as a parameter
and converts the first letter of each word of the string in uppercase.
    Ex: input: 'the quick brown fox'
    Expected Output: 'The Quick Brown Fox '
*/

function convertFirstLetter(str) {
    var words = str.split(" ");
    var newArr = [];


    for (var i = 0; i < words.length; i++) {
        var firstChar = words[i][0].toUpperCase();
        console.log(firstChar);
        var rest = words[i].slice(1);
        console.log(rest);
        newArr.push(firstChar + rest);
    }
    return newArr.join(" ");

}

var str = "hello mariem";
var convertedText = convertFirstLetter(str);
document.writeln(`<h2> The Normal Text is '${str}' <br><br> The Converted Text is '${convertedText}' </h2>`)