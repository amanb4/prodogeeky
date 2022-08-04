
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js";
  import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyA84naNcTlt3P58QAHu82SPQYlczOYHGtY",
  authDomain: "techfest-b481d.firebaseapp.com",
  projectId: "techfest-b481d",
  storageBucket: "techfest-b481d.appspot.com",
  messagingSenderId: "385030975239",
  appId: "1:385030975239:web:717d63a99d2a027b369fa2"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  const auth = getAuth();

  
  

e1.addEventListener('click',(e)=>{

  const user = auth.currentUser;

  if (user) {
    const uid = user.uid;
    
    set(ref(database, 'users/' + user.uid),{
      event: 'e1',
    
  })

  } else {
    // No user is signed in.
  }

})
     
   
    

    