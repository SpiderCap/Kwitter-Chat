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
  const app = initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    })
}