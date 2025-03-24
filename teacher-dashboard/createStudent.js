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


function addData(e,shouldRedirect) {

  e.preventDefault() ;      // Prevent default form submission

  const userId = document.getElementById('userId').value;
  const pwd = document.getElementById('pwd').value;

  let msg = document.getElementsByClassName('msg')[0];

  set(ref(db, 'student/' + userId), {
    id: userId,
    pwd: pwd
  })
  .then(() => {
    msg.style.display='block';
    msg.innerText='Student Added Successfully ✅';

    setTimeout(() => {
      msg.style.display = 'none';
    }, 3000); 

    if (shouldRedirect) {
      // Introduce a delay before redirecting
      setTimeout(() => {
        location.replace('./teacherDashboard.html');
      }, 2000); 
    }
    else{
      setTimeout(() => {
        location.replace('./createStudent.html');
      }, 2000);
    }

  })
  .catch(() => {
    alert("Error adding data");
  });

}
  
const closeBtn = document.getElementById('close');
closeBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  location.replace('./teacherDashboard.html');
  }
);

const form = document.querySelector('#form');
form.addEventListener("submit",(e)=>{
  addData(e,true);
});

const create = document.getElementById('create');
create.addEventListener('click',(e)=>{
  addData(e,false);
})