import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-43596.firebaseapp.com",
  projectId: "reactchat-43596",
  storageBucket: "reactchat-43596.appspot.com",
  messagingSenderId: "701911228123",
  appId: "1:701911228123:web:e6534e8ff688ed79cb36fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()

export const db = getFirestore(app)

export const storage = getStorage(app)