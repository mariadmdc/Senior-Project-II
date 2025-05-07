import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCRZMEpRNXjzRc6KSvlBrZkz9RkqBSRURM",
  authDomain: "food-recovery-network.firebaseapp.com",
  projectId: "food-recovery-network",
  storageBucket: "food-recovery-network.firebasestorage.app",
  messagingSenderId: "1083938763574",
  appId: "1:1083938763574:web:1ead397501ebe74b653997"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); 

export {auth, db}