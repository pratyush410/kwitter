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
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome " + user_name

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;

                  //End code
            });
      });
}
getData();

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"addingRoomName"
      })
      localStorage.setItem("room_name",room_name)
      window.location="kwitter_page.html"
}

function redirectToRoomName(name){
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html"
}