/* ======================== Task_3 ======================== */
/* ====================== Function Object (1) ====================== */

/* Create a function that accepts only 2 parameters and throw exception if number of parameters either less than or exceeds 2 parameters */

// function acceptTwoParams(a, b) {
//     if (arguments.length !== 2) {
//         throw new Error("Function must be called with exactly 2 parameters.");
//     }

//     console.log("First param:", a);
//     console.log("Second param:", b);
// }

// =====================================================================================

function acceptTwoParams(a, b) {
    if (arguments.length !== 2) {
        throw new Error("Function must be called with exactly 2 parameters.");
    }

    return "First Value : " + a + " and Second Value : " + b;
}

function handleClick() {
    var val1 = document.getElementById("input1").value;
    var val2 = document.getElementById("input2").value;

    var result = document.getElementById("result");
    var error = document.getElementById("error");

    result.textContent = "";
    error.textContent = "";

    try {
        var output = acceptTwoParams(val1, val2);
        result.textContent = output;
    } catch (e) {
        error.textContent = e.message;
    }
}