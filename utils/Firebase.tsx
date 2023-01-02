import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { initializeFirestore } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import firebase from 'firebase/compat/app'
import { getPerformance } from "firebase/performance";

export const firebaseConfig = {
  apiKey: "AIzaSyDdcT5u5luXEkn-OxI2Fz_CLqu-3de6YVQ",
  authDomain: "fitrack-860d8.firebaseapp.com",
  projectId: "fitrack-860d8",
  storageBucket: "fitrack-860d8.appspot.com",
  messagingSenderId: "467377660921",
  appId: "1:467377660921:web:823c46e74a0004e9d59328"
};

const app = firebase.initializeApp(firebaseConfig);
const perf = getPerformance(app);
const db = getFirestore();
const auth = getAuth(app);

export { auth, db }