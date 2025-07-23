/* ======================== Task_8 (Bouns) ======================== */
/* ====================== Flying Window ====================== */

var newWindow, intervalId;
var startX = 100;
var startY = 100;
var maxDistance = 500;
var step = 5;
var direction = 1;
var currentOffset = 0;

function moveAlongDiagonal() {
    intervalId = setInterval(function () {
        if (newWindow && !newWindow.closed) {
            currentOffset += step * direction;

            if (currentOffset >= maxDistance || currentOffset <= 0) {
                direction *= -1;
            }

            var newX = startX + currentOffset;
            var newY = startY + currentOffset;
            newWindow.moveTo(newX, newY);
        }
    }, 100);
}

window.onload = function () {
    newWindow = window.open("", "", "width=300,height=200");

    newWindow.document.write(`
        <html>
        <head><title>Moving Page</title></head>
        <body>
            <p style="font-size: 20px;">This is the moving window</p>
        </body>
        </html>
    `);

    moveAlongDiagonal();
};

var stopBtn = document.getElementById("stopBtn");
stopBtn.onclick = function () {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
};

document.getElementById("resumeBtn").onclick = function () {
    moveAlongDiagonal();
};