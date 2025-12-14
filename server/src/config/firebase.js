const admin = require('firebase-admin');
require('dotenv').config();

// Attempt to initialize using standard environment variable GOOGLE_APPLICATION_CREDENTIALS
// OR if specific env vars are provided for a service account construction
try {
    if (process.env.FIREBASE_SERVICE_ACCOUNT_PATH) {
        const serviceAccount = require(process.env.FIREBASE_SERVICE_ACCOUNT_PATH);
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount)
        });
    } else {
        admin.initializeApp({
            credential: admin.credential.applicationDefault()
        });
    }
    console.log('Firebase Admin Initialized');
} catch (error) {
    console.error('Firebase Admin Initialization Error:', error);
}

module.exports = admin;
