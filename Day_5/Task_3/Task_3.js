/* ======================== Task_3 ======================== */
/* ====================== Typing Window ====================== */

function openTypingWindow() {
    var myNewWin = window.open("", "myWin", "width=500,height=500");

    var message = `Hello, My fullName is Mariem Mohamed Atef Elgendy. I'm very happy with ITI journey.`;
    var index = 0;

    myNewWin.document.writeln("<html><head><title>Typing Message Page...</title></head><body><p id='typingMsg'></p></body></html>");
    myNewWin.document.close();

    var interval = setInterval(function () {
        if (index < message.length) {
            var current = myNewWin.document.getElementById("typingMsg").innerHTML;
            myNewWin.document.getElementById("typingMsg").innerHTML = current + message.charAt(index);
            index++;
        } else {
            clearInterval(interval);
        }
    }, 100);
}