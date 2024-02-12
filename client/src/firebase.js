// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-8100d.firebaseapp.com",
  projectId: "mern-estate-8100d",
  storageBucket: "mern-estate-8100d.appspot.com",
  messagingSenderId: "243759849393",
  appId: "1:243759849393:web:642029add595482fd72790"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);