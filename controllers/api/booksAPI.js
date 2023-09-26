//API_KEY = AIzaSyDunZipuWtXQ6JjILx9AhybESAhnCpuX7M;
//API key might not be nessicary for what we're doing? Maybe?


const searchTerms = document.querySelector('.searchInputField').value.trim(); //gets terms entered in searchbar, removes exess white space NOT SPACES BETWEEN WORDS
const searchTermsNOSPACE = searchTerms.replace(/\s/g,'+'); //Replacing all spaces with + so it can be used in the url

//initializing search results limiting to 3 for The Time-being
let firstBook;
let secondBook;
let thirdBook;

//default search, no credentials specified
async function searchByAll(){ 

    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTermsNOSPACE}`);
    const search = await response.json();

    //total number of results given from the search
    const totalResults = search.totalItems;

    //assigns the first three results
    firstBook = search.items[0];
    secondBook = search.items[1];
    thirdBook = search.items[2];
}

//Searches for a specific author
async function searchByAuthor(){

    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=inauthor:${searchTermsNOSPACE}`);
    const search = await response.json();

    //total number of results given from the search
    const totalResults = search.totalItems;

    //assigns the first three results
    firstBook = search.items[0];
    secondBook = search.items[1];
    thirdBook = search.items[2];

}

//gets the next three results
function showNext(){

    //something here to correlate book's -search.item- index to a manipulatable int

    //if totalresults > thirdbook + 1 
    //      + 1 to each to get next three
    //      If 3rd is OOR but 2nd isn't: Cry

}


//Gets book information meant to take -firstBook- level obj idk how to word it but the object at a specific index of -search.items-
function bookInfo(bookObjData){
    //Goes down one obj layer for simplisity
    const book = bookObjData.volumeInfo;

    const title = book.title;
    const pageNums = book.pageCount;
    const pubDate = book.publishedDate;
    const desc = book.description;


    //these are given as an array
    const authors = book.authors; 
    const genre = book.categories;
}








/* things im using to write this rn lol
https://developers.google.com/books/docs/v1/using
https://console.cloud.google.com/apis/dashboard?project=code-bootcamp-400202

*/

