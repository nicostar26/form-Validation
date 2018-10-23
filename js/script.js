function myFun(){
  
  var username = document.getElementById('username').value;
  var password = document.getElementById('pw1').value;
  var repassword = document.getElementById('pw2').value;

  if(username == "" || password == "" || repassword == ""){
    alert('Error: All fields must have a value!');
    return false;
  }
  
  else if(password !== repassword){
    alert('Error: Passwords must match!');
    return false;
  }
  
  else if(password.length < 8){
    alert('Error: Password must be at least 8 characters!');
    return false;
  }
  else{
    return true;
  }
}
