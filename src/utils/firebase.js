// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWnAzS9UO6zHyWXak1vfUAuIkhTGQGJ3M",
  authDomain: "moody-flix-gpt.firebaseapp.com",
  projectId: "moody-flix-gpt",
  storageBucket: "moody-flix-gpt.firebasestorage.app",
  messagingSenderId: "34492591651",
  appId: "1:34492591651:web:929318e256727a4a9e0b96",
  measurementId: "G-NK543GXLQR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();