// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALS9YvVqnT8r7zHYdjq8iR83w0x13ZChk",
  authDomain: "food-sharing-auth-9235a.firebaseapp.com",
  projectId: "food-sharing-auth-9235a",
  storageBucket: "food-sharing-auth-9235a.firebasestorage.app",
  messagingSenderId: "803864780993",
  appId: "1:803864780993:web:aae7ab00d4ad858f61b440"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
