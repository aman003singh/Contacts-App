// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0NpPZC-97e48bMWowm-NFqd_Eo3KVMko",
  authDomain: "vite-contact-980e5.firebaseapp.com",
  projectId: "vite-contact-980e5",
  storageBucket: "vite-contact-980e5.appspot.com",
  messagingSenderId: "620445948362",
  appId: "1:620445948362:web:d0bb7ff9f56657aabc1733"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);