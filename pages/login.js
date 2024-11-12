import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import {getDatabase, get, set ,child, ref} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCeVMz1mHs8o72acYwEC-kuCUT9vu0JQKs",
  authDomain: "easeexam-512ee.firebaseapp.com",
  databaseURL: "https://easeexam-512ee-default-rtdb.firebaseio.com",
  projectId: "easeexam-512ee",
  storageBucket: "easeexam-512ee.appspot.com",
  messagingSenderId: "200587405948",
  appId: "1:200587405948:web:48d8ae5da610cb3412f7f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// get database
const db = getDatabase();

function userId(email){
  let userId="";
  for (let index = 0; index < email.length; index++) {
    switch (email[index]) {
      case '@':
        userId += 'AT';
        break;
      case '.':
        userId += 'DOT';
        break;
      default:
        userId += email[index];
    }
  }
  return userId;
}

function getData(e) {
  const dbRef = ref(db);

  e.preventDefault() ;      // Prevent default form submission

  const email = document.getElementById('email').value;
  const enteredPwd = document.getElementById('pwd').value;

  let msg = document.getElementsByClassName('msg')[0];
  msg.style.backgroundColor='#e02222';
  msg.style.color='#ffffff';

  let Id = userId(email);

  get(child(dbRef,'user/' + Id))
  .then(
    (snapshot)=>{
      if(snapshot.exists()){
        if (snapshot.val().pwd == enteredPwd) {
          location.replace('./selectRole.html');
        } else {
          msg.style.display='block';
          msg.innerText='Invalid Username or Password';
        }
      }

      else{
        msg.style.display='block';
        msg.innerText='User doesn\'t exist';
      }
    }
  )
  .catch(() => {
    alert("Error Login");
  })
}

// Add event listener to the form submission
const form = document.getElementsByClassName('form')[0];
form.addEventListener("submit",getData);
