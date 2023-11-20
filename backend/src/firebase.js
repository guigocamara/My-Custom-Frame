// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8JTEnZU3vmHoN_Lcv9x5gJfA2d0TZ3CU",
  authDomain: "mycustomframe-eeb5c.firebaseapp.com",
  projectId: "mycustomframe-eeb5c",
  storageBucket: "mycustomframe-eeb5c.appspot.com",
  messagingSenderId: "457371732882",
  appId: "1:457371732882:web:11c1e14e2964df98db0f4b",
  measurementId: "G-LQ367VJ0GM"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);
