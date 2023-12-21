const { initializeApp, applicationDefault, cert, auth } = require('firebase-admin/app'); // Firebase Admin SDK module
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore'); // Firebase Admin SDK Firestore module

var serviceAccount = require("./mycustomframe-eeb5c-firebase-adminsdk-ii62i-4e57e251f5.json");

initializeApp({
  credential: cert(serviceAccount)
});

// Now you can use the Firebase Admin SDK
const firestore = getFirestore();
module.exports = { firestore, serviceAccount }; // Export firestore and service account
