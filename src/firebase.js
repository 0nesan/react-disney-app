// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth" // 인증
import "firebase/database"
import "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqrYB1a2Y3ptRvgD2f9BWB-qTMUbAsDaM",
  authDomain: "react-disney-plus-app-c326b.firebaseapp.com",
  projectId: "react-disney-plus-app-c326b",
  storageBucket: "react-disney-plus-app-c326b.appspot.com",
  messagingSenderId: "1034781665319",
  appId: "1:1034781665319:web:9eebc6fc5b700af0c60602"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;