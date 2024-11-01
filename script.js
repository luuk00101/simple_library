const myLibrary = [];

function Book(author, title, num_of_pages, is_read) {
    this.author = author
    this.title = title
    this.num_of_pages = num_of_pages
    this.is_read = is_read
}

function addBookToLibrary(newBook) {
    myLibrary.push(newBook)
}

function displayBooks() {
    myLibrary.forEach((book, index) => {
        const book_card = document.createElement('div')
        book_card.classList.add('book-card')
        book_card.innerHTML = `
            <h2>${book.title}</h2>
            <h3>${book.author}</h3>
            <p>${book.num_of_pages} pages</p>
            <input type="checkbox" ${book.is_read ? 'checked' : ''} data-index=${index}>
            <span>${book.is_read ? 'Read' : 'Not Read'}</span>
        `
        mainContainer.appendChild(book_card)
    })
}


document.addEventListener('DOMContentLoaded', () => {
    mainContainer = document.getElementById('main-container');
    addBookButton = document.getElementById('add-book');
    bookForm = document.querySelector('#bookDialog form');
    readCheckbox = document.get


    function openModal() {
        const dialog = document.getElementById('bookDialog');
        dialog.showModal();
    }

    bookForm.addEventListener('submit', (e) => {
        e.preventDefault(); 
        
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const pages = parseInt(document.getElementById('pages').value);
        const isRead = document.getElementById('isRead').checked;
        
        const newBook = new Book(author, title, pages, isRead);
        addBookToLibrary(newBook);
        
        mainContainer.innerHTML = '';
        displayBooks();
        
        bookForm.reset();
        document.getElementById('bookDialog').close();
    });
    
    document.getElementById('cancelBtn').addEventListener('click', () => {
        document.getElementById('bookDialog').close();
    });
    
    
    addBookButton.addEventListener("click", openModal);
    mainContainer.addEventListener("change", (e) => {
        const targetCheckbox = e.target;
        if (targetCheckbox.matches('input[type="checkbox"][data-index]')) {
            myLibrary[targetCheckbox.dataset.index].is_read = targetCheckbox.checked;
            console.log(myLibrary);
          }
    });


    const book1 = new Book('J.K. Rowling', 'Harry Potter and the Philosopher\'s Stone', 223, true);
    const book2 = new Book('J.K. Rowling', 'Harry Potter and the Chamber of Secrets', 251, true);
    const book3 = new Book('J.K. Rowling', 'Harry Potter and the Prisoner of Azkaban', 317, true);
    const book4 = new Book('J.K. Rowling', 'Harry Potter and the Goblet of Fire', 636, true);
    const book5 = new Book('J.K. Rowling', 'Harry Potter and the Order of the Phoenix', 766, false);
    const book6 = new Book('J.K. Rowling', 'Harry Potter and the Half-Blood Prince', 607, false);
    const book7 = new Book('J.K. Rowling', 'Harry Potter and the Deathly Hallows', 607, false);

    addBookToLibrary(book1)
    addBookToLibrary(book2)
    addBookToLibrary(book3)
    addBookToLibrary(book4)
    addBookToLibrary(book5)
    addBookToLibrary(book6)
    addBookToLibrary(book7)

    displayBooks()
})
