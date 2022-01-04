
// DOM element declairations 
const libraryContainerUpper = document.getElementById("libraryContainerUpper")
const newBookButton = document.getElementById("newBookButton")
const bookFormSubmit = document.getElementById("bookFormSubmit")
const bookFormReadStatus = document.getElementById("bookFormReadStatus")
const bookFormPages = document.getElementById("bookFormPages")
const bookFormAuthor = document.getElementById("bookFormAuthor")
const bookFormTitle = document.getElementById("bookFormTitle")  
const createBookModalContainer = document.getElementById("createBookModalContainer")
const createBookForm = document.getElementById("createBookForm")

let myBook
let myLibrary = []

class Book {
    //Empty Constructor
    constructor() {
        this.title = ""
        this.pages = 0
        this.author = ""
        this.isRead = false
    }

    //Setters
    setTitle(title) {
        this.title = title
    }

    setPages(pages) {
        this.pages = pages
    }

    setAuthor(author) {
        this.author = author
    }

    setReadStatus(status) {
        this.isRead = status
    }

    //Getters 
    getTitle() {
        return this.title
    }

    getPages() {
        return this.pages
    }

    getAuthor() {
        return this.author
    }

    getReadStatus() {
        return this.isRead
    }
}

function createBook() {
    myBook = new Book
    myBook.setTitle(bookFormTitle.value)
    myBook.setAuthor(bookFormAuthor.value)
    myBook.setPages(bookFormPages.value)
    if (bookFormReadStatus.checked) {
        myBook.setReadStatus(true)
    } else {
        myBook.setReadStatus(false)
    }
    myLibrary.push(myBook)
    console.log(myLibrary);
    createBookModalContainer.style.display = "none"
    createBookForm.reset()
}

bookFormSubmit.addEventListener('click', () => {
    createBook()
}) 

newBookButton.addEventListener('click', () => {
    createBookModalContainer.style.display = "flex"
})

