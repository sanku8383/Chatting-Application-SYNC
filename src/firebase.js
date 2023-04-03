import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAjB9wK3oFuLQTsZTZDkoDIC9CD0DgsTaA",
  authDomain: "chat-application-47a3b.firebaseapp.com",
  projectId: "chat-application-47a3b",
  storageBucket: "chat-application-47a3b.appspot.com",
  messagingSenderId: "837546767887",
  appId: "1:837546767887:web:d673db81b349e2ecd6957a",
  measurementId: "G-ZXTGH2YNPV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore();
