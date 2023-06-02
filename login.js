const users = [
    {
      "username": "user1",
      "password": "password1"
    },
    {
      "username": "user2",
      "password": "password2"
    },
    {  "username": "user3",
      "password": "password3"
    } ,
    {
      "username": "user4",
      "password":"password4"
    }
  ];
  
  document.getElementById('login-form').addEventListener('submit', function(event)
                                                         {
    event.preventDefault(); // Prevent form submission
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    const user = users.find(user => user.username === username && user.password === password);
  
    if (user) {
     // goes to home page
      window.location.href = "home.html";
    } else {
      alert("login failure")
    }
  });
  
