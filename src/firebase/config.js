// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDkXE274kYMuxED-hywxqToWmcDmHf-ZA",
  authDomain: "job-portal-2fd5c.firebaseapp.com",
  projectId: "job-portal-2fd5c",
  storageBucket: "job-portal-2fd5c.appspot.com",
  messagingSenderId: "375550978040",
  appId: "1:375550978040:web:26649fe33c32c93011580d",
  measurementId: "G-NTKCDFQ14X",
  // storageBucket: "gs://job-portal-2fd5c.appspot.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app, "gs://job-portal-2fd5c.appspot.com");
const analytics = getAnalytics(app);