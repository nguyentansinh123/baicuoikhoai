var firebaseConfig = {
    apiKey: "AIzaSyDgg5wk2PNS35pcEXJ5cQ8uafqRUbqhbEU",
    authDomain: "login-ae381.firebaseapp.com",
    projectId: "login-ae381",
    storageBucket: "login-ae381.appspot.com",
    messagingSenderId: "230192855450",
    appId: "1:230192855450:web:24b89816cdb4a85344e223"
  };
 
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  function signup(){
    var email =  document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value , password.value);
    promise.catch(function e()
    { 
        alert(e.message)
    });
    alert("signed in ")

  }
  
  function signin(){
    var email =  document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.signInWithEmailAndPassword(email.value , password.value);
    promise.catch(function e()
    { 
        alert(e.message)
    });
    alert("signed in " + email.value)

  }
