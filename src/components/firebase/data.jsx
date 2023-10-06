// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5U6u42FWY_kdmjfNKuBHrIrU2L1m39Sc",
  authDomain: "playzone-ecommerce.firebaseapp.com",
  projectId: "playzone-ecommerce",
  storageBucket: "playzone-ecommerce.appspot.com",
  messagingSenderId: "736677306244",
  appId: "1:736677306244:web:62c6d88fbc17c8e8a447d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();