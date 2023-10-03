//API_KEY = AIzaSyDunZipuWtXQ6JjILx9AhybESAhnCpuX7M;
//API key might not be nessicary 

let searchType = 0;
const searchButton = document.querySelector('#searchBTN');

searchButton.addEventListener("click",()=> searchBooks(searchType))

//initializing search results limiting to 3 for The Time-being
let firstBook;
let secondBook;
let thirdBook;

//default search, no credentials specified
async function searchBooks(searchType){ 

    let search;

    const searchTerms = document.querySelector('#searchInputField').value.trim(); //gets terms entered in searchbar, removes exess white space NOT SPACES BETWEEN WORDS
    const searchTermsNOSPACE = searchTerms.replace(/\s/g,'+'); //Replacing all spaces with + so it can be used in the url

    if(searchType == 1){
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=inauthor:${searchTermsNOSPACE}`);
        const search = await response.json();
    }
    else{
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTermsNOSPACE}`);
        search = await response.json();
    }
  
    //total number of results given from the search
    const totalResults = search.totalItems;

    //assigns the first three results
    firstBook = search.items[0];
    secondBook = search.items[1];
    thirdBook = search.items[2];

    
    displayBook(firstBook);
    
}

//Searches by book ID assigned by API 
async function searchByIDNum(bookID){

    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${bookID}`);
    const search = await response.json();

    const specificBook = search.items[0];

    return specificBook;

  }

//Gets book information meant to take -firstBook- level obj idk how to word it but the object at a specific index of -search.items-
function getBookID(bookObjData){
    
    return bookObjData.id;

}

//to be fleshed out once other search type are added front end
function setSearchAuthor(){
    searchType = 1;

}

//Displays book info on front end, only handles one book, more can be added as front end elements evolve 
function displayBook(bookObjData){

    document.getElementById("bookCover").src = bookObjData.volumeInfo.imageLinks.smallThumbnail;
    document.getElementById("title").innerHTML = 'Title: ' + bookObjData.volumeInfo.title;
    document.getElementById("pubDate").innerHTML = 'Publishing Date: ' + bookObjData.volumeInfo.publishedDate;
    document.getElementById("authors").innerHTML = 'Author(s): ' + bookObjData.volumeInfo.authors;
    document.getElementById("pageNum").innerHTML = 'Number of Pages:' + bookObjData.volumeInfo.pageCount;    
    document.getElementById("desc").innerHTML = bookObjData.volumeInfo.description;    
    document.getElementById("genre").innerHTML = 'Genre: ' + bookObjData.volumeInfo.categories;
}
