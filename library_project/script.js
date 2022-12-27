let myLibrary = [
    {
        title: "Project Hail Mary",
        author: "Andrew Weir",
        pages: 496,
        read: true,
    },
    // {
    //     title: "The Martian",
    //     author: "Andrew Weir",
    //     pages: 496,
    //     read: true,
    // },
];

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

const mainContainer = document.querySelector(".container");
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


function createCards () {
    // Creates card container

    for (let i = 0; i < myLibrary.length; i++) {
        const newCard = document.createElement("div");
        newCard.classList.add("card");
        mainContainer.appendChild(newCard);
    }

    getTitle();
    getAuthor();
    getPages();
    getRead();
}

function getTitle () {
    // creates titles for cards
    let titles = myLibrary.values();
    for (const value of titles) {
        const bookTitle = document.createElement("div");
        bookTitle.classList.add("bookTitle");

        const card = document.querySelector(".card");
        card.appendChild(bookTitle);
        bookTitle.textContent = value.title;

        console.log(value.title);
    }
}

function getAuthor () {
    let authors = myLibrary.values();
    for (const value of authors) {
        const bookAuthor = document.createElement("div");
        bookAuthor.classList.add("bookAuthor");

        const card = document.querySelector(".card");
        card.appendChild(bookAuthor);
        bookAuthor.textContent = "by " + value.author;

        console.log(value.author)
    }
}

function getPages () {
    let pages = myLibrary.values();
    for (const value of pages) {
        const bookPages = document.createElement("div");
        bookPages.classList.add("bookPages");

        const card = document.querySelector(".card");
        card.appendChild(bookPages);
        bookPages.textContent = "Pages: " + value.pages;

        console.log(value.pages);
    }
}

function getRead () {
    let read = myLibrary.values();
    for (const value of read) {
        const bookRead = document.createElement("div");
        bookRead.classList.add("bookRead");
        
        const card = document.querySelector(".card");
        card.appendChild(bookRead);
        bookRead.textContent = "Read: " + value.read;

        console.log(value.read);
    }
}

createCards();
