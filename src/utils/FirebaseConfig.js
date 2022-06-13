// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const FirebaseConfig = {
  apiKey: "AIzaSyAI1HyldDneMsOGJ5rdqbKYaLRFHbSBZ9k",
  authDomain: "panelaypapelon-app.firebaseapp.com",
  projectId: "panelaypapelon-app",
  storageBucket: "panelaypapelon-app.appspot.com",
  messagingSenderId: "169274361057",
  appId: "1:169274361057:web:c85854da98c3146cf5e3a0"
};

// Initialize Firebase
const app = initializeApp(FirebaseConfig);
//Firestore initialize

const db = getFirestore(app)
export default db