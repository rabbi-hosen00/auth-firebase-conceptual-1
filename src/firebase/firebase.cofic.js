// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5mj2oNJAVlNv0VJPhGM2T3rXF7yKYckw",
  authDomain: "auth-firebase-conceptual-98736.firebaseapp.com",
  projectId: "auth-firebase-conceptual-98736",
  storageBucket: "auth-firebase-conceptual-98736.firebasestorage.app",
  messagingSenderId: "911836202669",
  appId: "1:911836202669:web:8c19b4849eb1370995a824"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
