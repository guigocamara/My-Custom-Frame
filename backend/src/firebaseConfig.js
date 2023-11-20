const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');

var serviceAccount = require("./mycustomframe-eeb5c-firebase-adminsdk-ii62i-4e57e251f5.json");

initializeApp({
  credential: cert(serviceAccount)
});

// Now you can use the Firebase Admin SDK
const firestore = getFirestore();
module.exports = { firestore, serviceAccount }; // Export firestore and service account
