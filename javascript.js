const table = document.querySelector('table');
const addBookButton = document.querySelector('button')

const myLibrary = [
    {
        "title": "Into The Woods",
        "author": "Bob Mackie",
        "numPages": "316",
        "hasRead": true
    },
    {
        "title": "My Fair Shady",
        "author": "Lou Biggles",
        "numPages": "237",
        "hasRead": false
    },
    {
        "title": "Happily Ever After",
        "author": "Walt Disney",
        "numPages": "601",
        "hasRead": true
    }
];

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.numPages = pages;
  this.hasRead = read;
}

function createEntry(book){
    let tr = document.createElement('tr')
    for (j = 0; j < book.length; j++){
        let td = document.createElement('td')
        td.textContent = book[j]
        tr.appendChild(td)               
    }
    const td = document.createElement('td');

    const button = document.createElement('button')
    button.textContent = 'Delete';

    button.addEventListener("click", (event) => {
        var td = event.target; 
        var tr = td.parentNode;
        tr.parentNode.removeChild(tr);;
    })

    tr.appendChild(button)
    
    table.appendChild(tr)
}

function populateBooks(){
    console.log
    for (i = 0; i < myLibrary.length; i++){
        let book = [myLibrary[i]['title'], myLibrary[i]['author'], myLibrary[i]['numPages'], myLibrary[i]['hasRead']]
        
        if (book[3] == true){
            book[3] = "Yes"
        }  else{
            book[3] = "No"
        }

            createEntry(book)
        }
    }

function addBookToLibrary() {
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#hasRead').checked;

    if (read == true){
        read = "Yes"
    }  else{
        read = "No"
    }

    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook)

    let book = [title, author, pages, read]

    createEntry(book)

    console.log(myLibrary[0])
}



populateBooks()
addBookButton.addEventListener("click", addBookToLibrary)

