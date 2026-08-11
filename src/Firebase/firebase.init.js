// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Danger: Do not share this config:
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACAjcTonYizS4G74oLrepag06cdX2ixr0",
  authDomain: "v11-email-password-auth.firebaseapp.com",
  projectId: "v11-email-password-auth",
  storageBucket: "v11-email-password-auth.firebasestorage.app",
  messagingSenderId: "69390717936",
  appId: "1:69390717936:web:c1bf6feb039a3d69e3c335",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
