var uname=localStorage.getItem('username')
var password=localStorage.getItem('password')
function comparing() {
var user_name=document.getElementById('name').value;
var user_password=document.getElementById('pass').value;
if(user_name===uname && user_password===password){
  alert("Login successfull")
}
else{
    alert("Login unsucessfull, please check username and password")
}
}