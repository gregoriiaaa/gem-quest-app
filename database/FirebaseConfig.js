// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOBzYl3-hykdTynjd2mqP1MDiGBiWpXUc",
  authDomain: "gem-quest-app.firebaseapp.com",
  projectId: "gem-quest-app",
  storageBucket: "gem-quest-app.appspot.com",
  messagingSenderId: "220118283572",
  appId: "1:220118283572:web:5ae3d3020ba5023cbaa161",
};

// const firebaseConfig = {
//   apiKey: process.env.EXPO_PUBLIC_API_KEY,
//   authDomain: process.env.EXPO_PUBLIC_AUTH_DOMAIN,
//   projectId: process.env.EXPO_PUBLIC_PROJECT_ID,
//   storageBucket: process.env.EXPO_PUBLIC_STORAGE_BUCKET,
//   messagingSenderId: process.env.EXPO_PUBLIC_MESSAGING_SENDER_ID,
//   appId: process.env.EXPO_PUBLIC_APP_ID,
// };

console.log({
  apiKey: process.env.EXPO_PUBLIC_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_APP_ID,
});

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;
export const FIREBASE_AUTH = getAuth(app);
