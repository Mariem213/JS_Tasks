/* ======================== Task_1 ======================== */
/* ====================== Student Table ====================== */

var studentName = document.getElementById("studentName");
var studentAge = document.getElementById("studentAge");
var studentTable = document.getElementById("studentTable").getElementsByTagName('tbody')[0];
var id = 1;


var addData = function () {
    clearDataError();

    var name = studentName.value.trim();
    var age = studentAge.value.trim();
    var hasError = false;

    if (name === "") {
        document.getElementById("nameRequired").style.display = "inline";
        hasError = true;
    } else if (name.length <= 3) {
        document.getElementById("nameLength").style.display = "inline";
        hasError = true;
    }

    if (age === "") {
        document.getElementById("ageRequired").style.display = "inline";
        hasError = true;
    } else if (Number(age) <= 18) {
        document.getElementById("ageLimit").style.display = "inline";
        hasError = true;
    }

    if (!hasError) {
        var row = studentTable.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);

        cell1.innerHTML = id;
        cell2.innerHTML = name;
        cell3.innerHTML = age;

        var delLink = document.createElement("a");
        delLink.href = "#";
        delLink.innerHTML = "delete";
        delLink.onclick = function () {
            studentTable.deleteRow(row.rowIndex - 1);
        };

        cell4.appendChild(delLink);

        id++;
        studentName.value = "";
        studentAge.value = "";
    }
};

function clearDataError() {
    document.getElementById("nameRequired").style.display = "none";
    document.getElementById("nameLength").style.display = "none";
    document.getElementById("ageRequired").style.display = "none";
    document.getElementById("ageLimit").style.display = "none";
}
