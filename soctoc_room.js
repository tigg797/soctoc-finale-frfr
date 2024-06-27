// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCypx8UlOrcZBOAsFrNN2p7dTcu7oED6RQ",
  authDomain: "soctoc-finale-frfr.firebaseapp.com",
  databaseURL: "https://soctoc-finale-frfr-default-rtdb.firebaseio.com",
  projectId: "soctoc-finale-frfr",
  storageBucket: "soctoc-finale-frfr.appspot.com",
  messagingSenderId: "114497507967",
  appId: "1:114497507967:web:214426a85e90effb57e54a"
};
firebase.initializeApp(firebaseConfig);

var user_name = localStorage.getItem("user_name");
console.log(user_name);
console.log(localStorage.getItem("user_name"))
document.getElementById("the_title").innerHTML = 'Welcome to SocToc, ' + user_name+"!";

function logout() {
  window.location = "index.html"
}

function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "Adding the Roomname"
  });
  localStorage.setItem("room_name", room_name)
  window.location = "soctoc_page.html";
};

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code
 console.log("Room name - "+Room_names)
 row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>"
 document.getElementById("output").innerHTML += row;
 //End code
 });});}
getData();

function redirectToRoomName(name) {
 console.log(name);
 localStorage.setItem("room_name", name);
 window.location="soctoc_page.html";
}