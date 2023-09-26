// Moved these functions to main.js

/*
const loginFormHandler = async (event) => {
    event.preventDefault();
    const email = document.querySelector('#EMlogin').value.trim();
    const password = document.querySelector('#PWlogin').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/usersRoutes/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/layouts/main'); //no profile page set up yet, change to that once made?
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
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/layouts/main'); //no profile page set up yet, change to that once made?
      } else {
        alert(response.statusText);
      }
    }
  };
  */
  
  // COMMENTED OUT as event listeners for these buttons are already established
  // in main.js

  // document
  //   .querySelector('.login')
  //   .addEventListener('submit', loginFormHandler);
  
  // document
  //   .querySelector('.sign-up')
  //   .addEventListener('submit', signupFormHandler);
  