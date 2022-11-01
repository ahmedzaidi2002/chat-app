import { initializeApp } from "firebase/app";
import{ getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCLgZ0XPuUoNvPBKzjrqRDDvVsUnP37xFE",
  authDomain: "chat-e62c2.firebaseapp.com",
  projectId: "chat-e62c2",
  storageBucket: "chat-e62c2.appspot.com",
  messagingSenderId: "55045679590",
  appId: "1:55045679590:web:e186e85de6440581498e27"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();