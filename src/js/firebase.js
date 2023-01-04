// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxqy3HfRViowZgFrtCEoeaZiw3aXFpRNo",
  authDomain: "todo-list-27596.firebaseapp.com",
  projectId: "todo-list-27596",
  storageBucket: "todo-list-27596.appspot.com",
  messagingSenderId: "1023740484716",
  appId: "1:1023740484716:web:369c94fbed014e4110cc49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

const auth = getAuth(app)

export { 
    db, auth
}



