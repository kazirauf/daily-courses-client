// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSZwMce4DYA3yR9SZ5JGAdmYy9f4gf8cs",
  authDomain: "daily-courses.firebaseapp.com",
  projectId: "daily-courses",
  storageBucket: "daily-courses.appspot.com",
  messagingSenderId: "215061176063",
  appId: "1:215061176063:web:08b2067fc7198c6069f6ca",
  measurementId: "G-L8RHHCTY7K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;