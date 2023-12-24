// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhD8YGPgKpHXHlWXSXMgzEWQbCaqN73BE",
  authDomain: "toursandtravels-850ef.firebaseapp.com",
  projectId: "toursandtravels-850ef",
  storageBucket: "toursandtravels-850ef.appspot.com",
  messagingSenderId: "841684644074",
  appId: "1:841684644074:web:4e1aec3df52081cfdfe793",
  measurementId: "G-Y7SM8GK878"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);