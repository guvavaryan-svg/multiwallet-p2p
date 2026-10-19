// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJQzI4bXDEMYlr2B3Q5Yq3xNZ84iNQEqk",
  authDomain: "multiwalletp2p.firebaseapp.com",
  projectId: "multiwalletp2p",
  storageBucket: "multiwalletp2p.firebasestorage.app",
  messagingSenderId: "63209264976",
  appId: "1:63209264976:web:15b6c1f0f8c03ca69f3e55",
  measurementId: "G-CPMVBW9J9R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
