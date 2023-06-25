import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBeODuy0QFMGtLc6dxqWjoB_P364X3FvtQ",
  authDomain: "tutor-finder-22b1e.firebaseapp.com",
  databaseURL: "https://tutor-finder-22b1e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "tutor-finder-22b1e",
  storageBucket: "tutor-finder-22b1e.appspot.com",
  messagingSenderId: "627684606191",
  appId: "1:627684606191:web:1eeefdd7a6129f496c5b1a",
  measurementId: "G-7C3R8W71JB"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);