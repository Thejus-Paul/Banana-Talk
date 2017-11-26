// Login Details
function login(){
  let username = document.getElementById("username").value; // Assigning the value of username to 'username'
  let password = document.getElementById("password").value;// Assigning the value of password to 'password'
  // Checking if the password is correct or not.
  if(password == "password"){
    document.cookie = username;// Creating a cookie containing the username
    window.open("/chat");
  }
}
