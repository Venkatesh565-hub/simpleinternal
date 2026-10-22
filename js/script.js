const books = [];

const bookForm = document.getElementById("bookForm");
const bookList = document.getElementById("bookList");
const message = document.getElementById("message");

function displayBooks(bookArray) {
    bookList.innerHTML = "";

    bookArray.forEach(function(book) {
        const row = document.createElement("tr");

        [book.id, book.title, book.author].forEach(function(value) {
            const cell = document.createElement("td");
            cell.textContent = value;
            row.appendChild(cell);
        });

        bookList.appendChild(row);
    });
}

bookForm.addEventListener("submit", function(event) {
    event.preventDefault();
    message.textContent = "Book registration will be implemented in the feature branch.";
});

document.getElementById("searchButton").addEventListener("click", function() {
    message.textContent = "Book search will be implemented in the feature branch.";
});

document.getElementById("showAllButton").addEventListener("click", function() {
    displayBooks(books);
    message.textContent = "";
});