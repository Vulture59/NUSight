import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import firebaseConfig from './firebaseConfig';

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Create Firestore instance
const db = getFirestore(app);

export default db;