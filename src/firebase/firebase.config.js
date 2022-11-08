// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA7NmNrfTYs8N5xUqADF7PG0XSbMqqEPbE",
    authDomain: "optic-thirst.firebaseapp.com",
    projectId: "optic-thirst",
    storageBucket: "optic-thirst.appspot.com",
    messagingSenderId: "966746240191",
    appId: "1:966746240191:web:eebe6a9f967bb209b9c20a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;