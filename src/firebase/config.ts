import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDpb6LWw1vklo6Fi-DrELOnNQzoKlDqDpM",
  authDomain: "flipflap-1e69e.firebaseapp.com",
  projectId: "flipflap-1e69e",
  storageBucket: "flipflap-1e69e.firebasestorage.app",
  messagingSenderId: "696022332108",
  appId: "1:696022332108:web:6ab903b0c347b536c30869",
  measurementId: "G-Y8K1MLVKWF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };