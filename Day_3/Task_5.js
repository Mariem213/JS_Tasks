/* ================= Task-5 ================= */

/* 3. Write a function that takes an object as an argument and prints all key-value pairs. Test it by passing the student object. */

function obj(object) {
    var keys = Object.keys(object);
    for (var i = 0; i < keys.length; i++) {
        var value = object[keys[i]];
        if (typeof value === 'object') {
            document.writeln(`<h2>${keys[i]} :</h2>`);
            obj(value);
        } else {
            console.log(keys[i] + " : " + value);
            document.writeln(`<h2>${keys[i]} : </h2><h4>${value}</h4>`);
        }
    }
}

var std = {
    name: "mariem",
    age: 26,
    contactInfo: {
        email: "mariem@gmail.com",
        phone: "010-228-035-53"
    }
}
obj(std);