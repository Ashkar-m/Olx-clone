// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import {initializeApp} from 'firebase/app';
import { getAuth } from "firebase/auth";
import 'firebase/firestore';
import 'firebase/storage';
const firebaseConfig = {
    apiKey: "AIzaSyBU-qocZq2ZUmGFYBUR-ZKoDa8EwmZGBTw",
    authDomain: "olx-clone-1a3a0.firebaseapp.com",
    projectId: "olx-clone-1a3a0",
    storageBucket: "olx-clone-1a3a0.appspot.com",
    messagingSenderId: "391546169162",
    appId: "1:391546169162:web:7c56fc9acda72f1b4f83b3",
    measurementId: "G-KSRD67VJSD"
  };

const Firebase= initializeApp(firebaseConfig);

export const auth = getAuth(Firebase); 

export default Firebase;