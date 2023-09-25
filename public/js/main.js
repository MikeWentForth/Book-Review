
// Check whether the intended button is present. If so, add the listener.

let e;

// LOGIN
e = document.getElementById("login");
if (e) {
    e.addEventListener("click", function() {
        alert("Login was clicked.")
    });
}

// LOGOUT
e = document.getElementById("logout");
if (e) {
    e.addEventListener("click", function() {
        alert("Logout was clicked.")
    });
}

// SIGNUP
e = document.getElementById("signUp");
if (e) {
    e.addEventListener("click", function() {
        alert("Signup was clicked.")
    });
}

// ADD BOOK
e = document.getElementById("addBook");
if (e) {
    e.addEventListener("click", function() {
        alert("add book was clicked.")
    });
}

// SEARCH BUTTON CLICKED
e = document.getElementById("search");
if (e) {
    e.addEventListener("click", function() {
        alert("search was clicked.")
    });
}


// SORT BY MOST RECENT
e = document.getElementById("mostRecent");
if (e) {
    e.addEventListener("click", function() {
        alert("mosdt recent was clicked.")
    });
}


// SORT BY HIGHEST RATED
e = document.getElementById("highestRated");
if (e) {
    e.addEventListener("click", function() {
        alert("highest rated was clicked.")
    });
}


// SORT BY LOWEST RATED

e = document.getElementById("lowestRated");
if (e) {
    e.addEventListener("click", function() {
        alert("lowest rated was clicked.")
    });
}


