const users = [
    {
      "username": "user1",
      "password": "password1"
    },
    {
      "username": "user2",
      "password": "password2"
    },
    // ...add more users as needed
  ];
  
  document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    const user = users.find(user => user.username === username && user.password === password);
  
    if (user) {
      // Save user information in session or local storage if needed
  
      // Redirect to home page
      window.location.href = "home.html";
    } else {
      showModal('Login Failure');
    }
  });
  
  function showModal(message) {
    alert(message);
  }