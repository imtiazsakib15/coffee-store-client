import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};



// const firebaseConfig = {
//   apiKey: "AIzaSyBvTQOjZkWy7IGzKl2EYP9luq_Hef68gqM",
//   authDomain: "coffee-store-8a200.firebaseapp.com",
//   projectId: "coffee-store-8a200",
//   storageBucket: "coffee-store-8a200.appspot.com",
//   messagingSenderId: "937129019551",
//   appId: "1:937129019551:web:67cde1595875efe1f1faaa"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
