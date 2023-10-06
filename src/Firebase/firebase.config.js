// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAc6yxt9XV611yImwG2OigqAUql9o9S6A4",
    authDomain: "gotrip-978ec.firebaseapp.com",
    projectId: "gotrip-978ec",
    storageBucket: "gotrip-978ec.appspot.com",
    messagingSenderId: "1071460440289",
    appId: "1:1071460440289:web:31284b99e6110d767cffa0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;