// ======================= Task_1 =======================

function numbersElement() {
    var container = document.querySelector("body");

    // =============================================================================
    // For Tag Name

    var tagInput = document.getElementById("tagInput").value.trim().toLowerCase();
    var elems1 = container.getElementsByTagName(tagInput);
    var count1 = elems1.length;
    var divSpan = document.getElementById("divSpan");

    if (count1 === 0) {
        divSpan.innerHTML = `Please, Enter your Tag Name.`;
    } else {
        divSpan.innerHTML = `${count1}`;
    }
    // =============================================================================
    // For Class Name

    var classInput = document.getElementById("classInput").value.trim();
    var elems2 = container.getElementsByClassName(classInput);
    var count2 = elems2.length;
    var classSpan = document.getElementById("classSpan");

    if (count2 === 0) {
        classSpan.innerHTML = `Please, Enter a valid class name.`;
    } else {
        classSpan.innerHTML = `${count2}`;
    }
    // =============================================================================
    // For Id

    var idInput = document.getElementById("idInput").value.trim();
    var elems3 = document.getElementById(idInput);
    var idSpan = document.getElementById("idSpan");

    if (elems3) {
        idSpan.innerHTML = `True, ${idInput} is found.`;
    } else {
        idSpan.innerHTML = `Please, Enter a valid id.`;
    }

    // =============================================================================
    // For Name

    var nameInput = document.getElementById("nameInput").value.trim();
    var elems4 = document.getElementsByName(nameInput);
    var count4 = elems4.length;
    var nameSpan = document.getElementById("nameSpan");

    if (count4 === 0) {
        nameSpan.innerHTML = `Please, Enter a valid Name Attribute.`;
    } else {
        nameSpan.innerHTML = `${count4}`;
    }
}