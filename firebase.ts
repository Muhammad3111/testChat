// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-VEcwQs-dPzz9vRwyF2NOIIOY9KMQwn4",
  authDomain: "chat-bb004.firebaseapp.com",
  projectId: "chat-bb004",
  storageBucket: "chat-bb004.appspot.com",
  messagingSenderId: "81999603637",
  appId: "1:81999603637:web:1889d4574cb38e10a21bfc",
  measurementId: "G-6T9GYM700S",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
