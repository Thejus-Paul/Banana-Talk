function login(){
  let username = document.getElementById("username").value;
  document.cookie = username;
  let password = document.getElementById("password").value;
  if(password == "password"){
    window.open("/chat");
  }
}
