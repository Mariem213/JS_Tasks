/* ======================== Task_4 ======================== */
/* ====================== Form Validation ====================== */

var form = document.getElementById("myForm");

var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");
var countryInput = document.getElementById("country");

var nameError = document.getElementById("nameError");
var emailError = document.getElementById("emailError");
var passwordError = document.getElementById("passwordError");
var genderError = document.getElementById("genderError");
var sportsError = document.getElementById("sportsError");
var countryError = document.getElementById("countryError");

form.addEventListener("submit", function (event) {
    var isValid = true;

    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    genderError.textContent = "";
    sportsError.textContent = "";
    countryError.textContent = "";

    var nameValue = nameInput.value;
    nameInput.classList.remove("inputError");
    var nameRegex = /^[A-Za-z\s]+$/;
    if (nameValue === "" || !nameRegex.test(nameValue)) {
        nameError.textContent = "Please enter a valid name";
        nameInput.classList.add("inputError");
        isValid = false;
    }

    var emailValue = emailInput.value;
    emailInput.classList.remove("inputError");
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailValue === "" || !emailRegex.test(emailValue)) {
        emailError.textContent = "Enter a valid email";
        emailInput.classList.add("inputError");
        isValid = false;
    }

    var passwordValue = passwordInput.value;
    passwordInput.classList.remove("inputError");
    if (passwordValue.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters";
        passwordInput.classList.add("inputError");
        isValid = false;
    }

    var gender = document.querySelectorAll('input[name="gender"]:checked');
    if (gender.length === 0) {
        genderError.textContent = "Please select gender";
        isValid = false;
    }

    var sports = document.querySelectorAll('input[name="sport"]:checked');
    if (sports.length < 2) {
        sportsError.textContent = "Select at least 2 sports";
        isValid = false;
    }

    var countryValue = countryInput.value;
    countryInput.classList.remove("inputError");
    if (countryValue === "") {
        countryError.textContent = "Please select a country";
        countryInput.classList.add("inputError");
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault();
    } else {
        alert("Form submitted successfully!");
    }
});

form.addEventListener("reset", function () {
    var errors = document.querySelectorAll(".error");
    for (var i = 0; i < errors.length; i++) {
        errors[i].textContent = "";
    }
});