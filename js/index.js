// var element = document.getElementById("container"),
//     style = window.getComputedStyle(element),
//     width = style.getPropertyValue('width'),
//     height = style.getPropertyValue('height');
// console.log(width);
// console.log(height);
// var dots = [];
// var numDots = 100;

var pw="",
    un="",
    users= new Map();

function signIn(username, password){
  alert("Redirect user to profile.");
  alert(username);
  alert(password);
  if(users.get(username) != null){
    alert("Logging In")
  }
  else{
    alert("Username not found")
  }
}

function signUp(username,password){
  if(users.get(un) == null){
    un=username;
    pw=password;
    users.set(un, pw); 
  }
  else{
    alert("Please insert a unique username.");
  }
}

function forgotPassword(){
  alert("Send user email for new password.");
}