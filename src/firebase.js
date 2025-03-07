import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "@firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: "anuhas-portfolio.firebaseapp.com",
	projectId: "anuhas-portfolio",
	storageBucket: "anuhas-portfolio.firebasestorage.app",
	messagingSenderId: "244917688526",
	appId: "1:244917688526:web:6238e68b191dba74dc189f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };
