const table = document.querySelector('table');

const addBookButton = document.querySelector('.submit');
addBookButton.addEventListener("click", addBookToLibrary);

const popup = document.querySelector('.popup');
const modalButton = document.querySelector('.addBookButton');
modalButton.addEventListener('click', (e) => {
    popup.style.display = "flex"
})

const closeButton = document.querySelector('.close');
closeButton.addEventListener('click', (e) => {
    popup.style.display = "none"
})



let myLibrary = [
    {
        "title": "Into The Woods",
        "author": "Bob Mackie",
        "numPages": "316",
        "hasRead": true,
    },
    {
        "title": "My Fair Shady",
        "author": "Lou Biggles",
        "numPages": "237",
        "hasRead": false,
    },
    {
        "title": "Happily Ever After",
        "author": "Walt Disney",
        "numPages": "601",
        "hasRead": true,
    },
    {
        "title": "This is the End",
        "author": "Donnie Sanders",
        "numPages": "423",
        "hasRead": true,
    }
];

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.numPages = pages;
  this.hasRead = read;
}

function createDelete(){
    const td = document.createElement('td');
    td.style.cssText = "text-align: center;";
    const button = document.createElement('button')
    button.textContent = 'Delete';

    button.addEventListener("click", (event) => {
        var td = event.target; 
        var tr = td.parentNode.parentNode;
        tr.parentNode.removeChild(tr);;
    })
    td.appendChild(button)
    return td
}

function createToggle(){
    const td = document.createElement('td');
    td.style.cssText = "text-align: center;";

    const button = document.createElement('button')
    button.textContent = 'Toggle Status';

    button.addEventListener("click", (event) => {
        const td = event.target; 
        const tr = td.parentNode.parentNode;
        const tbl = tr.parentNode
        const rowIndex = Array.prototype.indexOf.call(tbl.children, tr);
        console.log(rowIndex)
        
        if (myLibrary[rowIndex].hasRead == "Read" || myLibrary[rowIndex].hasRead == true){
            myLibrary[rowIndex].hasRead = tr.children[4].textContent = "Hasn't Read";
            tr.children[4].textContent = "Hasn't Read";
        }else if (myLibrary[rowIndex].hasRead == "Hasn't Read" || myLibrary[rowIndex].hasRead == false){
            myLibrary[rowIndex].hasRead = tr.children[4].textContent = "Read";
        }
        console.log(myLibrary[rowIndex].hasRead)   
    })

    td.appendChild(button)
    return td
}

function createEntry(book){
    let tr = document.createElement('tr')
    let td = document.createElement('td')
    let span = document.createElement('span');
    span.classList = "material-symbols-outlined book";
    span.textContent = "book_2";
    td.appendChild(span);
    tr.appendChild(td);


    for (j = 0; j < book.length; j++){
        let td = document.createElement('td')
        td.textContent = book[j]
        tr.appendChild(td)               
    }

    toggleButton = createToggle()
    tr.appendChild(toggleButton)

    deleteButton = createDelete()
    tr.appendChild(deleteButton)
    
    table.appendChild(tr)
}

function populateBooks(){
    for (i = 0; i < myLibrary.length; i++){
        let book = [myLibrary[i]['title'], myLibrary[i]['author'], myLibrary[i]['numPages'], myLibrary[i]['hasRead']]
        
        if (book[3] == true){
            book[3] = "Read"
        }  else{
            book[3] = "Haven't Read"
        }

            createEntry(book)
        }
    }

function addBookToLibrary() {
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#hasRead').checked;

    if (!(title&&author&&pages)){
        console.log("missing input")

    } else {
        if (read == true){
            read = "Read"
        }  else{
            read = "Haven't Read"
        }
    
        let newBook = new Book(title, author, pages, read);
        myLibrary.push(newBook)
    
        let book = [title, author, pages, read]
    
        createEntry(book)
        popup.style.display = "none"
    
        console.log(myLibrary[0])

    }
}



populateBooks()

