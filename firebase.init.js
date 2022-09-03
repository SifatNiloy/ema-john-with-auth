// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from '/firebase.auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAgwL66n3ypRq4HCBcp_s83Omm9ChdUfa0",
    authDomain: "ema-john-simple-12cd5.firebaseapp.com",
    projectId: "ema-john-simple-12cd5",
    storageBucket: "ema-john-simple-12cd5.appspot.com",
    messagingSenderId: "555638120106",
    appId: "1:555638120106:web:71c8a4af202ecedc07bad3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;