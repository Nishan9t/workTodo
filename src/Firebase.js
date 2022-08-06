// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNa2JqgnmJt0uGOGch0tT98Qu_NbyHMw8",
  authDomain: "todo-dc59d.firebaseapp.com",
  projectId: "todo-dc59d",
  storageBucket: "todo-dc59d.appspot.com",
  messagingSenderId: "688668002561",
  appId: "1:688668002561:web:b5822dd05fbbafed893300"
};

// Initialize Firebase
const app=initializeApp(firebaseConfig);

export const db=getFirestore(app);