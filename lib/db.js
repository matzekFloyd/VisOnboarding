import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

let firebaseApp = null;
let firestoreDb = null;

export function loadFireBase() {
    try {
        // Check if required Firebase environment variables are set
        const requiredVars = ['FIREBASE_API_KEY', 'FIREBASE_PROJECT_ID'];
        const missingVars = requiredVars.filter(varName => !process.env[varName]);

        if (missingVars.length > 0) {
            console.warn('Firebase not initialized: Missing environment variables:', missingVars.join(', '));
            console.warn('Please create a .env file with your Firebase configuration. See .env.example for required variables.');
            return { app: null, firestore: null };
        }

        if (!firebaseApp) {
            const firebaseConfig = {
                apiKey: process.env.FIREBASE_API_KEY,
                authDomain: process.env.FIREBASE_AUTH_DOMAIN,
                databaseURL: process.env.FIREBASE_DATABASE_URL,
                projectId: process.env.FIREBASE_PROJECT_ID,
                storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
                messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
                appId: process.env.FIREBASE_APP_ID,
                measurementId: process.env.FIREBASE_MEASUREMENT_ID
            };
            firebaseApp = initializeApp(firebaseConfig);
        }
        if (!firestoreDb) {
            firestoreDb = getFirestore(firebaseApp);
        }
    } catch (err) {
        if (!/already exists/.test(err.message)) {
            console.error('Firebase initialization error', err.stack);
        }
        return { app: null, firestore: null };
    }
    return { app: firebaseApp, firestore: firestoreDb };
}