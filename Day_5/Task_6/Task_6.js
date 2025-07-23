/* ======================== Task_6 ======================== */
/* ====================== Event Object (1) ====================== */

/* Alert ASCII Code of any key pressed and detect whether it isalt key or ctrl key or shift key */

var res = document.getElementById("result");

document.addEventListener("keydown", function (event) {

    while (res.firstChild) {
        res.removeChild(res.firstChild);
    }

    var line1 = document.createTextNode("You pressed: " + event.key);
    res.appendChild(line1);
    res.appendChild(document.createElement("br"));

    var line2 = document.createTextNode("ASCII Code: " + event.keyCode);
    res.appendChild(line2);
    res.appendChild(document.createElement("br"));

    var textNode = document.createTextNode(message);
    res.appendChild(textNode);
});