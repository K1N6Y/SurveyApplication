import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "questionairereactapp.firebaseapp.com",
    projectId: "questionairereactapp",
    storageBucket: "questionairereactapp.appspot.com",
    messagingSenderId: "1060954290903",
    appId: "1:1060954290903:web:47b66bc16d657f77fc4e92",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Get a Firestore instance
export const db = getFirestore(app);

export default app; // Optionally export the Firebase app instance