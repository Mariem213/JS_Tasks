/* ================= Task-6 ================= */

/* 4. Create an object named library with a books property that is an array of objects, 
where each book has title, author, and year properties. 
Write a function that logs the title of each book in the library.
*/

function obj(object) {
    for (var i = 0; i <= object.books.length; i++) {
        document.writeln(`<h2> Title of Book ${i + 1} is => ${object.books[i].title} </h4>`);
    }
}

var librarys = {
    // name: "book1",
    books: [
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
        { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
        { title: "1984", author: "George Orwell", year: 1949 }
    ]
}

// obj(librarys);
document.writeln(obj(librarys));