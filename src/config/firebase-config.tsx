// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAINJNqMFd5kDZjA90_izD4F4FSwM81aq8",
  authDomain: "lynns-todo-app.firebaseapp.com",
  projectId: "lynns-todo-app",
  storageBucket: "lynns-todo-app.appspot.com",
  messagingSenderId: "890431880077",
  appId: "1:890431880077:web:824aa041b257e3904e9bc4",
  measurementId: "G-9QFED82L3R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
