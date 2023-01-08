document.addEventListener("DOMContentLoaded", function(){
  const HIDDEN_CLASS_NAME = 'hidden'
  const USERNAME_KEY = 'username'

  const showGreeting = (username) => {
    const greeting = document.querySelector('#greeting');
    greeting.innerHTML = `Hello ${username}`
    greeting.classList.remove(HIDDEN_CLASS_NAME)
  }

  const savedUsername = localStorage.getItem(USERNAME_KEY)
  if (!savedUsername) {
    const loginForm = document.querySelector('#login-form');
    loginForm.classList.remove(HIDDEN_CLASS_NAME)
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.querySelector('#login-form input').value;
      localStorage.setItem(USERNAME_KEY, username)
      loginForm.classList.add(HIDDEN_CLASS_NAME);
      
      showGreeting(username);
    })
    return;
  }
  showGreeting(savedUsername);
})






