import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2c510fN3sOaZ6Y4eih5e4H7ipMwlu8cY",
  authDomain: "chatapp-d527c.firebaseapp.com",
  projectId: "chatapp-d527c",
  storageBucket: "chatapp-d527c.appspot.com",
  messagingSenderId: "512733942289",
  appId: "1:512733942289:web:f4442474c6ed408b4b57b0",
  measurementId: "G-S8970CSS5F"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);