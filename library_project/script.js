let myLibrary = [
    {
        title: "Project Hail Mary",
        author: "Andrew Weir",
        pages: 496,
        read: true,
    },
    {
        title: "The Martian",
        author: "Andrew Weir",
        pages: 500,
        read: false,
    },
    {
        title: "Peacemaker",
        author: "John Cena",
        pages: 200,
        read: false,
    }
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

//////// DOM selectors ////////
const mainContainer = document.querySelector(".container");
const toOpenForm = document.querySelector(".openForm");
const toCloseForm = document.querySelector(".closeForm");
const toAddBook = document.querySelector(".addBook");

//////// Event Listeners ////////
toOpenForm.addEventListener("click", openForm);
toCloseForm.addEventListener("click", closeForm);
toAddBook.addEventListener("click", addBook);

//////// Functions ////////
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

    submitForm();
    closeForm();
}

function createCards () {
    for (let i = 0; i < myLibrary.length; i++) {
        // creates blank cards 
        const newCard = document.createElement("div");
        newCard.classList.add("card");
        newCard.setAttribute("id", i);
        mainContainer.appendChild(newCard);

        // generates title
        const bookTitle = document.createElement("div");
        bookTitle.classList.add("bookTitle");
        bookTitle.textContent = myLibrary[i].title;
        newCard.appendChild(bookTitle);

        // for author
        const bookAuthor = document.createElement("div");
        bookAuthor.classList.add("bookAuthor");
        bookAuthor.textContent = "By: " + myLibrary[i].author;
        newCard.appendChild(bookAuthor);

        // for pages
        const bookPages = document.createElement("div");
        bookPages.classList.add("bookPages");
        bookPages.textContent = "Pages: " + myLibrary[i].pages;
        newCard.appendChild(bookPages);

        // for read
        const bookRead = document.createElement("div");
        bookRead.classList.add("bookRead");
        if (myLibrary[i].read === false) {
            bookRead.textContent = "Not Read";
        } else {
            bookRead.textContent = "Read";
        }
        newCard.appendChild(bookRead);

        // creates discard button
        const discardBtn = document.createElement("button");
        discardBtn.classList.add("bookDiscard");
        discardBtn.textContent = "Discard Book";
        newCard.appendChild(discardBtn);
        discardBtn.addEventListener("click", () => {
            // discards card
            newCard.remove();
        })
    
        // creates read toggle


    }
}

function submitForm (e) {
    // prevents form from submitting to database
    let warn = "preventDefault() won't let you submit this!<br>";
    toAddBook.innerHTML += warn;
    e.preventDefault();
}



console.log(myLibrary);
createCards();
