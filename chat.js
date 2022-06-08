function addUser(){
    username=document.getElementById("user_name");
    localStorage.setItem("user_name",username);
    window.location="chat_room.html";
}