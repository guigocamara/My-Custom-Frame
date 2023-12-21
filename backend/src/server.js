const admin = require('./firebaseConfig'); // Import Firebase Admin SDK setup
const fetch = require('node-fetch'); // Using node-fetch to make HTTP requests

// Access Firestore instance
const firestore = admin.firestore;

// Sample logic to interact with Firestore using the Admin SDK
/*
const collectionRef = firestore.collection('testCollection');
collectionRef.get()
  .then((snapshot) => {
    if (snapshot.empty) {
      console.log('No documents found.');
      return;
    }

    snapshot.forEach((doc) => {
      console.log(doc.id, '=>', doc.data());
    });
  })
  .catch((err) => {
    console.error('Error getting documents', err);
  });
  */

// Sample logic to interact with Firebase using the REST API
/*
// Your logic to interact with Firebase REST API endpoints
const authToken = 'YOUR_FIREBASE_AUTH_TOKEN'; // Replace with your Firebase Auth token

// Example: Making a GET request to Firebase Authentication REST endpoint
const getUsersEndpoint = 'https://identitytoolkit.googleapis.com/v1/accounts:users'; // Example REST API endpoint
fetch(getUsersEndpoint, {
  method: 'GET',
  headers: {
    'Authorization': Bearer ${authToken},
    // Other required headers
  },
})
  .then(response => response.json())
  .then(data => console.log('Firebase Auth API response:', data))
  .catch(error => console.error('Error fetching Firebase Auth API:', error));
*/

// Create a new user using Admin SDK
admin.auth().createUser({
  email: 'user@example.com',
  password: 'password123',
})
.then((userRecord) => {
  console.log('Successfully created new user:', userRecord.uid);
})
.catch((error) => {
  console.error('Error creating new user:', error);
});
