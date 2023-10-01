// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBI4GBnmO2APmbW3qtNR_R6-pel7NSuqnM",
  authDomain: "ecommerceduhalde.firebaseapp.com",
  projectId: "ecommerceduhalde",
  storageBucket: "ecommerceduhalde.appspot.com",
  messagingSenderId: "331832171559",
  appId: "1:331832171559:web:35ae2e00b12e208e76c202",
  measurementId: "G-5MEDGHJRTC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();
