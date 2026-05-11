import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

let firebaseApp = null;
let firestoreDb = null;

export function loadFireBase() {
    try {
        // Check if required Firebase environment variables are set
        // NOTE: Don't use `process.env[varName]` here. In the browser bundle,
        // Next/Webpack inlines `process.env.NEXT_PUBLIC_*` at build time, but
        // it can't reliably inline dynamic indexing like `process.env[varName]`.
        const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
        const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;

        const missingVars = [];
        if (!apiKey) missingVars.push('NEXT_PUBLIC_FIREBASE_API_KEY');
        if (!projectId) missingVars.push('NEXT_PUBLIC_FIREBASE_PROJECT_ID');

        if (missingVars.length > 0) {
            console.warn('Firebase not initialized: Missing environment variables:', missingVars.join(', '));
            console.warn('Please create a .env file with your Firebase configuration. See .env.example for required variables.');
            return { app: null, firestore: null };
        }

        if (!firebaseApp) {
            const firebaseConfig = {
                apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
                authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
                databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
                projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
                storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
                messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
                appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
                measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
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