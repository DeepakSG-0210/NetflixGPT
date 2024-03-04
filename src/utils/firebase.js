// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAf2C6wPMKcs5P0Af_UxlkHW66lQqPnAlo",
  authDomain: "netflixgpt-0210.firebaseapp.com",
  projectId: "netflixgpt-0210",
  storageBucket: "netflixgpt-0210.appspot.com",
  messagingSenderId: "648403668580",
  appId: "1:648403668580:web:6771db08ca93774e365971",
  measurementId: "G-3TY2PENHS9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

// https://firebase.google.com/docs/hosting/quickstart?hl=en&authuser=0