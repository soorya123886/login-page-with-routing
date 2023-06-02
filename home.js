document.addEventListener('DOMContentLoaded', function() {
    // Retrieve user information from session or local storage if needed
  
    const username = "user1"; // Replace with actual logged-in username
  
    const welcomeUsername = document.getElementById('welcome-username');
    welcomeUsername.textContent = `Welcome, ${username}!`;
  });