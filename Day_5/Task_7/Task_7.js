/* ======================== Task_7 ======================== */
/* ====================== Event Object (2) ====================== */

/* Prevent context menu from being displayed by preventing from mouse right click from its action.
Note:
context menu is the menu displayed when mouse right button is clicked */

document.addEventListener("contextmenu", function (event) {
    event.preventDefault();

    var msg = document.getElementById("message");

    while (msg.firstChild) {
        msg.removeChild(msg.firstChild);
    }

    var text = document.createTextNode("Right-click is disabled on this page.");
    msg.appendChild(text);
});