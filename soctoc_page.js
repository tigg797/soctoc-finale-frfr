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
console.log(localStorage.getItem("user_name"));
var room_name = localStorage.getItem("room_name");
console.log(localStorage.getItem("room_name"));


document.getElementById("display_room_name").innerHTML=(room_name);

function send() {
  msg = document.getElementById('msg').value;
  firebase.database().ref(room_name).push({
    name: user_name,
    message: msg,
    like: 0
  });
  document.getElementById("msg").value = "";
}
function logout() {
  localStorage.removeItem("user_name")
  localStorage.removeItem("room_name");
  window.location = "index.html"
}

function getData() {
  firebase.database().ref("/" + room_name).on('value', function (snapshot) {
    document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
        firebase_message_id = childKey;
        message_data = childData;
        //Start code
        console.log(firebase_message_id);
        console.log(message_data);
        name = message_data['name']
        message = message_data['message']
        like = message_data['like'];
        name_with_tag = "<h4>" + name + " <img class='user_tick src='tick.png'> </h4>";
        message_with_tag = "<h4 class='message_h4'>" + message + "</h4>"
        like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>";
        span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like : " + like + "</span></button><hr>";

        row = "<div class='peuback'>" + name_with_tag + message_with_tag + like_button + span_with_tag + "</div>";
        document.getElementById("output").innerHTML += row;
        //End code
      }
    });
  });
}
getData();

function updateLike(message_id) {
  console.log("clicked on like button -" + message_id)
  button_id = message_id
  likes = document.getElementById(button_id).value;
  updated_likes = Number(likes) + 1;
  console.log(updated_likes)

  firebase.database().ref(room_name).child(message_id).update({
    like: updated_likes
  });
}
