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

function addData(e) {
  e.preventDefault() ;      // Prevent default form submission

  const fName = document.getElementById('fName').value;
  const lName = document.getElementById('lName').value;
  const email = document.getElementById('email').value;
  const pwd = document.getElementById('pwd').value;
  const confirmPwd = document.getElementById('confirmPwd').value;

  let msg = document.getElementsByClassName('msg')[0];
  if (pwd != confirmPwd) {
    msg.style.display='block';
    msg.innerText='Confirm Password should be same as password';
    msg.style.backgroundColor='#e02222';
    msg.style.color='#ffffff';
  }

  else {
    let Id = userId(email);
    // Use email as the key in the database
    set(ref(db, 'user/' + Id), {
      name: { fName: fName, lName: lName },
      email: email,
      pwd: pwd
    })
    .then(() => {
      msg.style.display='block';
      msg.innerText='Sign Up Successful ✅';
      msg.style.backgroundColor='#20c74c';
      msg.style.color='#ffffff';
    })
    .catch(() => {
      alert("Error adding data");
    });
  }
}

// Add event listener to the form submission
const form = document.getElementsByClassName('form')[0];
form.addEventListener("submit",addData);
