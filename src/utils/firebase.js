// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";


// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAZwxgCU14ZyVHsWZG9T1FVr7tU65UV6aA",
//   authDomain: "netflixgpt-87365.firebaseapp.com",
//   projectId: "netflixgpt-87365",
//   storageBucket: "netflixgpt-87365.appspot.com",
//   messagingSenderId: "570723857366",
//   appId: "1:570723857366:web:43e6271cb6a3803c83aa77",
//   measurementId: "G-967EY0CKF2"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// export const auth = getAuth();

import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzwBTnpFjsDUfPO3YUvgeY7Jo8VfW6oQs",
  authDomain: "netflixgpt-6baf1.firebaseapp.com",
  projectId: "netflixgpt-6baf1",
  storageBucket: "netflixgpt-6baf1.appspot.com",
  messagingSenderId: "77738768380",
  appId: "1:77738768380:web:7e4b2dea99232898f26479",
  measurementId: "G-DMMTY7X7CH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();