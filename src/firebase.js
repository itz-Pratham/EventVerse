import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration (use your own API key, authDomain, etc.)
const firebaseConfig = {
  apiKey: "AIzaSyANb9P2tJf-iU-4nLKMIVGHb6GEGPP9WTw",
  authDomain: "data-base-ae4ad.firebaseapp.com",
  projectId: "data-base-ae4ad",
  storageBucket: "data-base-ae4ad.firebasestorage.app",
  messagingSenderId: "1045217406492",
  appId: "1:1045217406492:web:605c38322650911b75b9d9",
  measurementId: "G-QHJ3Z4YL9P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);

// Default export the app
export default app;
