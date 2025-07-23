/* ======================== Task_4 ======================== */
/* ====================== Function Object (2) ====================== */

/* Create an adding function that adds n numbers only. Throw exception if the user passed any data type other than "number" 
or called your function without passing any parameters. */

function addNumbers() {
    if (arguments.length === 0) {
        throw "Function must be called with inputs. Please, Enter your inputs value.";
    }

    var sum = 0;

    for (var i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] !== "number" || isNaN(arguments[i])) {
            throw "Inputs value must be only numbers";
        }
        sum += arguments[i];
    }

    return sum;
}

function add() {
    var input = document.getElementById("nums").value;
    var output = document.getElementById("output");

    var parts = input.split(",");
    var args = [];

    for (var i = 0; i < parts.length; i++) {
        var num = Number(parts[i].trim());
        args.push(num);
    }

    try {
        // var result = addNumbers(
        //     args[0], args[1], args[2], args[3], args[4], args[5]
        // );
        var result = addNumbers(...args);
        output.innerHTML = "Sum =  " + result;
    } catch (e) {
        output.innerHTML = "Error : " + e;
    }
}