// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDP-NhVy73tQxREkRJ8j4gddDew8Gh08c",
  authDomain: "equiphub-3af89.firebaseapp.com",
  projectId: "equiphub-3af89",
  storageBucket: "equiphub-3af89.firebasestorage.app",
  messagingSenderId: "80334139923",
  appId: "1:80334139923:web:84bfa067f5be32df6785e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)