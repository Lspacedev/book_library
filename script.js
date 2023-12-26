const myLibrary = [];

function Book(title, author, pages, read){
 
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  return {title: title, author: author, pages: pages, read: read};
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function changeRead(element){
  let value = element.innerText;
  if (value == 'true'){
    value = 'false';
  }else if (value == 'false'){
    value = 'true';
  }
  element.innerText = value;

}

const container = document.querySelector(".books");

function displayBooks(array){
  let arr = array.slice(-1);

  for(let i = 0; i < arr.length; i++){
    
    const newDiv = document.createElement('div');
    newDiv.classList.add('content');
    
    let title = document.createElement('div');
    let author = document.createElement('div');
    let pages = document.createElement('div');
    let read = document.createElement('div');
    
    let button = document.createElement('button');
    let button2 = document.createElement('button');
    
    button.classList.add('delete');
    button2.classList.add('read');
    
    let index = (i).toString();
    newDiv.setAttribute('id', index);    
    
    title.innerText = arr[i].title;
    author.innerText = arr[i].author;
    pages.innerText = arr[i].pages;
    read.innerText = arr[i].read;
    
    button.innerText = 'Delete';
    button2.innerText = 'Read';
    
    newDiv.appendChild(title);
    newDiv.appendChild(author);
    newDiv.appendChild(pages);
    newDiv.appendChild(read);
    newDiv.appendChild(button);
    newDiv.appendChild(button2);
    
    container.appendChild(newDiv);
  

    button.addEventListener("click", ()=> {
      let todelete = button.parentNode;
      todelete.remove();
      let idx = todelete.id;
      myLibrary.splice(idx, 1);

    });
    
     button2.addEventListener("click", ()=> {
      changeRead(read);
     });

  
  }
  
}

const showBtn = document.getElementById("show-dialog");
const dialog = document.getElementById("dialog");
const form = document.querySelector(".form");

const confirmBtn = dialog.querySelector("#confirmBtn");
const cancel = document.getElementById("cancel");

showBtn.addEventListener("click", ()=> {
    dialog.showModal();
});

cancel.addEventListener("click", () => {
  dialog.close();
});


confirmBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let read = document.querySelector('input[name="isRead"]:checked').value;
  let newBook = new Book(title,author,pages,read);
   
  addBookToLibrary(newBook);
  displayBooks(myLibrary)
  
  form.reset();
  dialog.close();
  
});
