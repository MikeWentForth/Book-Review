
// Check whether the intended button is present. If so, add the listener.

let e;

// Make the banner clickable.
// Takes the user to the home page when clicked.
e = document.getElementById("banner");
if (e) {
  e.addEventListener("click", function () {
    location.href = "/";
  });
}


// LOGIN
e = document.getElementById("login");
if (e) {
  e.addEventListener("click", function () {
    // alert("Login was clicked.")
    // To display the login form do an href-location call to the login route
    // Login route determines which template to show
    location.href = "/api/users/login";
  });
}

// LOGOUT
e = document.getElementById("logout");
if (e) {
  e.addEventListener("click", function () {
    alert("Logout was clicked.")
  });
}

// SIGNUP
e = document.getElementById("signUp");
if (e) {
  e.addEventListener("click", function () {
    //alert("Signup was clicked.")
    location.href = "/api/users/signup";
  });
}

// ADD BOOK
e = document.getElementById("addBook");
if (e) {
  e.addEventListener("click", function () {
    alert("add book was clicked.")
  });
}

// SEARCH BUTTON CLICKED
e = document.getElementById("search");
if (e) {
  e.addEventListener("click", function () {
    alert("search was clicked.")
  });
}


// SORT BY MOST RECENT
e = document.getElementById("mostRecent");
if (e) {
  e.addEventListener("click", function () {
    alert("mosdt recent was clicked.")
  });
}


// SORT BY HIGHEST RATED
e = document.getElementById("highestRated");
if (e) {
  e.addEventListener("click", function () {
    alert("highest rated was clicked.")
  });
}


// SORT BY LOWEST RATED

e = document.getElementById("lowestRated");
if (e) {
  e.addEventListener("click", function () {
    alert("lowest rated was clicked.")
  });
}

const loginFormHandler = async (event) => {
  event.preventDefault();
  const email = document.querySelector('#EMlogin').value.trim();
  const password = document.querySelector('#PWlogin').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/main');
    } else {
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#nameSU').value.trim();
  const email = document.querySelector('#emailSU').value.trim();
  const password = document.querySelector('#pwSU').value.trim();

  if (name && email && password) {
    const response = await fetch('/api/users/', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/main');
    } else {
      alert(response.statusText);
    }
  }
};

const logout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
};

document.querySelector('#logout').addEventListener('click', logout);


