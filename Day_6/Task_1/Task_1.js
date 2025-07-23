/* ======================== Task_1 ======================== */
/* ====================== Cookies ====================== */

/*
Make your own .js library to create, display and delete cookies, then use it in creating the required cookies to display a greeting
message to your visitor with displaying an image as his profile pic referring to his gender, and inform him with his number of
visits to the site. Display user name and number of visits with font color according to his choices. Replace the registration page
with the profile page using location object the library should have the following functions:
    • getCookie(cookieName):
        o Retrieves a cookie value based on a cookie name.
    • setCookie(cookieName,cookieValue[,expiryDate]):
        o Sets a cookie based on a cookie name, cookie value, and expiration date.
    • deleteCookie(cookieName):
        o Deletes a cookie based on a cookie name.
    • allCookieList():
        o returns a list of all stored cookies
    • hasCookie(cookieName):
        o Check whether a cookie exists or not
Note:
    Don’t use <form> tag
*/

function registerUser() {
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var color = document.getElementById('color').value;

    if (!name || !age || !gender || !color) return;

    setCookie("name", name, 7);
    setCookie("age", age, 7);
    setCookie("gender", gender.value, 7);
    setCookie("color", color, 7);

    var visits = getCookie("visits");
    if (!visits) {
        visits = 1;
    } else {
        visits = parseInt(visits) + 1;
    }
    setCookie("visits", visits, 7);

    location.href = "profile.html";
}
