var firebaseConfig = {
    apiKey: "AIzaSyDvG9QX0OE26vHKIw0s3g1Kzzs6PnhoPys",
    authDomain: "c-94-project-b6b9c.firebaseapp.com",
    databaseURL: "https://c-94-project-b6b9c-default-rtdb.firebaseio.com",
    projectId: "c-94-project-b6b9c",
    storageBucket: "c-94-project-b6b9c.appspot.com",
    messagingSenderId: "805594968828",
    appId: "1:805594968828:web:fe55b2af2d2ca117699d79"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser(){
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        user : user_name
    });
    window.location = "web.html";

}