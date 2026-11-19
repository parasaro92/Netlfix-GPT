// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBu8CKzEktqOu7WZAVg_vpnaFObaYaLrJo",
  authDomain: "netlflixgpt-8db20.firebaseapp.com",
  projectId: "netlflixgpt-8db20",
  storageBucket: "netlflixgpt-8db20.firebasestorage.app",
  messagingSenderId: "1090011900205",
  appId: "1:1090011900205:web:0b60785d5cde836e848ba4",
  measurementId: "G-86WYRKJPRW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();