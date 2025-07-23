/* ======================== Task_2 ======================== */
/* ====================== Ajax ====================== */

function getAllUsers() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var users = JSON.parse(xhr.responseText);
            var tbody = document.getElementById("tableBody");

            while (tbody.firstChild) {
                tbody.removeChild(tbody.firstChild);
            }

            for (var i = 0; i < users.length; i++) {
                var tr = document.createElement("tr");

                var td1 = document.createElement("td");
                td1.appendChild(document.createTextNode(users[i].id));

                var td2 = document.createElement("td");
                td2.appendChild(document.createTextNode(users[i].name));

                var td3 = document.createElement("td");
                td3.appendChild(document.createTextNode(users[i].email));

                var td4 = document.createElement("td");
                var link = document.createElement("a");
                link.appendChild(document.createTextNode("View Details"));
                link.setAttribute("data-user-id", users[i].id);
                link.onclick = viewUserDetails;
                td4.appendChild(link);

                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                tr.appendChild(td4);

                tbody.appendChild(tr);
            }
        }
    };

    xhr.send();
};

// =============================================================================

function viewUserDetails(event) {
    var userId = event.target.getAttribute("data-user-id");

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users/" + userId, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var user = JSON.parse(xhr.responseText);

            // إنشاء صفحة جديدة وكتابة التفاصيل بداخلها
            var win = window.open("", "_blank");
            var content = `
                <h1>User Details</h1>
                <p><strong>Name:</strong> ${user.name}</p>
                <p><strong>User Name:</strong> ${user.username}</p>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
                <p><strong>Phone:</strong> ${user.phone}</p>
                <p><strong>Website:</strong> ${user.website}</p>
                <p><strong>company:</strong> ${user.company.name}, ${user.company.catchPhrase}, ${user.company.bs}</p>
            `;

            win.document.write(content);
        }
    };

    xhr.send();
}
