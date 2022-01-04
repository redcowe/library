

const libraryContainerUpper = document.getElementById("libraryContainerUpper")
const newBookButton = document.getElementById("newBookButton")

let myLibrary = []

function Book(title, pages, author, isRead){
    this.title = title
    this.pages = pages
    this.author = author
    this.isRead = isRead
}

function createBook(myBook) {
    myBook = new Book
    myBook.title = prompt("Enter a title:")
    myBook.author = prompt("Enter an author:")
    myBook.pages = prompt("Enter the number of pages:")
    myBook.isRead = prompt("Have you read the book?")
    myLibrary.push(myBook)
}

harryPotter = new Book("Harry Potter", 300, "JK Rowling", true)

newBookButton.addEventListener('click', () => {
    createBook()
})
