// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEWRMQBZGKX1Rio30a4Zi4sjURyOxS5fQ",
  authDomain: "examen-calculo-mental.firebaseapp.com",
  projectId: "examen-calculo-mental",
  storageBucket: "examen-calculo-mental.firebasestorage.app",
  messagingSenderId: "224547242517",
  appId: "1:224547242517:web:1844eb40fa8f4d9720441c"
};

// Initialize and export Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);