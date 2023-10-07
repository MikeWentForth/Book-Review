
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
    const response = await fetch('/api/users', {
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



document
  .querySelector('.login')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.sign-up')
  .addEventListener('submit', signupFormHandler);
