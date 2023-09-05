function loginEmail(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

furebase.auth().signInWithEmailAndPassword(email,passwordField).then(()=>{
    alert('Usuario logado');
}).catch(err=>{
    console.log('error',console, error)
})

}