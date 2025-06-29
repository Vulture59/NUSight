// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFKiHIwcejA6RuNOek_9UwEPtAOlAhPp0",
  authDomain: "orbital-f9aa0.firebaseapp.com",
  projectId: "orbital-f9aa0",
  storageBucket: "orbital-f9aa0.firebasestorage.app",
  messagingSenderId: "485147515630",
  appId: "1:485147515630:web:4d3b4c79f90f9e7375f1ff",
  measurementId: "G-KXLSSG3W1T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };