//Library Structure
const myLibrary = [];

function bookInfo(name,author,page,status) {
    this.name=name;
    this.author=author;
    this.page=page;
    this.status=status;

}

function addBookToLibrary(name,author,page,status) {
    const newBook= new bookInfo(name,author,page,status);
    myLibrary.push(newBook)
}



// Modal 

const openModal=document.querySelector('#openModal')
const dialog=document.querySelector('#dialog')
const closeModal=document.querySelector('#closeModal')
openModal.addEventListener('click',()=>dialog.showModal())
closeModal.addEventListener('click',()=>dialog.close())

//Removing Default from Form 
const form=document.querySelector('form');
form.addEventListener("submit",function(event){
    event.preventDefault()
})

//Getting values from Book form

const submitBook=document.querySelector("#submitBook")
submitBook.addEventListener('click',()=>{
    let statusRead='';
    let name=document.querySelector('#name').value
    let author=document.querySelector('#author').value
    let page=document.querySelector('#pageno').value
    let status=document.querySelector('#status').checked
    if (status==true){
        statusRead='Read'
    }else{
        statusRead='Unread'
    }
    addBookToLibrary(name,author,page,statusRead)
    books()
    dialog.close()
    display()

})


addBookToLibrary('Jaisal','aguitam',21,'read')


//Books Info Array Declaration and storing

let bookNames=[]
let bookAuthor=[]
let bookLength=[]
let bookStatus=[]

function books(){
    bookNames=[]
    bookAuthor=[]
    bookLength=[]
    bookStatus=[]
    for(let i=0;i<myLibrary.length;i++){
        
        bookNames.push(myLibrary[i].name)
        bookAuthor.push(myLibrary[i].author)
        bookLength.push(myLibrary[i].page)
        bookStatus.push(myLibrary[i].status)
    }
}


//Displaying Book Cards

function display(){
    let bookShowCase=document.querySelector('.bookShowCase')
    bookShowCase.innerHTML=''
    for (i=0;i<bookNames.length;i++){
        let bookCard=document.createElement('div')
        bookCard.textContent=bookNames[i]+" Written By "+bookAuthor[i]+" has "+bookLength[i]+" pages with status : "+bookStatus[i];
        bookShowCase.appendChild(bookCard)
    }
}

