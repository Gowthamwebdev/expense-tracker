// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXBS43h8GJxF8uiF-E9eqIXmeF4AnAgX4",
  authDomain: "expense-tracker-e9672.firebaseapp.com",
  projectId: "expense-tracker-e9672",
  storageBucket: "expense-tracker-e9672.appspot.com",
  messagingSenderId: "331130689950",
  appId: "1:331130689950:web:17f99f7b1920b1eb69de8f",
  measurementId: "G-RBW31N68LR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);