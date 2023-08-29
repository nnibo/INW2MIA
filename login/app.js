const firebaseConfig = {
    apiKey: "AIzaSyDxiPRgQY0w9dD5SS0L2PupTt1rI0cAmxU",
    authDomain: "projeto2miateste-bc1b9.firebaseapp.com",
    projectId: "projeto2miateste-bc1b9",
    storageBucket: "projeto2miateste-bc1b9.appspot.com",
    messagingSenderId: "949434963823",
    appId: "1:949434963823:web:2ad78869ac89ee2b607a9a"
  };

  firebase.initializeApp(firebaseConfig);

  const emailField = document.getElementById('email');
  const passwordField = document.getElementById('senha');
  const loginButton = document.getElementById('loginButton');

  loginButton.addEventListener('click', ()=>{
    const email = emailField.value;
    const senha = passwordField.value;

    firebase.auth().signInWithEmailAndPassword(email,senha)
        .then((userCredential)=>{
            const user = userCredential.user;
            console.log("Usuario logado: ",user)
        })
        .catch((error)=>{
            const errorMessage = error.message;
            console.error("Erro de autenticação : ",errorMessage)
        })
  })