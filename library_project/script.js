let myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
        this.sayBook = function () {
            console.log(title, author, pages, read);
        }
    }
}

const toOpenForm = document.querySelector(".openForm");
const toCloseForm = document.querySelector(".closeForm");
const toAddBook = document.querySelector(".addBook");

toOpenForm.addEventListener("click", openForm);
toCloseForm.addEventListener("click", closeForm);
toAddBook.addEventListener("click", addBook);

function openForm () {
    document.getElementById("myForm").style.display = "block";
}

function closeForm () {
    document.getElementById("myForm").style.display = "none";
}

function addBook () {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector(`input[name="read"]:checked`).value;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);

    newBook.sayBook(); // this keeps the contents in the myLibrary array

    closeForm();
}

console.log(myLibrary);
