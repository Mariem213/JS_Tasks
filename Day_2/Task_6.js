/* ================= Task-6 ================= */

/* 1.4. Fill an array (5 numerical values) from the user, Sort it in descending and ascending orders 
then display the output as shown in Fig.*/

function sortingACD(arr) {
    return arr.sort(function (a, b) { return a - b });
}

function sortingDEC(arr) {
    return arr.sort(function (a, b) { return b - a });
}

var arr = [4, 2, 7, 8, 1];
document.writeln(`<h2> Without Sorting : ${arr}  </h2>`)
document.writeln(`<h2> Sorting Assending : ${sortingACD(arr)}  </h2>`)
document.writeln(`<h2> Sorting Descending : ${sortingDEC(arr)}  </h2>`)