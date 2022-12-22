let myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

const toOpenForm = document.querySelector(".openForm");
const toCloseForm = document.querySelector(".closeForm");

toOpenForm.addEventListener("click", openForm);
toCloseForm.addEventListener("click", closeForm)

function openForm () {
    document.getElementById("myForm").style.display = "block";
}

function closeForm () {
    document.getElementById("myForm").style.display = "none";
}
