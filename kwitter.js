const firebaseConfig = {
    apiKey: "AIzaSyBzUIPGrtVPQgsfAEXNRlmejJoYMlPSz8w",
  authDomain: "kwitternew-5f16b.firebaseapp.com",
  databaseURL: "https://kwitternew-5f16b-default-rtdb.firebaseio.com",
  projectId: "kwitternew-5f16b",
  storageBucket: "kwitternew-5f16b.appspot.com",
  messagingSenderId: "854892589385",
  appId: "1:854892589385:web:047697dd2331a52963aa98",
  measurementId: "G-4D4C310LWK"
  };

  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

function addUser(){
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"addinguser"
    })
localStorage.setItem("user_name",user_name);
window.location="kwitter_room.html";
}