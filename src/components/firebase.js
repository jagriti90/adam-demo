// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCviDqCMzN-96aYu0YTkVi2JxC1g0TaeDE",
  authDomain: "chat-babc4.firebaseapp.com",
  projectId: "chat-babc4",
  storageBucket: "chat-babc4.appspot.com",
  messagingSenderId: "1058604516867",
  appId: "1:1058604516867:web:bfdd1e5dcbc2537c48f036"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()

export {app ,auth}