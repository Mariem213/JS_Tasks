/* ================= Task-5 ================= */
/*
1.5. Write a script that reads from the user his info; validates and displays it with a welcoming message with today’s date
*/

// Name
var name = prompt("Enter Your Name : ");
if (name != null && name != '' && !Number(name)) {
    document.writeln("Name is " + name + "<br/>");
    // Phone
    var phone = prompt("Enter Your Phone Number : ");
    if (phone.length == 8) {
        document.writeln("Phone Number is " + phone + "<br/>");
        // Mobile
        var mobile = prompt("Enter Your Mobile Number : ");
        var mobileReg = /^(010|011|012)\d{8}$/;
        if (mobileReg.test(mobile)) {
            document.writeln("Mobile Number is " + mobile + "<br/>");
            // Email
            var email = prompt("Enter Your Email : ");
            var emailReg = /^[a-zA-Z]{3}@[0-9]{3}\.[a-zA-Z]{3}$/;
            if (emailReg.test(email)) {
                document.writeln("Email is " + email + "<br/>");
            } else {
                document.writeln("Invalid email");
            }
        } else {
            document.writeln("Invalid mobile");
        }
    } else {
        document.writeln("Invalid phone");
    }
} else {
    document.writeln("Invalid name");
}

// ==================================================================================

// Name
// var name = prompt("Enter Your Name : ");
// if (name != null && name != '' && !Number(name)) {
//     document.writeln("Name is " + name + "<br/>");
// } else {
//     document.writeln("Invalid name");
// }

// // Phone
// var phone = prompt("Enter Your Phone Number : ");
// if (phone.length == 8) {
//     document.writeln("Phone Number is " + phone + "<br/>");
// } else {
//     document.writeln("Invalid phone");
// }

// // Mobile
// var mobile = prompt("Enter Your Mobile Number : ");
// var mobileReg = /^(010|011|012)\d{8}$/;
// if (mobileReg.test(mobile)) {
//     document.writeln("Mobile Number is " + mobile + "<br/>");
// } else {
//     document.writeln("Invalid mobile");
// }

// // Email
// var email = prompt("Enter Your Email : ");
// var emailReg = /^[a-zA-Z]{3}@[0-9]{3}\.[a-zA-Z]{3}$/;
// if (emailReg.test(email)) {
//     document.writeln("Email is " + email + "<br/>");
// } else {
//     document.writeln("Invalid email");
// }