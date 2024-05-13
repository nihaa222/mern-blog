// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-294d5.firebaseapp.com",
  projectId: "mern-blog-294d5",
  storageBucket: "mern-blog-294d5.appspot.com",
  messagingSenderId: "545080780302",
  appId: "1:545080780302:web:d1edcd46352bd11557fe5f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
