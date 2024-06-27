function addUser() {
  user_name = document.getElementById("user_name").value;
  localStorage.setItem("user_name", user_name);
  window.location = "soctoc_room.html";
}

function checked() {
    document.getElementById("user_name").style.opacity = "0.5";
    document.getElementById("pwd").style.opacity = "0.5";
    document.getElementById("login_button").style.opacity = "1";
}