// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/database'
import 'firebase/compat/auth'
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBRDUIlxjSj6y6opiv_jLDN4K-Bt_f-Huo",
  authDomain: "dktechshop.firebaseapp.com",
  projectId: "dktechshop",
  storageBucket: "dktechshop.appspot.com",
  messagingSenderId: "763793715999",
  appId: "1:763793715999:web:0f841c62e29f372642f62a",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
