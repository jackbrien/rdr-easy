// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXa92y7wxtfqc8ETNTzRM2uBnTJkuhl0g",
  authDomain: "rdreasy.firebaseapp.com",
  projectId: "rdreasy",
  storageBucket: "rdreasy.appspot.com",
  messagingSenderId: "526026309596",
  appId: "1:526026309596:web:691a956f93cad91f1d5919"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
