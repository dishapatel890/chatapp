// ===== for chat2 =====
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDrbzGNn0WRgHIJYwC0izXBhvMPuYPn-dk",
  authDomain: "chat2-ab783.firebaseapp.com",
  projectId: "chat2-ab783",
  storageBucket: "chat2-ab783.appspot.com",
  messagingSenderId: "500483439089",
  appId: "1:500483439089:web:87eca83ee4337746c2ac50"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();







