/* ======================== Task_5 ======================== */
/* ====================== Traffic Game ====================== */

var red = document.getElementById("red");
var yellow = document.getElementById("yellow");
var green = document.getElementById("green");

var stopBtn = document.getElementById("stopBtn");
var steadyBtn = document.getElementById("steadyBtn");
var goBtn = document.getElementById("goBtn");

var msg = document.getElementById("message");

function clearLights() {
    red.style.backgroundColor = "lightgray";
    yellow.style.backgroundColor = "lightgray";
    green.style.backgroundColor = "lightgray";
}

stopBtn.addEventListener("click", function () {
    clearLights();
    red.style.backgroundColor = "red";
    msg.textContent = "Stop";
    msg.style.color = "red";
});

steadyBtn.addEventListener("click", function () {
    clearLights();
    yellow.style.backgroundColor = "gold";
    msg.textContent = "Steady";
    msg.style.color = "goldenrod";
});

goBtn.addEventListener("click", function () {
    clearLights();
    green.style.backgroundColor = "green";
    msg.textContent = "Go";
    msg.style.color = "green";
});
