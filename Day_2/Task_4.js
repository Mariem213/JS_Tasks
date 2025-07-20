/* ================= Task-4 ================= */

/* 
1.2. Write a Function to determine whether the entered string is palindrome or not. Request the string to be entered via prompt, 
ask the user whether to consider case sensitivity of the entered string or not via confirm, handle both cases in your script
    i.e. RADAR NOON MOOM are palindrome.
    Note: raDaR is not a palindrome if user requested considering case of entered string, it will be palindrome if user requested ignoring case sensitivity.
*/

// var str1 = "ITIe";
var str1 = prompt("Write Message...");
var str2 = str1.split("").reverse().join("");
if (str1.toLowerCase() === str2.toLocaleLowerCase()) {
    // console.log("Plaindrom");
    document.writeln(`<h2>${str1} Plaindrom ${str2}</h2>`)
} else {
    // console.log("Not Plaindrom");
    document.writeln("<h2>${str1} Not Plaindrom ${str2}</h2>")
}