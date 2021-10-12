function storing() {
    var name=document.getElementById('name').value;
    localStorage.setItem('username',name)
    var pass=document.getElementById('pass').value;
    localStorage.setItem('password',pass)
}