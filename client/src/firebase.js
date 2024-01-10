// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-482f5.firebaseapp.com",
  projectId: "mern-estate-482f5",
  storageBucket: "mern-estate-482f5.appspot.com",
  messagingSenderId: "637670890421",
  appId: "1:637670890421:web:764a663c8be8eb4539d7fc",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
