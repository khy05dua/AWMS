import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDujD31tPYAhiy3zTAPzoWPSNXjxVJX5PI",
  authDomain: "awms-3e65b.firebaseapp.com",
  projectId: "awms-3e65b",
  storageBucket: "awms-3e65b.appspot.com",
  messagingSenderId: "387092254782",
  appId: "1:387092254782:web:6c32ce298663db1fea816f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
