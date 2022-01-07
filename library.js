// DOM element declairations 
const libraryContainerUpper = document.getElementById("libraryContainerUpper")
const newBookButton = document.getElementById("newBookButton")
const bookFormSubmit = document.getElementById("bookFormSubmit")
const bookFormCancel = document.getElementById("bookFormCancel")
const bookFormReadStatus = document.getElementById("bookFormReadStatus")
const bookFormPages = document.getElementById("bookFormPages")
const bookFormAuthor = document.getElementById("bookFormAuthor")
const bookFormTitle = document.getElementById("bookFormTitle")  
const createBookModalContainer = document.getElementById("createBookModalContainer")
const createBookForm = document.getElementById("createBookForm")
const bookCase = document.getElementById("bookCase")
let numOfBooks = 0
let myBook
let myLibrary = []

function checkEmptyBookCase() {
    if (myLibrary.length == 0)
    bookCase.innerText = "It's empty in here..."
}

checkEmptyBookCase()

function Book(title, author, pages, readStatus) {
    this.title = title
    this.author = author
    this.pages = pages
    this.readStatus = readStatus
}

function createBook() {
    //Checking for empty forms before proceeding
    if (bookFormTitle.value == ""|| bookFormAuthor.value == "" || bookFormPages.value == "") {
        alert("Empty or incorrect field detected, please enter all fields correctly.")
        return false
    } else {
        myBook = new Book(bookFormTitle.value, bookFormAuthor.value, bookFormPages.value, bookFormReadStatus.checked)
    }

}
function addBookToLibrary() {
    myLibrary.push(myBook)
    createBookModalContainer.style.display = "none"
    createBookForm.reset()
}

function updateDisplay() {
    bookCase.innerHTML = ""
    myLibrary.forEach(book => {
        //creating html for the book
        const bookContainer = document.createElement('div')
        bookContainer.setAttribute('class', 'book-container')
        const bookUpper = document.createElement('div')
        bookUpper.setAttribute('class', 'book-upper')
        const bookLower = document.createElement('div')
        bookLower.setAttribute('class', 'book-lower')

        //filling in html (top half)
        const bookTitle = document.createElement("div")
        bookTitle.setAttribute('class', 'book-title')
        bookTitle.innerText = book.title
        const bookAuthor = document.createElement("div")
        bookAuthor.setAttribute('class', 'book-author')
        bookAuthor.innerText = book.author
        const bookPages = document.createElement("div")
        bookPages.setAttribute('class', 'book-pages')
        bookPages.innerText = book.pages
        const bookReadStatus = document.createElement("div")
        bookReadStatus.setAttribute('class', 'book-read-status')
        const changeReadStatus = document.createElement('button')
        changeReadStatus.innerText = "Update Status"
        changeReadStatus.addEventListener('click', function () {
            if (book.readStatus == true){
                book.readStatus = false
                bookReadStatus.innerText = "Not Read"
            } else {
                book.readStatus = true
                bookReadStatus.innerText = "Read"
            }
            })
        if (book.readStatus == true){
            bookReadStatus.innerText = "Read"
        } else if (book.readStatus == false) {
            bookReadStatus.innerText = "Not Read"
        }
        const elementArray = [bookTitle, bookAuthor, bookPages, changeReadStatus,bookReadStatus]
        for (let i = 0; i < elementArray.length; i++) {
            bookUpper.appendChild(elementArray[i])
        }

        //creating remove button and appending it to the bottom
        const removeBookButton = document.createElement('button')
        removeBookButton.setAttribute('type', 'button')
        removeBookButton.setAttribute('class', 'remove-book-button')
        removeBookButton.innerText = "Remove Book"
        bookLower.appendChild(removeBookButton)

        removeBookButton.addEventListener('click', function() {
            myLibrary.pop(this)
            updateDisplay()
            checkEmptyBookCase()
        })

        bookContainer.appendChild(bookUpper)
        bookContainer.appendChild(bookLower)
        bookCase.append(bookContainer)

    });
}


newBookButton.addEventListener('click', () => {
    createBookModalContainer.style.display = "flex"
})

bookFormSubmit.addEventListener('click', () => {
    if (createBook() == false) {
        return 1
    } else {
        addBookToLibrary()
        updateDisplay()
    }
})

bookFormCancel.addEventListener('click', () => {
    createBookModalContainer.style.display = "none"  
    createBookForm.reset()
})