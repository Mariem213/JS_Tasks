/* ================= Task-1 ================= */
/* 1.1. Ask the user to enter a message then display it using the different html heading tags
(from <h1> to <h6>) using Loops. DO NOT write the header element explicitly in your script! */

var msg = prompt("What's your message ?");
for (var index = 1; index <= 6; index++) {
    document.writeln("<h" + index + ">" + msg + "</h" + index + ">")
}
