// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyC9nFIYMcb7ixCM9FnOPDNV6F6PBdlJzig",
      authDomain: "database-8fe63.firebaseapp.com",
      databaseURL: "https://database-8fe63-default-rtdb.firebaseio.com",
      projectId: "database-8fe63",
      storageBucket: "database-8fe63.appspot.com",
      messagingSenderId: "433257000207",
      appId: "1:433257000207:web:181db9de3d1b2431ebe27a"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
function addRoom()
    {
          room_name = document.getElementById("room_name").value;
    
          firebase.database().ref("/").child(room_name).update({
                purpose: "adding room name"
          });
          localStorage.setItem("room_name", room_name);
    
          window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name - " + Room_names);
      row = "<div class'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
       window.location = "kwitter.html";
}